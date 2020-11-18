import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'

const App = () => {
    return(
        <div>
            <Header/>
            <h1>My React App</h1>
            <h2>Application Test</h2>
        </div>
        
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))