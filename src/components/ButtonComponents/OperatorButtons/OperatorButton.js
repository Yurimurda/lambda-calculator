import React from "react";

const OperatorButton = (props) => {
  const button = props
  console.log(props)
  return (
    <button className="operatorButton">{button.operator}</button>
  );
};
export default OperatorButton
