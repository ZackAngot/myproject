import React from 'react';
import { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
           

          <div class="container-fluid bg-warning">
        <nav class="navbar navbar-dark bg-warning p-2">
          <button class="navbar-toggler bg-dark " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon "></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link " aria-current="page" href="#">History</a>
              <a class="nav-link" href="#">Color</a>
              <a class="nav-link" href="#">Font</a>
              
            
            </div>
          </div>
      
        
      </nav> 

       </div>
    
      
      
      
      
      
      );
    }
}
 
export default Navbar;