import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">LENTERA</Link>
            <div className="right menu">
                <Link to="/" className="item">All Todos</Link>
                <Link to="otherpage">Other Page</Link>
            </div>
        </div>
    );
};

export default Header;