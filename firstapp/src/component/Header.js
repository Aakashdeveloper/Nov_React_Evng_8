import React,{Component,Fragment} from 'react';
import './Header.css'

class Header extends Component {

    constructor(){
        super()

        this.state={
            title:'React App',
            keyword:'User Text Here'
        }
    }

    handleChange=(e)=>{
        console.log(e.target.value)
        this.setState({keyword:e.target.value})
    }

    render(){
        console.log("inside render>>>>>")
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input onChange={this.handleChange}/>
                        <div style={{color:'white'}}>{this.state.keyword}</div>
                    </center>
                </header>
                <hr/>
            </Fragment>
        )
    }
    
}

export default Header;