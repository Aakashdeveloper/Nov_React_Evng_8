import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header'
import Footer from './component/Footer';

const App = () => {
    return(
        <React.Fragment>
            <Header/>
            <h1>My React App</h1>
            <h2>Application Test</h2>
            <Footer/>
        </React.Fragment>
        
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))