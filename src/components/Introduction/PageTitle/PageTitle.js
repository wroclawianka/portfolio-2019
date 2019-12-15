import React, {Component} from 'react';
import Links from "../../Links/Links";

class PageTitle extends Component {
    componentDidMount() {
        this.blinkUnderscore();
    }

    blinkUnderscore = () => {
        let visible = true;
        let con = document.getElementById('underscore');
        window.setInterval(() => {
            if (visible === true) {
                con.className = 'console-underscore hidden';
                visible = false;

            } else {
                con.className = 'console-underscore';
                visible = true;
            }
        }, 400)
    };

    render() {
        return (
            <div className="page-title">
                <div className="title">
                    dorota.zelga
                    <span className='console'>
                            >
                            <span className='console-underscore' id='underscore'>&#95;</span>
                        </span>
                </div>
                <Links/>
            </div>
        )
    }
}

export default PageTitle;