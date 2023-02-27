import DrawerMui from '@mui/material/Drawer'
import { useDispatch, useSelector } from 'react-redux'
import { DrawerWidth } from '../../lib/theme'
import * as Actions from '../../../redux/Actions'
import Image from 'next/image'
import { Button, Divider, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { useEffect} from 'react'
import CartInfo from './cartinfo'

const Cart = (props) => {
    const { window } = props;
    const dispatch = useDispatch()
    const CartState = useSelector(state => state.cartOpen)
    const cartDetailState = useSelector(state => state.cartDetail)
  
    const container = window !== undefined ? () => window().document.body : undefined;

    // useEffect(()=>{
    //     console.log('re render')
    // },[])
    return (
        <DrawerMui
            container={container}
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DrawerWidth },
            }}
            anchor="right"
            open={CartState}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            onClose={() => dispatch(Actions.default.set_cartOpen(false))}
        >
            <Typography variant='h6' align='center'>Giỏ Hàng</Typography>
            <Divider variant='middle'></Divider>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    {cartDetailState.map(e=> <CartInfo key={e.productId} path={e.PathImg} cost={e.cost} amount={e.amount} />)}
                    <Button variant='contained'>Thanh toan gio hang</Button>
                </Grid>
            </Grid>
        </DrawerMui>
    )

}

export default Cart