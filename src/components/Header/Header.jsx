import React from "react";

import { Button } from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";

import "./Header.css";

const tg = window.Telegram.WebApp;

export const Header = () => {
  const { user, onClose } = useTelegram();

  console.log(tg.initDataUnsafe);

  return (
    <div className="header">
      <Button onClick={onClose}>Close</Button>
      <span className="username">{user?.username}</span>
    </div>
  );
};
