import React from "react";

import './Score.scss';
import Board from '../Board/Board.jsx';
import Result from '../Result/Result.jsx';
import Options from '../Options/Options.jsx';

export default class Score extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            usersPoint: 0,
            computerPoint: 0,
            finalDecision: '',
            computerChoice: ''
        }
    }

    addPoint = (decision) => {
        if(decision === 'You win!') {
            this.setState({
                usersPoint: this.state.usersPoint + 1,
                finalDecision: decision
            })
        } else if (decision === 'You lose!') {
            this.setState({
                computerPoint: this.state.computerPoint + 1,
                finalDecision: decision
            })
        } else if (decision === "It's draw!"){
            this.setState({
                finalDecision: decision
            })
        }
    };

    render() {
        return (
            <div className="score_div">
                <Board userPoint={this.state.usersPoint} computerPoint={this.state.computerPoint} name={this.props.name}/>
                <Options addPoint={this.addPoint}/>
                <Result result={this.state.finalDecision}/>
            </div>
        )
    }
}