import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <div>
            <header>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/post">Post</Link>
            </header>
        </div>
    )
}

export default Header;