import React from "react";

import './Options.scss';

export default class Options extends React.Component {
    constructor(props){
        super(props);
        this.state={
            computerChoice: [
                'rock',
                'paper',
                'scissors'
            ]
        }
    }

    game = (event) =>{
        const computerChoice = this.state.computerChoice[Math.floor(Math.random()*3)];
        //console.log('komputer', computerChoice);
        //console.log('ja', event.target.id);
        switch(event.target.id + computerChoice){
            case "rockscissors":
            case "paperrock":
            case "scissorsppaper":
                //console.log('win');
                this.props.addPoint('You win!');
                break;
            case "rockpaper":
            case "paperscissors":
            case "scissorsrock":
                //console.log('lose');
                this.props.addPoint('You lose!');
                break;
            case "rockrock":
            case "paperpaper":
            case "scissorsscissors":
                //console.log('draw');
                this.props.addPoint("It's draw!");
                break;
        }
    };

    render() {
        return (
            <div>
                <div className="options">
                    <p className="instruction">Make your move.</p>
                    <div  className="option">
                        <img onClick={this.game} id="rock" className="option-img" src="https://png.icons8.com/windows/1600/hand-rock.png" alt="rock"/>
                    </div>
                    <div  className="option">
                        <img onClick={this.game} id="paper" className="option-img" src="https://png.icons8.com/windows/1600/hand.png" alt="paper"/>
                    </div>
                    <div  className="option">
                        <img onClick={this.game} id="scissors" className="option-img" src="https://png.icons8.com/windows/1600/hand-scissors.png" alt="scissors"/>
                    </div>
                </div>
            </div>
        )
    }
}