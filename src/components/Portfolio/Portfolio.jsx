import React, {Component} from 'react';
import './Portfolio.css';
import Box from "./Box";

const projects = [
    {
        title: "Phonebook",
        img: 'assets/pawel-czerwinski--0xCCPIbl3M-unsplash.jpg'
    },
    {
        title: "Sorting Algorithms",
        img: 'assets/paul-bergmeir-FzFH41IucIY-unsplash.jpg'
    },
    {
        title: "Panownie z warsztatu",
        img: 'assets/hosea-georgeson-iF2IHS0RVGM-unsplash.jpg'
    },
    {
        title: "Loan Ratings App",
        img: 'assets/steve-johnson-WVUrbhWtRNM-unsplash.jpg'
    },
    {
        title: "Prague with my eyes",
        img: 'assets/fabrizio-verrecchia-Ai7sV3SSMIQ-unsplash.jpg'
    },
    {
        title: "Book List",
        img: 'assets/ed-robertson-FDzRG30DeVM-unsplash.jpg'
    },
    {
        title: "Graphical Dashboard",
        img: 'assets/campaign-creators-pypeCEaJeZY-unsplash.jpg'
    },
    {
        title: "Ordering",
        img: 'assets/jelleke-vanooteghem-MohB4LCIPyM-unsplash.jpg'
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
