import styled from "styled-components";
import { SearchIcon } from "./assets/search-icon";
import { InputHTMLAttributes } from "react";

const PrimaryInput = styled.input`
  width: 352px;
  border-radius: 8px;
  padding: 10px 16px;
  border: none;

  background-color: var(--bg-secondary);

  text-align: center;
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  color: var(--textos-dark-textos-apoio);
`;

const InputContainer = styled.div`
  position: relative;
  width: 352px;
  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
export function PrimaryInputWSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput {...props} />
      <SearchIcon />
    </InputContainer>
  );
}
export default PrimaryInput;
