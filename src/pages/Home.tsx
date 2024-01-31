import { getBoards } from '@_apis/board';
import Board from '@_components/Board';
import EmptyData from '@_components/EmptyData';
import Filter from '@_components/Filter';
import Search from '@_components/Search';
import Spinner from '@_components/common/Spinner';
import { BoardFilter, BoardInfo } from '@_types/board';
import { useEffect, useRef, useState } from 'react';
import { IoAddCircle } from 'react-icons/io5';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const [boards, setBoards] = useState<BoardInfo[]>([]);
  const [page, setPage] = useState(0);
  const [isLoadActive, setIsLoadActive] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState<BoardFilter>({ isJoinPossible: true });
  const loadTargetRef = useRef<HTMLDivElement>(null);

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
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
      setBoards(boards);
    } else setBoards((prev) => [...prev, ...boards]);

    setIsLoading(false);
  };

  useEffect(() => {
    if (loadTargetRef.current && isLoadActive) {
      observer.observe(loadTargetRef.current);
    }

    return () => {
      if (loadTargetRef.current) {
        observer.unobserve(loadTargetRef.current);
      }
    };
  }, [boards]);

  useEffect(() => {
    setPage(0);
    getBoardData(0);
  }, [searchParams]);

  return (
    <>
      <Search searchParams={searchParams} setSearchParams={setSearchParams} />
      <Filter filter={filter} setFilter={setFilter} />

      {boards.length ? (
        <>
          {boards.map((boardData, index) => (
            <Board key={index} boardData={boardData} ref={loadTargetRef} isTarget={index === boards.length - 5} />
          ))}
          {isLoading && (
            <div style={{ position: 'relative' }}>
              <Spinner />
            </div>
          )}
        </>
      ) : (
        <EmptyData content='존재하는 게시물이 없습니다 :(' />
      )}
    </>
  );
};

export default Home;
