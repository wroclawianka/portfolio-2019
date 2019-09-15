import React, {Component} from 'react';
import './Portfolio.css';

class Box extends Component {

    render() {
        return (
            <div className="box project"
                 key={this.props.title}>
                <div className="image" style={{backgroundImage: `url(${this.props.img})`}}>
                    <div className="icons">
                        <a className="icon" href={this.props.webpage} target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-laptop" aria-hidden="true"/></a>
                        <a className="icon" href={this.props.repo} target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github" aria-hidden="true"/></a>
                    </div>
                    <div className="layer"/>
                </div>
                <div className="project-title">{this.props.title}</div>
            </div>
        )
    }
}

export default Box
