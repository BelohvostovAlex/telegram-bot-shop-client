import React, { useState } from "react";

import { ProductItem } from "../ProductItem/ProductItem";

import "./ProductList.css";
import { products } from "../../mock/productsData";
import { useTelegram } from "../../hooks/useTelegram";
import { getTotalPrice } from "../../helpers/getTotalPrice";
import { onAddItem } from "../../helpers/onAddItem";

export const ProductList = () => {
  const { tg, queryId } = useTelegram();

  const [addedItems, setAddedItems] = useState([]);

  const onSendData = useCallback(() => {
    const data = {
      products: addedItems,
      totalPrice: getTotalPrice(addedItems),
      queryId,
    };

    fetch("http://localhost:8000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }, []);

  useEffect(() => {
    tg.WebApp.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.WebApp.offEvent("mainButtonClicked", onSendData);
    };
  }, []);

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
    <div className="list">
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
