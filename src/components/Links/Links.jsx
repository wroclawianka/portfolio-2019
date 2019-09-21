import React, {Component} from 'react';
import "./Links.css";

class Links extends Component {
    render() {
        return (
            <div className="links">
                <a className="icon" href="https://github.com/wroclawianka/list-of-projects" target="_blank"
                   rel="noopener noreferrer">
                    <i className="fa fa-github" aria-hidden="true"/></a>
                <a className="icon" href="https://www.linkedin.com/in/dorotazelga" target="_blank"
                   rel="noopener noreferrer">
                    <i className="fa fa-linkedin" aria-hidden="true"/></a>
            </div>
        )
    }
}

export default Links
