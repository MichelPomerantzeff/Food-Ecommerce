import { MenuBook } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function MenuDropdown() {

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={`cursor-pointer rounded hover:bg-orange-100 ${open ? "bg-orange-100": ""}`}>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <div className='flex gap-1 text-black' >
                    <MenuBook className=''/>
                    <span className='hidden md:inline'>MENU</span>
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
                <MenuItem onClick={() => navigate('/main-course')} className="dropdown-option">Main course</MenuItem>
                <MenuItem onClick={() => navigate('/healthy')} className="dropdown-option">Healthy options</MenuItem>
                <MenuItem onClick={() => navigate('/snacks')} className="dropdown-option">Snacks</MenuItem>
                <MenuItem onClick={() => navigate('/lunch-box')} className="dropdown-option">Lunchbox</MenuItem>

            </Menu>
        </div>
    );
}


