import React from 'react';
import './Cat.css';

export default class Cat extends React.Component{
    renderDisplay(){
        if (this.props.cats===null){
            return <h2>Getting Next Cat Ready</h2>
        }
        else if (this.props.cats==="No More Cats"){
            return <h2>Out of Cats</h2>
        }
        else {
            return (
                <div>
                    <div className="Cat-Img-Container">
                        <img src={this.props.cats.imageURL} alt={this.props.cats.imageDescription} />
                    </div>
                    <div className="Cat-Text-Container">
                        <p>Name: {this.props.cats.name}</p>
                        <p>Breed: {this.props.cats.breed}</p>
                        <p>Sex: {this.props.cats.sex}</p>
                        <p>Age: {this.props.cats.age}</p>
                        <p>{this.props.cats.story}</p>
                    </div>
                    <div className="Btn">
                        <button className="Next-Dog">Next Dog</button><br/>
                        <button className="Adopt">Adopt Me</button>
                    </div>
                </div>
            )
        }
    }
    render(){
        return (
            <>
                {this.renderDisplay()}
            </>
        )
    }
}