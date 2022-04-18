import styled from 'styled-components'

export const TickerDetails = styled.div`
    width: 100%;
    max-width: var(--limiter-width);
    margin-top: 6rem;

    div{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    section{
        width: 31.5rem;
        margin: 1rem;
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

    #CVM-CNPJ > p{
        display: flex;
        flex-direction: column;
        padding-right: .7rem;
        padding-bottom: 1.5rem;
    }

    #CVM-CNPJ > p > p{
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

    @media (max-width: 1060px){
        section{
            width: 100%;
        }
    }

`