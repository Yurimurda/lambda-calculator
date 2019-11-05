import React, {useState} from "react";
import { operators} from '../../../data';
 import OperatorButton from "./OperatorButton";
//import any components needed
export default function Operators(){
//Import your array data to from the provided data file
const [operatorValue, setOperatorState] = useState(operators);

  // STEP 2 - add the imported data to state
  return (
    <div className="operators-Container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operatorValue.map((button, index) =>(
         <OperatorButton key={index} operator={button.char} />
       ))}
    </div>
  );

}


