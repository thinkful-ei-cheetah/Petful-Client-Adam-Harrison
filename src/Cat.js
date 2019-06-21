import React from 'react';
import './Cat.css';

export default class Cat extends React.Component{
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
                this.props.fetchCat()
            }}>Back</button>
        }
        if(!this.props.ok){
            return (
                <button type="button" onClick={(ev)=>{
                    ev.preventDefault()
                }}>Pending</button>
            )
        }
        return (<button type="button" className="Adopt" onClick={this.props.handleAdoptCat}>
                    Adopt Me
                </button>)
    }
    
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
                        <button type= "button" className="Next-Dog" onClick={(ev => {
                           if(!this.state.next){
                            this.setState({
                                next:!this.state.next
                            })
                            }
                            this.props.handleNextCat(ev)
                        })}>Next Cat</button><br/>
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