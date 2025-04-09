import React from 'react';

export const Footer = () => {
  return (
    <>
      <footer className='h-44 flex justify-between items-center w-full max-w-1028 mt-12 px-12  text-light bg-linear-0 from-gray-700 from-0% to-transparent to-80%'>
        
        <div className='text-9xl font-[Poppins] font-bold'>GATOS</div>
        <nav className='flex justify-between items-center gap-8 text-right text-sm font-regular '>
            <ul>
                <li> <a href="#">Home</a></li>
                <li> <a href="#">About</a></li>
                <li> <a href="#">Contact</a></li>
            </ul>

            <ul>
                <li> <a href="#">Instagram</a></li>
                <li> <a href="#">X</a></li>
                <li> <a href="#">Facebook</a></li>
            </ul>
        </nav>

      </footer>
    </>
  );
};
