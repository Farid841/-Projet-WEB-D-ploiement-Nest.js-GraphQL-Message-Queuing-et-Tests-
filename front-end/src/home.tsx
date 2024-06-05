// Home.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-6">Welcome to WhatsApp Clone</h1>
        <Link
          to="/chat"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg inline-block transition duration-300"
        >
          Start Chatting
        </Link>
      </div>
    </div>
  );
};

export default Home;
