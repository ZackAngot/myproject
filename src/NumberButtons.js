import React from 'react';
import { Component } from 'react';

class NumberButtons extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div class="container-fluid bg-dark">
                <div class="container">
                <div class="row row-cols-4 p-3">
                <div class="col-4"> <button class="btn btn-outline-warning btn-lg" type="button">C</button></div>
                
                <div class="col3 pd-left-2"> <button class="btn btn-warning btn-lg" type="button">/</button></div>
                <div class="col-5"> <button class="btn btn-warning btn-lg" type="button">X</button></div>
                </div>
              
                
                
        
  
</div>
<div class="container">
  <div class="row row-cols-4 p-3">
    <div class="col"><button type="button" class="btn btn-outline-secondary btn-lg">7</button></div>
    <div class="col"><button type="button" class="btn btn-outline-secondary btn-lg">8</button></div>
    <div class="col"><button type="button" class="btn btn-outline-secondary btn-lg">9</button></div>
    <div class="col"><button type="button" class="btn btn-warning btn-lg">- </button></div>
  </div>
</div>
<div class="container">
  <div class="row row-cols-4 p-3">
    <div class="col"><button type="button" class="btn btn-outline-secondary btn-lg">4</button></div>
    <div class="col"><button type="button" class="btn btn-outline-secondary btn-lg">5</button></div>
    <div class="col"><button type="button" class="btn btn-outline-secondary btn-lg">6</button></div>
    <div class="col"><button type="button" class="btn btn-warning btn-lg">+</button></div>
  </div>
</div>
 
<div class="container">
  <div class="row row-cols-4 p-3">
    <div class="col"><button type="button" class="btn btn-outline-secondary btn-lg">1</button></div>
    <div class="col"><button type="button" class="btn btn-outline-secondary btn-lg">2</button></div>
    <div class="col"><button type="button" class="btn btn-outline-secondary btn-lg">3</button></div>
    <div class="col"><button type="button" class="btn btn-warning btn-lg">=</button></div>
  </div>
</div>
<div class="container">
  <div class="row row-cols-2 p-3">
    <div class="col"><button type="button" class="btn btn-outline-secondary btn-lg btn-block">0</button></div>
    <div class="col"><button type="button" class="btn btn-outline-secondary btn-lg">.</button></div>
  </div>
</div>
</div>

        
           
           
           
           
           


           
        
       
      
      
      
      
      
      
      );
    }
}
 
export default NumberButtons;