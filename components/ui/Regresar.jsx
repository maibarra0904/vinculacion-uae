import React from 'react';

const Regresar = ({ label = "Regresar" }) => {

    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div className="flex justify-start mb-4">
            <button 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all text-xs font-semibold group cursor-pointer"
                onClick={handleGoBack}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.3} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform text-indigo-600 dark:text-indigo-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                <span>{label}</span>
            </button>
        </div>
    );
};

export default Regresar;