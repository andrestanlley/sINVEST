import styled from 'styled-components'

export const PanelConteiner = styled.div`
    width: 100%;
    max-width: var(--limiter-width);
    //margin: 6rem 0 2rem;
    display: flex;
    padding: 2rem;
    background: var(--branco);

    div{
        width: 50%;
    }

    #logo{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h1{
        margin: 1rem 0;
    }

    img{
        width: 80%;
    }

    button{
        padding: 1rem 1.5rem;
        border-radius: 30px;
        font-weight: 700;
        background: var(--gradient-azul);
        cursor: pointer;
        border-style: none;
        color: var(--branco);
        margin-top: 1.5rem;
        outline: none;
    }

    button:hover{
        opacity: 0.8;
    }

    @media (max-width: 800px){
        flex-direction: column-reverse;
        div{
            width: 100%;
        }
    }
`