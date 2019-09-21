import React, {Component} from 'react';
import "./Skills.css";
import SkillBox from "./SkillBox/SkillBox";

const skills = [
    {name: "Angular 2+", style: "d"},
    {name: "JavaScript", style: "b"},
    {name: "CSS", style: "b"},
    {name: "jQuery", style: "a"},
    {name: "ECMA Script 6", style: "e"},
    {name: "GIT", style: "c"},
    {name: "TypeScript", style: "c"},
    {name: "React", style: "d"},
    {name: "HTML", style: "a"},
    {name: "Selenium", style: "a"},
    {name: "Angular JS", style: "a"},
    {name: "SASS", style: "b"},
    {name: "Node.js", style: "f"},
];

class Skills extends Component {
    render() {
        return (
            <div id="skills" className="block">
                <div className="title">
                    <h1>Skills & Experience</h1>
                </div>
                <div className="content">
                    {skills.map((skill) => {
                        return <SkillBox name={skill.name} key={skill.name} style={skill.style}/>
                    })}
                </div>
            </div>
        )
    }
}

export default Skills
