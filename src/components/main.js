import React from "react";

export default function MainArea(props) {
    // const{
    //     CurrencyOptions
    // } = props 
    
  return (
      <>
    <div className="container my-4">
        <h2>Currency Converter</h2>
        <h4 className='my-2'>Convert at Real Currency Rates</h4>
      <div className="container d-flex justify-content-around">
        <div>
            Enter Amount:
          <div className="input-group mb-3">
            <input
                value={props.fromAmount}
                onChange={props.fromAmountChange}
              type= "number"
              className="form-control"
              aria-label="Text input with dropdown button"
            />
            <select value={props.selectedCurrency} onChange={props.onChangeFromCurrency}>
            {/* <option value="sc">Select Currency</option> */}
            {props.CurrencyOptions.map(option => (
                <option value={option} key={option}>{option}</option>
            ))}
            </select>
          </div>
        </div>
        <strong>⇄</strong>
        <div>Convert To:<div className="input-group mb-3">
            <input 
                onChange={props.onChangeToAmount}
                value={props.toAmount}
              type= "number"
              className="form-control"
              aria-label="Text input with dropdown button"
            />
           <select onChange={props.onChangeToCurrency}>
               <option value="sc">Select Currency</option>
            {props.CurrencyOptions.map(option => (
                <option value={option} key={option}>{option}</option>
            ))}
           </select>
          </div></div>
      </div>
    </div>
    </>
  );
}
