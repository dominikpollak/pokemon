'use client';

import { useEffect, useState } from 'react';

export default function Stardustncandy({ pokemon, darkmode }) {
  const [stardust, setStardust] = useState(0);
  const [candy, setCandy] = useState(0);

  useEffect(() => {
    setStardust(Math.floor(Math.random() * 10000));
    setCandy(Math.floor(Math.random() * 200));
  }, [pokemon]);

  // const stardust = 1
  // const candy = 2

  return (
    <div>
      <div className="flex justify-evenly mt-16 translate-y-[-35%]">
        <div
          className={
            darkmode
              ? 'border-[1.5px] border-cyan-100 rounded-xl py-2 px-4 lg:px-7 lg:py-3 bg-gradient-to-r from-cyan-300 to-cyan-600 shadow-sm'
              : 'border-[1px] border-slate-800 rounded-xl py-2 px-4 lg:px-7 lg:py-3 bg-gradient-to-r from-cyan-300 to-cyan-600 shadow-sm'
          }
        >
          <p className="font-semibold text-lg text-center text-black">
            {stardust}
          </p>
          <div className="text-sm text-white">Stardust</div>
        </div>
        <div
          className={
            darkmode
              ? 'border-[1.5px] border-cyan-100 rounded-xl py-2 px-6 lg:px-9 lg:py-3 bg-gradient-to-r from-cyan-300 to-cyan-600 shadow-sm'
              : 'border-[1px] border-slate-800 rounded-xl py-2 px-6 lg:px-9 lg:py-3 bg-gradient-to-r from-cyan-300 to-cyan-600 shadow-sm'
          }
        >
          <p className="font-semibold text-lg text-center text-black">
            {candy}
          </p>
          <div className="text-sm text-white">Candy</div>
        </div>
      </div>
    </div>
  );
}
