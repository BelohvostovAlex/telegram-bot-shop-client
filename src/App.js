import React, { useEffect } from "react";
import { Header } from "./components/Header/Header";

const tg = window.Telegram.WebApp;

export const App = () => {
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};
