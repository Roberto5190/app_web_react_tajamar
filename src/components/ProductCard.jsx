import React from 'react';
import { useState } from 'react';

export const ProductCard = ({ src, alt, title, description }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);



  const handleClick = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikes(likes - 1);
    } else {
      setIsLiked(true);
      setLikes(likes + 1);
    }
  };
  console.log(isLiked);

  return (
    <div className="relative bg-gray-700 mt-4 rounded-xl p-4 text-left min-w-16">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm text-gray-400 mb-4">{description}</p>

      <button className="absolute flex items-center gap-2 top-3 right-4 text-white cursor-pointer" onClick={handleClick}>
      <p className="text-sm text-gray-400">{likes}</p>
        {isLiked ? (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            >
            <path
              fill="currentColor"
              fillOpacity="0"
              d="M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9c0 0 -7.43 -7.79 -8.24 -9c-0.48 -0.71 -0.76 -1.57 -0.76 -2.5c0 -2.49 2.01 -4.5 4.5 -4.5c1.56 0 2.87 0.84 3.74 2c0.76 1 0.76 1 0.76 1Z"
            >
              <animate
                fill="freeze"
                attributeName="fill-opacity"
                begin="0.7s"
                dur="0.5s"
                values="0;1"
              />
            </path>
            <path
              fill="none"
              stroke="currentColor"
              strokeDasharray="32"
              strokeDashoffset="32"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"
            >
            </path>
            </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"
            >
            </path>
          </svg>
        )}
      </button>


      <div className="rounded-md overflow-hidden">
        <img src={src} alt={alt} loading='lazy' className="w-full h-full object-cover " />
      </div>
    </div>
  );
};
