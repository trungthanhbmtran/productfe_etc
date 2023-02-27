import { Box } from '@mui/material'
import { styled } from "@mui/material/styles";
import { Colors } from '../../lib/theme';

const WrapperBannerPage = ({ path }) => {

    const BannerContainer = styled(Box)(({ matches, theme }) => ({
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: "0px 0px",
        background: Colors.light_gray,
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "center",
        },
        // backgroundImage: `url(/images/banner/banner.png)`,
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
    }));


    const BannerImage = styled("img")(({ src, theme }) => ({
        src: `url(${src})`,
        // backgroundImage: `url(${src})`,
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        maxWidth: '100%',
        height: 'auto',
        display: 'inline-block',
        verticalAlign: 'middle',
        // height : '400px',
        // [theme.breakpoints.down("md")]: {
        //   width: "350px",
        // },
        // [theme.breakpoints.down("sm")]: {
        //   width: "320px",
        //   height: "300px",
        // },
    }));
    // console.log('chilren',children)
    return (
        // <Box
        //     justifyContent="center"
        //     alignItems="center"
        //     width="100%"
        //     height="100%">
        //     {/* <BannerImage src={path} /> */}
        //     <img
        //         maxWidth='100%'
        //         height='auto'
        //         display='inline-block'
        //         verticalAlign='middle'
        //         src={path}
        //     />
        // </Box>
        <BannerContainer>
            <BannerImage src={path}></BannerImage>
        </BannerContainer>
    )
}

export default WrapperBannerPage