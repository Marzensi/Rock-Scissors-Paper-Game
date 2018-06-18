import React from "react";

import './Board.scss'

export default class Board extends React.Component {
    render() {
        return (
            <div className="score-board">
                <div className="comp-name box">Computer</div>
                <div className="player-name box">{this.props.name}</div>
                <span id="player-score">{this.props.userPoint}</span>:<span id="comp-score">{this.props.computerPoint}</span>
            </div>
        )
    }
}