import { Container, Box, Grid, Stack, Typography } from "@mui/material"
import { Colors } from '../../../lib/theme'

const Footer = () => {
    return (
        <Box sx={{
            background: Colors.background,
            backgroundImage : "linear-gradient(to right,#980d05,#71030c, #b20000,#71030c, #b20000)",
            color: Colors.secondary,
            p: { xs: 4, md: 10 },
            pt: 12,
            fontSize: { xs: '12px', md: '14px' }
        }}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid container item xs={12} md={6} lg={6}>
                        <Grid item xs={12}>
                            <Typography>CÔNG TY CỔ PHẦN SÂM NGỌC LINH KON TUM</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>245 Lê Hồng Phong, P. Quyết Thắng, Tp Kon Tum.</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>0945.165.165 – 02603.88.99.88</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography> info@vingin.vn
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>* MSDN: 6100223226, cấp ngày: 29/03/2016</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>* Cấp bởi: Sở Kế hoạch và Đầu tư Tỉnh Kon Tum
                            </Typography>
                        </Grid>

                    </Grid>
                    <Grid container item xs={12} md={6} lg={6}>
                        <Grid item xs={12}>
                            <Typography>Thực phẩm bảo vệ sức khỏe. Thực phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>Các sản phẩm Rượu đang chờ xác nhận của Bộ Công Thương, chúng tôi không bán rượu cho người dưới 18 tuổi.
                            </Typography>
                        </Grid>
                    </Grid>
                    {/* <Grid item xs={12} md lg>
                        3
                    </Grid> */}
                </Grid>
                {/* <Stack  
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}>
                <Typography>1</Typography>
                <Typography>1</Typography>
                <Typography>1</Typography>
            </Stack> */}
            </Container>
        </Box>

    )
}

export default Footer