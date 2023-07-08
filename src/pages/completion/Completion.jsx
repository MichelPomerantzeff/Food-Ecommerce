import React, { useEffect } from 'react'
import './Completion.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { reset } from '../../redux/features/cartSlice';

export default function Completion() {

    const dispatch = useDispatch();

    useEffect(() => {
        clearCart();
    }, []);

    const clearCart = () => {
        dispatch((reset()))
    };

    return (
        <div className="completion">
            <Link to={'/'} className='back-home'>GO BACK TO HOME PAGE</Link>
            <div className="thank-you">
                <h1> Thank you! 🎉 </h1>
            </div>
        </div>
    )
}
