export const onAddItem = (items, currProduct) => {
  const alreadyAdded = items.find((item) => item.id === currProduct.id);
  let newItems = [];

  if (alreadyAdded) {
    newItems = items.filter((item) => item.id !== currProduct.id);
  } else {
    newItems = [...items, currProduct];
  }

  return newItems;
};
