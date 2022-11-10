'use client'

import { createContext, useContext} from "react"

const ArContext = createContext()


export default function ArticleContext({ children }) {

    const articles = [
        { title: 'Article 1', body: '1 - assssssssfasf asf asf asf as fa sf asasfasf', id: 1 },
        { title: 'Article 2', body: '2 - assssssssfasf asf asf asf as fa sf asasfasf', id: 2 },
        { title: 'Article 3', body: '3 - assssssssfasf asf asf asf as fa sf asasfasf', id: 3 },
        { title: 'Article 4', body: '4 - assssssssfasf asf asf asf as fa sf asasfasf', id: 4 },
    ]

    return (
        <ArContext.Provider value={articles}>
            {children}
        </ArContext.Provider>
    )
}

export function useArticleContext(){
    return useContext(ArContext)
}

// export const useArticles = () => useContext(ArContext);