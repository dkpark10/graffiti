export const isitLessThan_10 = (value: number): number | string => {
  return value < 10 ? `0${value}` : value;
};

export const parsingDate = (): string => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay() + 16;
  const hour = date.getHours();
  const minute = date.getMinutes();

  return `${year}.${isitLessThan_10(month)}.${isitLessThan_10(
    day,
  )} ${isitLessThan_10(hour)}:${isitLessThan_10(minute)}`;
};

export const getRandomLess50 = () => {
  return Math.floor(Math.random() * 100) <= 0;
};
