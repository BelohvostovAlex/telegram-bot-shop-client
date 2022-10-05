import React from "react";

import { ProductItem } from "../ProductItem/ProductItem";

import "./ProductList.css";
import { products } from "../../mock/productsData";
import { useTelegram } from "../../hooks/useTelegram";
import { getTotalPrice } from "../../helpers/getTotalPrice";
import { onAddItem } from "../../helpers/onAddItem";

export const ProductList = () => {
  const { tg } = useTelegram();

  const [addedItems, setAddedItems] = useState([]);

  const onAdd = (product) => {
    let newItems = onAddItem(addedItems, product);
    setAddedItems(newItems);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Buy ${getTotalPrice(newItems)}`,
      });
    }
  };

  return (
    <div>
      {products.map((item) => (
        <ProductItem
          key={item.id}
          className={"item"}
          product={item}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
};
