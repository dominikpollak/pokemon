'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { DarkModeContext } from '../(context)/darkModeContext';
import Stardustncandy from '../[id]/stardustncandy';

export default function PokemonCard({ pokemon }) {
  const darkmode = useContext(DarkModeContext);

  return (
    <div
      className="flex h-screen flex-col overflow-hidden pt-[2em]"
      key={pokemon.name}
    >
      <Image
        className="relative mx-auto max-h-[190px] duration-300 hover:scale-105 lg:max-h-[220px]"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        width={250}
        height={250}
        alt={pokemon.name}
      />

      <main
        className={
          darkmode
            ? 'mx-auto mt-[-4.5em] mb-5 max-h-[36em] w-[21em] rounded-xl border-0 border-slate-600 bg-slate-900 text-white shadow-sm shadow-cyan-900 lg:w-[25em]'
            : 'mx-auto mt-[-4.5em] mb-5 max-h-[36em] w-[21em] rounded-xl border-0 border-slate-600 bg-white shadow-md lg:w-[25em]'
        }
      >
        <article className="px-10 py-6 pt-28">
          {/* <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-rose-800 text-3xl tracking-[5px] font-light capitalize text-center pb-6' */}
          <h1
            className={
              darkmode
                ? 'pb-7 text-center text-4xl font-light capitalize tracking-[5px] text-cyan-500'
                : 'pb-7 text-center text-4xl font-light capitalize tracking-[5px] text-cyan-900'
            }
          >
            {pokemon.name}
          </h1>

          <div className="mx-auto mb-8 h-[0.9em] w-[13em] rounded-l-full rounded-r-full bg-gradient-to-r from-cyan-500 to-cyan-700"></div>

          <div className="flex justify-center pb-8 text-[1.1em]">
            {pokemon.stats && (
              <p className="border-r-[1px] pr-6 text-center">
                HP {Math.floor(Math.random() * pokemon.stats[0].base_stat)}/
                {pokemon.stats[0].base_stat}
              </p>
            )}
            <p className="pl-8 text-center">XP {pokemon.base_experience}</p>
          </div>

          <div className="my-2 flex justify-around border-y-[1px] py-4">
            <div className="flex flex-col justify-around border-r-[1px] py-2 pr-7 text-[0.9em] lg:text-[1.1em]">
              <p className="font-medium">{pokemon.weight}kg</p>
              <div
                className={
                  darkmode
                    ? 'text-center text-sm text-cyan-400'
                    : 'text-center text-sm text-cyan-800'
                }
              >
                Weight
              </div>
            </div>

            <div
              className={
                pokemon.types.length > 1
                  ? 'flex flex-col justify-around border-r-[1px] py-2 pr-5 pl-2 text-[0.9em] lg:text-[1.1em]'
                  : 'flex flex-col justify-around border-r-[1px] py-2 pr-7 text-[0.9em] lg:text-[1.1em]'
              }
            >
              <p className="text-center font-medium">{pokemon.height}m</p>
              <div
                className={
                  darkmode
                    ? 'text-center text-sm text-cyan-400'
                    : 'text-center text-sm text-cyan-800'
                }
              >
                Height
              </div>
            </div>

            <div className="py-2 pl-1 ">
              <div
                className={
                  pokemon.types.length > 1
                    ? 'text-[0.9em] lg:text-[1.1em]'
                    : 'flex flex-col justify-around text-[0.9em] lg:text-[1.1em]'
                }
              >
                {pokemon.types && (
                  <span className="font-medium capitalize">
                    {pokemon.types[0].type.name}{' '}
                  </span>
                )}
                {pokemon.types && pokemon.types.length > 1 && (
                  <span className="font-medium capitalize">
                    / {pokemon.types[1].type.name}
                  </span>
                )}
              </div>
              <div
                className={
                  darkmode
                    ? 'text-center text-sm text-cyan-400'
                    : 'text-center text-sm text-cyan-800'
                }
              >
                Type
              </div>
            </div>
          </div>
          <Stardustncandy pokemon={pokemon} darkmode={darkmode} />
        </article>
      </main>
      <footer className="pb-8 text-center">
        <Link
          className={
            darkmode
              ? 'text-lg text-white hover:font-semibold'
              : 'text-lg hover:font-semibold'
          }
          href="/"
        >
          back
        </Link>
      </footer>
    </div>
  );
}
