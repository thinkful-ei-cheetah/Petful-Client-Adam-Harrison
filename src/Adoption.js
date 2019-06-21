import React from 'react';
import Cat from './Cat';
import Dog from './Dog';
import './Adoption.css';
import AdoptionService from './Adoption-Service';

export default class Adoption extends React.Component{
    state={
        dog:null,
        cat:null
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
        // AdoptionService.fetchNextCat()
        // .then(cat => {
        //     this.setState({
        //         cat
        //     })
        // })
        console.log('clicked')
    }
    handleNextDog = (ev) => {
        ev.preventDefault();
        // AdoptionService.fetchNextDog()
        // .then(dog=>
        //     this.setState({
        //         dog
        //     })
        // )
        console.log('clicked')
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
            </>
        )
    }
}