import React, { useState } from 'react';
import Modal from './components/Modal';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700"
      >
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-semibold mb-4">Welcome!</h2>
        <p className="text-gray-700 mb-4">This is a modal created with React and Tailwind CSS.</p>
        <button
          onClick={() => setModalOpen(false)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default App;
