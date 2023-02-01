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
      <div className="mt-16 flex translate-y-[-35%] justify-evenly">
        <div
          className={
            darkmode
              ? 'rounded-xl border-[1.5px] border-cyan-100 bg-gradient-to-r from-cyan-300 to-cyan-600 py-2 px-4 shadow-sm lg:px-7 lg:py-3'
              : 'rounded-xl border-[1px] border-slate-800 bg-gradient-to-r from-cyan-300 to-cyan-600 py-2 px-4 shadow-sm lg:px-7 lg:py-3'
          }
        >
          <p className="text-center text-lg font-semibold text-black">
            {stardust}
          </p>
          <div className="text-sm text-white">Stardust</div>
        </div>
        <div
          className={
            darkmode
              ? 'rounded-xl border-[1.5px] border-cyan-100 bg-gradient-to-r from-cyan-300 to-cyan-600 py-2 px-6 shadow-sm lg:px-9 lg:py-3'
              : 'rounded-xl border-[1px] border-slate-800 bg-gradient-to-r from-cyan-300 to-cyan-600 py-2 px-6 shadow-sm lg:px-9 lg:py-3'
          }
        >
          <p className="text-center text-lg font-semibold text-black">
            {candy}
          </p>
          <div className="text-sm text-white">Candy</div>
        </div>
      </div>
    </div>
  );
}
