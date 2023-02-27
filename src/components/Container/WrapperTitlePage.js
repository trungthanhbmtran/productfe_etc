import { Typography } from "@mui/material"
import Image from "next/image"

const WrapperTitlePage = ({children}) =>{
    return(
        <Typography variant="h6" align="center" sx={{pt : 3}}>
        {children}
        <br></br>
        <Image src="/XXx/line-1.png" width={129} height={20} alt="line"  />
        </Typography>
    )
}

export default WrapperTitlePage