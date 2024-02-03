import { BoardInfo } from '@_types/board';
import { UserState } from '@_types/user';

export const isLimitedByGender = (userInfo: UserState, boardData: BoardInfo) => {
  if (!userInfo.genderType || boardData.genderType === 'ALL') return false;

  return boardData.genderType !== userInfo.genderType;
};

export const isLimitedByAge = (userInfo: UserState, boardData: BoardInfo) => {
  if (!userInfo.birthYear || !boardData.ageGroupLimit) return false;

  return !(boardData.up < userInfo.birthYear && boardData.down > userInfo.birthYear);
};

export const isLimit = (userInfo: UserState, boardData: BoardInfo) =>
  boardData.fix || isLimitedByGender(userInfo, boardData) || isLimitedByAge(userInfo, boardData);
