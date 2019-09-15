import React, {Component} from 'react';
import './Portfolio.css';

class Box extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="box project" style={{backgroundImage: `url(${this.props.img})`}}
                 key={this.props.title}>
            </div>
        )
    }
}

export default Box
