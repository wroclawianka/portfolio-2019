import React, {Component} from "react";
import './IntroContent.css'

const options = [
    {
        id: 'i_1', className: 'content1', renderContent: () => {
            return (
                <p>
                    I am a <strong>Front-end developer</strong> with such skills as <strong>Angular
                </strong>, <strong>React</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong> and
                    more. I am a huge <strong>agile enthusiast</strong> and I believe in the
                    <strong> power of teamwork</strong>!
                </p>
            )
        }
    },
    {
        id: 'i_2', className: 'content2', renderContent: () => {
            return (
                <p>
                    I am working in IT since <strong>2014</strong>, being part of <strong>international
                    teams</strong> from various countries. In <strong>mid-2017</strong> I started my journey with
                    front-end development.
                </p>
            )
        }
    },
    {
        id: 'i_3', className: 'content3', renderContent: () => {
            return (
                <p>
                    I am a well-organized person with <strong>plenty of motivation </strong>and I consider myself a
                    <strong> good self-learner</strong>. I do not afraid of relocation and challenges at work.
                    <strong> Scroll down</strong> to find a couple of my <strong>personal projects</strong>!
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