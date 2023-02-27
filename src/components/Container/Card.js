import CardMui from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions,Button } from '@mui/material';
import Link from '@mui/material';
import { useDispatch,useSelector } from 'react-redux';
import * as Actions from '../../../redux/Actions'

const Card = ({ PathImg,productId, time, name, path,brand,cost }) => {
    console.log('productId',PathImg)
    const dispatch = useDispatch()
    const cartDetail = useSelector(state => state.cartDetail)
    // console.log('cartDetail', cartDetail)

    const handleCart = () => {
        dispatch(Actions.default.set_cartOpen(true))
        const CheckCart = cartDetail.some((cartItem) => cartItem.productId === productId)
        if (CheckCart) {
            // dispatch(Actions.default.set_cartDetail(
            //     () => cartDetail.map((cartItem) => cartItem.productId === productId
            //         ? { ...cartItem, amount: cartItem.amount + 1 } : cartItem
            //     )
            // ))
            // dispatch(Actions.default.set_cartDetail([...cartDetail, { productId, PathImg, amount: 1 }]))
            const resultAdd = cartDetail.map((cartItem) => cartItem.productId === productId ? { ...cartItem, amount: cartItem.amount + 1 } : cartItem)
            // console.log('resultAdd',resultAdd)
            dispatch(Actions.default.set_cartDetail(resultAdd))
        } else {
            dispatch(Actions.default.set_cartDetail([...cartDetail, { productId, PathImg,cost, amount: 1 }]))
        }
    }
    return (
        <CardMui sx={{ maxWidth: 345, minHeight: 380, borderRadius: '20px ' }}>
            <CardActionArea component={Link} href={path} sx={{ minHeight: 380 }}>
                <CardMedia
                    component="img"
                    height="460"
                    width="auto"
                    image={PathImg}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="body1" component="div">
                        {brand}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="div">
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Typography>{time}</Typography>
            </CardActions>
            <CardActions sx={{justifyContent: "center"}}>
                <Button
                    onClick={handleCart}
                    size="small"
                    color="primary"
                    variant="contained" >
                    Thêm vào giỏ hàng
                </Button>
            </CardActions>
        </CardMui>
    )
}

export default Card