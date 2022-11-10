'use client';

import Link from "next/link";
import { useEffect } from "react"
import { useState } from "react"
import Articles from "../../(components)/articles"

export default function Article({ params }) {


  const [article, setArticle] = useState(null)

  const articles = [
    { title: 'Article 1', body: '1 - assssssssfasf asf asf asf as fa sf asasfasf', id: 1 },
    { title: 'Article 2', body: '2 - assssssssfasf asf asf asf as fa sf asasfasf', id: 2 },
    { title: 'Article 3', body: '3 - assssssssfasf asf asf asf as fa sf asasfasf', id: 3 },
    { title: 'Article 4', body: '4 - assssssssfasf asf asf asf as fa sf asasfasf', id: 4 },
]

  useEffect(()=>{
    articles.map(a =>{
      if (a.id == params.article){
        setArticle(a)
      }
    })
  },[])

  return (
    <div>
      <Articles article={article} />
      <Link href='/' className="text-xl hover:font-semibold m-24">Back</Link>
    </div>
  )
}
