import React, {Component} from 'react';
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <div id="footer">Copyright ©{new Date().getFullYear()} All rights reserved</div>
        )
    }
}

export default Footer
