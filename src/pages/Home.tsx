import { getBoards } from '@_apis/board';
import Board from '@_components/Board';
import { BoardInfo } from '@_types/board';
import { useEffect, useRef, useState } from 'react';
import { IoAddCircle } from 'react-icons/io5';

const Home = () => {
  const [boards, setBoards] = useState<BoardInfo[]>([]);
  const [page, setPage] = useState(0);
  const [isLoadActive, setIsLoadActive] = useState(true);
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
    } = await getBoards({ page });

    setBoards((prev) => [...prev, ...boards]);

    if (last) {
      setIsLoadActive(false);
    }
  };

  useEffect(() => {
    getBoardData();
  }, [page]);

  useEffect(() => {
    if (loadTargetRef.current) {
      observer.observe(loadTargetRef.current);
    }
  }, [boards]);

  return (
    <>
      {boards.length ? (
        boards.map((boardData, index) => (
          <Board key={index} boardData={boardData} ref={loadTargetRef} isTarget={index === boards.length - 5} />
        ))
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            alignItems: 'center',
          }}
        >
          <IoAddCircle style={{ marginBottom: '5px', transform: 'rotate(45deg)' }} size={30} />
          <p>존재하는 게시물이 없습니다. :(</p>
        </div>
      )}
    </>
  );
};

export default Home;
