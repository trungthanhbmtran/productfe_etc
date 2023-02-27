import {
    Dialog,
    // DialogTitle,
    Slide,
    // Box,
    // IconButton,
    DialogContent,
    // Typography,
    // Button,
    // Stack,
} from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import styled from "@emotion/styled";
// import { useTheme } from "@mui/material/styles";
// import { useMediaQuery } from "@mui/material";
import Image from "next/image";
// import { useSelector } from "react-redux";
import * as React from 'react';
// function SlideTransition(props) {
//     return <Slide direction="down" {...props} mountOnEnter unmountOnExit/>;
// }

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} mountOnEnter unmountOnExit />;
  });

// const ProductDetailWrapper = styled(Box)(({ theme }) => ({
//     display: "flex",
//     padding: theme.spacing(4),
// }));

// const ProductDetailInfoWrapper = styled(Box)(() => ({
//     display: "flex",
//     flexDirection: "column",
//     maxWidth: 500,
//     lineHeight: 1.5,
// }));

const ProductImg = ({ open, onClose, product }) => {
    // const theme = useTheme();
    // const matches = useMediaQuery(theme.breakpoints.down("md"));
    // console.log('product in productImg', product.k)
    // const Product = useSelector(state => state.product)
    return (
        <Dialog
            TransitionComponent={Transition}
            variant="permanant"
            open={open}
            onClose={onClose}
        >
            <DialogContent >
                {/* <h1>1111</h1> */}
                 <Image src={product}  width={460} height={460} alt="hinhanh" priority />
                {/* {product.map((e,i)=> <Image src={e.v}  width={200} height={200} layout="fixed" />)} */}
            </DialogContent>
        </Dialog>
    )
}

export default ProductImg