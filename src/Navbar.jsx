import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-500">Workcation</a>
        <div>
          <a href="#" className="px-4 py-2 text-gray-600 hover:text-blue-500">Home</a>
          <a href="#" className="px-4 py-2 text-gray-600 hover:text-blue-500">About</a>
          <a href="#" className="px-4 py-2 text-gray-600 hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
