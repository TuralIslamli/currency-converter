import React from "react";
import { useSelector } from "react-redux";
import { selectConverterValues } from "../../modules/redux/selector";
import "./style.scss";

export default function Header() {
  const { USD, EUR } = useSelector(selectConverterValues);

  return (
  <div className="header">
      <div className="wrapper">
          <h3 className="title">КУРС ДО ГРИВНИ:</h3>
          <p className="currence">USD: {USD} <br/>EUR: {EUR}</p>
      </div>
  </div>
  );
}
