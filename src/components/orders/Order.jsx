import "./Orders.css";

export default function Order({ order }) {
    
    // TODO: Add Tailwind here
    return (
        <div className='order'>
            <span className='order-row'><strong>Order number: </strong>{order?.orderNumber}</span>
            <span className='order-row'><strong>Date: </strong>{order?.created}</span>
            <span className='order-row'><strong>Total: </strong>€{parseFloat(order?.amount).toFixed(2)}</span>
            <a>SHOW DETAILS</a>
        </div>
    )
}
