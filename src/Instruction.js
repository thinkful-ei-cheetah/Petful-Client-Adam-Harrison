import React from 'react';
import './Instruction.css';
import {Link} from 'react-router-dom';

 
export default class Instruction extends React.Component{
    render(){
        return (
            <div className="Instruction-Body">
                <h2>Adoption Instruction</h2>
                <div className="Instruction">
                    <div className="Img-Container">
                        <img src={require('./img/instructionpic.png')} alt="Adopt Me"/>
                    </div>
                    <p>
                      Welcome to Petful, a website for people to adopt stray cats and dogs
                    </p>
                    <h2>
                     Adoption Process:
                    </h2>
                    <br/>
                    <p>
                        Step 1: Press the Adopt Now button below to enter the adoption page.
                    </p>
                    <br/>
                    <p>
                        Step 2: Wait for the website to load the information of pets in the adoption list.
                    </p>
                    <br/>
                    <p>
                        Step 3: There is only one rule here that applies here: First Come First Serve! This not only works for people who want to adopt, but also animal in list. Only first person in queue can choose to adopt the first cat or dog in queue, so if you want your new pal, you must be hurry to put yourself in queue. By putting your name in the bottom of the page will put you in the waiting list.
                    <p/>
                    <br/>
                    <h3> Good Luck!!<h3/>
                </div>
                <div className="Btn-Container">
                    <Link to='/adopt'>
                        <button className="Adopt-Btn">Adopt Now</button>
                    </Link>
                </div>
            </div>
        )
    }
}
