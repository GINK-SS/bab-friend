import { getBoards } from '@_apis/board';
import Board from '@_components/Board';
import EmptyData from '@_components/EmptyData';
import Search from '@_components/Search';
import Spinner from '@_components/common/Spinner';
import { BoardInfo } from '@_types/board';
import { useEffect, useRef, useState } from 'react';
import { IoAddCircle } from 'react-icons/io5';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const [boards, setBoards] = useState<BoardInfo[]>([]);
  const [page, setPage] = useState(0);
  const [isLoadActive, setIsLoadActive] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isNew, setIsNew] = useState(true);
  const loadTargetRef = useRef<HTMLDivElement>(null);

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);

        if (isLoadActive) {
          setPage((prev) => prev + 1);
        }
      }
    });
  });

  const getBoardData = async () => {
    const {
      data: { boards, last },
    } = await getBoards({ page: isNew ? 0 : page, search: searchParams.get('search') ?? undefined });

    if (isNew) {
      setIsLoadActive(true);
      setIsNew(false);
      setPage(0);
      setBoards(boards);
    } else setBoards((prev) => [...prev, ...boards]);

    if (last) {
      setIsLoadActive(false);
    }
  };

  useEffect(() => {
    if (!isNew && page === 0) return;

    setIsLoading(true);
    getBoardData();
    setIsLoading(false);
  }, [page, isNew]);

  useEffect(() => {
    setIsNew(true);
  }, [searchParams]);

  useEffect(() => {
    if (loadTargetRef.current) {
      observer.observe(loadTargetRef.current);
    }
  }, [boards]);

  return (
    <>
      <Search searchParams={searchParams} setSearchParams={setSearchParams} />

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
