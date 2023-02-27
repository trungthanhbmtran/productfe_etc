import {
    Dialog,
    DialogTitle,
    Slide,
    Box,
    IconButton,
    DialogContent,
    Typography,
    Button,
    Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useSelector } from "react-redux";

function SlideTransition(props) {
    return <Slide direction="down" {...props} mountOnEnter unmountOnExit/>;
}

const ProductDetailWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    padding: theme.spacing(4),
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: 500,
    lineHeight: 1.5,
}));

const ProductImg = ({ open, onClose, product }) => {
    // const theme = useTheme();
    // const matches = useMediaQuery(theme.breakpoints.down("md"));
    // console.log('product in productImg', product.k)
    // const Product = useSelector(state => state.product)
    return (
        <Dialog
            TransitionComponent={SlideTransition}
            variant="permanant"
            open={open}
            onClose={onClose}
        >
            <DialogContent>
                {/* <h1>1111</h1> */}
                    <Image src={product}  width={580} height={560}    />
                {/* {product.map((e,i)=> <Image src={e.v}  width={200} height={200} layout="fixed" />)} */}

            </DialogContent>
        </Dialog>
    )
}

export default ProductImg