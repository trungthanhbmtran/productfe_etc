import { Box, Grid ,useMediaQuery } from "@mui/material";
import { styled } from '@mui/material/styles'
import Image from "next/image";
import { useTheme } from '@mui/material/styles';
import { Colors } from "../../../lib/theme";

// const BoxImageHeader = styled(Box)(({ src }) => ({
//     backgroundImage: `url(${src})`,
//     opacity: 0.9,
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: '50% 50%',
//     paddingBottom: 120
// }));


const BannerHeader = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        // <BoxImageHeader src="./banner_aChieu3.png"/>
        matches ? (
            
            <Grid container
                justifyContent="center"
                alignItems="center"
                sx={{ backgroundColor: Colors.background }}>
                <Grid item >
                    <Image src="/Logo/logo-moi-3.png" alt="log3"  width={420} height={100} />
                </Grid>
                <Grid item >
                    <Image src="/Logo/header-image-3.png"  alt="im" width={450} height={100} />
                </Grid>
                {/* <Grid
                    item
                    container
                    xs>
                    <Typography variant="h3" color={Colors.letter}>CÔNG TY CỔ PHẦN CƠ THÍ NGHIỆM ĐIỆN VIỆT NAM</Typography>
                </Grid>
                <Grid
                    item
                    container
                    xs={2} >
                    <Grid container
                        item xs={12}
                        spacing={1}
                    >
                        <Grid item xs={6}>
                            <Button variant="contained" sx={{ color: Colors.secondary }}
                                fullWidth>
                                Liên Hệ
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" sx={{ color: Colors.secondary }}
                                fullWidth>
                                Tuyển dụng
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} >
                        <Typography variant="h6" color={Colors.primary}> CHẤT LƯỢNG - AN TOÀN</Typography>
                        <Typography variant="h6" color={Colors.primary}> 0968174747 - 0888803079</Typography>
                    </Grid>
                </Grid> */}
            </Grid>
        ) : (
            <Grid container
                justifyContent="center"
                alignItems="center"
                sx={{ backgroundColor: Colors.background }}>
                <Image src="/Logo/LOGO-removebg-preview.png" alt="log2" width={200} height={100} />
            </Grid>
        )


    )
}

export default BannerHeader