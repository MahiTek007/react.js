import { useEffect,useState } from "react";
// custom effects
function useCurrencyInfo(currency){ 
    const [currencyInfo, setCurrencyInfo] = useState({})
    useEffect (() => {
        // fetch(`https://api.exchangeratesapi.io/latest?base=${currency}`)
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then(response => response.json())
        .then(response =>setCurrencyInfo(response[currency]))
        
    },[currency])
    return currencyInfo;
}

export default useCurrencyInfo;
