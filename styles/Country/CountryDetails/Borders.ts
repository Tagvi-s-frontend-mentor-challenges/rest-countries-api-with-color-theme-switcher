import styled from "styled-components";

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 0.4rem;
`;
const Border = styled.a`
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 0.1rem;
  background: ${({ theme }) => theme.element};
  box-shadow: 2px 2px 2px #00000011;
`;
export { Container, Border };
