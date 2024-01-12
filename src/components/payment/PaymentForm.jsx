import { useEffect, useState } from 'react';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../config/firebase';
import { doc, setDoc } from 'firebase/firestore';
import axios from '../../config/axios';
import PaymentTopbar from './PaymentTopbar';
import ConfirmItemsList from './ConfirmItemsList';

export default function PaymentForm() {

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    const [user] = useAuthState(auth);

    const cartItems = useSelector(state => state.cart);
    var orderNumber = Math.floor(Math.random() * 999999);

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        // Generate a client secret to charge a custumer
        axios({
            method: "post",
            url: `/payment/create?total=${(cartItems.totalPrice * 100).toFixed(0)}`
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
            amount: cartItems.totalPrice - (cartItems.totalPrice * cartItems.discount),
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
        <div className="">
            <PaymentTopbar />
            <ConfirmItemsList />
            <h1 className='text-[1.5rem] font-bold text-center mb-10'>Payment method</h1>
            <form
                className='max-w-[600px] w-[90vw] m-auto border border-gray-200 p-4 rounded'
                onSubmit={handleSubmit}
            >
                <PaymentElement onChange={handleChange} />
                {error && <div>{error}</div>}
                <button
                    className={`mt-3 font-semibold w-full rounded p-2
                    ${disabled ? 'border-2 border-gray-200 text-gray-300'
                            : 'border-2 border-blue-400 text-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white transition'}`}
                    disabled={processing || disabled || succeeded}
                >
                    <span>
                        {processing ? <p>PROCESSING...</p> : `PAY €${(cartItems.totalPrice - (cartItems.totalPrice * cartItems.discount)).toFixed(2)}`}
                    </span>
                </button>
            </form>

        </div>
    );
}