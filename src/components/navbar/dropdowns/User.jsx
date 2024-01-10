import { AccountCircle as User } from "@mui/icons-material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from '../../../config/firebase';

export default function UserDropdown({ email }) {

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //Log user out
    function signUserOut() {
        signOut(auth)
        navigate("/sign-in")
    }

    return (
        <>
            {
                email ?
                    <div className={`cursor-pointer rounded hover:bg-orange-100 ${open ? "bg-orange-100" : ""}`}>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <div className='flex items-center gap-1 text-black text-xs'>
                                <User className='' />
                                <span className="font-semibold hidden md:inline">{email}</span>
                            </div>
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={() => navigate('/orders')} className="dropdown-option hover:bg-red-500">Orders history</MenuItem>
                            <MenuItem onClick={signUserOut} className="dropdown-option">Sign out</MenuItem>
                        </Menu>
                    </div>
                    :
                    <div className="cursor-pointer" onClick={() => navigate("/sign-in")}>
                        <User />
                        <span className="font-semibold hidden md:inline">Login</span>
                    </div>
            }
        </>
    );
}