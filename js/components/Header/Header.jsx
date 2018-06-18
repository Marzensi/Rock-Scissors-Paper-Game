import React from "react";

import './Header.scss'

export default class Header extends React.Component {
    render() {
        return (
            < div className="header" >
                <h1>Hi {this.props.name}! Let's play!</h1>
            </div>
        )
    }
}