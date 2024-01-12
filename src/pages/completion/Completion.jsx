import { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        <div className="">
            <Link to={'/'}
                className='flex justify-center text-green-600 text-[.7rem] font-semibold mt-10
                hover:underline'
            >
                GO BACK TO HOME PAGE
            </Link>
            <div className="font-bold text-[2rem] text-center mt-10">
                <h1> Thank you! 🎉 </h1>
            </div>
        </div>
    )
}
