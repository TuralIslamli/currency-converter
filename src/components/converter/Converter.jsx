import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectConverterValues } from "../../modules/redux/selector";
import "./style.scss";

export default function Converter() {
  let { USD, EUR } = useSelector(selectConverterValues);

  const firstRef = useRef();
  const secondRef = useRef();
  const [firstSelect, setFirstSelect] = useState("USD");
  const [secondSelect, setSecondSelect] = useState("UAH");
  const [firstInputValue, SetFirstInputValue] = useState(1.0);
  const [SecondInputValue, SetSecondInputValue] = useState();

  const handleChangeFirstSelect = (e) => {
    if (e.target.value === secondSelect) {
      setSecondSelect(firstSelect);
    }
    setFirstSelect(e.target.value);
  };

  const handleChangeSecondtSelect = (e) => {
    if (e.target.value === firstSelect) {
      setFirstSelect(secondSelect);
    }
    setSecondSelect(e.target.value);
  };

  const handleChangeFirstInput = (e) => {
    SetFirstInputValue(e.target.value);
  };

  const handleChangeSecondInput = (e) => {
    SetSecondInputValue(e.target.value);
  };

  useEffect(() => {
    SetSecondInputValue(USD * firstInputValue);
  }, [USD]);

  useEffect(() => {
    switch (firstSelect) {
      case "USD":
        secondRef.current.value = (USD * firstRef.current.value).toFixed(2);
        break;
      case "EUR":
        secondRef.current.value = (EUR * firstRef.current.value).toFixed(2);
        break;
      case "UAH":
        if (secondSelect === "USD") {
          secondRef.current.value = (firstRef.current.value / USD).toFixed(2);
        } else {
          secondRef.current.value = (firstRef.current.value / EUR).toFixed(2);
        }
        break;
    }
  }, [firstInputValue, firstSelect]);

  useEffect(() => {
    switch (secondSelect) {
      case "USD":
        firstRef.current.value = (USD * secondRef.current.value).toFixed(2);
        break;
      case "EUR":
        firstRef.current.value = (EUR * secondRef.current.value).toFixed(2);
        break;
      case "UAH":
        if (firstSelect === "USD") {
          firstRef.current.value = (secondRef.current.value / USD).toFixed(2);
        } else {
          firstRef.current.value = (secondRef.current.value / EUR).toFixed(2);
        }
        break;
    }
  }, [SecondInputValue, secondSelect]);

  return (
    <div className="main">
      <div className="wrapper">
        <div className="section">
          <input
            type="number"
            className="input"
            value={firstInputValue}
            onChange={handleChangeFirstInput}
            ref={firstRef}
          />
          <select
            name="сurrency"
            className="сurrency"
            onChange={handleChangeFirstSelect}
            value={firstSelect}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="UAH">UAH</option>
          </select>
        </div>
        <div className="section">
          <input
            type="number"
            className="input"
            ref={secondRef}
            value={SecondInputValue}
            onChange={handleChangeSecondInput}
          />
          <div className="custom-select">
            <select
              name="сurrency"
              className="сurrency"
              onChange={handleChangeSecondtSelect}
              value={secondSelect}
            >
              <option value="UAH">UAH</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
            <span className="custom-arrow"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
