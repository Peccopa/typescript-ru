export const dateStringToDate = (dateString: string): Date => {
  return new Date(dateString.split('/').reverse().join('-'));
};
