import { boardDetailResponse, getBoardResponse } from '@_types/board';
import { request } from './axios';

export const getBoards = async () => {
  const { data } = await request.get<getBoardResponse>('/boards');

  return data;
};

export const getBoardDetail = async (id: number) => {
  const { data } = await request.get<boardDetailResponse>(`/boards/${id}`);

  return data;
};
const boardApi = { getBoards, getBoardDetail };

export default boardApi;
