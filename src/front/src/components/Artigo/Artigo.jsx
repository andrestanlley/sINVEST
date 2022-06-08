import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Article } from "./styles";
import Loading from "../Loading/Loading";
import { Helmet } from "react-helmet";
import axios from "axios";
import { BsWhatsapp } from "react-icons/bs";

export default function Artigo() {
  const [article, setArticle] = useState();
  const { artigo, idArtigo } = useParams();

  useEffect(async () => {
    window.scrollTo(0, 0);
    const result = await axios.get(`https://unsteadfast-currenc.000webhostapp.com/wp-json/wp/v2/posts/${idArtigo}?_embed`);
    setArticle(result.data);
    console.log(result.data);
  }, []);

  return (
    <div className="bodylimiter">
      <Article>
        {!article && <Loading />}
        {article && (
          <article key={article?.id}>
            <Helmet>
              <title>Visão Macro - {article.title.rendered}</title>
              <meta name="description" content={article.content.rendered} />
            </Helmet>
            <div>
              <h1>{article.title.rendered}</h1>
              <span>Publicado por {article._embedded.author[0].name} em {new Date(article.date).toLocaleDateString()} </span>
              <div
                dangerouslySetInnerHTML={{ __html: article.content.rendered }}
              ></div>
            </div>
          </article>
        )}
        <span id="whatsapp-share">Compartilhe!   <a href={"https://api.whatsapp.com/send?text=" + window.location} target="_blank"><BsWhatsapp/></a></span>
      </Article>
    </div>
  );
}
