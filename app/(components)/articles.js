
export default function Articles({ article }) {

    return (

        <div>
            <h1 className="text-center font-bold text-3xl mt-10">Articles:</h1>
            {article && (
                <div key={article.id} className='bg-blue-100 w-1/2 mx-auto mt-24 p-6 shadow-md rounded-lg'>
                    <h3 className="font-bold text-center mb-5">{article.title}</h3>
                    <p>{article.body}</p>
                </div>
            )}
        </div>

    )
}
