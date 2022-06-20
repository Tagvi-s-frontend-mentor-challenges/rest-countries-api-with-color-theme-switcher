import styled from "styled-components";

const Main = styled.main`
  padding: 5vw;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h1 {
    margin-top: 2rem;
  }
  @media screen and (min-width: 992px) {
    h1 {
      margin-top: 0;
    }
  }
`;

const FlexOnDesktop = styled.div`
  @media screen and (min-width: 992px) {
    display: flex;
    gap: 5rem;
  }
`;
export { Main, Wrapper, FlexOnDesktop };
