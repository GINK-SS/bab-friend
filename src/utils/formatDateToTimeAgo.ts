function formatDateToTimeAgo(inputDate: string) {
  const currentTime = new Date();
  const targetTime = new Date(inputDate);

  const elapsedMilliseconds = currentTime.getTime() - targetTime.getTime();
  const elapsedMinutes = Math.floor(elapsedMilliseconds / 1000 / 60);
  const elapsedHours = Math.floor(elapsedMinutes / 60);
  const elapsedDays = Math.floor(elapsedHours / 24);
  const elapsedMonths = Math.floor(elapsedDays / 30);
  const elapsedYears = Math.floor(elapsedMonths / 12);

  if (elapsedMinutes === 0) return '방금';
  else if (elapsedMinutes <= 59) {
    return `${elapsedMinutes}분 전`;
  } else if (elapsedHours <= 23) {
    return `${elapsedHours}시간 전`;
  } else if (elapsedDays <= 30) {
    return `${elapsedDays}일 전`;
  } else if (elapsedMonths <= 11) {
    return `${elapsedMonths}달 전`;
  } else {
    return `${elapsedYears}년 전`;
  }
}

export default formatDateToTimeAgo;
