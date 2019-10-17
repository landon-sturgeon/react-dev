import React from "react";
import { connect } from "react-redux";

import { removeItemFromCart } from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={ imageUrl } alt="item" />
            </div>
            <span className="name">{ name }</span>
            <span className="quantity">{ quantity }</span>
            <span className="price">{ price }</span>
            <div className="remove" onClick={() => clearItem(cartItem)}>
                &#10005;
            </div>
        </div>
    )
};

const mapDispathToProps = dispatch => ({
    clearItem: item => dispatch(removeItemFromCart(item))
});

export default connect(null, mapDispathToProps)(CheckoutItem);