import React from "react";

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">
          Unlock Global Communication with AI-Powered Translation!
        </h2>
        <p className="text-center text-green-500 mb-12">
          <span className="inline-block bg-green-100 rounded-full px-3 py-1 text-sm font-semibold mr-2">
            50% off
          </span>
          for the first 100 subscribers (17 left)
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Basic Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Basic</h3>
            <p className="text-gray-600 mb-6">Perfect for casual users</p>
            <div className="mb-6">
              <span className="text-gray-400 line-through text-2xl">$9.99</span>
              <span className="text-4xl font-bold ml-2">$4.99</span>
              <span className="text-gray-600 ml-1">/month</span>
            </div>
            <ul className="mb-8 flex-grow">
              <li className="flex items-center mb-3">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
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
                10,000 words per month
              </li>
              <li className="flex items-center mb-3">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
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
                20 languages supported
              </li>
              <li className="flex items-center mb-3">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
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
                Basic translation history
              </li>
            </ul>
            <button className="bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300">
              🌍 Start Translating
            </button>
            <p className="text-center text-sm text-gray-600 mt-4">
              No commitment. Cancel anytime.
            </p>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col border-2 border-indigo-600 relative">
            <span className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              POPULAR
            </span>
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <p className="text-gray-600 mb-6">For power users and businesses</p>
            <div className="mb-6">
              <span className="text-gray-400 line-through text-2xl">
                $24.99
              </span>
              <span className="text-4xl font-bold ml-2">$12.49</span>
              <span className="text-gray-600 ml-1">/month</span>
            </div>
            <ul className="mb-8 flex-grow">
              <li className="flex items-center mb-3">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
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
                Unlimited words
              </li>
              <li className="flex items-center mb-3">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
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
                100+ languages supported
              </li>
              <li className="flex items-center mb-3">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
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
                Advanced translation history
              </li>
              <li className="flex items-center mb-3">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
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
                API access
              </li>
              <li className="flex items-center mb-3">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
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
                Priority support
              </li>
            </ul>
            <button className="bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300">
              🚀 Go Pro
            </button>
            <p className="text-center text-sm text-gray-600 mt-4">
              No commitment. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
