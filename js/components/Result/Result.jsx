import React from "react";

import './Result.scss'

export default class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="result">
                <p>{this.props.result}</p>
            </div>
        )
    }
}