import Footer from "./Footer"
import Header from "./Header"
import {Box, Toolbar} from '@mui/material'
import Drawer from "./Drawer"
import ToolBox from "./toolbox"
import BackToTop from "./backtotop"
import Cart from "../Cart"

const LayOut = ({children}) => {
    return (
        <Box>
            <div id="back-to-top-anchor" />
            <Header/>
            <Drawer/>
            <Cart/>
             {children}
            <ToolBox/>
            <BackToTop/>
            <Footer/>
        </Box>
    )
}

export default LayOut