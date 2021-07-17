import { TextField, Button } from '@material-ui/core'
import React, {useState} from 'react';
import './App.css';

function App() {

    const [mortgage, setMortgage] = useState();
    const [months, setMonths] = useState();
    const [rate, setRate] = useState();
    const [result, setResult] = useState();

    const calculate = () => {
      const result = (mortgage * (rate / 12) * Math.pow(1 + rate / 12, months)) / (Math.pow(1 + rate / 12, months) - 1);
      setResult(result.toFixed(2));
    };

    return (
      <>
      <div align = "center" style={{paddingTop:"20%"}}>
        <form>
          <TextField 
            label="Mortgage Amount" 
            variant = "outlined"
            type = "number"
            onChange = {e => setMortgage(e.target.value)}
          />
          <TextField 
            label="Months" 
            variant = "outlined"
            type = "number"
            onChange = {e => setMonths(e.target.value)}
          />
          <TextField 
            label="Interest Rate" 
            variant = "outlined"
            type = "number"
            onChange = {e => setRate(e.target.value / 100)}
          />
          <br />
          <br />
          <Button 
            variant = "contained"
            color = "primary"
            onClick = {() => {calculate()}} >
            Calculate
          </Button>
          <br />
        </form>
        <br />
        <div style={{fontSize:"20px"}}>${result}</div>
        </div>
      </>
    );
}

export default App;
