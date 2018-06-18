import React from "react";

import './Logged.scss';
import Header from '../Header/Header.jsx';
import Score from '../Score/Score.jsx';

export default class Logged extends React.Component{
    render(){
        return(
            <div>
                <Header name = {this.props.name}/>
                <Score name={this.props.name}/>
            </div>
        )}
    }