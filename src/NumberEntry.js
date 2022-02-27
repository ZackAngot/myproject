import React from 'react';
import { Component } from 'react';

class NumberEntry extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div class="form-floating  bg-warning">
            <textarea class="form-control" placeholder="0" id="floatingTextarea"></textarea>
            <label for="floatingTextarea">0</label>
          </div>   
        
       
      
      
      
      
      
      
      );
    }
}
 
export default NumberEntry;