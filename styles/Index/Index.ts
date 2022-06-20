import styled from "styled-components";
const Main = styled.main`
  padding: 5vw;
`;
const Wrapper = styled.div`
  & > * + * {
    margin-top: 2rem;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > * + * {
      margin-top: 0;
    }
  }
`;
export { Main, Wrapper };
