import styled from 'styled-components'

export const FooterBar = styled.div`
    margin-top: 2rem;
    height: 15rem;

    hr{
    width: 100%;
    border-top: none;
    border-right: none;
    border-left: none;
    border-image: initial;
    border-bottom: 2px solid rgb(219, 226, 235);
    }
    
`

export const FooterSubAreas = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
`