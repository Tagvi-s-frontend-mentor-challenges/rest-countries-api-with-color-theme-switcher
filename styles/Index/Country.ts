import styled from "styled-components";

const Container = styled.button`
  text-align: left;
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: 2px 2px 2px #00000011;
  background: ${({ theme }) => theme.element};
  display: flex;
  flex-direction: column;
`;

const InfoContainer = styled.div`
  padding: 1.2rem;
  h1 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  ul {
    list-style: none;
    p {
      font-size: 0.85rem;
      font-weight: 600;
      span {
        font-weight: initial;
      }
    }
  }
`;

export { Container, InfoContainer };
