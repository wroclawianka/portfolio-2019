import React, {Component} from 'react';
import "./Footer.css";

const links = [
    {type: "linkedin", href: "https://www.linkedin.com/in/dorotazelga"},
    {type: "angellist", href: "https://angel.co/dorota-zelga"},
    {type: "github", href: "https://github.com/wroclawianka"},
    {type: "twitter", href: "https://twitter.com/dorotazelga"},
]


class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div className="footer-links">
                    {links.map(link => {
                        return (
                            <a className="icon" href={link.href} target="_blank"
                               rel="noopener noreferrer">
                                <i className={"fa fa-" + link.type} aria-hidden="true"/></a>
                        )
                    })}
                </div>
                <div>Copyright ©{new Date().getFullYear()} All rights reserved | Photos:
                    <a href="https://unsplash.com"> Unsplash</a></div>
            </div>
        )
    }
}

export default Footer
