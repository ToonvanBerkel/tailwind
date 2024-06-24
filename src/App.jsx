import React from 'react';
import Navbar from './Navbar.jsx';

function App() {
  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
        <div className="max-w-md p-8 bg-white rounded-lg shadow-lg dark:bg-gray-700">
          <img
            className="w-full rounded-lg"
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.dumpaday.com%2Fwp-content%2Fuploads%2F2015%2F12%2Frandom-pictures-208.jpg&f=1&nofb=1&ipt=34725d75eedc005f78cf493286734189d4e5e2fbf3d709788b26ab7568e076f0&ipo=images"
            alt="Workcation"
          />
          <h2 className="mt-4 text-3xl font-bold text-gray-800 dark:text-white">
            You can work from anywhere.
            <span className="text-blue-500 dark:text-blue-400"> Take advantage of it.</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Workcation helps you find work-friendly rentals in beautiful locations
            so you can enjoy some nice weather even when you're nog on vacation.
          </p>
          <button className="mt-6 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-600">
            BOOK YOUR ESCAPE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;