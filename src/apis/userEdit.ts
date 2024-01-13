import { UserEditType } from '@_types/userEdit';
import { request } from './axios';

const userEditPatch = async (userEditData: UserEditType): Promise<UserEditType> => {
  const formData = new FormData();

  if (userEditData.nickName !== undefined) {
    formData.append('nickName', userEditData.nickName);
  }

  if (userEditData.profileImageUrl !== null) {
    formData.append('profileImageUrl', userEditData.profileImageUrl);
  }

  const { data } = await request.patch('/users/info', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
};

const userEditApi = { userEditPatch };

export default userEditApi;
