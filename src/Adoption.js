import React from 'react';
import Cat from './Cat';
import Dog from './Dog';
import './Adoption.css';
import AdoptionService from './Adoption-Service';

export default class Adoption extends React.Component{
    state={
        dog:null,
        cat:null,
        userName:null
    }
    componentDidMount(){
        AdoptionService.fetchDog()
        .then(dog =>{
            this.setState({
                dog
            })
        })
        AdoptionService.fetchCat()
        .then(cat =>{
            this.setState({
                cat
            })
        })
    }
    handleNextCat = (ev) => {
        ev.preventDefault();
        AdoptionService.fetchNextCat()
        .then(cat => {
            this.setState({
                cat
            })
        })
        
    }
    handleNextDog = (ev) => {
        ev.preventDefault();
        AdoptionService.fetchNextDog()
        .then(dog=>
            this.setState({
                dog
            })
        )
        
    }
    handleAdoptDog = (ev)=> {
        ev.preventDefault();
        AdoptionService.fetchAdoptDog()
        .then(dog =>{
            this.setState({
                dog
            })
        })
    }
    handleAdoptCat = (ev)=> {
        ev.preventDefault();
        AdoptionService.fetchAdoptCat()
        .then(cat =>{
            this.setState({
                cat
            })
        })
    }
    handleUserName = (ev) =>{
        ev.preventDefault();
        this.setState({
            userName:ev.target.value
        })
    }
    renderDisplay(){
        if(this.state.userName===null){
            return (
                <form className="UserName-Input" onSubmit={this.handleUserName}>
                    <label htmlFor="UserName-Input">
                        Put Me In Queue
                        <input type="text" placeholder="Name" />
                    </label>
                    <button type="submit" className="Queue-Btn">Queue</button>
                </form>
            )
        }
    }
    
    render(){
        return (
            <>
                <div className="Dog-Container">
                    <Dog dogs={this.state.dog}
                        handleNextDog={this.handleNextDog}
                        handleAdoptDog={this.handleAdoptDog}
                    />
                </div>
                <div className="Cat-Container">
                    <Cat cats ={this.state.cat}
                        handleNextCat={this.handleNextCat}
                        handleAdoptCat={this.handleAdoptCat}
                    />
                </div>
                <div className="User-Queue-Container">
                    {this.renderDisplay()}
                </div>
            </>
        )
    }
}