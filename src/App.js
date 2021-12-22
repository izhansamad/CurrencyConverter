import React , {useEffect, useState} from 'react';
import './App.css';
import Mynavbar from './components/navbar';
import MainArea from './components/main';

function App() {

  const [baseCurrency, setbaseCurrency] = useState('USD')
  const baseUrl = `https://v6.exchangerate-api.com/v6/cfd02ef38bb80fc0815daf0d/latest/${baseCurrency}`
  const [CurrencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
  const [exchangeRates, setExchangeRates] = useState()
  const [toCurrency, setToCurrency] = useState()

  // var cc = require('currency-codes');
  // console.log(CurrencyOptions.map(op=>(cc.code(op).currency)));
  
  // console.log(CurrencyOptions.filter(function(element){
  //   return element !== undefined;
  // }))
  for(let i=1; i<90; i=i*20){
    console.log(i);
  }
  let toAmount, fromAmount
  if(amountInFromCurrency){
    fromAmount = amount
    toAmount = amount * exchangeRates
  }
  else{
    toAmount = amount
    fromAmount = amount / exchangeRates
  }


  useEffect(() => {
    fetch(baseUrl)
    .then (res => res.json())
    .then(data => {
      setCurrencyOptions([data.base, ...Object.keys(data.conversion_rates)])
      setFromCurrency(baseCurrency) 
      setExchangeRates(Object(data.conversion_rates[`${toCurrency}`]))
      // setToAmount(exchangeRates*fromAmount)
      
    })
  }, [ baseCurrency, baseUrl , toCurrency])
  function handleOnChangeToAmount(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }
  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  return (

   <div>
     <Mynavbar/> 
     <MainArea CurrencyOptions = {CurrencyOptions} 
     selectedCurrency ={fromCurrency} onChangeFromCurrency={e => setbaseCurrency(e.target.value)}
      fromAmount = {fromAmount}
      fromAmountChange ={handleFromAmountChange}
      onChangeToCurrency = {e => setToCurrency(e.target.value)}
      toAmount={toAmount}
      onChangeToAmount={handleOnChangeToAmount}
     />
   </div>
  );
}

export default App;
