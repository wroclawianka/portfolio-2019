import React, {Component} from 'react';
import './Portfolio.css';
import Box from "./Box/Box";

const projects = [
    {
        title: "Phonebook",
        img: 'assets/pawel-czerwinski--0xCCPIbl3M-unsplash.jpg',
        repo: "https://github.com/wroclawianka/phonebook"
    },
    {
        title: "Sorting Algorithms",
        img: 'assets/john-moeses-bauan-OGZtQF8iC0g-unsplash.jpg',
        webpage: 'https://sorting-algorithms-app.netlify.com/',
        repo: 'https://github.com/wroclawianka/sorting'
    },
    {
        title: "Panowie z warsztatu",
        img: 'assets/hosea-georgeson-iF2IHS0RVGM-unsplash.jpg',
        webpage: 'https://wroclawianka.github.io/workshop-modern/',
        repo: 'https://github.com/wroclawianka/workshop-modern'
    },
    {
        title: "Loan Ratings App",
        img: 'assets/steve-johnson-WVUrbhWtRNM-unsplash.jpg',
        webpage: 'https://wroclawianka.github.io/loan-ratings-app/',
        repo: 'https://github.com/wroclawianka/loan-ratings-app'
    },
    {
        title: "Prague with my eyes",
        img: 'assets/fabrizio-verrecchia-Ai7sV3SSMIQ-unsplash.jpg',
        webpage: 'https://praha-blog.netlify.com/',
        repo: 'https://github.com/wroclawianka/BlogApi/tree/master/Blog2.0/blog2.0'
    },
    {
        title: "Book List",
        img: 'assets/ed-robertson-FDzRG30DeVM-unsplash.jpg',
        webpage: 'https://book-list-dorota-zelga.netlify.com/',
        repo: 'https://github.com/wroclawianka/book-list-assignment'
    },
    {
        title: "Graphical Dashboard",
        img: 'assets/carlos-muza-hpjSkU2UYSU-unsplash.jpg',
        webpage: 'https://graphical-dashboard.netlify.com/',
        repo: 'https://github.com/wroclawianka/graphical-dashboard'
    },
    {
        title: "Ordering App",
        img: 'assets/david-clarke-wQSe8GKVKoE-unsplash.jpg',
        repo: 'https://github.com/wroclawianka/ordering-assignment'
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
                    {projects.map(project => <Box title={project.title} img={project.img} webpage={project.webpage}
                                                  repo={project.repo} key={project.title}/>)}
                </div>
            </div>
        )
    }
}

export default Portfolio
