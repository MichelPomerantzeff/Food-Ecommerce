import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ItemInCart from "./ItemInCart";
import { useDispatch, useSelector } from "react-redux";
import { emptyBox } from '../../data/data';
import { reset } from "../../redux/features/cartSlice";
import { useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";

export default function CartDrawer() {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart);
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const clearCart = () => {
        dispatch((reset()))
    }

    const [state, setState] = useState({ right: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box role="presentation" onKeyDown={toggleDrawer(anchor, false)}>
            <main className="flex flex-col justify-between h-screen max-w-[80vw] min-w-[300px]">
                <div className="flex items-center justify-between p-4 sticky top-0 bg-white border-b border-gray-300">
                    {
                        cartItems.cartItems?.length > 0 ?
                        <div className="font-bold">{cartItems.totalItems} {cartItems.totalItems > 1 ? 'items' : 'item'}</div>
                        :
                        <div></div>
                    }
                    <div
                        onClick={toggleDrawer("right", false)}
                        className="flex cursor-pointer rounded-full bg-blue-400  border-2 border-blue-500 p-[1px]
                        scale-75 hover:bg-blue-500"
                    >
                        <CloseOutlinedIcon className="text-white" />
                    </div>
                </div>
                <div className="grow">
                    <div className='text-center'>
                        {
                            cartItems.cartItems?.length > 0 &&
                            <button
                                className="bg-red-500 text-white [text-shadow:_1px_1px_1px_black] text-[.8rem] 
                                my-4 font-bold m-auto rounded border-[3px] border-red-900 px-2"
                                onClick={clearCart}
                            >
                                REMOVE ALL
                            </button>
                        }
                    </div>
                    <div className='flex flex-col gap-3 px-2 py-4'>
                        {
                            cartItems.cartItems?.length > 0 ?
                                cartItems.cartItems?.map((item, index) => {
                                    return (
                                        <>
                                            <ItemInCart key={item.id} dish={item} />
                                            {
                                                index != cartItems.cartItems.length - 1 &&
                                                <Divider />
                                            }
                                        </>
                                    )
                                })
                                :
                                <div className="flex flex-col justify-center items-center h-screen mt-[-80px]">
                                    <img src={emptyBox} alt="EMPTY BOX" />
                                    <span className='font-bold'>YOUR CART IS EMPTY</span>
                                </div>
                        }
                    </div>
                </div>
                {
                    cartItems.cartItems?.length > 0 &&
                    <div className="flex flex-col gap-3 border-t border-gray-300 p-4 sticky bottom-0 bg-white">
                        <div className="flex justify-between">
                            <span className="font-semibold">Subtotal</span>
                            <span className="font-semibold">€{cartItems.totalPrice}</span>
                        </div>
                        <Divider />
                        <div className="flex justify-between">
                            <span className="font-semibold">Discount</span>
                            <span className="font-semibold">€{(cartItems.totalPrice * cartItems.discount).toFixed(2)}</span>
                        </div>
                        <Divider />
                        <div className="flex justify-between">
                            <span className="font-bold">Total</span>
                            <span className="font-bold">€{(cartItems.totalPrice - (cartItems.totalPrice * cartItems.discount)).toFixed(2)}</span>
                        </div>

                        <button
                            onClick={() => navigate(`${user ? '/payment' : "/sign-in"}`)}
                            className="flex justify-center border-2 border-blue-400 text-blue-400 font-semibold 
                            p-1 w-full rounded cursor-pointer hover:bg-blue-400 hover:text-white"
                        >
                            {`${user ? "Checkout" : "Login"}`}
                        </button>
                    </div>
                }
            </main>
        </Box>
    );

    return (
        <div>
            <div onClick={toggleDrawer("right", true)} className="flex gap-1 cursor-pointer">
                <Badge badgeContent={cartItems.totalItems} color='primary'>
                    <ShoppingCartOutlined />
                </Badge>
                <span className="font-semibold hidden md:inline">CART</span>
            </div>
            <SwipeableDrawer
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
                onOpen={toggleDrawer("right", true)}
            >
                {list("right")}
            </SwipeableDrawer>
        </div>
    );
}