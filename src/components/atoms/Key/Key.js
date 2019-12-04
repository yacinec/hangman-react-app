import React, { Component } from 'react';
import "./Key.css";

export class Key extends Component {

    handleClicked = (e) => {

        this.props.onKeyClicked(e);
    }

    render(){
        const {keyValue, isFound} = this.props;
        return (
            <button onClick={this.handleClicked} value={ keyValue } className={isFound ? 'key--clicked btn' : "key btn"} >
                { keyValue }
            </button>
        )
    }
    
}