// Code CoordinatesButton Component Here
import React from 'react';


export default class CoordinatesButton extends React.Component {
    handleClick = event => {

        console.log(this.props.onReceiveCoordinates([event.clientX, event.clientY]));
    }
    render() {
        const button = document.querySelector('button');
        
        return (
        <button onClick={this.handleClick}>Coords</button>
        )
        }
    }
