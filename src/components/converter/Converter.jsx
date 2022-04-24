import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectConverterRate } from "../../modules/redux/selector";
import { setConverterInputs } from "../../modules/saga/actionCreator";
import { ConverterFields } from "./converterFields/ConverterFields";
import "./style.scss";

export const Converter = () => {
  const dispatch = useDispatch();
  const rate = useSelector(selectConverterRate);
  const [firstSelect, setFirstSelect] = useState("USD");
  const [secondSelect, setSecondSelect] = useState("UAH");
  const [firstInputValue, setFirstInputValue] = useState(0);
  const [secondInputValue, setSecondInputValue] = useState(0);

  const convertProccesFirstInput = (input, setOtherInput) => {
    if (input || input.length === 0) setOtherInput((input * rate).toFixed(2));
  };

  const convertProccesSecondInput = (input, setOtherInput, otherInput) => {
    if (input || input.length === 0) setOtherInput((input / rate).toFixed(2));
  };

  const changeSelect = () => {
    setSecondInputValue(firstInputValue * rate);
  };

  useEffect(() => {
    dispatch(setConverterInputs({ from: firstSelect, to: secondSelect }));
  }, [firstSelect, secondSelect]);

  useEffect(() => {
    changeSelect();
  }, [rate]);

  return (
    <div className="main">
      <div className="wrapper">
        <ConverterFields
          inputValue={firstInputValue}
          convertProcces={convertProccesFirstInput}
          setInputValue={setFirstInputValue}
          setOtherValue={setSecondInputValue}
          selectValue={firstSelect}
          setSelectValue={setFirstSelect}
          otherSelectValue={secondSelect}
          setOtherSelectValue={setSecondSelect}
        />
        <ConverterFields
          inputValue={secondInputValue}
          convertProcces={convertProccesSecondInput}
          setInputValue={setSecondInputValue}
          setOtherValue={setFirstInputValue}
          selectValue={secondSelect}
          setSelectValue={setSecondSelect}
          otherSelectValue={firstSelect}
          setOtherSelectValue={setFirstSelect}
        />
      </div>
    </div>
  );
};
