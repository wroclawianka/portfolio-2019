import React, {Component} from 'react';
import './Portfolio.css';
import Box from "./Box/Box";

const projects = [
    {
        title: "Phonebook",
        img: 'assets/rahul-chakraborty-xsGxhtAsfSA-unsplash.jpg',
        repo: "https://github.com/wroclawianka/phonebook"
    },
    {
        title: "Sorting Algorithms",
        img: 'assets/ferdinand-stohr-rzA7ZuI8M5o-unsplash.jpg',
        webpage: 'https://sorting-algorithms-app.netlify.com/',
        repo: 'https://github.com/wroclawianka/sorting'
    },
    {
        title: "Panowie z warsztatu",
        img: 'assets/thibaut-nagorny-ozTOWTr_i74-unsplash.jpg',
        webpage: 'https://wroclawianka.github.io/workshop-modern/',
        repo: 'https://github.com/wroclawianka/workshop-modern'
    },
    {
        title: "Loan Ratings App",
        img: 'assets/sabine-peters-4IqiPGAuTVE-unsplash.jpg',
        webpage: 'https://wroclawianka.github.io/loan-ratings-app/',
        repo: 'https://github.com/wroclawianka/loan-ratings-app'
    },
    {
        title: "Portfolio 2019",
        img: 'assets/crew-4Hg8LH9Hoxc-unsplash.jpg',
        webpage: "https://wroclawianka.github.io/portfolio",
        repo: "https://github.com/wroclawianka/portfolio"
    },
    {
        title: "Prague with my eyes",
        img: 'assets/wojtek-witkowski-1fpyA_z2woY-unsplash.jpg',
        webpage: 'https://praha-blog.netlify.com/',
        repo: 'https://github.com/wroclawianka/BlogApi/tree/master/Blog2.0/blog2.0'
    },
    {
        title: "Book List",
        img: 'assets/lou-levit-XiCZpdoX4lE-unsplash.jpg',
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
        webpage: "https://wroclawianka.github.io/portfolio/",
        repo: 'https://github.com/wroclawianka/ordering-assignment'
    },
    {
        title: "Portfolio 2018",
        img: 'assets/temple-cerulean-tP8ZwlCF8og-unsplash.jpg',
        webpage: "https://wroclawianka.github.io/portfolio-2018/",
        repo: "https://github.com/wroclawianka/portfolio-2018"
    },
    {
        title: "Binary Calculator",
        img: 'assets/agence-producteurs-locaux-damien-kuhn-d-pPg9pnZRY-unsplash.jpg',
        webpage: 'https://wroclawianka.github.io/binary-calculator/',
        repo: 'https://github.com/wroclawianka/binary-calculator'
    },
    {
        title: "Workshop Website",
        img: 'assets/maksym-kaharlytskyi-ERt5AiGT7Xg-unsplash.jpg',
        webpage: 'https://wroclawianka.github.io/car-service-webpage/',
        repo: 'https://github.com/wroclawianka/car-service-webpage'
    },
];

function getWindowWidth() {
    return window.innerWidth;
}

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            length: 0,
            maxLength: projects.length
        };
    }

    findLength = () => {
        const width = getWindowWidth();
        let length;
        switch (true) {
            case (width > 1200):
                length = 8;
                break;
            case (width > 1000):
                length = 6;
                break;
            case (width > 550):
                length = 4;
                break;
            default:
                length = 3
        }
        this.setState({
            initLength: length,
            length: length
        });
    };

    componentDidMount() {
        this.findLength();
        // window.addEventListener("resize", this.findLength);
    };

    // componentWillUnmount() {
        // window.removeEventListener("resize", this.findLength);
    // }

    clickMore = () => {
        this.setState({
            length: this.state.length + this.state.initLength
        })
    };

    render() {
        return (
            <div id="portfolio" className="block">
                <div className="title">
                    <h1>Portfolio</h1>
                </div>
                <div className="content">
                    {projects.slice(0, this.state.length).map(project => <Box title={project.title} img={project.img}
                                                                              webpage={project.webpage}
                                                                              repo={project.repo}
                                                                              key={project.title}/>)}
                </div>
                {(this.state.maxLength > this.state.length) ? <div className="show-more">
                    <div className="show-more-inside">
                        <p className="show-more-content" onClick={this.clickMore}><a>More</a></p>
                    </div>
                </div> : null}
            </div>
        )
    }
}

export default Portfolio
