import React, {Component} from 'react';
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <div id="footer">Copyright ©{new Date().getFullYear()} All rights reserved | Photos:
                <a href="https://unsplash.com"> Unsplash</a></div>
        )
    }
}

export default Footer
