import { Button, Stack, Typography } from "@mui/material"
import Image from "next/image"

const CartInfo = ({ amount, path, cost }) => {
    // console.log('path',path,cost)
    const value = amount * cost
    return (
        <Stack direction='row' spacing={2}>
            <Image src={path} width={50} height={50} alt="111"></Image>
            <Typography >Số lượng : {amount}</Typography>
            <Typography >Tổng tiền: {value} </Typography>
        </Stack>

    )
}

export default CartInfo