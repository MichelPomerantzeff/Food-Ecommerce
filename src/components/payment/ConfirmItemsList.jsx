import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../config/firebase';
import { useSelector } from 'react-redux';

export default function ConfirmItemsList() {

    const [user] = useAuthState(auth);
    const cartItems = useSelector(state => state.cart);

    return (
        <div className='max-w-[1200px] m-auto py-10 px-5'>
            <p className='font-bold text-center'>Hello, {user?.displayName}. Please confirm the amount of items you have added to your cart in the list below before making the payment.</p>
            <div className='flex justify-center'>
                <div className="flex gap-2 border border-gray-200 rounded p-2 mt-5 overflow-auto">
                    {
                        cartItems.cartItems?.map(item => {
                            return (
                                <div key={item.id} className="min-w-32 w-32 border border-gray-300 rounded overflow-hidden">
                                    <img className='' src={item.image} alt="" title={item.title} />
                                    <div className='font-semibold whitespace-nowrap text-ellipsis overflow-hidden pl-1'>{item.title} </div>
                                    <div className='text-center font-semibold'>{item.units} {item.units > 1 ? 'units' : 'unit'}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
