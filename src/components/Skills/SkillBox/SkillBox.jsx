import React, {Component} from 'react';
import "./SkillBox.css";

class SkillBox extends Component {
    render() {
        return (
            <div className={this.props.style}>{this.props.name}</div>
        )
    }
}

export default SkillBox
