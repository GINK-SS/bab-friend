import { BoardInfo, BoardDetailInfo } from '@_types/board';
import { UserState } from '@_types/user';

export const isLimitedByGender = (
  userInfo: UserState | undefined,
  boardData: BoardInfo | BoardDetailInfo | undefined
) => {
  if (!userInfo) return false;

  if (!userInfo?.genderType || boardData?.genderType === 'ALL') return false;

  return boardData?.genderType !== userInfo.genderType;
};

export const isLimitedByAge = (userInfo: UserState | undefined, boardData: BoardInfo | BoardDetailInfo | undefined) => {
  if (!userInfo) return false;

  if (!userInfo?.birthYear || !boardData?.ageGroupLimit) return false;

  return !(boardData.up < userInfo.birthYear && boardData.down > userInfo.birthYear);
};

export const isLimit = (userInfo: UserState | undefined, boardData: BoardInfo) =>
  boardData.fix || isLimitedByGender(userInfo, boardData) || isLimitedByAge(userInfo, boardData);
