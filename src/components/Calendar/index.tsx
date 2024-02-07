import { useState } from 'react';
import { addDays, format, setHours, setMinutes } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { PostDataType, UpdatePost } from '@_types/createBoard';

import * as S from './styles';
import formatDate from '@_utils/formatDate';
import { useRecoilState } from 'recoil';
import { postsState } from '@_recoil/atoms/posts';

type CalendarProps = {
  updating?: boolean;
  updateEatTime?: string;
  setUpdatePostState?: React.Dispatch<React.SetStateAction<UpdatePost>>;
};

const Calendar = ({ updateEatTime, setUpdatePostState, updating }: CalendarProps) => {
  const [startDate, setStartDate] = useState<Date | null>(setHours(setMinutes(new Date(), 0), 9));
  const [postState, setPostState] = useRecoilState(postsState);

  const filterPassedTime = (time: any) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };
  const covertTimeType = (date: any) => {
    setStartDate(date);
    const formattedDate = format(date || new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS");
    if (updating && setUpdatePostState) {
      setUpdatePostState((prevData) => ({ ...prevData, eatTime: formattedDate }));
    } else {
      setPostState((prevData) => ({ ...prevData, eatTime: formattedDate }));
    }
  };
  return (
    <>
      <S.StyledDatePicker
        selected={startDate}
        onChange={(date) => {
          covertTimeType(date);
        }}
        timeInputLabel='약속시간:'
        showTimeInput
        filterTime={filterPassedTime}
        dateFormat='yyyy/MM/dd   h:mm aa'
        closeOnScroll={true}
        withPortal
      />
      <S.SelectDateWrap>
        {updating ? (
          <>{updateEatTime && <S.SelectDate>약속시간 :{formatDate(updateEatTime)}</S.SelectDate>}</>
        ) : (
          <>{postState.eatTime && <S.SelectDate>약속시간 : {formatDate(postState.eatTime)}</S.SelectDate>}</>
        )}
      </S.SelectDateWrap>
    </>
  );
};

export default Calendar;
