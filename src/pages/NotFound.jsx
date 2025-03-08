import React from 'react';

function NotFound() {
  return (
    <div className="flex h-screen w-screen justify-center items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-white animate-bounce">404</h1>
        <p className="mt-4 text-2xl font-medium text-white">
          Oops! Page Not Found
        </p>
        <p className="mt-2 text-white">
          The page you’re looking for doesn’t exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-white text-blue-500 rounded-full shadow-lg font-semibold hover:scale-110 hover:bg-blue-500 hover:text-white transition-transform duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}

export default NotFound;
