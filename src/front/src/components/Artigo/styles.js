import styled from 'styled-components'

export const Article = styled.section`
    box-shadow: 0px 2px 5px var(--cinza-tres);
    border-radius: 0.25rem;
    width: 100%;
    max-width: var(--limiter-width);
    background: var(--branco);
    padding: 2rem;
    min-height: 33rem;

    h1,h2,h3,h4,h5{
        margin: 1rem 0;
        text-transform: uppercase;
    }

    h1{
        font-size: 3rem;
    }

    h2{
        font-size: 2.8rem;
    }

    h3{
        font-size: 2.5rem;
    }

    h4{
        font-size: 2rem;
    }

    h5{
        font-size: 1.5rem;
    }

    img{
        max-width: 100%;
        margin: 1rem 0;
    }

    span{
        color: var(--cinza-tres);
    }

    p{
        line-height: normal;
        margin-top: 1rem;
        line-height: 150%;
        font-size: 1.1rem;
    }

    
`