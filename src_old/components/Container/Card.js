import CardMui from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button, CardActions, Rating } from '@mui/material';
import Link from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../../redux/Actions'

const Card = ({ productId, PathImg, name, discount, brand, sales, rating, cost, total }) => {
    // console.log('PathImg', PathImg)
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
        <CardMui sx={{ maxWidth: 345, minHeight: 380 , borderRadius :  '20px ' }}>
            <CardActionArea component={Link} href={`/product/${productId}`} sx={{ minHeight: 380 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={PathImg.at(0).v}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {brand}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {sales}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {cost}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {total}
                    </Typography>
                    <Rating name="read-only" value={rating} readOnly />
                </CardContent>
            </CardActionArea>
            <CardActions>
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