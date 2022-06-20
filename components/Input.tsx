import SetState from "@localTypes/SetState";
import { ChangeEvent, FC } from "react";
import { IoSearch } from "react-icons/io5";
import InputContainer from "@styles/Index/Input";
interface Props {
  input: string;
  setInput: SetState<string>;
}

const Input: FC<Props> = ({ input, setInput }) => {
  const handleInput = function ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) {
    setInput(value);
  };
  return (
    <InputContainer>
      <IoSearch />
      <input
        value={input}
        placeholder="Search For a country..."
        type="text"
        onChange={handleInput}
      />
    </InputContainer>
  );
};

export default Input;
