import { getBoards } from '@_apis/board';
import Board from '@_components/Board';
import { BoardInfo } from '@_types/board';
import { useEffect, useState } from 'react';

const Home = () => {
  const [boards, setBoards] = useState<BoardInfo[]>([]);

  const getBoardData = async () => {
    const { data } = await getBoards();

    setBoards(data);
  };

  useEffect(() => {
    getBoardData();
  }, []);

  return (
    <>
      {boards.map((boardData, index) => (
        <Board key={index} boardData={boardData} />
      ))}
    </>
  );
};

export default Home;
