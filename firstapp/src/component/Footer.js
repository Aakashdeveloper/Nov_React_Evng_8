import React,{Fragment} from 'react';

const Footer = (props) => {
    return(
        <Fragment>
            <hr/>
            <center>
                <h2>&copy; NareshIT {props.month} {props.year}</h2>
            </center>
        </Fragment>
    )
}

export default Footer;