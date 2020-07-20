export const formatDate = date => {
  const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' });
  const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat.formatToParts(date);
  return `${day}-${month}-${year }`;
};
