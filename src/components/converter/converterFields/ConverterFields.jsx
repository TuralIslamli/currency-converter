import React, { useEffect, useRef } from "react";
import "./style.scss";

export const ConverterFields = ({
  inputValue,
  setInputValue,
  selectValue,
  setSelectValue,
  setOtherInputValue,
  convertProcces,
  otherSelectValue,
  setOtherSelectValue,
}) => {
  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
    convertProcces(e.target.value, setOtherInputValue);
  };

  const handleChangeSelect = (e) => {
    if (e.target.value === otherSelectValue) {
      setOtherSelectValue(selectValue);
    }
    setSelectValue(e.target.value);
  };

  return (
    <div className="section">
      <input
        type="number"
        className="input"
        value={inputValue}
        onChange={handleChangeInput}
      />
      <div className="custom-select">
        <select
          name="сurrency"
          className="сurrency"
          onChange={handleChangeSelect}
          value={selectValue}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="UAH">UAH</option>
        </select>
        <span className="custom-arrow"></span>
      </div>
    </div>
  );
};
