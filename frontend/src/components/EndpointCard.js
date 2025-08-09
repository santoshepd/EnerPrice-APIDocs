import React from 'react';

const EndpointCard = ({ endpoint }) => {
  const getMethodColor = (method) => {
    switch (method.toUpperCase()) {
      case 'GET':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'POST':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'PUT':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      case 'DELETE':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
      <div className="flex items-center space-x-4 mb-4">
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${getMethodColor(endpoint.method)}`}
        >
          {endpoint.method.toUpperCase()}
        </span>
        <code className="text-lg font-mono text-gray-700 dark:text-gray-300">
          {endpoint.path}
        </code>
      </div>
      <p className="text-gray-600 dark:text-gray-400">
        {endpoint.description}
      </p>
    </div>
  );
};

export default EndpointCard;