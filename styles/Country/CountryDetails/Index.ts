import styled from "styled-components";

const Container = styled.div`
  @media screen and (min-width: 992px) {
    display: flex;
    gap: 3rem;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  li {
    span {
      font-weight: initial;
    }
    font-weight: 600;
  }
`;
export { Container, List };
