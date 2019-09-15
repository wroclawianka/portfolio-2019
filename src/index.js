import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Introduction from "./components/Introduction/Introduction";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
       <div className="container">
           <Introduction/>
           <Portfolio/>
           <Footer/>
       </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root'));
