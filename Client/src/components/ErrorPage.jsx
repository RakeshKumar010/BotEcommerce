// ErrorPage.jsx
import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-black">404</h1>
        <p className="text-2xl font-semibold text-gray-700">Page Not Found</p>
        <p className="mt-4 text-gray-600">The page you're looking for doesn't exist or has been moved.</p>
       
      </div>
    </div>
  );
};

export default ErrorPage;
