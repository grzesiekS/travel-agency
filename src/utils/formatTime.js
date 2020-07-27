export const formatTime = time => {
  if(typeof(time) != 'number' || time < 0) {
    return null;
  }

  const seconds = Math.floor(time%60);
  const minutes = Math.floor((time/60)%60);
  const hour = Math.floor(time / 3600);

  return zeroPaddingTime(hour, minutes, seconds).join(':');
};

const zeroPaddingTime = (...timeParts) => {
  timeParts.forEach(timePart => {
    if(timePart < 10){
      timeParts[timeParts.indexOf(timePart)] = '0' + timePart;
    }
  });

  return timeParts;
};
