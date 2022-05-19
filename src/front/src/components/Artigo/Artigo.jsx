import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Article } from "./styles"
import Loading from '../Loading/Loading'
import { Helmet } from "react-helmet";
import axios from 'axios'

export default function Artigo() {
    const [article, setArticle] = useState()
    const { artigo, idArtigo } = useParams()

    useEffect(async () => {
        window.scrollTo(0, 0)
        const result = await axios.get(`../../api/post/${idArtigo}`, { headers: { "reactAuth": (Math.random() * 1000)}})
        setArticle(result.data)
        console.log(result.data)
    }, [])

    return (
        <div className='bodylimiter'>
            <Article>
                {!article && (
                    <Loading />
                )}
                {article && (
                <article key={article?.id}>
                    <Helmet>
                        <title>Visão Macro - {article.title.rendered}</title>
                        <meta name="description"
                            content={article.content.rendered} />
                    </Helmet>
                    <div>
                        <h1>{article.title.rendered}</h1>
                        <span>{new Date(article.date).toLocaleDateString()} </span>
                        <p dangerouslySetInnerHTML={{ __html: article.content.rendered }} />
                    </div>
                </article>
                )}
            </Article>
        </div>
    )
}

