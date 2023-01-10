import styled from 'styled-components';

export const TickerDetails = styled.div`
  max-width: var(--limiter-width);
  min-height: 35rem;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  section {
    display: flex;
    margin-bottom: 2rem;
    box-shadow: 0px 2px 5px var(--cinza-tres);
    padding: 1.5rem;
    border-radius: 0.25rem;
    background: var(--branco);
    justify-content: space-between;
    flex-direction: column;
    min-width: 70rem;

    div {
        display: flex;
        flex-direction: column;
    }
  }

  #HEADER-STOCK {
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;
  }

  #TICKER {
    font-size: 1rem;
    font-weight: 700;
    background: var(--preto);
    width: max-content;
    color: var(--branco);
    padding: 0.2rem 0.5rem;
  }

  #NOMEEMPRESA {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 2.5rem;

    img {
        width: 2rem;
        margin-right: .3rem;
        border-radius: 50%;
    }
  }

  #VALORDEMERCADO{
    display: flex;
    flex-direction: column;
  }

  #SETOR {
    font-size: 0.8rem;
  }

  .tabela {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.3rem;
  }

  .tabela > span {
    font-size: 0.9rem;
    color: var(--cinza-tres);
  }

  .linhaImpar,
  .linhaPar {
    padding: 0.3rem;
  }

  #title {
    font-weight: 700;
  }

  .linhaImpar {
    background: var(--cinza);
  }

  .linhaPar {
    background: var(--branco);
  }

  @media (max-width: 1060px) {
    section {
      width: 100%;
    }
  }
`;
