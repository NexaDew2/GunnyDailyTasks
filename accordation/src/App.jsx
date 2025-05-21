import { useState } from 'react';

function App() {
  const faqItems = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces, developed by Facebook."
    },
    {
      question: "How does useState work?",
      answer: "useState is a React Hook that lets you add state to functional components."
    },
    {
      question: "What is Tailwind CSS?",
      answer: "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs."
    },
    {
      question: "How do I install Vite?",
      answer: "You can install Vite by running 'npm create vite@latest' in your terminal."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">FAQ Accordion</h1>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem 
              key={index}
              question={item.question} 
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <button
        className="w-full px-6 py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">{question}</h2>
          <svg
            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default App;