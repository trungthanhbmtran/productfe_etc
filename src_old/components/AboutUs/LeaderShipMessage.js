import { Grid, Typography, Box, Container } from "@mui/material"
import Image from "next/image"

const LeaderShipMessage = () => {
    return (
        <Container maxWidth="lg">
            <Typography align="center">
                TỔNG QUAN CÔNG TY
                <br></br>
                <Image src="/XXx/line-1.png" width={129} height={20} />
            </Typography>
            <Grid container spacing={2}  >
                <Grid 
                 container
                 item
                 justifyContent="center"
                 alignItems="center"
                  xs={6}
                  >
                    <Image
                        src="/Aboutus/Enscape_2022-06-01-21-28-54.png"
                        width={500}
                        height={400}
                    ></Image>
                </Grid>
                <Grid 
                container
                justifyContent="center"
                alignItems="center" 
                item xs={6} spacing={2}>
                    <Grid item xs={12}>
                        <Typography>Tên đầy đủ:	CÔNG TY CỔ PHẦN THÍ NGHIỆM CƠ ĐIỆN VIỆT NAM</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Tên tiếng anh :	VIET NAM ELECTROMECHANICAL TESTING JOINT STOCK COMPANY</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Tên viết tắt :	VN.ETC</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Mã số thuế : 6001706254</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Trụ sở chính :	Số 22 Trần Hữu Dực, tổ 5, Phường Tân Lợi, TP. Buôn Ma Thuột, Tỉnh Đắk Lắk, Việt Nam
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Điện thoại:	+84-262-3 97.71.71
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Hotline : <br></br>	+84-968.17.47.47 <br></br>+84-905.174.001
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Văn phòng đại diện tại Quảng Ngãi :	303 Phan Đình Phùng, P. Chánh Lộ, TP. Quảng Ngãi, T. Quảng Ngãi
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Điện thoại:	+84-942.503.822
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Website: vietnametc.com
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Email:	vietnam.etc.ltd@gmail.com
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>
        </Container>
    )
}

export default LeaderShipMessage