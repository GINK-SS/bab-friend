import boardHandler from './api/board';
import commentHandler from './api/comment';
import boardDetailHandler from './api/boardDetail';

const handlers = [...boardHandler, ...commentHandler, ...boardDetailHandler];

export default handlers;
