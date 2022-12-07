import React from 'react';
import { Outlet, Link } from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div>
        
        
          <div class="photo">
          <img class="my-image" src="images/jer.jpeg"/>
        </div>
        
        <div class="container">
        <p class="para">Palestine (Arabic: فلسطين, romanized: Filasṭīn), officially the State of Palestine[a] 
        (دولة فلسطين, Dawlat Filasṭīn), is located in Western Asia. It is officially governed by the Palestinien government and claims the West Bank and the Gaza Strip.
        However, its claimed territory has been occupied by Israel since the Six-Day War of 1967. As a result of the Oslo Accords of 1993–1995, the West Bank is currently 
        divided into 165 Palestinian enclaves that are under partial Palestinian National Authority. The Gaza Strip has been ruled by the militant Islamic group Hamas 
        and has been subject to a long-term blockade by Egypt and Israel since 2007.</p>
        
        <p class="para"> Palestine is a small region of land that has played a prominent role in the ancient and modern history of the Middle East. The history of Palestine has been marked by frequent political conflict and violent land seizures because of its importance to several major world religions, and because Palestine sits at a valuable geographic crossroads between Africa and Asia. Today, Arab people who call this territory home are known as Palestinians, and the people of Palestine have a strong desire to create a free and independent state in this contested region of the world.</p>
        
        <p class="para">Palestine is one of the most saught after countries throughtout the centuries. Palestine is the landing place of the three
        holy religions: Jewish, Christianity, and Islam. Palestine has an all rounded weather with all different kinds of terrains that makes it
        one of the best countries to live in. Throughout history many nations wanted to claim palestine land for them and occupied it for
        different resons</p>

        </div>
        <footer class="footer">
      <p class='data'>Francis Habash</p>
      <p class='data'><a href="https://github.com/francishabash/CS260-creative3">Github</a></p>
    </footer>
            </div>
        );
    }
}

export default Home;