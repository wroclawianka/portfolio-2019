import React, {Component} from 'react';
import "./Introduction.css";

class Introduction extends Component {
    render() {
        return (
            <div id="intro" className="block">
                <div className="page-title">
                    <div className="title">dorota.zelga</div>
                    <div className="links">
                        <a className="icon" href="https://github.com/wroclawianka/list-of-projects" target="_blank"
                           rel="noopener noreferrer">
                            <i className="fa fa-github" aria-hidden="true"/></a>
                        <a className="icon" href="https://www.linkedin.com/in/dorotazelga" target="_blank"
                           rel="noopener noreferrer">
                            <i className="fa fa-linkedin" aria-hidden="true"/></a>
                    </div>
                </div>
                <div className="content">
                    <p>
                        I am a <strong>Front-end developer</strong> working in IT since <strong>2014</strong>. In
                        mid-2017 I have started my journey with
                        frontend world, working with <strong>Angular
                        2+</strong>, <strong>React</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong> and
                        more. I am also proficient in test automation with Selenium.
                    </p>
                </div>
                <div className="main-picture"/>
            </div>
        )
    }
}

export default Introduction
