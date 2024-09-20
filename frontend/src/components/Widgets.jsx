import React from 'react';

const Widgets = () => {
  return (
    <div className="bg-white p-4 w-1/4 hidden md:block">
      <h2 className="font-bold mb-4">Sponsored</h2>
      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-bold">Ad 1</h3>
          <p>Some ad content here.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-bold">Ad 2</h3>
          <p>More ad content here.</p>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
