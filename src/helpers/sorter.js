export const timeSorter_Ascending = (arr, time) =>
  arr?.sort((a, b) => (a && b ? new Date(a[time]) - new Date(b[time]) : 0));

export const timeSorter_Descending = (arr, time) =>
  arr?.sort((a, b) => (a && b ? new Date(b[time]) - new Date(a[time]) : 0));
