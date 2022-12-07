import React from 'react';
import { Outlet, Link } from "react-router-dom";

class Images extends React.Component {
    render() {
        return (
            <div>
            
        
        <h1 class="header"> Palestine Images</h1>
        
        
            <div class="photo-grid">
                <div class="photo-grid-item image">
                    <img src="images/p-flag.jpeg"/>
                </div>
                <div class="photo-grid-item image">
                    <img src="images/p1.jpeg" />
                </div>
                <div class="photo-grid-item image">
                    <img src="images/nativity.jpeg"/>
                </div>
                <div class="photo-grid-item image">
                    <img src="images/christmas.jpeg"/>
                </div>
                <div class="photo-grid-item image">
                    <img src="images/mar-saba.jpeg"/>
                </div>
                <div class="photo-grid-item image">
                    <img src="images/wall.jpeg"/>
                </div>
                <div class="photo-grid-item image">
                    <img src="images/beach.jpeg"/>
                </div>
                <div class="photo-grid-item image">
                    <img src="images/nazareth.jpeg"/>
                </div>
                <div class="photo-grid-item image">
                    <img src="images/bethlehem.jpeg"/>
                </div>
            </div>
        
        <footer class="footer">
      <p class='data'>Francis Habash</p>
      <p class='data'><a href="https://github.com/francishabash/CS260-creative3">Github</a></p>
    </footer>
            </div>
        );
    }
}

export default Images;