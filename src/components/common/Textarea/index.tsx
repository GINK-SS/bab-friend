import * as S from './styles';

type TextareaProps = {
  label?: string;
  placeholder: string;
  value: string | number;
  errorMessage?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  height: number;
};

const Textarea = ({ label, placeholder, value, errorMessage, onChange, height }: TextareaProps) => {
  return (
    <S.TextareaWrap>
      <S.Label>{label}</S.Label>
      <S.ElTextarea placeholder={placeholder} value={value} onChange={onChange} height={height} />
      {errorMessage && <S.ErrorMessage>* {errorMessage}</S.ErrorMessage>}
    </S.TextareaWrap>
  );
};

export default Textarea;
