import React from "react";
import { Route, Routes } from "react-router-dom";

import { ProductList } from "../ProductList/ProductList";
import { Form } from "../Form/Form";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<ProductList />} />
      <Route path="form" element={<Form />} />
    </Routes>
  );
};
