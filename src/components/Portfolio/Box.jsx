import React, {Component} from 'react';
import './Portfolio.css';

class Box extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="box project"
                 key={this.props.title}>
                <div className="image" style={{backgroundImage: `url(${this.props.img})`}}>
                    <div className="layer"/>
                </div>
                <div className="project-title">{this.props.title}</div>
            </div>
        )
    }
}

export default Box
