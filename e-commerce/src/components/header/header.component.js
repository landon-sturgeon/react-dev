import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/under-construction.svg";

import "./header.styles.scss";

const Header = () => (
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
            <Link className="option-link" to="/sign-in">
                SIGN UP
            </Link>
        </div>
    </div>
);

export default Header;