import * as S from './styles';

type InputProps = {
  type: 'text' | 'password' | 'number';
  label?: string;
  placeholder?: string;
  value: string | number;
  required?: boolean;
  errorMessage?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ type, label, placeholder, value, required, errorMessage, onChange }: InputProps) => {
  return (
    <S.InputWrap>
      <S.Label>{label}</S.Label>
      <S.ElInput type={type} placeholder={placeholder} value={value} onChange={onChange} />
      {errorMessage && <S.ErrorMessage>* {errorMessage}</S.ErrorMessage>}
    </S.InputWrap>
  );
};

export default Input;
