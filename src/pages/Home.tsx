import { getBoards } from '@_apis/board';
import Board from '@_components/Board';
import { BoardInfo } from '@_types/board';
import { useEffect, useState } from 'react';
import { IoAddCircle } from 'react-icons/io5';

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
      {boards.length ? (
        boards.map((boardData, index) => <Board key={index} boardData={boardData} />)
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
