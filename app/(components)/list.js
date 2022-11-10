import Link from "next/link"
import { useArticleContext } from "./articleContext"

export default function List() {

    const articles = useArticleContext()

    return (
        <div>
            <div className="ml-10 mt-20 flex justify-center">
                {articles && articles.map(article => (
                    <Link
                        className="
                        mr-5 font-semibold border-2 border-red-700 rounded-md shadow-md px-4 py-2
                      hover:bg-slate-500 hover:text-slate-100 duration-200"
                        href={`/articles/${article.id}`}
                        key={article.id}
                    >Article {article.id}</Link>
                ))}
            </div>
        </div>
    )
}



