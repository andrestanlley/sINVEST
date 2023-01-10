import styled from 'styled-components';

export const LastViewContainer = styled.div`
  margin-top: 2rem;
  position: relative;
  min-height: 14rem;
  width: 100%;
  max-width: var(--limiter-width);

  h1 {
    top: -1.5rem;
    left: 1rem;
    font-size: 1rem;
    position: absolute;
    background: var(--verde-dois);
    width: max-content;
    padding: 0.5rem;
    color: var(--branco);
  }

  h5 {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 14rem;
    padding: 0.5rem;
    font-size: 2rem;
  }
`;
