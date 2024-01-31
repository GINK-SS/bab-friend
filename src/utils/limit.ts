import { BoardInfo } from '@_types/board';
import { UserState } from '@_types/user';

export const isLimitedByGender = (userInfo: UserState, boardData: BoardInfo) =>
  !!userInfo.genderType && boardData.genderType !== 'ALL' && boardData.genderType !== userInfo.genderType;

export const isLimitedByAge = (userInfo: UserState, boardData: BoardInfo) =>
  !!userInfo.birthYear && boardData.ageGroupLimit
    ? boardData.up < userInfo.birthYear && boardData.down > userInfo.birthYear
      ? false
      : true
    : false;

export const isLimit = (userInfo: UserState, boardData: BoardInfo) =>
  boardData.fix || isLimitedByGender(userInfo, boardData) || isLimitedByAge(userInfo, boardData);
