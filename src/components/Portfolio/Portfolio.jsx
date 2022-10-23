import React, { Component } from 'react';
import Select from 'react-select'
import './Portfolio.css';
import Box from "./Box/Box";

const technologies = [
    { value: 'REACT', label: 'React' },
    { value: 'ANGULAR', label: 'Angular 2+' },
    { value: 'NODEJS', label: 'Node.js' },
    { value: 'MONGO', label: 'MongoDB' },
    { value: 'TS', label: 'TypeScript' },
    { value: 'JS', label: 'JavaScript' },
    { value: 'REDUX', label: 'Redux' },
    { value: 'REACT_QUERY', label: 'React-Query' },
    { value: 'NGRX', label: 'ngrx' },
    { value: 'JQUERY', label: 'jQuery' },
    { value: 'HTML/CSS', label: 'HTML/CSS' },
    { value: 'BOOTSTRAP', label: 'Bootstrap' },
    { value: 'MATERIAL UI', label: 'Material UI' },
];

const projects = [
    {
        title: "Vote for me",
        img: 'assets/scott-graham-OQMZwNd3ThU-unsplash.jpg',
        webpage: "https://wroclawianka.github.io/vote-for-me/",
        repo: "https://github.com/wroclawianka/vote-for-me",
        stack: ['REACT', 'REDUX', 'TS', 'HTML/CSS'],
        label: 'React & Redux',
        year: '2022',
    },
    {
        title: "Dynamic Table",
        img: 'assets/christopher-burns-Kj2SaNHG-hg-unsplash.jpg',
        // webpage: "https://wroclawianka.github.io/dynamic-table/",
        repo: "https://github.com/wroclawianka/dynamic-table",
        stack: ['REACT', 'REACT-QUERY', 'TS', 'HTML/CSS'],
        year: '2022',
    },
    {
        title: "Groceries List",
        img: 'assets/charisse-kenion-Ycg-qnn7XEM-unsplash.jpg',
        repo: "https://github.com/wroclawianka/groceries-app",
        yt: 'https://youtu.be/r-y8D6FmHk0',
        stack: ['REACT', 'REDUX', 'NODEJS', 'MONGO', 'MATERIAL UI', 'HTML/CSS'],
        year: '2020',
    },
    {
        title: "Crypto Tracker",
        img: 'assets/andre-francois-mckenzie-vh7U_Z75L3U-unsplash.jpg',
        // webpage: 'https://wroclawianka.github.io/crypto-tracker',
        repo: "https://github.com/wroclawianka/crypto-tracker",
        stack: ['ANGULAR', 'NGRX', 'MATERIAL UI', 'HTML/CSS'],
        label: 'Angular & ngrx',
        year: '2020',
    },
    {
        title: "Phonebook",
        img: 'assets/rahul-chakraborty-xsGxhtAsfSA-unsplash.jpg',
        repo: "https://github.com/wroclawianka/phonebook",
        yt: 'https://youtu.be/UWDnyAftJW4',
        stack: ['REACT', 'JS', 'MONGO', 'NODEJS', 'MATERIAL UI', 'HTML/CSS'],
        label: 'React & NodeJS',
        year: '2019',
    },
    {
        title: "Sorting Algorithms",
        img: 'assets/ferdinand-stohr-rzA7ZuI8M5o-unsplash.jpg',
        webpage: 'https://sorting-algorithms-app.netlify.com/',
        repo: 'https://github.com/wroclawianka/sorting',
        stack: ['REACT', 'TS', 'HTML/CSS', 'BOOTSTRAP'],
        year: '2019',
    },
    {
        title: "Portfolio #2",
        img: 'assets/crew-4Hg8LH9Hoxc-unsplash.jpg',
        webpage: "https://wroclawianka.github.io/portfolio-2019",
        repo: "https://github.com/wroclawianka/portfolio-2019",
        stack: ['REACT', 'JS', 'HTML/CSS'],
        year: '2019',
    },
    {
        title: "Panowie z warsztatu",
        img: 'assets/thibaut-nagorny-ozTOWTr_i74-unsplash.jpg',
        webpage: 'https://wroclawianka.github.io/workshop-modern/',
        repo: 'https://github.com/wroclawianka/workshop-modern',
        stack: ['JQUERY', 'JS', 'HTML/CSS'],
        year: '2018',
    },
    {
        title: "Loan Ratings App",
        img: 'assets/sabine-peters-4IqiPGAuTVE-unsplash.jpg',
        webpage: 'https://wroclawianka.github.io/loan-ratings-app/',
        repo: 'https://github.com/wroclawianka/loan-ratings-app',
        stack: ['ANGULAR', 'TS', 'HTML/CSS'],
        year: '2018',
    },
    {
        title: "Prague with my eyes",
        img: 'assets/wojtek-witkowski-1fpyA_z2woY-unsplash.jpg',
        webpage: 'https://praha-blog.netlify.com/',
        repo: 'https://github.com/wroclawianka/BlogApi/tree/master/Blog2.0/blog2.0',
        stack: ['ANGULAR', 'TS', 'HTML/CSS'],
        year: '2018',
    },
    {
        title: "Book List",
        img: 'assets/lou-levit-XiCZpdoX4lE-unsplash.jpg',
        webpage: 'https://book-list-dorota-zelga.netlify.com/',
        repo: 'https://github.com/wroclawianka/book-list-assignment',
        stack: ['REACT', 'JS', 'HTML/CSS', 'BOOTSTRAP'],
        year: '2018',
    },
    {
        title: "Graphical Dashboard",
        img: 'assets/carlos-muza-hpjSkU2UYSU-unsplash.jpg',
        webpage: 'https://graphical-dashboard.netlify.com/',
        repo: 'https://github.com/wroclawianka/graphical-dashboard',
        stack: ['JS', 'HTML/CSS'],
        year: '2018',
    },
    {
        title: "Ordering App",
        img: 'assets/david-clarke-wQSe8GKVKoE-unsplash.jpg',
        repo: 'https://github.com/wroclawianka/ordering-assignment',
        yt: 'https://youtu.be/-aCDjMuvmGE',
        stack: ['REACT', 'JS', 'HTML/CSS'],
        year: '2018',
    },
    {
        title: "Portfolio #1",
        img: 'assets/temple-cerulean-tP8ZwlCF8og-unsplash.jpg',
        webpage: "https://wroclawianka.github.io/portfolio-2018/",
        repo: "https://github.com/wroclawianka/portfolio-2018",
        stack: ['JQUERY', 'JS', 'HTML/CSS'],
        year: '2018',
    },
    {
        title: "Binary Calculator",
        img: 'assets/agence-producteurs-locaux-damien-kuhn-d-pPg9pnZRY-unsplash.jpg',
        webpage: 'https://wroclawianka.github.io/binary-calculator/',
        repo: 'https://github.com/wroclawianka/binary-calculator',
        stack: ['JQUERY', 'JS', 'BOOTSTRAP', 'HTML/CSS'],
        year: '2018',
    },
    {
        title: "Workshop Website",
        img: 'assets/maksym-kaharlytskyi-ERt5AiGT7Xg-unsplash.jpg',
        webpage: 'https://wroclawianka.github.io/car-service-webpage/',
        repo: 'https://github.com/wroclawianka/car-service-webpage',
        stack: ['JQUERY', 'JS', 'HTML/CSS'],
        year: '2018',
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
            maxLength: projects.length,
            selectedStack: technologies.slice(0, 6),
            filteredProjects: []
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

    filterByStack = (selectedStack) => {
        let filteredProjects = (selectedStack)
            ? this.filterProjectsByStack(selectedStack)
            : projects; //show all technologies if nothing selected
        this.setState({ filteredProjects, selectedStack })
    };

    filterProjectsByStack = (selectedStack) => {
        return projects.filter((project) => {
            return selectedStack.some(technology => project.stack.indexOf(technology.value) >= 0);
        });
    };

    componentDidMount() {
        this.findLength();
        this.filterByStack(this.state.selectedStack);
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
                <div className="title">Portfolio</div>
                <div className="filter">
                    <Select
                        value={this.state.selectedStack}
                        onChange={this.filterByStack}
                        isMulti
                        name="colors"
                        options={technologies}
                        className="basic-multi-select animated animatedFadeInUp fadeInUp"
                        classNamePrefix="select"
                        placeholder="Select technologies..."
                        theme={theme => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                                ...theme.colors,
                                primary25: 'rgba(68,220,200,0.28)',
                                dangerLight: 'rgba(68,220,200,0.28)',
                                danger: 'rgb(43,146,122)',
                                primary: '#d7d7d7',
                            },
                        })}
                    />
                </div>
                <div className="content">
                    {this.state.filteredProjects
                        .slice(0, this.state.length)
                        .map(project =>
                            <Box title={project.title}
                                img={project.img}
                                webpage={project.webpage}
                                repo={project.repo}
                                yt={project.yt}
                                label={project.label}
                                year={project.year}
                                key={project.title} />
                        )}
                </div>
                {(this.state.maxLength > this.state.length) ? <div className="show-more animated animatedFadeInUp fadeInUp">
                    <div className="show-more-inside">
                        <p className="show-more-content" onClick={this.clickMore}>
                            <a>More projects</a>
                        </p>
                    </div>
                </div> : null}
            </div>
        )
    }
}

export default Portfolio
