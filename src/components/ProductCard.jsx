import React from 'react';
import { useState } from 'react';
import { Icon } from "@iconify/react";

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
    <div className="product-card relative flex flex-col justify-between bg-gray-700 mt-4 rounded-xl p-4 text-left min-w-16">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm text-gray-400 mb-4">{description}</p>

      <button className="absolute flex items-center gap-2 top-3 right-4 text-white cursor-pointer" onClick={handleClick}>
      <p className="text-sm text-gray-400">{likes}</p>
        {isLiked ? (
          <Icon icon="line-md:heart-filled" className='w-7 h-7'/>
        ) : (
          <Icon icon="line-md:heart" className='w-7 h-7'/>
        )}
      </button>


      <div className="flex rounded-md overflow-hidden h-44">
        <img src={src} alt={alt} loading='lazy' className="w-full h-full object-cover " />
      </div>
    </div>
  );
};
