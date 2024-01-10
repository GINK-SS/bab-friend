import { UserEditType } from '@_types/userEdit';
import { formDataRequest } from './axios';

export const userEditPatch = async (accessToken: string, userEditData: UserEditType): Promise<UserEditType> => {
  const formData = new FormData();

  if (userEditData.nickName !== undefined) {
    formData.append('nickName', userEditData.nickName);
  }

  if (userEditData.profileImageUrl !== undefined) {
    formData.append('profileImageUrl', userEditData.profileImageUrl);
  }

  const { data } = await formDataRequest.patch('/users/info', formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};
