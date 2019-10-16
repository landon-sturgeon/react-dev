import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/under-construction.svg";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option-link" to="/shop">
                SHOP
            </Link>
            <Link className="option-link" to="/shop">
                CONTACT
            </Link>
            {
                currentUser ?
                <div className="option-link" onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className="option-link" to="/sign-in">SIGN IN</Link>
            }

        </div>
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);