import {
    Dialog,
    Slide,
    DialogContent,
} from "@mui/material";

import Image from "next/image";
import * as React from 'react';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} mountOnEnter unmountOnExit />;
  });


const ProductImg = ({ open, onClose, product }) => {

    return (
        <Dialog
            TransitionComponent={Transition}
            variant="permanant"
            open={open}
            onClose={onClose}
        >
            <DialogContent >
                 <Image src={product}  width={460} height={460} alt="hinhanh" priority />
            </DialogContent>
        </Dialog>
    )
}

export default ProductImg