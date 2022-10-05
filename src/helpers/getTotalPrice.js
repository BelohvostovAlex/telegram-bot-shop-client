export const getTotalPrice = (arr) => {
  return arr.reduce((acc, curr) => acc + curr.price, 0);
};
