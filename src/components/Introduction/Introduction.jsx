import React, {Component} from 'react';
import MainPicture from "../../assets/main-picture.jpeg"
import "./Introduction.css";

class Introduction extends Component {
    render() {
        return (
            <div className="intro">
                <div className="page-title">Dorota Zelga</div>
                <div className="content">
                    <p>
                        Nulla facilisi. Aenean sapien nisi, sagittis nec lectus sed, finibus blandit massa. Mauris
                        facilisis lacus velit. Nam suscipit, erat sit amet tempor vestibulum, est ante sagittis lectus,
                        hendrerit tempor dolor odio eget sapien. Donec hendrerit velit at leo aliquam, non vehicula
                        nulla
                        maximus. Aliquam eu turpis sed enim pulvinar sagittis a ac leo. Praesent vitae suscipit eros.
                        Sed
                        sagittis, mi quis faucibus volutpat, sapien orci varius erat, et facilisis tellus sapien eu
                        nunc.
                    </p>
                </div>
                <div className="main-picture"/>
            </div>
        )
    }
}

export default Introduction
