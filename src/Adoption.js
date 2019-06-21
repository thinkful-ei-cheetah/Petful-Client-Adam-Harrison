import React from 'react';
import Cat from './Cat';
import Dog from './Dog';
import './Adoption.css';
import AdoptionService from './Adoption-Service';

export default class Adoption extends React.Component{
    state={
        dog:null,
        cat:null,
        userName:'',
        userList:null,
        value:''
    }
    componentDidMount(){
        this.fetchDog()
        this.fetchCat()
    }
    fetchDog = ()=>{
        AdoptionService.fetchDog()
        .then(dog =>{
            if(dog.name){
            this.setState({
                dog
            })}
            else{
                this.setState({
                    dog:"No More Dogs"
                })
            }
            
        })
    }
    fetchUser = () =>{

    }
    fetchCat = () =>{
        AdoptionService.fetchCat()
        .then(cat =>{
            if(cat.name){
                this.setState({
                    cat
                })
            }
            else{
                this.setState({
                    cat:"No More Cats"
                })
            }
        })
    }
    handleNextCat = (ev) => {
        ev.preventDefault();
        AdoptionService.fetchNextCat()
        .then(cat => {
            if (cat.name){
            this.setState({
                cat
            })
            }
            else{
                this.fetchCat()
            }
        })
        
    }
    handleNextDog = (ev) => {
        ev.preventDefault();
        AdoptionService.fetchNextDog()
        .then(dog=>{
            if (dog.name){
                this.setState({
                    dog
                })
                }
                else{
                    this.fetchDog()
                }
            }) 
    }
    handleAdoptDog = (ev)=> {
        ev.preventDefault();
        AdoptionService.fetchAdoptDog()
        .then(() => this.fetchDog())
       
    }
    handleAdoptCat = (ev)=> {
        ev.preventDefault();
        AdoptionService.fetchAdoptCat()
        .then(() => this.fetchCat())
    }
    handleUserName = (ev) =>{
        ev.preventDefault();
        AdoptionService.fetchUser(this.state.value)
        .then(users => {
            this.setState({
                userList:users,
                userName:users[users.length-1].name
            })
        })
    }
    renderDisplay(){
        if(this.state.userName===''){
            return (
                <form className="UserName-Input" onSubmit={this.handleUserName}>
                    <label htmlFor="UserName-Input">
                        Put Me In Queue
                        <input type="text" placeholder="Name" value={this.state.value}
                            onChange={(ev)=>{
                                this.setState({
                                    value:ev.target.value
                                })
                            }}
                        />
                    </label>
                    <button type="submit" className="Queue-Btn">Queue</button>
                </form>
            )
        }
        let names=''
        this.state.userList.forEach(name => {
            names+=name.name+' '
        })
        return(
            <div>
                <p>{names}</p>
            </div>
        )
    }
    
    render(){
        let ok=false
        if (this.state.userList){
            if (this.state.userName===this.state.userList[0].name){
            ok=true
        }}
        return (
            <>
                <div className="Dog-Container">
                    <Dog dogs={this.state.dog}
                        handleNextDog={this.handleNextDog}
                        handleAdoptDog={this.handleAdoptDog}
                        fetchDog={this.fetchDog}
                        ok={ok}
                    />
                </div>
                <div className="Cat-Container">
                    <Cat cats ={this.state.cat}
                        handleNextCat={this.handleNextCat}
                        handleAdoptCat={this.handleAdoptCat}
                        fetchCat={this.fetchCat}
                        ok={ok}
                    />
                </div>
                <div className="User-Queue-Container">
                    {this.renderDisplay()}
                </div>
            </>
        )
    }
}