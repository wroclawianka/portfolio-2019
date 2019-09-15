import React, {Component} from 'react';
import './Portfolio.css';
import Box from "./Box";

const projects = [
    {
        title: "Phonebook",
        img: 'assets/pawel-czerwinski--0xCCPIbl3M-unsplash.jpg'
    }
];

class Portfolio extends Component {
    render() {
        return (
            <div id="portfolio" className="block">
                <div className="title">
                    <h1>Portfolio</h1>
                </div>
                <div className="content">
                    {projects.map(project => <Box title={project.title} img={project.img}/>)}
                </div>
            </div>
        )
    }
}

export default Portfolio
