import * as S from './styles';

type TextareaProps = {
  label?: string;
  placeholder: string;
  value: string | number;
  errorMessage?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea = ({ label, placeholder, value, errorMessage, onChange }: TextareaProps) => {
  return (
    <S.TextareaWrap>
      <S.Label>{label}</S.Label>
      <S.ElTextarea placeholder={placeholder} value={value} onChange={onChange} />
      {errorMessage && <S.ErrorMessage>* {errorMessage}</S.ErrorMessage>}
    </S.TextareaWrap>
  );
};

export default Textarea;
