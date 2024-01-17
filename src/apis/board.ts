import { getBoardResponse } from '@_types/board';
import { request } from './axios';

export const getBoards = async () => {
  const { data } = await request.get<getBoardResponse>('/boards');

  return data;
};

const boardApi = { getBoards };

export default boardApi;
