import boardHandler from './api/board';
import commentHandler from './api/comment';

const handlers = [...boardHandler, ...commentHandler];

export default handlers;
