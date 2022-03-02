import React from 'react'
import "./NavBar.css"

function NavBar(){
    return(
<div >

<nav className="navbar navbar-dark ">
  <div class="container-fluid">
 <button className="navbar-toggler" className='btn' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"
     aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
    </button>
    </div>
</nav>

<div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header">
    <h6 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Change Color, Style, and View Calculation Log</h6>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body ">
  <div class="btn-group dropend">
  <div class="dropdown">
  <button class="btn span-two btn-warning dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   History Log
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">View</a></li>
    <li><a class="dropdown-item" href="#">Delete</a></li>
  </ul>
</div>

  </div>
  <div class="btn-group dropend">
  <div class="dropdown">
  <button class="btn span-two btn-warning dropdown-toggle btn-exsm" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Color Themes
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Theme 1</a></li>
    <li><a class="dropdown-item" href="#">Theme 2</a></li>
    <li><a class="dropdown-item" href="#">Theme 3</a></li>
  </ul>
</div>

  </div>
  <div class="btn-group dropend">
  <div class="dropdown">
  <button class="btn span-two btn-warning dropdown-toggle btn-exsm" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Style Themes
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Style 1</a></li>
    <li><a class="dropdown-item" href="#">Style 2</a></li>
    <li><a class="dropdown-item" href="#">Style 3</a></li>
  </ul>
</div>

  </div>
</div> 


</div>
</div>

    )

}
export default NavBar