import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Introduction from "./components/Introduction/Introduction";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

const App = () => {
    return (
       <div className="container">
           <Introduction/>
           <Portfolio/>
       </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root'));
