import { Helmet } from "react-helmet";

export default function Meta(props){
    const title = props.title
    const desc = props.desc

    return (
        <Helmet>
            <title>Visão Macro - {title.Codigo || title}</title>
            <meta charset="utf-8" />
            <meta name="language" content="pt-BR" />
            <meta name="description"
                content={title.Codigo + " - " + desc?.DescricaoAtividade} />
            <meta name="robots" content="all" />
            <meta name="author" content="André Stanlley" />
            <meta name="keywords"
                content={title.Codigo + ", investimento, b3, bolsa de valores, ações, visao macro, visaomacro.com, ver cotações, cotações"} />
        </Helmet>
    )
}