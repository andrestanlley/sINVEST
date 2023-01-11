import styled from 'styled-components';

export const SearchTickersContainer = styled.div`
  background: var(--branco);
  padding: 1rem;
  max-width: var(--limiter-width);
  min-height: 60vh;
  min-width: 80%;

  #searchTickers {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    margin: 0 1rem;
    background: var(--cinza);
  }

  #searchTickers > img {
    width: 20px;
    margin-right: 0.5rem;
  }

  #searchTickers > input {
    font-size: 1.6rem;
    width: 100%;
    height: 3rem;
    border: none;
    background: var(--cinza);
    border-radius: 6px;
  }

  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 0.7rem 1rem;
    font-size: 0.8rem;
  }

  form > div {
    width: 13rem;
    margin: 0.3rem;
  }

  input:focus {
    outline: none;
  }

  @media (max-width: 700px) {
    form {
      justify-content: center;
    }
    form > div {
      width: 100%;
    }
  }
`;
