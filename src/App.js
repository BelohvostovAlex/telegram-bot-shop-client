import React, { useEffect } from "react";

import { Header } from "./components/Header/Header";
import { useTelegram } from "./hooks/useTelegram";

export const App = () => {
  const { tg, onToggleButton } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div>
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
};
