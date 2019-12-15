import React, {Component} from "react";
import './IntroContent.css'

const options = [
    {
        id: 'i_1', className: 'content1', renderContent: () => {
            return (
                <p>
                    I am a <strong>Front-end developer</strong> working in IT
                    since <strong>2014</strong>. In
                    mid-2017 I have started my journey with
                    front-end, working with <strong>Angular
                </strong>, <strong>React</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong> and
                    more.
                </p>
            )
        }
    },
    {
        id: 'i_2', className: 'content2', renderContent: () => {
            return (
                <p>
                    In mattis lacus et <strong>nunc tempor</strong> condimentum. Aliquam ac turpis vel quam
                    placerat
                    fringilla vitae eu ante. <strong>Class aptent</strong> taciti sociosqu ad litora
                    torquent per conubia
                    nostra, per inceptos himenaeos
                </p>
            )
        }
    },
    {
        id: 'i_3', className: 'content3', renderContent: () => {
            return (
                <p>
                    Duis vehicula, <strong>justo non</strong> bibendum ultrices, lacus tortor efficitur
                    lacus, in aliquam
                    odio lacus nec nibh. Nulla facilisis <strong>efficitur interdum</strong>. Fusce vel mi
                    et augue mattis
                    consectetur
                </p>
            )
        }
    },
];

class IntroContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: options[0].id
        }
    }

    handleOptionChange = (changeEvent) => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    };

    nextSlide = (prevId) => {
        let prevIndex = options.findIndex(option => prevId === option.id);
        let index = (prevIndex < (options.length - 1)) ? ++prevIndex : 0;
        this.setState({
            selectedOption: options[index].id
        });
    };

    renderSlide = (id, className, renderContent) => {
        return (
            <div className="slide" key={"slide-" + className} value={id} onClick={() => this.nextSlide(id)}>
                <div className={"content-inner " + className}>
                    {renderContent()}
                </div>
            </div>
        )
    };

    render() {
        return (
            <div id="intro-content" className="content">
                <div className="slider">
                    {options.map(({id}) => {
                        return (
                            <input type="radio" name="switch" value={id} id={id} key={id}
                                   checked={this.state.selectedOption === id}
                                   onChange={this.handleOptionChange}
                            />
                        )
                    })}
                    <div className="wrapper">
                        {options.map(({id, className, renderContent}) => {
                            return this.renderSlide(id, className, renderContent)
                        })}
                    </div>
                    <div className="controls">
                        {options.map(({id}) => {
                            return <label htmlFor={id} key={id}>⬤</label>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default IntroContent;