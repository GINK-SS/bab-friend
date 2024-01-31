import { BoardDetailInfo, boardDetailResponse, getBoardResponse } from '@_types/board';
import { request } from './axios';

/**
 * @description 게시물 가져오는 API
 * @param page 현재 페이지
 * @param size 한번에 가져올 페이지의 크기
 * @returns page에 맞는 size개의 게시물들 정보
 */
export const getBoards = async ({ page, size = 10 }: { page: number; size?: number }) => {
  const { data } = await request.get<getBoardResponse>('/boards', {
    params: {
      page,
      size,
    },
  });

  return data;
};

export const getBoardDetail = async (id: number) => {
  const { data } = await request.get<boardDetailResponse>(`/boards/${id}`);

  return data;
};

export const deleteBoard = async (id: number) => {
  await request.delete(`/boards/${id}`);
};

export const fixBoard = async (id: number) => {
  await request.post(`/boards/${id}/fix`);
};

const boardApi = { getBoards, getBoardDetail, deleteBoard, fixBoard };

export default boardApi;
