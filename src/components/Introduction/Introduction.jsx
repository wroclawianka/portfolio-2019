import React, {Component} from 'react';
import "./Introduction.css";
import PageTitle from "./PageTitle/PageTitle";
import IntroContent from "./IntroContent/IntroContent";

class Introduction extends Component {
    render() {
        return (
            <div id="intro" className="block">
                <PageTitle/>
                <div className="introduction animated animatedFadeInUp fadeInUp">
                <IntroContent/>
                    <div className="main-picture"/>
                </div>
            </div>
        )
    }
}

export default Introduction
