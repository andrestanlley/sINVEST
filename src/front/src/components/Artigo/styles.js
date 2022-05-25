import styled from 'styled-components'

export const Article = styled.section`
    box-shadow: 0px 2px 5px var(--cinza-tres);
    border-radius: 0.25rem;
    width: 100%;
    max-width: var(--limiter-width);
    background: var(--branco);
    padding: 1.5rem;
    min-height: 33rem;

    h1{
        font-size: 3rem;
        margin: 1rem 0;
    }

    h2{
        font-size: 2.8rem;
        margin: 1rem 0;
    }

    h3{
        font-size: 2.5rem;
        margin: 1rem 0;
    }

    h4{
        font-size: 2rem;
        margin: 1rem 0;
    }

    h5{
        font-size: 1.5rem;
        margin: 1rem 0;
    }

    img{
        max-width: 100%;
        margin: 1rem 0;
    }

    span{
        color: var(--cinza-tres);
    }

    
`