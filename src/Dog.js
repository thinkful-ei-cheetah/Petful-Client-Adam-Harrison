import React from 'react';
import './Dog.css';

export default class Dog extends React.Component{
    renderDisplay(){
        if (this.props.dogs===null){
            return <h2>Getting Next Dog Ready</h2>
        }
        else if (this.props.dogs==="No More Dogs"){
            return <h2>Out of Dogs</h2>
        }
        else {
            return (
                <div>
                    <div className="Dog-Img-Container">
                        <img src={this.props.dogs.imageURL} alt={this.props.dogs.imageDescription} />
                    </div>
                    <div className="Dog-Text-Container">
                        <p>Name: {this.props.dogs.name}</p>
                        <p>Breed: {this.props.dogs.breed}</p>
                        <p>Sex: {this.props.dogs.sex}</p>
                        <p>Age: {this.props.dogs.age}</p>
                        <p>{this.props.dogs.story}</p>
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