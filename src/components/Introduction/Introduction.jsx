import React, {Component} from 'react';
import "./Introduction.css";
import Links from "../Links/Links";

class Introduction extends Component {
    render() {
        return (
            <div id="intro" className="block">
                <div className="page-title">
                    <div className="title">dorota.zelga</div>
                    <Links/>
                </div >
                <div className="introduction animated animatedFadeInUp fadeInUp">
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
            </div>
        )
    }
}

export default Introduction
