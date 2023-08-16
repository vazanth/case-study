import { FC } from 'react';

interface InputBoxProps {
  inputId: number;
}

const InputBox: FC<InputBoxProps> = ({ inputId }) => {
  return <input type={inputId === 2 ? 'number' : 'text'} />;
};

export default InputBox;
