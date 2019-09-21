import React, {Component} from 'react';
import './Box.css';

class Box extends Component {

    render() {
        return (
            <div className="box project animated animatedFadeInUp fadeInUp"
                 key={this.props.title}>
                <div className="image" style={{backgroundImage: `url(${this.props.img})`}}>
                    <div className="icons">
                        {(this.props.webpage ? <a className="icon" href={this.props.webpage} target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-laptop" aria-hidden="true"/></a> : null)}
                        {(this.props.repo ? <a className="icon" href={this.props.repo} target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github" aria-hidden="true"/></a> : null)}
                    </div>
                    <div className="layer"/>
                </div>
                <div className="project-title">{this.props.title}</div>
            </div>
        )
    }
}

export default Box
