import React, { useState } from "react";

const features = [
  {
    icon: "🎯",
    title: "Instant Translations",
    color: "text-indigo-600",
    description:
      "Get AI-powered translations for 100+ languages, with automatic subtitle generation and synchronization. Our context-aware translations ensure accurate results, saving you up to 5 hours per video.",
    benefits: [
      "AI-powered translations for 100+ languages",
      "Automatic subtitle generation and synchronization",
      "Context-aware translations for accurate results",
      "Time saved: 5 hours per video",
    ],
    timeSaved: "5 hours",
  },
  {
    icon: "💡",
    title: "AI-Powered Subtitles",
    color: "text-gray-400",
    description:
      "Our advanced AI generates accurate subtitles in multiple languages, perfectly synchronized with your video content. Enhance viewer engagement and reach a global audience effortlessly.",
    benefits: [
      "Automatic subtitle generation in multiple languages",
      "Perfect synchronization with video content",
      "Customizable subtitle styles",
      "Improved accessibility and SEO",
    ],
    timeSaved: "4 hours",
  },
  {
    icon: "📊",
    title: "Audience Analytics",
    color: "text-gray-400",
    description:
      "Gain valuable insights into your global audience. Track viewer engagement, subtitle language preferences, and content performance across different regions to optimize your reach.",
    benefits: [
      "Detailed viewer engagement metrics",
      "Language preference analytics",
      "Regional performance insights",
      "Data-driven content optimization",
    ],
    timeSaved: "3 hours",
  },
  {
    icon: "🌐",
    title: "Global Community",
    color: "text-gray-400",
    description:
      "Join a thriving community of content creators and translators. Collaborate, share insights, and leverage the power of collective knowledge to expand your global presence.",
    benefits: [
      "Connect with creators worldwide",
      "Access translation expertise",
      "Participate in community events",
      "Collaborative learning opportunities",
    ],
    timeSaved: "4 hours",
  },
];

const Features: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-sm font-medium text-indigo-600 mb-2">
            const translation_solution = "Lecitte";
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Accelerate Your <br />
            <span className="relative">
              <span className="relative z-10">Path to Global Reach</span>
              <span className="absolute bottom-1 left-0 w-full h-4 bg-indigo-200 -z-10"></span>
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Get instant translations, customized subtitles, and expert
            localization. Spend your time creating content, not struggling with
            language barriers. Lecitte provides you with the tools and
            efficiency you need to go global, FAST.
          </p>
        </div>

        <div className="flex justify-center space-x-8 mb-16">
          {features.map((item, index) => (
            <button
              key={index}
              className={`flex flex-col items-center focus:outline-none transition-colors duration-200 ${
                selectedFeature === index
                  ? "text-indigo-600"
                  : "text-gray-400 hover:text-indigo-400"
              }`}
              onClick={() => setSelectedFeature(index)}
            >
              <span className="text-4xl mb-2">{item.icon}</span>
              <p className="text-sm font-medium">{item.title}</p>
            </button>
          ))}
        </div>

        <div className="bg-gray-100 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {features[selectedFeature].title}
          </h3>
          <ul className="space-y-4">
            {features[selectedFeature].benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
            <li className="flex items-start">
              <svg
                className="h-6 w-6 text-teal-500 mr-3 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span className="text-teal-500 font-medium">
                Time saved: {features[selectedFeature].timeSaved || "3 hours"}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
