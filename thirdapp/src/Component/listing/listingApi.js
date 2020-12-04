import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import RoomFilter from '../filters/roomFilter';
import CostFilter from '../filters/costfilter';


const url = "https://developerfunnel.herokuapp.com/hotellist";

class Listing extends Component{
    constructor(){
        super()

        this.state={
            hoteldata:''
        }
    }

    setDataAsPerFilter(sortedData){
        this.setState({hoteldata:sortedData})
    }

    render(){
        console.log(this.state.hoteldata)
        return(
            <div className="row">
                <div className="col-md-2">
                    <RoomFilter filterperroom={(data) => {this.setDataAsPerFilter(data)}}/>
                    <CostFilter filterpercost={(data) => {this.setDataAsPerFilter(data)}}/>
                </div>
                <div className="col-md-10">
                    <ListingDisplay hotellist={this.state.hoteldata}/>
                </div>
            </div>
        )
    }

    componentDidMount(){
        var tripid = this.props.match.params.id;
        sessionStorage.setItem('tripid',tripid)
        axios.get(`${url}/${tripid}`)
        .then((response) => {this.setState({hoteldata:response.data})})
    }
}

export default Listing;