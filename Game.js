import React, { Component } from 'react'
import './Game.css'
export class Game extends Component {
    constructor(){
        super();
        this.state={
         time:10,
         count:0,
         msg:" "
        }
     }
     componentDidMount(){
        this.interval=setInterval(this.tick,1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    tick=()=>{
       if(this.state.time==0){
        clearInterval(this.interval)
           this.setState({
            msg:"GAME OVER...!!"
           })
           
       }
       this.setState({
      time:this.state.time-1,
       })
    }
    increment=()=>{
        this.setState({
             count:this.state.count+1*10,
        })
      
    }
  
    handleClick=()=>{
        this.setState({
            time:10,
            count:0,
            msg:" "
           })
           this.interval=setInterval(this.tick,1000);
        
    }
  render() {
    return (
      <div id="bg">
      <h2 >Click the below image to increase your score</h2>
      <h1 id="gm">Game ends in : {this.state.time}</h1>
      <div id="pic"onClick={this.increment} ></div>
      <h2 id="sc" >Score:{this.state.count}</h2>
      <h3 id="ms">{this.state.msg}</h3>
      <button id="bt" onClick={this.handleClick}>Restart</button>
      </div>
    )
  }
}

export default Game