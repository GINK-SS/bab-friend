import boardHandler from './api/board';
import commentHandler from './api/comment';
import boardDetailHandler from './api/boardDetail';
import reviewHandler from './api/review';

const handlers = [...boardHandler, ...commentHandler, ...boardDetailHandler, ...reviewHandler];

export default handlers;
