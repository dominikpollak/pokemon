'use client';

import Image from 'next/image';
import { createContext, useState } from 'react';
import DarkModeIcon from '../imgs/dark_mode.svg';
import LightModeIcon from '../imgs/light_mode.svg';
import '../styles/globals.css';

export const darkModeContext = createContext();

export default function RootLayout({ children }) {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <html className="">
      <head></head>
      <body
        className={
          darkmode ? 'bg-slate-800 duration-300' : 'bg-yellow-50 duration-300'
        }
      >
        <button
          className="fixed top-5 right-10 z-40"
          onClick={() => setDarkmode(!darkmode)}
        >
          {darkmode ? (
            <Image
              src={LightModeIcon}
              width={40}
              height={40}
              alt="light mode"
              className="invert"
            />
          ) : (
            <Image src={DarkModeIcon} width={40} height={40} alt="dark mode" />
          )}
        </button>

        <darkModeContext.Provider value={darkmode}>
          {children}
        </darkModeContext.Provider>
      </body>
    </html>
  );
}
