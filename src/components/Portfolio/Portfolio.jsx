import React, {Component} from 'react';
import Select from 'react-select'
import './Portfolio.css';
import Box from "./Box/Box";

const technologies = [
    {value: 'REACT', label: 'React'},
    {value: 'Angular', label: 'Angular 2+'},
    {value: 'NODEJS', label: 'Node.js'},
    {value: 'MONGO', label: 'MongoDB'},
    {value: 'TS', label: 'TypeScript'},
    {value: 'JS', label: 'JavaScript'},
    {value: 'JQUERY', label: 'jQuery'},
    {value: 'HTML/CSS', label: 'HTML/CSS'},
    {value: 'BOOTSTRAP', label: 'Bootstrap'},
];

const projects = [
    {
        title: "Phonebook",
        img: 'assets/rahul-chakraborty-xsGxhtAsfSA-unsplash.jpg',
        repo: "https://github.com/wroclawianka/phonebook",
        stack: ['REACT', 'JS', 'MONGO', 'NODEJS', 'HTML/CSS']
    },
    {
        title: "Sorting Algorithms",
        img: 'assets/ferdinand-stohr-rzA7ZuI8M5o-unsplash.jpg',
        webpage: 'https://sorting-algorithms-app.netlify.com/',
        repo: 'https://github.com/wroclawianka/sorting',
        stack: ['REACT', 'TS', 'HTML/CSS', 'BOOTSTRAP']
    },
    {
        title: "Panowie z warsztatu",
        img: 'assets/thibaut-nagorny-ozTOWTr_i74-unsplash.jpg',
        webpage: 'https://wroclawianka.github.io/workshop-modern/',
        repo: 'https://github.com/wroclawianka/workshop-modern',
        stack: ['JQUERY', 'JS', 'HTML/CSS']
    },
    {
        title: "Loan Ratings App",
        img: 'assets/sabine-peters-4IqiPGAuTVE-unsplash.jpg',
        webpage: 'https://wroclawianka.github.io/loan-ratings-app/',
        repo: 'https://github.com/wroclawianka/loan-ratings-app',
        stack: ['ANGULAR', 'TS', 'HTML/CSS']
    },
    {
        title: "Portfolio 2019",
        img: 'assets/crew-4Hg8LH9Hoxc-unsplash.jpg',
        webpage: "https://wroclawianka.github.io/portfolio",
        repo: "https://github.com/wroclawianka/portfolio",
        stack: ['REACT', 'JS', 'HTML/CSS']
    },
    {
        title: "Prague with my eyes",
        img: 'assets/wojtek-witkowski-1fpyA_z2woY-unsplash.jpg',
        webpage: 'https://praha-blog.netlify.com/',
        repo: 'https://github.com/wroclawianka/BlogApi/tree/master/Blog2.0/blog2.0',
        stack: ['ANGULAR', 'TS', 'HTML/CSS']
    },
    {
        title: "Book List",
        img: 'assets/lou-levit-XiCZpdoX4lE-unsplash.jpg',
        webpage: 'https://book-list-dorota-zelga.netlify.com/',
        repo: 'https://github.com/wroclawianka/book-list-assignment',
        stack: ['REACT', 'JS', 'HTML/CSS', 'BOOTSTRAP']
    },
    {
        title: "Graphical Dashboard",
        img: 'assets/carlos-muza-hpjSkU2UYSU-unsplash.jpg',
        webpage: 'https://graphical-dashboard.netlify.com/',
        repo: 'https://github.com/wroclawianka/graphical-dashboard',
        stack: ['JS', 'HTML/CSS']
    },
    {
        title: "Ordering App",
        img: 'assets/david-clarke-wQSe8GKVKoE-unsplash.jpg',
        repo: 'https://github.com/wroclawianka/ordering-assignment',
        stack: ['REACT', 'JS', 'HTML/CSS']
    },
    {
        title: "Portfolio 2018",
        img: 'assets/temple-cerulean-tP8ZwlCF8og-unsplash.jpg',
        webpage: "https://wroclawianka.github.io/portfolio-2018/",
        repo: "https://github.com/wroclawianka/portfolio-2018",
        stack: ['JQUERY', 'JS', 'HTML/CSS']
    },
    {
        title: "Binary Calculator",
        img: 'assets/agence-producteurs-locaux-damien-kuhn-d-pPg9pnZRY-unsplash.jpg',
        webpage: 'https://wroclawianka.github.io/binary-calculator/',
        repo: 'https://github.com/wroclawianka/binary-calculator',
        stack: ['JQUERY', 'JS', 'BOOTSTRAP', 'HTML/CSS']
    },
    {
        title: "Workshop Website",
        img: 'assets/maksym-kaharlytskyi-ERt5AiGT7Xg-unsplash.jpg',
        webpage: 'https://wroclawianka.github.io/car-service-webpage/',
        repo: 'https://github.com/wroclawianka/car-service-webpage',
        stack: ['JQUERY', 'JS', 'HTML/CSS']
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
        this.setState({filteredProjects, selectedStack})
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
                <div className="title">
                    <h1>Portfolio</h1>
                </div>
                <div className="filter">
                    <Select
                        value={this.state.selectedStack}
                        onChange={this.filterByStack}
                        isMulti
                        name="colors"
                        options={technologies}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                </div>
                <div className="content">
                    {this.state.filteredProjects.slice(0, this.state.length).map(project => <Box title={project.title}
                                                                                                 img={project.img}
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
