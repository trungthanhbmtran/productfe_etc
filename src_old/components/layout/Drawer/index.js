import DrawerMui from '@mui/material/Drawer'
import { useDispatch, useSelector } from 'react-redux'
import { DrawerWidth } from '../../../lib/theme'
import * as Actions from '../../../../redux/Actions'
import { menu } from '../../../../data/MenuData'
import MenuItem from './MenuMobile'

const Drawer = (props) => {
    const { window } = props;
    const dispatch = useDispatch()
    const DrawerState = useSelector(state => state.drawerOpen)
    // console.log('DrawerState', DrawerState)
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <DrawerMui
            container={container}
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DrawerWidth },
            }}
            anchor="left"
            open={DrawerState}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            onClose={() => dispatch(Actions.default.set_drawerOpen(false))}
        >
            {menu.map((item,key)=> <MenuItem key={key} item={item}/>)}
        </DrawerMui>
    )
}

export default Drawer