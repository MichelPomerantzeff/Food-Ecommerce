import React from 'react';
import moment from "moment";

export default function Order({order}) {
    return (
        <div className='order'>
            <h1>Pedido</h1>
            <span className='order-code'><strong>Order code: </strong>{order?.id}</span>
            <span className='date-format'><strong>Date: </strong>{moment.unix(order?.created).format("MMMM Do YYYY, h:mma")}</span>
            <span className='order-total'><strong>Total: </strong>€{(order?.amount).toFixed(2)}</span>
        </div>
    )
}
