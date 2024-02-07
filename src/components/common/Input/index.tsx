import * as S from './styles';

type InputProps = {
  type: 'text' | 'password' | 'number' | 'link';
  label?: string;
  placeholder?: string;
  value?: string | number;
  required?: boolean;
  errorMessage?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
};

const Input = ({ type, label, placeholder, value, required, errorMessage, onChange, maxLength }: InputProps) => {
  return (
    <S.InputWrap>
      <S.Label>{label}</S.Label>
      <S.ElInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        maxLength={maxLength}
      />
      {errorMessage && <S.ErrorMessage>* {errorMessage}</S.ErrorMessage>}
    </S.InputWrap>
  );
};

export default Input;
