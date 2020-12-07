import React,{Component} from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom';

const lurl = "https://developerfunnel.herokuapp.com/location";
const hurl = "https://developerfunnel.herokuapp.com/hotels?city="

class Search extends Component{
    //1
    constructor(){
        super()

        this.state={
            location:'',
            hotels:''
        }
    }

    renderCity = (data) => {
        if(data){
            return  data.map((item) => {
                return(
                    <option value={item.city}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    renderHotel = (data) => {
        if(data){
            return  data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.name} | {item.locality}
                    </option>
                )
            })
        }
    }

    handleCity=(event) =>{
        const cityId = event.target.value;
        console.log(cityId)
        fetch(`${hurl}${cityId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({hotels:data})
        })
    }

    handleHotel =(event) => {
        this.props.history.push(`/details/${event.target.value}`)
    }

    //2
    render(){
        console.log("state>>",this.state.location)
        return(
           <div className="imageContainer">
               <div id="logo">
                   D!
               </div>
               <div className="heading">
                   Plan Trip With Us
               </div>
               <div className="locationSelector">
                   <select className="locationDropDown" onChange={this.handleCity}>
                       <option>-----SELECT CITY-----</option>
                       {this.renderCity(this.state.location)}
                   </select> 
                   <select className="reataurantsinput" onChange={this.handleHotel}>
                       <option>-----SELECT HOTEL-----</option>
                       {this.renderHotel(this.state.hotels)}
                   </select>
               </div>
           </div>
        )
    }

    //3
    componentDidMount(){
        fetch(lurl,{method:'GET'})
        .then((response) => response.json())
        .then((data) =>{
            //console.log(data)
            this.setState({location:data})
        })
        .catch((err) => {})
        
    }
}

export default withRouter(Search);