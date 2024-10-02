import React from 'react';
import { Button } from '@nextui-org/button';

const Footer = () => {
  return (
    <footer className="p-4 text-center">
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
