import React from 'react';
import Cat from './Cat';
import Dog from './Dog';
import './Adoption.css';

export default class Adoption extends React.Component{
    state={
        dog:{
            imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
            imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
            name: 'Zeus',
            sex: 'Male',
            age: 3,
            breed: 'Golden Retriever',
            story: 'Owner Passed away'
          },
        cat:{
            imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
            imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
            name: 'Fluffy',
            sex: 'Female',
            age: 2,
            breed: 'Bengal',
            story: 'Thrown on the street'
          } 
    }
    handleNextCat = (ev) => {
        ev.preventDefault();

    }
    handleNextDog = (ev)=> {
        ev.preventDefault();

    }
    render(){
        return (
            <>
                <div className="Dog-Container">
                    <Dog dogs={this.state.dog}/>
                </div>
                <div className="Cat-Container">
                    <Cat cats ={this.state.cat}/>
                </div>
            </>
        )
    }
}