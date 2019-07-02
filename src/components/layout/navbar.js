import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLink from "./signedinlink";
import SignedOutLink from './signedoutlinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth } = props;
    // console.log(auth);
    const links = auth.uid ? <SignedInLink /> : <SignedOutLink />;
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Blog App</Link>
                { links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)