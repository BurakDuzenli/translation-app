import React, { useState } from "react";

const faqs = [
  {
    question: "How accurate are the translations?",
    answer:
      "Our AI-powered translation engine achieves an accuracy rate of over 95% for most common languages. We continuously improve our algorithms and use context-aware translation to ensure high-quality results.",
  },
  {
    question: "Which languages are supported?",
    answer:
      "TranslateAI supports over 100 languages, including major languages like English, Spanish, Mandarin, Arabic, and Hindi, as well as many less common languages. Check our language list for a complete overview.",
  },
  {
    question: "Can I use TranslateAI for business documents?",
    answer:
      "Absolutely! Our Pro plan is designed for business use, offering features like specialized vocabulary for different industries, collaborative translation projects, and enhanced security for sensitive documents.",
  },
  {
    question: "Is there a limit to how much I can translate?",
    answer:
      "Our Basic plan includes 10,000 words per month. The Pro plan offers unlimited translations. You can always upgrade or purchase additional words if you need more.",
  },
  {
    question: "How does the real-time conversation feature work?",
    answer:
      "Our real-time conversation feature uses speech recognition and instant translation to facilitate live conversations between speakers of different languages. It's available on our mobile app and works for supported language pairs.",
  },
  {
    question: "Is my data secure?",
    answer:
      "We take data security very seriously. All translations are encrypted in transit and at rest. We do not store your translated content unless you explicitly save it to your account. Our systems comply with GDPR and other relevant data protection regulations.",
  },
];

const FaqItem: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-800">{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-5">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const Faq: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
