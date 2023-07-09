import React from 'react'
import Logo from '../logo/Logo'
import { useSelector } from 'react-redux';

export default function Topbar() {

    const cartItems = useSelector(state => state.cart);
    const cartUnits = cartItems?.reduce((acc, cur) => cur.units + acc, 0)
    const total = cartItems.reduce((acc, cur) => ((cur.price * cur.units) + acc), 0);

    return (
        <div className='topbar'>
            <div className="topbar-content">
                <Logo />
            </div>
            <div className="topbar-content">
                <span>ITEMS</span>
            </div>
            <div className="topbar-content">
                <span>TOTAL</span>
            </div>
        </div>
    )
}
