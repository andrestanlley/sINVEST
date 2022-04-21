import styled from 'styled-components'

export const TickerDetails = styled.div`
    max-width: var(--limiter-width);
    min-height: 60vh;

    div{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    section{
        width: 32.5rem;
        margin-bottom: 2rem;
        box-shadow: 0px 2px 5px var(--cinza-tres);
        padding: 1.5rem;
        border-radius: 0.25rem;
        background: var(--branco);
    }

    #TICKER{
        font-size: 1rem;
        font-weight: 700;
        background: var(--preto);
        width: max-content;
        color: var(--branco);
        padding: .2rem .5rem;
    }

    #NOMEEMPRESA{
        font-weight: 700;
        font-size: 1.5rem;
    }

    #SETOR{
        font-size: .8rem;
    }

    #DESCRICAO{
        padding: 1.5rem 0;
        text-align: justify;
        font-size: .9rem;
    }

    #CVM-CNPJ{
        width: 100%;
    }

    #CVM-CNPJ > span{
        display: flex;
        flex-direction: column;
        padding-right: .7rem;
        padding-bottom: 1.5rem;
    }

    #CVM-CNPJ > span > span{
        font-weight: 700;
    }

    #SITE{
        display: flex;
        align-items: center;
        color: var(--azul-marinho);
        padding: .3rem;
        border-radius: 16px;
        width: max-content;
    }

    .icon{
        padding-right: .3rem;
        font-size: 1.3rem;
    }

    #OSCILACOES{
        width: 100%;
    }

    .tabela{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .3rem;
    }

    .tabela > span{
        font-size: .9rem;
        color: var(--cinza-tres);
    }

    .linhaImpar, .linhaPar{
        padding: .3rem;
    }

    #title{
        font-weight: 700;
    }

    .linhaImpar{
        background: var(--cinza);
    }

    .linhaPar{
        background: var(--branco);
    }

    @media (max-width: 1060px){
        section{
            width: 100%;
        }
    }

`