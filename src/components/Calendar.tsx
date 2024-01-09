import { useState } from 'react';
import { format, setHours, setMinutes } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const Calendar = () => {
  const [startDate, setStartDate] = useState<Date | null>(
    setHours(setMinutes(new Date(), 0), 9)
  );
  const [dateData, setDateData] = useState<string | undefined>();

  const filterPassedTime = (time: any) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };
  const covertTimeType = (date: any) => {
    setStartDate(date);
    const formattedDate = format(
      date || new Date(),
      "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
    );
    setDateData(formattedDate);
  };

  return (
    <>
      <StyledDatePicker
        selected={startDate}
        onChange={(date) => {
          covertTimeType(date);
        }}
        timeInputLabel="Time:"
        showTimeInput
        filterTime={filterPassedTime}
        dateFormat="yyyy/MM/dd   h:mm aa"
        closeOnScroll={true}
      />
    </>
  );
};

export default Calendar;

export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
`;
