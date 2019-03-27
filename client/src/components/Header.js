import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './core/auth/GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">LENTERA</Link>
            <div className="right menu">
                <Link to="/" className="item">All Todos</Link>
                <Link to="otherpage" className="item">Other Page</Link>
                <GoogleAuth />
            </div>
        </div>
    );
};

export default Header;