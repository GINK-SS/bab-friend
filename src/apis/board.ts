import { BoardDetailResponse, getBoardResponse } from '@_types/board';
import { request } from './axios';
import { UpdatePostRequest } from '@_types/createBoard';

/**
 * @description 게시물 가져오는 API
 * @param page 현재 페이지
 * @param size 한번에 가져올 페이지의 크기
 * @param search 검색할 내용
 * @returns page에 맞는 size개의 search 관련(없다면 모든) 게시물들 정보
 */
export const getBoards = async ({ page, size, search }: { page: number; size?: number; search?: string }) => {
  const { data } = await request.get<getBoardResponse>('/boards', {
    params: {
      page,
      size: size ?? 10,
      search,
    },
  });

  return data;
};

export const getBoardDetail = async (id: number) => {
  const { data } = await request.get<BoardDetailResponse>(`/boards/${id}`);

  return data;
};

export const deleteBoard = async (id: number) => {
  await request.delete(`/boards/${id}`);
};

export const fixBoard = async (id: number) => {
  const { data } = await request.post(`/boards/${id}/fix`);

  return data;
};
export const updateBoard = async (id: number, updateData: UpdatePostRequest) => {
  const { data } = await request.patch(`/boards/${id}`, updateData);

  return data;
};

export const joinBoard = async (id: number) => {
  const { data } = await request.post(`/boards/${id}/join`);

  return data;
};

export const checkJoin = async (id: number) => {
  const { data } = await request.get(`/boards/${id}/possibility`);

  return data;
};
const boardApi = { getBoards, getBoardDetail, deleteBoard, fixBoard, updateBoard, joinBoard, checkJoin };

export default boardApi;
