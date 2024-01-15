import { useState } from 'react';
import { format, setHours, setMinutes } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { PostDataType } from '@_types/createPost';

import * as S from './styles';

type CalendarProps = {
  postState: PostDataType;
  setPostState: React.Dispatch<React.SetStateAction<PostDataType>>;
};

const Calendar = ({ postState, setPostState }: CalendarProps) => {
  const [startDate, setStartDate] = useState<Date | null>(setHours(setMinutes(new Date(), 0), 9));

  const filterPassedTime = (time: any) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };
  const covertTimeType = (date: any) => {
    setStartDate(date);
    const formattedDate = format(date || new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS");
    setPostState((prevData) => ({ ...prevData, eatTime: formattedDate }));
  };
  function formatDate(inputDate: string) {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedDate = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes < 10 ? '0' : ''}${minutes}분`;

    return formattedDate;
  }
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
      />
      {postState.eatTime && <S.SelectDate>{formatDate(postState.eatTime)}</S.SelectDate>}
    </>
  );
};

export default Calendar;
