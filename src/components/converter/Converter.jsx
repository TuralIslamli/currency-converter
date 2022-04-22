import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectConverterValues } from "../../modules/redux/selector";
import "./style.scss";

export const Converter =()=> {
  const { USD, EUR } = useSelector(selectConverterValues);
  const firstRef = useRef();
  const secondRef = useRef();
  const [firstSelect, setFirstSelect] = useState("USD");
  const [secondSelect, setSecondSelect] = useState("UAH");
  const [firstInputValue, setFirstInputValue] = useState(1.0);
  const [secondInputValue, setSecondInputValue] = useState();

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
    setFirstInputValue(e.target.value);
  };

  const handleChangeSecondInput = (e) => {
    setSecondInputValue(e.target.value);
  };

  
  const inputsCalculations = (selectOne, selectTwo, refOne, refTwo, setInput) =>{
      console.log('select', refOne.current.value, refTwo.current.value)
      switch (selectOne) {
          case "USD":
              refTwo.current.value = (USD * refOne.current.value).toFixed(2);
          break;
        case "EUR":
            refTwo.current.value = (EUR * refOne.current.value).toFixed(2);
          break;
        case "UAH":
          if (selectTwo === "USD") {
            refTwo.current.value = (refOne.current.value / USD).toFixed(2);
          } else {
            refTwo.current.value = (refOne.current.value / EUR).toFixed(2);
          }
          break;
        }
    }

    useEffect(() => {
    inputsCalculations(firstSelect, secondSelect, firstRef, secondRef)
  }, [firstInputValue, firstSelect, USD]);

  useEffect(() => {
    inputsCalculations(secondSelect, firstSelect, secondRef, firstRef)
  }, [secondInputValue, secondSelect]);

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
            value={secondInputValue}
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
