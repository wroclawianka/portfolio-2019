import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Introduction from "./components/Introduction/Introduction";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Links from "./components/Links/Links";

const App = () => {
    return (
       <div className="container">
           <Introduction/>
           <Portfolio/>
           <Links/>
           <Footer/>
       </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root'));
