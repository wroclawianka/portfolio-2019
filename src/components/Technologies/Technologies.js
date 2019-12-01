import React from 'react';
import './Technologies.css';

const stackList = [
    {label: "React", img: "assets/technologies/icon-react.svg"},
    {label: "Angular", img: "assets/technologies/icon-angular.svg"},
    {label: "JavaScript", img: "assets/technologies/icon-javascript.svg"},
    {label: "TypeScript", img: "assets/technologies/icon-typescript.svg"},
    {label: "jQuery", img: "assets/technologies/icon-jquery.svg"},
    {label: "CSS", img: "assets/technologies/icon-css.svg"},
    {label: "HTML", img: "assets/technologies/icon-html.svg"},
    {label: "Selenium", img: "assets/technologies/icon-selenium.svg"},
];

const Technologies = () => {
    return (
        <div id="technologies" className="short-block">
            <div className="content">
                {stackList.map(stack => {
                    return <div className='stack opacity animated animatedFadeInUp fadeInUp'>
                        <img className='' id={stack.label.toLowerCase()} src={stack.img} alt={stack.label} height="50"/>
                        <p className='stack-label'>{stack.label}</p>
                    </div>
                })}
            </div>
        </div>
    )
};

export default Technologies;