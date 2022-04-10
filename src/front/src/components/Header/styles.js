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
        color: var(--preto);
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