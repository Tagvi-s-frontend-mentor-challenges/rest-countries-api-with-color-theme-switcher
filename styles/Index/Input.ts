import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.element};
  padding-left: 1rem;
  border-radius: 0.6rem;
  box-shadow: 2px 2px 2px #00000011;
  gap: 0.4rem;
  input {
    border-radius: 0.6rem;
    color: inherit;
    width: 100%;
    padding: 1rem;
    background: none;
    border: none;
    &::placeholder {
      color: ${({ theme }) => theme.input};
    }
  }
`;

export default InputContainer;
