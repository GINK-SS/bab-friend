import { IoSearch } from 'react-icons/io5';
import * as S from './styles';

const Search = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Input placeholder='제목, 글 내용을 검색해보세요.' />

        <S.Icon>
          <IoSearch />
        </S.Icon>
      </S.Wrapper>
    </S.Container>
  );
};

export default Search;
