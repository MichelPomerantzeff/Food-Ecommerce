import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, doc, getDocs } from 'firebase/firestore';
import Order from './Order';

export default function Orders() {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [ordersData, setOrdersData] = useState([])

    const getOrdersFromDB = async () => {
        if (user) {
            const docRef = doc(db, "users", user.email);
            const colRef = collection(docRef, 'orders')
            const data = await getDocs(colRef);
            setOrdersData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
    };

    useEffect(() => {
        getOrdersFromDB();
    }, [user]);

    return (
        <div className='py-10 max-w-[1200px] w-[90vw] m-auto'>
            <h1 className='text-[2rem] text-center font-bold mb-10'>Orders history</h1>
            <div className='flex flex-wrap gap-2'>
                {!user && navigate('/')}
                {
                    ordersData?.length > 0 ?
                        ordersData.map(order => (
                            <Order key={order.id} order={order} />
                        ))
                        :
                        <div className='border-2 border-gray-300 text-gray-300 text-[1.5rem] 
                        sm:text-[2rem] font-semibold w-full text-center rounded p-5'>
                            You have no orders
                        </div>
                }
            </div>
        </div>
    )
}
