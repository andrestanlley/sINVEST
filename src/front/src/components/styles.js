import styled from 'styled-components'

export const TopMenu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 8rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--branco);
    box-shadow: 0 2px 10px var(--cinza);

    ol{
        display: flex;
        list-style: none;
    }

    li{
        margin-right: 1rem;
        cursor: pointer;
        font-weight: 700;
    }

    li:hover{
        color: grey;
    }

    @media (max-width: 1300px){
        padding: 0;
    }
`

export const Logo = styled.div`
    img {
        width: 10rem;
        padding: 1rem;
    }
`

export const PanelConteiner = styled.div`
    width: 100%;
    margin: 6rem 0 2rem;
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
        padding: 1rem;
        border-radius: 30px;
        font-weight: 700;
        background: linear-gradient(to right, var(--azul), var(--azul-marinho));
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