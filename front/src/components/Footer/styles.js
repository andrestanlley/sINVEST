import styled from 'styled-components'

export const FooterBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 17rem;
    margin-top: 2rem;
    width: 100%;
    background: var(--preto);
    color: var(--branco);
    border-radius: 0;
    padding: 2rem;

    
    p{
    max-width: var(--limiter-width);
    padding: 1rem;
    text-align: center;
    font-size: .8rem;
    }
`

export const FooterSubAreas = styled.div`
    width: 100%;
    max-width: var(--limiter-width);
    display: flex;

    div{
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    img{
        width: 15rem;
    }

    a{
        text-decoration: none;
        color: var(--branco);
        padding: .3rem 0;
    }

    div#links{
        display: flex;
        flex-direction: row;
        justify-content: center;
        font-size: 1rem;
    }

    div#links > a {
        display: flex;
        align-items: center;
        padding: .5rem;
        margin: .3rem;
        border: 1px solid white;
        border-radius: 6px;
    }

    div#links > a:hover{
        color: var(--azul);
        background: white;
    }

    @media (max-width: 700px){
        flex-direction: column-reverse;
    }
`