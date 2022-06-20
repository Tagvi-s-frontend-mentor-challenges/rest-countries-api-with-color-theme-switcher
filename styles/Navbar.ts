import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: min(5vw, 2rem);
  background: ${({ theme }) => theme.element};
  box-shadow: 2px 2px 2px #00000011;
  a {
    font-weight: 800;
  }
  button {
    display: flex;
    gap: 0.6rem;
    align-items: center;
  }
`;
export default Nav;
