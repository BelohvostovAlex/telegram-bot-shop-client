import React, { useEffect } from "react";

import { Header } from "./components/Header/Header";
import { AppRouter } from "./components/Router/AppRouter";
import { useTelegram } from "./hooks/useTelegram";

export const App = () => {
  const { tg, onToggleButton } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div>
      <Header />
      <AppRouter />
    </div>
  );
};
