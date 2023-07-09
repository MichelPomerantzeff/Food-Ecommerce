import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../config/firebase';
import { useSelector } from 'react-redux';

export default function ConfirmItemsList() {

    const [user] = useAuthState(auth);
    const cartItems = useSelector(state => state.cart);

    return (
        <div className='payment-items-list'>
            <p>Hello, {user?.displayName}. Please confirm the amount of items you have added to your cart in the list below before making the payment.</p>
            <div className="payment-items-list-wrapper">
                {
                    cartItems.cartItems?.map(item => {
                        return (
                            <div key={item.id} className="payment-item">
                                <img src={item.image} alt="" title={item.title}/>
                                <div className="payment-item-fields">
                                    <div className='payment-item-field'>{item.title} </div>
                                    <div className='payment-item-field'>{item.units} {item.units > 1 ? 'units' : 'unit'}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
