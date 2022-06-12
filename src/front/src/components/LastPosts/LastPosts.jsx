import { useEffect, useState } from "react"
import { Articles, LastPostsTitle } from "./styles"
import { Link } from "react-router-dom"
import axios from 'axios'

export default function LastPosts() {
    const [posts, setPosts] = useState([])

    useEffect(async () => {
        window.scrollTo(0, 0)
        const result = await axios.get("https://p.www.visaomacro.com/wp-json/wp/v2/posts?_embed")
        setPosts(result.data.slice(0, 2))
    }, [])

    return (
        <div className="bodylimiter">
            <Articles>
                <LastPostsTitle>Últimas publicações</LastPostsTitle>
                {posts.map(post => {
                    return <Link to={`/blog/${post.slug}/${post.id}`}>
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
                <Link to="./blog" id="ver-blog"><button>Ver todas</button></Link>
            </Articles>
        </div>
    )
}