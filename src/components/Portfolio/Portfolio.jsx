import React, {Component} from 'react';
import './Portfolio.css';
import Box from "./Box/Box";

const projects = [
    {
        title: "Phonebook",
        img: 'assets/pawel-czerwinski--0xCCPIbl3M-unsplash.jpg',
        webpage: '',
        repo: ''
    },
    {
        title: "Sorting Algorithms",
        img: 'assets/john-moeses-bauan-OGZtQF8iC0g-unsplash.jpg',
        webpage: '',
        repo: ''
    },
    {
        title: "Panowie z warsztatu",
        img: 'assets/hosea-georgeson-iF2IHS0RVGM-unsplash.jpg',
        webpage: '',
        repo: ''
    },
    {
        title: "Loan Ratings App",
        img: 'assets/steve-johnson-WVUrbhWtRNM-unsplash.jpg',
        webpage: '',
        repo: ''
    },
    {
        title: "Prague with my eyes",
        img: 'assets/fabrizio-verrecchia-Ai7sV3SSMIQ-unsplash.jpg',
        webpage: '',
        repo: ''
    },
    {
        title: "Book List",
        img: 'assets/ed-robertson-FDzRG30DeVM-unsplash.jpg',
        webpage: '',
        repo: ''
    },
    {
        title: "Graphical Dashboard",
        img: 'assets/carlos-muza-hpjSkU2UYSU-unsplash.jpg',
        webpage: '',
        repo: ''
    },
    {
        title: "Ordering App",
        img: 'assets/david-clarke-wQSe8GKVKoE-unsplash.jpg',
        webpage: '',
        repo: ''
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
