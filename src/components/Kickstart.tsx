import React from "react";

const Kickstart: React.FC = () => {
  return (
    <section className="py-20 bg-indigo-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start Breaking Language Barriers Today!
          </h2>
          <p className="text-xl mb-8">
            Join thousands of users who are already communicating globally with
            ease. Whether for business or personal use, TranslateAI is your
            gateway to seamless multilingual communication.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-indigo-100 transition duration-300">
              Get Started for Free
            </button>
            <button className="bg-transparent border-2 border-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-indigo-600 transition duration-300">
              Watch Demo
            </button>
          </div>
          <div className="mt-12 flex justify-center items-center space-x-8">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>14-day free trial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kickstart;
