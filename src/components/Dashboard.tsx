import React, { useState } from "react";
import axios from "axios";

const Dashboard: React.FC = () => {
  const [inputType, setInputType] = useState<
    "youtube" | "gdrive" | "ddl" | null
  >(null);
  const [url, setUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [language, setLanguage] = useState("auto");
  const [initialPrompt, setInitialPrompt] = useState("");
  const [wordLevelTimestamps, setWordLevelTimestamps] = useState(false);
  const [vadFilter, setVadFilter] = useState(true);
  const [vadFilterMinSilence, setVadFilterMinSilence] = useState(50);
  const [textOnly, setTextOnly] = useState(false);
  const [modelSize, setModelSize] = useState("base");
  const [task, setTask] = useState<"transcribe" | "translate">("transcribe");
  const [targetLanguage, setTargetLanguage] = useState("en");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append(
      "type",
      inputType === "youtube"
        ? "Youtube video or playlist"
        : inputType === "gdrive"
        ? "Google Drive"
        : "Direct download"
    );
    formData.append("language", language);
    formData.append("initial_prompt", initialPrompt);
    formData.append("word_level_timestamps", wordLevelTimestamps.toString());
    formData.append("vad_filter", vadFilter.toString());
    formData.append(
      "vad_filter_min_silence_duration_ms",
      vadFilterMinSilence.toString()
    );
    formData.append("text_only", textOnly.toString());
    formData.append("model_size", modelSize);
    formData.append("task", task);
    formData.append("target_language", targetLanguage);

    if (inputType === "youtube" || inputType === "ddl") {
      formData.append(inputType === "youtube" ? "url" : "ddl_url", url);
    } else if (inputType === "gdrive" && file) {
      formData.append("file", file);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/process_video",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResult(response.data.results[0]);
    } catch (err) {
      setError("An error occurred during transcription. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/download_transcription",
        {
          text_only: textOnly,
          transcription: result.transcription,
        },
        {
          responseType: "blob",
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        `transcription${textOnly ? ".txt" : ".srt"}`
      );
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      setError("An error occurred while downloading the transcription.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">TranslateAI Dashboard</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Choose Input Method</h2>
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded ${
              inputType === "youtube"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setInputType("youtube")}
          >
            YouTube URL
          </button>
          <button
            className={`px-4 py-2 rounded ${
              inputType === "gdrive"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setInputType("gdrive")}
          >
            Google Drive
          </button>
          <button
            className={`px-4 py-2 rounded ${
              inputType === "ddl" ? "bg-indigo-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setInputType("ddl")}
          >
            Direct Download
          </button>
        </div>
      </div>

      {inputType && (
        <form onSubmit={handleSubmit} className="mb-8 space-y-4">
          {(inputType === "youtube" || inputType === "ddl") && (
            <div>
              <label htmlFor="url" className="block mb-2">
                {inputType === "youtube"
                  ? "YouTube URL"
                  : "Direct Download URL"}
              </label>
              <input
                type="url"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
          )}
          {inputType === "gdrive" && (
            <div>
              <label htmlFor="file" className="block mb-2">
                Upload File
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
          )}
          <div>
            <label htmlFor="language" className="block mb-2">
              Language
            </label>
            <input
              type="text"
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="auto"
            />
          </div>
          <div>
            <label htmlFor="initialPrompt" className="block mb-2">
              Initial Prompt
            </label>
            <input
              type="text"
              id="initialPrompt"
              value={initialPrompt}
              onChange={(e) => setInitialPrompt(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="task" className="block mb-2">
              Task
            </label>
            <select
              id="task"
              value={task}
              onChange={(e) =>
                setTask(e.target.value as "transcribe" | "translate")
              }
              className="w-full px-3 py-2 border rounded"
            >
              <option value="transcribe">Transcribe</option>
              <option value="translate">Translate</option>
            </select>
          </div>
          {task === "translate" && (
            <div>
              <label htmlFor="targetLanguage" className="block mb-2">
                Target Language
              </label>
              <input
                type="text"
                id="targetLanguage"
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                placeholder="en"
              />
            </div>
          )}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="wordLevelTimestamps"
              checked={wordLevelTimestamps}
              onChange={(e) => setWordLevelTimestamps(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="wordLevelTimestamps">Word-level timestamps</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="vadFilter"
              checked={vadFilter}
              onChange={(e) => setVadFilter(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="vadFilter">VAD Filter</label>
          </div>
          <div>
            <label htmlFor="vadFilterMinSilence" className="block mb-2">
              VAD Filter Min Silence Duration (ms)
            </label>
            <input
              type="number"
              id="vadFilterMinSilence"
              value={vadFilterMinSilence}
              onChange={(e) => setVadFilterMinSilence(parseInt(e.target.value))}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="textOnly"
              checked={textOnly}
              onChange={(e) => setTextOnly(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="textOnly">Text Only</label>
          </div>
          <div>
            <label htmlFor="modelSize" className="block mb-2">
              Model Size
            </label>
            <select
              id="modelSize"
              value={modelSize}
              onChange={(e) => setModelSize(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            >
              <option value="tiny">Tiny</option>
              <option value="base">Base</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large-v3">Large-v3</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Transcribe"}
          </button>
        </form>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {result && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Transcription Result</h2>
          <p>
            Detected Language: {result.detected_language} (Probability:{" "}
            {result.language_probability.toFixed(2)})
          </p>
          <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap mt-4">
            {result.transcription.map((item: any, index: number) => (
              <span key={index}>
                {item.start} - {item.end}: {item.text}
                {"\n"}
              </span>
            ))}
          </pre>
          <button
            onClick={handleDownload}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Download Transcription
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
