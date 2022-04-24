import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectConverterRate } from "../../modules/redux/selector";
import { setConverterInputs } from "../../modules/saga/actionCreator";
import { ConverterFields } from "./converterFields/ConverterFields";
import "./style.scss";

export const Converter = () => {
  const dispatch = useDispatch();
  const rate = useSelector(selectConverterRate);
  const [fromSelectValue, setFromSelectValue] = useState("USD");
  const [toSelectValue, setToSelectValue] = useState("UAH");
  const [fromInputValue, setFromInputValue] = useState(0);
  const [toInputValue, setToInputValue] = useState(0);

  const convertProccesFirstInput = (input, setOtherInput) => {
    if (input || input.length === 0) setOtherInput((input * rate).toFixed(2));
  };

  const convertProccesSecondInput = (input, setOtherInput, otherInput) => {
    if (input || input.length === 0) setOtherInput((input / rate).toFixed(2));
  };

  const changeSelect = () => {
    setToInputValue(fromInputValue * rate);
  };

  useEffect(() => {
    dispatch(setConverterInputs({ from: fromSelectValue, to: toSelectValue }));
  }, [fromSelectValue, toSelectValue]);

  useEffect(() => {
    changeSelect();
  }, [rate]);

  return (
    <div className="main">
      <div className="wrapper">
        <ConverterFields
          inputValue={fromInputValue}
          convertProcces={convertProccesFirstInput}
          setInputValue={setFromInputValue}
          setOtherInputValue={setToInputValue}
          selectValue={fromSelectValue}
          setSelectValue={setFromSelectValue}
          otherSelectValue={toSelectValue}
          setOtherSelectValue={setToSelectValue}
        />
        <ConverterFields
          inputValue={toInputValue}
          convertProcces={convertProccesSecondInput}
          setInputValue={setToInputValue}
          setOtherInputValue={setFromInputValue}
          selectValue={toSelectValue}
          setSelectValue={setToSelectValue}
          otherSelectValue={fromSelectValue}
          setOtherSelectValue={setFromSelectValue}
        />
      </div>
    </div>
  );
};
