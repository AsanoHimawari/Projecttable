export const getDateMinusDays = (date, days) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
};

export const getFormatDate = (date) => {
  // return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  return date.toISOString().slice(0, 10);
};

export const getDateAddDays = (date, days) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
};
