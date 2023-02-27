import { Box, Button, Container, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AppBarMui from '@mui/material/AppBar';
import MenuItems from './menu';
import { menu } from '../../../../data/MenuData'
import { useDispatch } from 'react-redux';
import * as Actions from '../../../../redux/Actions'
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchIcon from '@mui/icons-material/Search';

const AppBar = () => {
    const dispatch = useDispatch()
    const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    return (
        <AppBarMui 
        position='sticky' 
        color='inherit' 
        sx={{ 
            backgroundImage: "linear-gradient(to right,#980d05,#71030c, #b20000,#71030c, #b20000)", 
            justifyContent: "center", 
            alignItems:"center" 
        }}>
            {/* // <AppBarMui position='sticky' > */}
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => dispatch(Actions.default.set_drawerOpen(true))}
                        edge="start"
                        // sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {matches ? menu.map((item, key) => <MenuItems key={key} item={item} />) : null }
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton color="inherit">
                        <SearchIcon />
                    </IconButton>
                </Toolbar>
        </AppBarMui>
    )
}

export default AppBar