import styled from "styled-components";

const Button = styled.a<{
  readonly width?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.3rem;
  padding: 0.5rem 2rem;
  cursor: pointer;
  border-radius: 0.1rem;
  background: ${({ theme }) => theme.element};
  box-shadow: 2px 2px 2px #00000011;
  ${({ width }) => (width ? `width: ${width}` : "")}
`;
export default Button;
