import styled from 'styled-components'


export const Articles = styled.div`
    background: none;
    width: 100%;
    max-width: var(--limiter-width);
    text-decoration: none;
    min-height: 35rem;
    
    
    article{
        background: var(--branco);
        padding: 1.5rem;
        width: 100%;
        color: var(--preto);
        display: flex;
        min-height: 170px;
        align-items: center;
        margin-bottom: 1.5rem;
        cursor: pointer;
        
        h1: {
            text-transform: uppercase;
        }
  
        img{
            border-radius: 4px;
            width: 300px;
            height: 170px;
            object-fit: cover;
            margin: 1rem;
        }



        span{
            font-size: .8rem;
            color: var(--cinza-tres);
        }

        button{
            margin-top: .3rem;
            border: 1px solid var(--cinza-tres);
            color: var(--cinza-tres);
            background: none;
            padding: .3rem;
            border-radius: 8px;
            cursor: pointer;

            :hover{
                color: var(--preto);
            }
        }

    }

    article:hover{
        opacity: 0.8;
    }

    @media (max-width: 920px){
        article{
            flex-direction: column;

            div{
                width: 100%;
            }

            .poster{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .post-data{
            padding: 0 1rem;
        }

            img{
                padding: 1rem;
                min-width: 100%;
                height: auto;
                object-fit: fill;
            }
        }
    }
`