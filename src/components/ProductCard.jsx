import React from 'react';

export const ProductCard = ({ src, alt, title, description }) => {
  return (
    <div className="bg-black mt-4 rounded-lg p-4">
      <h1 className="font-bold text-lg">{title}</h1>
      <p className="text-sm text-gray-400 mb-4">{description}</p>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};
