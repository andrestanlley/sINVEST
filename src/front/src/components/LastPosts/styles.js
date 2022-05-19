import styled from 'styled-components'


export const Articles = styled.div`
    background: var(--branco);
    width: 100%;
    max-width: var(--limiter-width);
    text-decoration: none;
    min-height: 35rem;
    margin-top: 2rem;
    position: relative;
    min-height: 14rem;

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

    #ver-blog{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;

        button{
            width: 100%;
            max-width: 300px;
            height: 2.5rem;
        }
    }
    
    article{
        padding: 1.5rem;
        width: 100%;
        color: var(--preto);
        display: flex;
        min-height: 170px;
        align-items: center;
        cursor: pointer;
        
  
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

export const LastPostsTitle = styled.h1`
    top: -1.5rem;
    left: 1rem;
    font-size: 1rem;
    position: absolute;
    background: var(--azul-dois);
    width: max-content;
    padding: .5rem;
    color: var(--branco);
`