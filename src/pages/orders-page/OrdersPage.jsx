import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Order from "../../components/orders/Order";
import { auth, db } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, doc, getDocs } from 'firebase/firestore';

export default function OrdersPage() {

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

    useEffect(() => {
        getOrdersFromDB();
    }, [user]);

    return (
        <div>
            <h1>Orders history</h1>
            <div>

                <div>
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
        </div>
    )
}
