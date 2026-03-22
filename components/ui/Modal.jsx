import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-md p-4 animate-fadeIn">
      <div 
        className="bg-white dark:bg-gray-900 w-full max-w-md p-6 rounded-2xl shadow-xl shadow-gray-200/20 dark:shadow-none border border-gray-100 dark:border-gray-800 relative transform transition-all scale-100 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-4 right-4">
          <button 
            onClick={onClose} 
            className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="mt-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
