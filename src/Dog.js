import React from 'react';
import './Dog.css';

export default class Dog extends React.Component{
    constructor(props){
        super(props)
        this.state={
            next:false
        }
    }
    buttonChange = ()=>{
        if(this.state.next){
            return <button type="button" onClick={(ev) =>{
                ev.preventDefault();
                this.setState({
                    next:!this.state.next
                })
                this.props.fetchDog()
            }}>Back</button>
        }
        if(!this.props.ok){
            return (
                <button type="button" onClick={(ev)=>{
                    ev.preventDefault()
                }}>Pending</button>
            )
        }
        return (<button type="button" className="Adopt" onClick={this.props.handleAdoptDog}>
                    Adopt Me
                </button>)
    }
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
                        <button type="button" className="Next-Dog" onClick={(ev) => {
                            ev.preventDefault();
                            if(!this.state.next){
                                this.setState({
                                    next:!this.state.next
                                })
                            }
                            this.props.handleNextDog(ev)
                            }}>Next Dog</button><br/>
                        {this.buttonChange()}
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