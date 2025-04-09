import React from 'react';
import { Icon } from '@iconify/react';

export const Footer = () => {
  return (
    <>
      <footer className="h-44 flex justify-between items-center w-full max-w-1028 mt-12 px-12  text-light bg-linear-0 from-gray-700 from-0% to-transparent to-80%">
        <div className="text-9xl font-[Poppins] font-bold">GATOS</div>
        <nav className="footer_links flex justify-between items-center gap-8 text-right text-sm font-regular ">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <ul className='flex flex-col gap-1'>
            <li>
              <a href="#">
                <Icon icon="line-md:instagram" className="w-4 h-4" />
                </a>
            </li>
            <li>
              <a href="#">
                <Icon icon="line-md:twitter-x" className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a href="#">
                <Icon icon="line-md:facebook" className="w-4 h-4" />
            </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};
