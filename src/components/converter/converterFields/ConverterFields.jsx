import React, { useEffect, useRef } from "react";
import "./style.scss";

export const ConverterFields = ({
  inputValue,
  setInputValue,
  selectValue,
  setSelectValue,
  setOtherValue,
  convertProcces,
  otherSelectValue,
  setOtherSelectValue,
  rate
}) => {

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
    convertProcces(e.target.value, setOtherValue);
  };

  const handleChangeSelect = (e) => {
    if (e.target.value === otherSelectValue) {
      setOtherSelectValue(selectValue);
    }
    setSelectValue(e.target.value);
  };

  useEffect(()=>{
    convertProcces(inputValue, setOtherValue)
  }, [selectValue, rate])

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
