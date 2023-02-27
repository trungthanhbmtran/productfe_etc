import { Button, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AppBarMui from '@mui/material/AppBar';
import MenuItems from './menu';
import {menu} from '../../../../data/MenuData'
import { useDispatch } from 'react-redux';
import * as Actions from '../../../../redux/Actions'

const AppBar = () => {
    const dispatch = useDispatch()
    return (
        <AppBarMui position='sticky'>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => dispatch(Actions.default.set_drawerOpen(true))}
                    edge="start"
                    // sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    sx={{ mr: 2}}
                >
                    <MenuIcon />
                </IconButton>
                {menu.map((item,key) => <MenuItems key={key} item={item}/>)}
            </Toolbar>
        </AppBarMui>
    )
}

export default AppBar