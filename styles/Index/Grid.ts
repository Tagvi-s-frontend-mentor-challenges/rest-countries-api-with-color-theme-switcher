import styled from "styled-components";

const Container = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-gap: 5vw;
  grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
`;
export default Container;
