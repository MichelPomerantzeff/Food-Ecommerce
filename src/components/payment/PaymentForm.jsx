import React, { useEffect, useState } from 'react'
import './Payment.css'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../config/firebase';
import { doc, setDoc } from 'firebase/firestore';
import axios from '../../config/axios';
import moment from 'moment';

export default function PaymentForm() {

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    const [user] = useAuthState(auth);

    const cartItems = useSelector(state => state.cart);
    const total = cartItems.reduce((acc, cur) => ((cur.price * cur.units) + acc), 0);
    var orderNumber = Math.floor(Math.random() * 999999);

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        // Generate a client secret to charge a custumer
        axios({
            method: "post",
            url: `/payment/create?total=${(total * 100).toFixed(0)}`
        }).then(res => {
            setClientSecret(res.data.clientSecret)
            console.log(res.data.clientSecret)
        })
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        elements.submit();

        setDoc(doc(db, "users", user.email, "orders", clientSecret), {
            orderNumber: orderNumber,
            items: cartItems,
            amount: (total),
            created: new Date().toLocaleString(),
        });

        await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: `${window.location.origin}/completion`,
            },
        });
        setSucceeded(true);
        setError(null);
        setProcessing(false);
    };

    const handleChange = e => {
        // Listen for changes in the Card Element
        // And display any error as the user types their card number
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    };

    return (
        <div className="payment">
            <h4>Hello, {user?.displayName}</h4>
            <div className="all-cart-items">
                {
                    cartItems?.map(item => {
                        return (
                            <div key={item.id} className="cart-item">
                                <span>{item.title}, </span>
                                <span>{item.units} units</span>
                            </div>
                        )
                    })
                }
            </div>
            <h3 className="total-price">
                €{total.toFixed(2)}
            </h3>
            <div className="payment-wrapper">
                <h1>Payment method</h1>
                <form onSubmit={handleSubmit}>

                    <PaymentElement onChange={handleChange} />

                    {error && <div>{error}</div>}
                    <button
                        className={`${disabled ? 'disabled-btn' : 'primary-btn'}`}
                        disabled={processing || disabled || succeeded}
                    >
                        <span>
                            {processing ? <p>PROCESSING...</p> : `PAY ${total.toFixed(2)}`}
                        </span>
                    </button>
                </form>
            </div>
        </div>
    );
};