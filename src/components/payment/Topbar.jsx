import React from 'react'
import Logo from '../logo/Logo'
import { useSelector } from 'react-redux';

export default function Topbar() {

    const cartItems = useSelector(state => state.cart);

    return (
        <div className='topbar'>
            <div className="topbar-content">
                <Logo />
            </div>
            <div className="topbar-content">
                <span>
                    You have <strong style={{ textDecoration: 'underline' }}>{cartItems.totalItems} {cartItems.totalItems > 1 ? 'items' : 'item'}</strong> in your cart
                </span>
            </div>
            <div className="topbar-content">
                <span>Total: €{(cartItems.totalPrice - (cartItems.totalPrice * cartItems.discount)).toFixed(2)}</span>
            </div>
        </div>
    )
}
