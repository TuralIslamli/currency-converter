import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectConverterValues } from "../../modules/redux/selector";
import { setConverterDataSaga } from "../../modules/saga/actionCreator";
import "./style.scss";

export const Header = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setConverterDataSaga());
  }, []);

  const { USD, EUR } = useSelector(selectConverterValues);

  return (
    <div className="header">
      <div className="wrapper">
        <h3 className="title">КУРС ДО ГРИВНИ:</h3>
        <p className="currence">
          USD: {USD} <br />
          EUR: {EUR}
        </p>
      </div>
    </div>
  );
};
