import { getBoards } from '@_apis/board';
import Board from '@_components/Board';
import EmptyData from '@_components/EmptyData';
import Filter from '@_components/Filter';
import Search from '@_components/Search';
import Spinner from '@_components/common/Spinner';
import { userState } from '@_recoil/atoms/user';
import { BoardFilter, BoardInfo } from '@_types/board';
import { isLimit } from '@_utils/limit';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

const Home = () => {
  const [boards, setBoards] = useState<BoardInfo[]>([]);
  const [page, setPage] = useState(0);
  const [isLoadActive, setIsLoadActive] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState<BoardFilter>({ isJoinPossible: true });
  const loadTargetRef = useRef<HTMLDivElement>(null);
  const userInfo = useRecoilValue(userState);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isLoading) {
        getBoardData(page + 1);
        setPage((prev) => prev + 1);
      }
    });
  });

  const getBoardData = async (pageNum: number) => {
    setIsLoading(true);

    const {
      data: { boards, last },
    } = await getBoards({ page: pageNum, search: searchParams.get('search') ?? undefined });
    last ? setIsLoadActive(false) : setIsLoadActive(true);

    if (pageNum === 0) {
      filter.isJoinPossible ? setBoards(boards.filter((board) => !isLimit(userInfo, board))) : setBoards(boards);
    } else
      filter.isJoinPossible
        ? setBoards((prev) => [...prev, ...boards.filter((board) => !isLimit(userInfo, board))])
        : setBoards((prev) => [...prev, ...boards]);

    setIsLoading(false);
  };

  useEffect(() => {
    setPage(0);
    getBoardData(0);
  }, [searchParams, filter, userInfo]);

  useEffect(() => {
    if (loadTargetRef.current && isLoadActive) {
      observer.observe(loadTargetRef.current);
    }

    return () => {
      if (loadTargetRef.current) {
        observer.unobserve(loadTargetRef.current);
      }
    };
  }, [observer]);

  return (
    <>
      <Search searchParams={searchParams} setSearchParams={setSearchParams} />
      <Filter filter={filter} setFilter={setFilter} />

      {boards.length ? (
        <>
          {boards.map((boardData, index) => (
            <Board key={index} boardData={boardData} isTarget={index === boards.length - 5} />
          ))}

          {isLoading && (
            <div style={{ position: 'relative' }}>
              <Spinner />
            </div>
          )}

          <div id='trigger' ref={loadTargetRef} style={{ height: '1px' }} />
        </>
      ) : (
        <EmptyData content='존재하는 게시물이 없습니다 :(' />
      )}
    </>
  );
};

export default Home;
