import React from 'react';
import { Outlet, Link } from "react-router-dom";

class About extends React.Component {
    render (){
        return (
        <div>
        
        
        
        <div class="photo">
          <img class="my-image" src="images/port-me.JPG"/>
        </div>
        
        <div class="container">
        <p class="para">My name is Francis Habash. I am from Bethlehem, Palestine studying computer science at BYU. I love going outdoor and
        having fun with friends. I grew all my life in Palestine so this is a really impactfull project for me to be able tp create a website where I can show my country Palestine
        and expose more people to what is happening there.</p>
        
        <p class="para">I am very passionate about my country and would love every person to get to know more about the culture and history. palestine has a lot of history and culture more that anywhere in the world. where ever you go you will find old
        attraction sites that have been build more than 1000 year ago.</p>
        
        </div>
        
        <footer class="footer">
      <p class='data'>Francis Habash</p>
      <p class='data'><a href="https://github.com/francishabash/CS260-creative3">Github</a></p>
    </footer>
        </div>
        );
    }
}

export default About;