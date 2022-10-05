import React, { useEffect } from "react";
import { useCallback } from "react";

import { useInput } from "../../hooks/useInput";
import { useTelegram } from "../../hooks/useTelegram";

import "./Form.css";

export const Form = () => {
  const [subject, onChangeSubject] = useInput("individual");
  const [country, onChangeCountry] = useInput();
  const [city, onChangeCity] = useInput();
  const [street, onChangeStreet] = useInput();
  const { tg } = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
      country,
      city,
      street,
      subject,
    };

    tg.sendData(JSON.stringify(data));
  }, [country, city, street, subject]);

  useEffect(() => {
    tg.WebApp.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.WebApp.offEvent("mainButtonClicked", onSendData);
    };
  }, []);

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Send details",
    });
  }, []);

  useEffect(() => {
    if (!street || !country || !city) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, city, street]);

  return (
    <div className="form">
      <h3>Enter ur details </h3>
      <input
        type="text"
        className="input"
        placeholder="Country"
        value={country}
        onChange={onChangeCountry}
      />
      <input
        type="text"
        className="input"
        placeholder="City"
        value={city}
        onChange={onChangeCity}
      />
      <input
        type="text"
        className="input"
        placeholder="Street"
        value={street}
        onChange={onChangeStreet}
      />
      <select className="select" value={subject} onChange={onChangeSubject}>
        <option value="individual">individual</option>
        <option value="legal">legal</option>
      </select>
    </div>
  );
};
