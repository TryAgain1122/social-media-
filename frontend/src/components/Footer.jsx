import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4 text-center">
      <p>&copy; 2024 Facebook. All rights reserved.</p>
      <div className="space-x-4">
        <a href="#" className="text-blue-600">About</a>
        <a href="#" className="text-blue-600">Privacy</a>
        <a href="#" className="text-blue-600">Terms</a>
      </div>
    </footer>
  );
};

export default Footer;
