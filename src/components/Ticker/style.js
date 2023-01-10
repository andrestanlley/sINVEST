import styled from 'styled-components';

export const TickerContainer = styled.div`
  margin: 0;
  display: grid;
  background: var(--cinza);
  min-height: 11rem;
  padding: 2rem 1rem;
  margin: 1rem;
  border-radius: 4px;
  cursor: pointer;
  color: var(--preto);
  text-decoration: none;

  :hover {
    opacity: 0.6;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  p {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0.5rem 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 12.5rem;
  }
  span {
    color: var(--grey);
    font-size: 0.7rem;
  }
  h2 {
    display: block;
    font-size: 1rem;
    color: var(--gray);
  }
  .logocompany {
    width: 2rem;
    height: 2rem;
    margin-right: .3rem;
    border-radius: 50%;
  }
`;
