import React from "react";

import { Button } from "../Button/Button";

const tg = window.Telegram.WebApp;

export const Header = () => {
  const onClose = () => {
    tg.close();
  };

  console.log(tg.initDataUnsafe);

  return (
    <div className="header">
      <Button onClick={onClose}>Close</Button>
      <span className="username">{tg.initDataUnsafe?.user?.username}</span>
    </div>
  );
};
