import React,{Component} from 'react';
import axios from 'axios';
import BookingDisplay from './bookingDisplay';

const url = "https://developerfunnel.herokuapp.com/allBooking";

class Booking extends Component{
    constructor(){
        super()

        this.state={
            booking:''
        }
    }

    render(){
        return(
            <div className="container">
                <BookingDisplay bookdata={this.state.booking}/>
            </div>
        )
    }

    componentDidMount(){
        axios.get(url)
        .then((response) => {this.setState({booking:response.data})})
    }
}

export default Booking;