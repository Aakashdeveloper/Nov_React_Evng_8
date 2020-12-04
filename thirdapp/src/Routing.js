import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import ListingApi from './Component/listing/listingApi';
import HotelDetails from './Component/details/hotelDetails';
import BookingApi from './Component/booking/bookingApi';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/list/:id" component={ListingApi}/>
                <Route exact path="/details/:id" component={HotelDetails}/>
                <Route exact path="/viewbooking" component={BookingApi}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;