'use client'

import Link from "next/link"
import List from "./(components)/list"
// import { useArticleContext } from "./(components)/articleContext"
import ArticleContext from "./(components)/articleContext"

export default function MainPage() {

  // const articles = useArticleContext()

  return (
    <body>
      <h1 className="
      mx-auto w-[7em] text-[6em] font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-900 my-5 tracking-widest"
      >Homepage</h1>
      <p className='bg-gray-100 mx-32 pb-20'>dasd as da sd asd asd asd </p>
      <div className="mx-32">
        <label>
          <span className="text-lg mr-3">Put the date here: </span>
          <input type="date" className="cursor-pointer" />
        </label>
        <br />
        <button className="
          bg-violet-500 border-0 rounded-3xl border-yellow-500 text-lg 
          px-5 py-2 text-slate-100 shadow-slate-700 shadow-sm mt-5
          hover:bg-violet-400 hover:font-semibold hover:px-8 duration-500 hover:shadow-slate-900 hover:text-white"
        >Add here</button>
      </div>
      <Link href='/about' className="absolute top-4 right-7 text-lg font-bold hover:font-extrabold"
        >About</Link>
        <ArticleContext>
        <List />
        </ArticleContext>
        <div className="mx-auto border-2 rounded-3xl bg-blue-600 w-[16em] max-w-[18em] p-[1em] text-center mt-14">
        <Link href='/pokemons' className="p-2 text-[2.2em] font-black text-yellow-300">Pokemons</Link>
        </div>
    </body>
  )
}
