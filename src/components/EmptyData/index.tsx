import { IoAddCircle } from 'react-icons/io5';
import * as S from './styles';

type EmptyDataProps = {
  content: string;
};

const EmptyData = ({ content }: EmptyDataProps) => {
  return (
    <S.Container>
      <S.Icon>
        <IoAddCircle size={30} />
      </S.Icon>
      <p>{content}</p>
    </S.Container>
  );
};

export default EmptyData;
