export default function Order({ order }) {

    return (
        <div className="flex">
            <div className='flex flex-col border border-gray-200 p-2 rounded'>
                <span className=''><strong>Order number: </strong>{order?.orderNumber}</span>
                <span className=''><strong>Date: </strong>{order?.created}</span>
                <span className=''><strong>Total: </strong>€{parseFloat(order?.amount).toFixed(2)}</span>
                <a className="text-center text-blue-400 text-[.6rem] font-semibold cursor-pointer hover:underline">SHOW DETAILS</a>
            </div>
        </div>
    )
}
