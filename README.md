3.0 Unfinished Version


What doesn’t work:
Currently there is no implementation for history log of previous calculations. Change of theme and change of style. These implementations are placed in the hamburger menu at the top left corner of the application. Further implementation for these uncompleted items could be achieved. The change of style and themes could be achieved by using states. When these buttons are pressed a change of state could happen. In these states is where specific css could be contained to change the theme and style of the app. The history log could be achieved by using either an array that holds all previous calculations or just printing previous calculations on to an empty file that can be show when the selection is selected.

What does work:
The calculator works as a calculator should. All the operations that a basic calculator should include, have been achieved in this calculator app. Also, there is a hamburger menu present at the top left corner of the app that shows three taps for calculation history log, change of theme, and change of style. The calculator is functional when the size is decreased and increased to a specific breaking point.

About:
This calculator was built using React.js. The design implementation was build using the grid system available in HTML properties and libraries using Bootstrap to improve the design. The calculator is broken up into multiple components. The first component is a container that includes the whole design. The second component is the hamburger menu located at the top left corner of the app. When pressed a off-canvas menu appears giving the user three options. In these three options a dropdown menu appears giving the user options to change the design of the app. The third component is the calculator grid which contains the two outputs and the calculator buttons. Inside this grid there is two components. There is a component, output, that contains current and previous outputs that appear as the user selects the calculator buttons. The second component is the calculator buttons which are created using the grid system and button styling from Bootstrap. These buttons are responsive and when a button is pressed the output is changed based on the selection.

References:
I used the official documentation of React.js from their website.
React – A JavaScript library for building user interfaces (reactjs.org)
I used the official documentation and examples from Bootstrap website:
Bootstrap · The most popular HTML, CSS, and JS library in the world. (getbootstrap.com)

I used a React.js tutorial on YouTube by Quentin Watt Tutorials:
React Crash Course 2020 - YouTube

What needs to be downloaded:
In the Visual Code node_modules, Simple React Snippets and Bootstrap 4 needs to be included. Also, what needs to be included is two href links in the index.html file that contains all of the design elements from Bootstrap.
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"\
     integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" 
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

How to run:
On the command line use directory to point to where the file folder is placed. Then run “npm-start”. This should start a window at port:3000 to show live changes to the app when code is being changed.

Challenges and thought process:
 I have never worked with react before, but I understand javascript at a high level. The learning curve with react was how states are handled and how components are passed between components to render the app using dom properties. One of the frustrating things I encountered with react was how you can only have one parent element when code is returned. This forced me to create multiple components. Which in turn allowed me to understand how react uses components to create a functional app. The “click” moment happened at the end of this project for me which did not allow me to included a few features that where requested based on the time restraints at hand. At the end of this project, I felt like I learned a lot by researching what I didn’t understand and fixing the issues that occurred. These issues allowed myself to better understand a javascript library that I knew nothing before but better understand now.
