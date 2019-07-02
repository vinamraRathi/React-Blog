import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLink from "./signedinlink";
import SignedOutLink from './signedoutlinks'
import { connect } from 'react-redux'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Blog App</Link>
                <SignedInLink />
                <SignedOutLink />
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}

export default connect(mapStateToProps)(Navbar)