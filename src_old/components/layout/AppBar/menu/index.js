import MuiMenu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Fade from '@mui/material/Fade';
import { Fragment, useState } from "react";
import { Button, Collapse, Link } from "@mui/material";
import { hasChildren } from '../../../../ultis/hasChildren'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Colors } from '../../../../lib/theme'
const SingleLevel = ({ item }) => {
    return (
        <MenuItem
            sx={{ color: Colors.secondary }}
            divider={true}
            // dense={true}
            autoFocus={true}
            disableRipple
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
        >
            {item.title}
        </MenuItem>
    )
}

const MultiLevel = ({ item }) => {
    const { items: children } = item;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Fragment>
            <Button
                sx={{ color: Colors.secondary }}
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                // onMouseOver={handleClick}
                onClick={handleClick}
            >
                {item.title}
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </Button>
            <MuiMenu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <Collapse in={open} timeout="auto" unmountOnExit
                >
                    {children.map((child, key) => <MenuItems key={key} item={child} />)}
                </Collapse>
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem> */}
            </MuiMenu>
        </Fragment>

    )
}

const MenuItems = ({ item }) => {
    const Component = hasChildren(item) ? MultiLevel : SingleLevel;
    return <Component item={item} />;
};


// const Menu = () => {
//     return (
//         <Fragment>
//             {menu.map((e) =>
//                 e.items ? MultiMenu(e) : SingleMenu(e)
//             )}
//             {/* <Button
//                 sx={{ color: 'red' }}
//                 id="fade-button"
//                 aria-controls={open ? 'fade-menu' : undefined}
//                 aria-haspopup="true"
//                 aria-expanded={open ? 'true' : undefined}
//                 onClick={handleClick}

//             >
//                 Dashboard 1
//             </Button>
//             <Button
//                 sx={{ color: 'red' }}
//                 id="fade-button"
//                 aria-controls={open ? 'fade-menu' : undefined}
//                 aria-haspopup="true"
//                 aria-expanded={open ? 'true' : undefined}
//                 onClick={handleClick}

//             >
//                 Dashboard 2
//             </Button>
//             <Button
//                 sx={{ color: 'red' }}
//                 id="fade-button"
//                 aria-controls={open ? 'fade-menu' : undefined}
//                 aria-haspopup="true"
//                 aria-expanded={open ? 'true' : undefined}
//                 onClick={handleClick}

//             >
//                 Dashboard 3
//             </Button>
//             */}
// {/* <MuiMenu
//     id="fade-menu"
//     MenuListProps={{
//         'aria-labelledby': 'fade-button',
//     }}
//     anchorEl={anchorEl}
//     open={open}
//     onClose={handleClose}
//     TransitionComponent={Fade}
// >
//     <MenuItem onClick={handleClose}>Profile</MenuItem>
//     <MenuItem onClick={handleClose}>My account</MenuItem>
//     <MenuItem onClick={handleClose}>Logout</MenuItem>
// </MuiMenu> */}
//         </Fragment>

//     )
// }

export default MenuItems
