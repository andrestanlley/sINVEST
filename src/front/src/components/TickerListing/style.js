import styled from 'styled-components'

export const TickerListingContainer = styled.div `
    min-height: 16rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    background: var(--branco);
`