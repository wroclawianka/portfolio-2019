import React, {Component} from 'react';
import "./Introduction.css";
import PageTitle from "./PageTitle/PageTitle";

class Introduction extends Component {
    render() {
        return (
            <div id="intro" className="block">
                <PageTitle/>
                <div className="introduction animated animatedFadeInUp fadeInUp">
                    <div className="content">
                        <div id="main">
                            <input type="radio" name="switch" id="i_1"/>
                            <input type="radio" name="switch" id="i_2"/>
                            <input type="radio" name="switch" id="i_3" checked/>
                            <div className="wrapper">
                                <div className="slide">
                                    <div className="content-inner content1">
                                        <p>
                                            I am a <strong>Front-end developer</strong> working in IT
                                            since <strong>2014</strong>. In
                                            mid-2017 I have started my journey with
                                            front-end, working with <strong>Angular
                                        </strong>, <strong>React</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong> and
                                            more.
                                        </p>
                                    </div>
                                </div>
                                <div className="slide">
                                    <div className="content-inner content2">
                                        I am a <strong>Front-end developer</strong> working in IT
                                        since <strong>2014</strong>. In
                                        mid-2017 I have started my journey with
                                        front-end, working with <strong>Angular
                                    </strong>, <strong>React</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong> and
                                        more.
                                    </div>
                                </div>
                                <div className="slide">
                                    <div className="content-inner content3">
                                        I am a <strong>Front-end developer</strong> working in IT
                                        since <strong>2014</strong>. In
                                        mid-2017 I have started my journey with
                                        front-end, working with <strong>Angular
                                    </strong>, <strong>React</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong> and
                                        more.
                                    </div>
                                </div>
                            </div>
                            <div className="controls">
                                <label htmlFor="i_1">⬤</label>
                                <label htmlFor="i_2">⬤</label>
                                <label htmlFor="i_3">⬤</label>
                            </div>
                        </div>
                    </div>
                    <div className="main-picture"/>
                </div>
            </div>
        )
    }
}

export default Introduction
