import styled from 'styled-components'

export const TopMenu = styled.div `
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    background: var(--branco);
    box-shadow: 0 2px 10px var(--cinza);

    ol{
        display: flex;
        list-style: none;
    }

    li{
        color: var(--preto);
        margin-right: 1rem;
        cursor: pointer;
        font-weight: 700;
    }

    li:hover{
        color: grey;
    }

    .content{
        max-width: 1080px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media (max-width: 1300px){
        padding: 0;
    }
`

export const Logo = styled.div `
    img {
        width: 10rem;
        padding: 1rem;
    }
`