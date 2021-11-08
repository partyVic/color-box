import React, { Component } from 'react'
import Box from './Box'
import './BoxContainer.css'

class BoxContainer extends Component {
    static defaultProps = {
        allColors: [
            "red",
            "blue",
            "green",
            "purple",
            "gray",
            "magenta",
            "cyan",
            "beige",
            "coral",
            "darkblue",
            "darkred",
            "darkgreen",
            "chocolate"
        ],
        numBoxes: 20
    }
    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map(
            () => (<Box allColors={this.props.allColors} />
            ))
        return (
            <div className="BoxContainer">
                {boxes}
            </div>
        )
    }
}

export default BoxContainer