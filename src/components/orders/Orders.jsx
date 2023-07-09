import React, { useEffect, useState } from 'react';
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
        };
    };

    console.log(ordersData)

    useEffect(() => {
        getOrdersFromDB();
    }, [user]);

    return (
        <div className='orders'>
            <h1>Orders history</h1>
            <div className='orders-wrapper'>
                {!user && navigate('/')}
                {
                    ordersData?.length > 0 ?
                        ordersData.map(order => (
                            <Order key={order.id} order={order} />
                        ))
                        :
                        <div>
                            You have no orders yet
                        </div>
                }
            </div>
        </div>
    )
}
