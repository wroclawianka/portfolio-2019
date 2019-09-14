import React from 'react';
import ReactDOM from 'react-dom';
import Introduction from "./components/Introduction";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

const App = () => {
    return (
       <div>
           <Introduction/>
           <Portfolio/>
           <Footer/>
       </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root'));
