import { useQuery } from '@tanstack/react-query';
import authApi from '@_apis/auth';
import boardApi from '@_apis/board';
import Board from '@_components/Board';

const JoinedMeetings = () => {
  const { data: userInfo } = useQuery({ queryKey: ['userInfo'], queryFn: authApi.requestUserInfo });
  const { data: joined } = useQuery({
    queryKey: ['joined', userInfo?.nickName],
    queryFn: boardApi.getjoinedMettings,
    select: (data) => data.data.map((value) => ({ ...value, location: JSON.parse(value.location) })),
  });
};

export default JoinedMeetings;
