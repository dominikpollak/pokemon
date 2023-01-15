'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { darkModeContext } from '../layout';
import Stardustncandy from '../[id]/stardustncandy';

export default function PokemonCard({ pokemon }) {
  const darkmode = useContext(darkModeContext);

  return (
    <div
      className="h-screen flex flex-col pt-[2em] overflow-hidden"
      key={pokemon.name}
    >
      <Image
        className="relative mx-auto max-h-[190px] lg:max-h-[220px] hover:scale-105 duration-300"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        width={250}
        height={250}
        alt={pokemon.name}
      />

      <main
        className={
          darkmode
            ? 'mt-[-4.5em] w-[21em] lg:w-[25em] max-h-[36em] mx-auto mb-5 border-0 rounded-xl border-slate-600 bg-slate-900 shadow-sm shadow-cyan-900 text-white'
            : 'mt-[-4.5em] w-[21em] lg:w-[25em] max-h-[36em] mx-auto mb-5 border-0 rounded-xl border-slate-600 bg-white shadow-md'
        }
      >
        <article className="px-10 py-6 pt-28">
          {/* <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-rose-800 text-3xl tracking-[5px] font-light capitalize text-center pb-6' */}
          <h1
            className={
              darkmode
                ? 'text-cyan-500 text-4xl tracking-[5px] font-light capitalize text-center pb-7'
                : 'text-cyan-900 text-4xl tracking-[5px] font-light capitalize text-center pb-7'
            }
          >
            {pokemon.name}
          </h1>

          <div className="h-[0.9em] w-[13em] mx-auto bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-l-full rounded-r-full mb-8"></div>

          <div className="flex justify-center pb-8 text-[1.1em]">
            {pokemon.stats && (
              <p className="text-center border-r-[1px] pr-6">
                HP {Math.floor(Math.random() * pokemon.stats[0].base_stat)}/
                {pokemon.stats[0].base_stat}
              </p>
            )}
            <p className="text-center pl-8">XP {pokemon.base_experience}</p>
          </div>

          <div className="flex justify-around border-y-[1px] my-2 py-4">
            <div className="border-r-[1px] pr-7 py-2 text-[0.9em] lg:text-[1.1em] flex flex-col justify-around">
              <p className="font-medium">{pokemon.weight}kg</p>
              <div
                className={
                  darkmode
                    ? 'text-sm text-cyan-400 text-center'
                    : 'text-sm text-cyan-800 text-center'
                }
              >
                Weight
              </div>
            </div>

            <div
              className={
                pokemon.types.length > 1
                  ? 'border-r-[1px] pr-5 pl-2 py-2 text-[0.9em] lg:text-[1.1em] flex flex-col justify-around'
                  : 'border-r-[1px] pr-7 py-2 text-[0.9em] lg:text-[1.1em] flex flex-col justify-around'
              }
            >
              <p className="font-medium text-center">{pokemon.height}m</p>
              <div
                className={
                  darkmode
                    ? 'text-sm text-cyan-400 text-center'
                    : 'text-sm text-cyan-800 text-center'
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
                    : 'text-[0.9em] lg:text-[1.1em] flex flex-col justify-around'
                }
              >
                {pokemon.types && (
                  <span className="capitalize font-medium">
                    {pokemon.types[0].type.name}{' '}
                  </span>
                )}
                {pokemon.types && pokemon.types.length > 1 && (
                  <span className="capitalize font-medium">
                    / {pokemon.types[1].type.name}
                  </span>
                )}
              </div>
              <div
                className={
                  darkmode
                    ? 'text-sm text-cyan-400 text-center'
                    : 'text-sm text-cyan-800 text-center'
                }
              >
                Type
              </div>
            </div>
          </div>
          <Stardustncandy pokemon={pokemon} darkmode={darkmode} />
        </article>
      </main>
      <footer className="text-center pb-8">
        <Link
          className={
            darkmode
              ? 'hover:font-semibold text-lg text-white'
              : 'hover:font-semibold text-lg'
          }
          href="/"
        >
          back
        </Link>
      </footer>
    </div>
  );
}
