import React, {Component} from 'react';
import "./Introduction.css";

class Introduction extends Component {
    render() {
        return (
            <div className="intro">
                <div className="page-title">Dorota Zelga</div>
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
