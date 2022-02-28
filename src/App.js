import React, { Component } from 'react';
import {useState,useEffect} from 'react'
import NumberFormat from 'react-number-format';

import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    const [preState,setPreState] = useState("")
      const [curState,setCurState] = useState("")
      const [input,setInput]=useState("0")
      const[operator,setOperator]=useState(null)
      const[total,setTotal] =useState(false)

      const inputNum = (e) =>{
        if(curState.includes(".") && e.target.innerText ===".")return;

        if (total) {
          setPreState("");
        }
        curState ? setCurState((pre) => pre + e.target.innerText)
         : setCurState(e.target.innerText);
        setTotal(false);

      };
      useEffect(() => {
        setInput(curState);

      },[curState] );

      useEffect(() => {
        setInput("0");
      
      
      },[]);

      const operatorType = (e) =>{
        setTotal(false);
        setOperator(e.target.innerText);
        if(curState==="")return;
        if(prestate !==""){
          equals();

        }else{
        setPreState(curState);
        setCurState("");
        }


      };

      const equals = (e) =>{
        if(e?.target.innerText==="="){
        setTotal(true);
      };
      let cal
      switch (operator) {
        case "/":
          cal=String(parseFloat(prestate)/parseFloat(curState));
          
          break;
          case "+":
          cal=String(parseFloat(prestate)+ parseFloat(curState));
          break;

          case "X":
          cal=String(parseFloat(prestate) * parseFloat(curState));
          break;

          case "-":
          cal=String(parseFloat(prestate) - parseFloat(curState));
          break;
          default:
            return
      }
      setInput("");
      setPreState(cal);
      setCurState("");
    }

      const minusPlus = () =>{
        if (curState.charAt(0)==="-"){
          setCurState(curState.substring(1));
        }else{
          setCurState("-"+ curState);
        }

      };

      const percent = () =>{
        prestate ? setCurState(String(parseFloat(curState)/100 * prestate))
        : setCurState(String(parseFloat(curState)/100));
      };

      const reset = () =>{
        setPreState("");
        setCurState("");
        setInput(0);
      };

    return ( 
      // <div className='container-fluid pt-2'>
      //       <nav className="navbar navbar-dark ">
      //  <div className="container-fluid">
      //  <div classname="navbar-toggler " type="button" data-bs-toggle="collapse"
      //   data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" 
      //   aria-label="Toggle navigation">
      //  <span className="navbar-toggler-icon "></span>
      //  </div>
      //  </div>
      //  </nav>
      //  <div className="collapse" id="navbarToggleExternalContent">
      //  <div className=" p-4">
      //  <nav className="nav">
      //  <button className="btn btn-warning btn-md ">Color</button>
      //  <button className="btn btn-warning btn-md">Theme</button>
      //  <button className="btn btn-warning btn-md">History</button>
      //  </nav>
      //  </div>
      //  </div>
       
      
      
       <div className='container'>
        <div className='Wrapper'>
          <div className='screen'> {input !=="" || input ==="0" ? 
          <NumberFormat value={input} displayType={'text'} 
          thousandSeparator={true} /> : <NumberFormat value={preState}
          displayType={'text'} thousandSeparator={true}/> }</div>
          <div className="btn btn-outline-warning" onClick={reset}>C</div>
          <div className="btn btn-warning btn-md" onClick={percent}>%</div>
         <div className="btn btn-warning btn-md" onClick={minusPlus}>+/-</div>
         <div className="btn btn-warning btn-md" onClick={operatorType}>/</div>

         <div className="btn btn-outline-light" onClick={inputNum}>7</div>
         <div className="btn btn-outline-light" onClick={inputNum}>8</div>
        < div className="btn btn-outline-light" onClick={inputNum}>9</div>
          <div className="btn btn-warning btn-md" onClick={operatorType}>X</div>

          <div className="btn btn-outline-light" onClick={inputNum}>4</div>
         <div className="btn btn-outline-light" onClick={inputNum}>5</div>
        < div className="btn btn-outline-light" onClick={inputNum}>6</div>
          <div className="btn btn-warning btn-md" onClick={operatorType}>+</div>

          <div className="btn btn-outline-light" onClick={inputNum}>1</div>
         <div className="btn btn-outline-light" onClick={inputNum}>2</div>
        < div className="btn btn-outline-light" onClick={inputNum}>3</div>
        <div className="btn btn-warning btn-md" onClick={operatorType}>-</div>

        <div className="btn btn-outline-light" onClick={inputNum}>0</div>
        <div className="btn btn-outline-light" onClick={inputNum}>.</div>
        <div className="btn btn-warning btn-md" onClick={equals}>-</div>

        </div>

      </div> 






    )}
}


export default App;
