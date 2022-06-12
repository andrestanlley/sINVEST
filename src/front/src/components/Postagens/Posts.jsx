import axios from 'axios'
import { useEffect, useState } from 'react'
import { Articles } from './styles.js'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'

export default function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(async () => {
        window.scrollTo(0,0)
        const result = await axios.get("https://p.www.visaomacro.com/wp-json/wp/v2/posts?_embed")
        setPosts(result.data)
    }, [])

    return (
        <div className='bodylimiter'>
            <Articles>
            {!posts.length && (
                    <Loading />
                )}
                {posts.map(post => {
                    return <Link to={`${post.id}?post=${post.slug}`}>
                    <article key={post.id}>
                        <div className='poster'>
                            <img src={post._embedded["wp:featuredmedia"] ? post._embedded["wp:featuredmedia"][0].source_url : "/assets/imgs/Logo_001.png"} alt={post.title.rendered} />
                        </div>
                        <div className='post-data'>
                        <h1>{post.title.rendered}</h1>
                        <span>{new Date(post.date).toLocaleDateString()} • {post._embedded.author[0].name}</span>
                        <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                        <button>Leia Mais »</button>
                        </div>
                    </article>
                    </Link>
                })}
            </Articles>
        </div>
    )
}