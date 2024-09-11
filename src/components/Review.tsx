import React from "react";

const Reviews: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">
          Join 113 successful users already thriving with TranslateAI! 🚀
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Don't take our word for it. Here's what they have to say about
          TranslateAI.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-800 mb-4">
              TranslateAI made my international communication dreams come true!
              Their personalized language solutions were spot on. 😊
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold mr-3">
                O
              </div>
              <div>
                <h4 className="font-semibold">Ogulcan Unal</h4>
                <p className="text-sm text-gray-600">@ogulcanunal</p>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 md:col-span-2">
            <p className="text-gray-800 mb-4">
              TranslateAI provided me with the tools to communicate effectively
              in multiple languages. Couldn't have expanded my business globally
              without them!
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold mr-3">
                A
              </div>
              <div>
                <h4 className="font-semibold">Anna Hunter</h4>
                <p className="text-sm text-gray-600">@anna_global 🌍</p>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-800 mb-4">
              TranslateAI turned my language barriers into bridges! The
              personalized translation and innovative features were exactly what
              I needed.
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold mr-3">
                E
              </div>
              <div>
                <h4 className="font-semibold">Emily Johns</h4>
                <p className="text-sm text-gray-600">@emily_polyglot</p>
              </div>
            </div>
          </div>

          {/* Review 4 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-800 mb-4">
              The community at TranslateAI is amazing. 🌟 Connecting with fellow
              language enthusiasts and mentors has been a game-changer. 🌍
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold mr-3">
                S
              </div>
              <div>
                <h4 className="font-semibold">Sean</h4>
                <p className="text-sm text-gray-600">@linguist_sean</p>
              </div>
            </div>
          </div>

          {/* Review 5 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-800 mb-4">
              As a newbie to learning multiple languages, TranslateAI's clear
              guidance made the journey less daunting and more exciting. 😄🎉
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold mr-3">
                O
              </div>
              <div>
                <h4 className="font-semibold">Olivia Davis</h4>
                <p className="text-sm text-gray-600">@olivia_learns</p>
              </div>
            </div>
          </div>

          {/* Video Review */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
            <div className="mb-4">
              <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-16 h-16 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex items-center mb-2">
                <div className="flex-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <span className="text-gray-600 text-sm">OGY</span>
              </div>
            </div>
            <p className="text-gray-800 mb-4">
              "The tool is exactly what I needed for my international business
              communications."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold mr-3">
                S
              </div>
              <div>
                <h4 className="font-semibold">Global Guru</h4>
                <p className="text-sm text-gray-600">@globalguru</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
