import { useState } from "react";

export const useInput = (initialData = "") => {
  const [data, setData] = useState(initialData);

  const onChangeData = (e) => {
    setData(e.target.value);
  };

  return [data, onChangeData];
};
