import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ehsan Blog</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="hover:bg-blue-700 px-4 py-2 rounded transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:bg-blue-700 px-4 py-2 rounded transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/profile/1"
                className="hover:bg-blue-700 px-4 py-2 rounded transition"
              >
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
