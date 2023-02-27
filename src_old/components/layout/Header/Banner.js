import { Box} from "@mui/material";
import {styled} from '@mui/material/styles'

const BoxImageHeader = styled(Box)(({src}) =>({
    backgroundImage: `url(${src})`, 
    opacity: 0.9,
    backgroundSize : 'cover',
    backgroundRepeat : 'no-repeat',
    backgroundPosition : '50% 50%',
    paddingBottom : 120
  }));

  
const BannerHeader = () =>{
    return(
        <BoxImageHeader src="./banner_aChieu3.png"/>
    )
}

export default BannerHeader