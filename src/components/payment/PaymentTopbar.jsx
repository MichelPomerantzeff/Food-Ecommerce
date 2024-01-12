import Logo from '../logo/Logo';
import { useSelector } from 'react-redux';

export default function PaymentTopbar() {

    const cartItems = useSelector(state => state.cart);

    return (
        <div className='bg-rose-600 py-2 px-5'>
            <div className="flex justify-between items-center max-w-[1200px] m-auto">
                <Logo />
                <div className="text-white">
                    <span>
                        You have <span className='font-bold underline'>{cartItems.totalItems} {cartItems.totalItems > 1 ? 'items' : 'item'}</span> in your cart
                    </span>
                </div>
                <div className="font-bold  text-white">
                    <span>Total: €{(cartItems.totalPrice - (cartItems.totalPrice * cartItems.discount)).toFixed(2)}</span>
                </div>
            </div>
        </div>
    )
}
