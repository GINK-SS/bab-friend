import { SetURLSearchParams } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import * as S from './styles';

type SearchProps = {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
};

const Search = ({ searchParams, setSearchParams }: SearchProps) => {
  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    if (!formData.get('search')) {
      searchParams.delete('search');
      setSearchParams(searchParams);

      return;
    }

    searchParams.set('search', formData.get('search') as string);
    setSearchParams(searchParams);
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
