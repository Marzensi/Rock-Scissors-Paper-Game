import React from "react";

import './Start.scss'
import Logged from "../Logged/Logged.jsx"

export default class Start extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    handleClick = () => {
        //console.log(this.val.value);
        if(this.val.value !== '') {
            this.setState({
                loggedIn: true
            })
        }else if (this.val.value === ''){
        this.setState({
            loggedIn: false,
            error: "Write down your name"
        })}
    };

    render() {
        if(this.state.loggedIn) {
            return (
                <div>
                    <Logged name={this.val.value}/>
                </div>
            )
        }
        return (
            <div className="startContainer">
                <img className="startImg" src='https://s00.yaplakal.com/pics/pics_original/4/1/5/379514.jpg' alt="rock-paper-scissors.img"/>
                <h1 className="startName">Your name:</h1>
                <input className="startInput" ref={input => this.val = input } type="text"/>
                <button className="startButton" onClick={this.handleClick}>Start game</button>
                <p className="error-msg">{this.state.error}</p>
            </div>
        )
    }
}