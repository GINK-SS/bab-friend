import { IoSearch } from 'react-icons/io5';
import * as S from './styles';

type SearchProps = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const Search = ({ setSearch }: SearchProps) => {
  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    setSearch(formData.get('search') as string);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') {
      onSearch(e);
    }
  };

  return (
    <S.Container>
      <S.Wrapper onSubmit={(e) => onSearch(e)} onKeyDown={(e) => handleEnter(e)}>
        <S.Input name='search' placeholder='제목, 글 내용을 검색해보세요.' />
        <S.Icon>
          <IoSearch />
        </S.Icon>
      </S.Wrapper>
    </S.Container>
  );
};

export default Search;
