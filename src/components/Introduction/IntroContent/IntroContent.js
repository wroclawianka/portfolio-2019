import React, {Component} from "react";
import './IntroContent.css'

let options = [
    {id: 'i_1'},
    {id: 'i_2'},
    {id: 'i_3'},
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

    render() {
        return (
            <div className="content">
                <div id="main">
                    {options.map((option) => {
                        return (
                            <input type="radio" name="switch" value={option.id} id={option.id} key={option.id}
                                   checked={this.state.selectedOption === option.id}
                                   onChange={this.handleOptionChange}
                            />
                        )
                    })}
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
                                In mattis lacus et <strong>nunc tempor</strong> condimentum. Aliquam ac turpis vel quam
                                placerat
                                fringilla vitae eu ante. <strong>Class aptent</strong> taciti sociosqu ad litora
                                torquent per conubia
                                nostra, per inceptos himenaeos
                            </div>
                        </div>
                        <div className="slide">
                            <div className="content-inner content3">
                                Duis vehicula, <strong>justo non</strong> bibendum ultrices, lacus tortor efficitur
                                lacus, in aliquam
                                odio lacus nec nibh. Nulla facilisis <strong>efficitur interdum</strong>. Fusce vel mi
                                et augue mattis
                                consectetur
                            </div>
                        </div>
                    </div>
                    <div className="controls">
                        {options.map((option) => {
                            return <label htmlFor={option.id} key={option.id}>⬤</label>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default IntroContent;