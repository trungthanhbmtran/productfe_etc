import { Fragment } from "react"
import AppBar from "../AppBar"
import BannerHeader from "./Banner"

const Header = () =>{
    return(
        <Fragment>
            <BannerHeader/>
            <AppBar/>
        </Fragment>
    )
}

export default Header