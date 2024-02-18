import { useState } from 'react';
import { addDays, format, setHours, setMinutes } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { UpdatePost } from '@_types/createBoard';

import * as S from './styles';
import formatDate from '@_utils/formatDate';
import { useRecoilState } from 'recoil';
import { eatTimeState } from '@_recoil/atoms/eatTimeState';


const Calendar = () => {
  const [startDate, setStartDate] = useState<Date | null>(setHours(setMinutes(new Date(), 0), 9));
  const [promisetTime, setPromiseTime] = useRecoilState(eatTimeState);

  const filterPassedTime = (time: any) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };
  const covertTimeType = (date: any) => {
    setStartDate(date);
    const formattedDate = format(date || new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS");

    setPromiseTime((prevData) => ({ ...prevData, eatTime: formattedDate }));
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
        <>{promisetTime.eatTime && <S.SelectDate>약속시간 : {formatDate(promisetTime.eatTime)}</S.SelectDate>}</>
      </S.SelectDateWrap>
    </>
  );
};

export default Calendar;
