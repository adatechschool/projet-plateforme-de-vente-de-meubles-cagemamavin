import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const FooterComponent = () => {
  return (
    <footer className="bg-[#c45824] h-24 py-4 px-8 flex justify-between">
      <ul className="flex justify-between w-full">

        <li className="mr-4">
          <Link to="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </li>

        <li>
          <Link to="/admin" className="text-gray-600 hover:text-gray-900">
          Admin
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default FooterComponent;