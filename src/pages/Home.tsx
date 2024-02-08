import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import authApi from '@_apis/auth';
import boardApi from '@_apis/board';
import Board from '@_components/Board';
import EmptyData from '@_components/EmptyData';
import Filter from '@_components/Filter';
import Search from '@_components/Search';
import Spinner from '@_components/common/Spinner';
import { BoardFilter } from '@_types/board';
import { isLimit } from '@_utils/limit';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchKeyword = searchParams.get('search');
  const [filter, setFilter] = useState<BoardFilter>({ isJoinPossible: true });
  const loadTargetRef = useRef<HTMLDivElement>(null);
  const { data: userInfo } = useQuery({ queryKey: ['userInfo'], queryFn: authApi.requestUserInfo });

  const {
    data: boards,
    hasNextPage,
    isLoading,
    isFetching,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['boards', filter.isJoinPossible, searchKeyword],
    queryFn: ({ pageParam }) => boardApi.getBoards(pageParam),
    initialPageParam: { page: 0, size: 5, search: searchKeyword ?? undefined },
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.data.last) return null;
      return { page: lastPageParam.page + 1, size: lastPageParam.size, search: lastPageParam.search };
    },
    select: (data) =>
      data.pages.flatMap((page) =>
        page.data.boards
          .map((board) => ({ ...board, location: JSON.parse(board.location) }))
          .filter((board) => (filter.isJoinPossible ? !isLimit(userInfo, board) : board))
      ),
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasNextPage && !isFetching) {
          fetchNextPage();
        }
      });
    });

    if (loadTargetRef.current) {
      observer.observe(loadTargetRef.current);
    }

    return () => {
      if (loadTargetRef.current) {
        observer.unobserve(loadTargetRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetching]);

  return (
    <>
      <Search searchParams={searchParams} setSearchParams={setSearchParams} />
      <Filter filter={filter} setFilter={setFilter} />

      {boards?.length ? (
        <>
          {boards.map((boardData, index) => (
            <Board key={index} boardData={boardData} />
          ))}

          {isFetching && (
            <div style={{ position: 'relative', height: '50px' }}>
              <Spinner />
            </div>
          )}

          <div id='trigger' ref={loadTargetRef} style={{ height: '1px' }} />
        </>
      ) : isLoading ? (
        <div style={{ position: 'relative', marginTop: '100px' }}>
          <Spinner />
        </div>
      ) : (
        <EmptyData content='존재하는 게시물이 없습니다 :(' />
      )}
    </>
  );
};

export default Home;
