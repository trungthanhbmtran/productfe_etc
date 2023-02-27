import { Container, Grid, Paper, Typography } from "@mui/material"
import Image from "next/image"
import WrapperPage from "../Container/WapperPage"
const TradeMark = () => {
    return (
        <WrapperPage tittle="THƯƠNG HIỆU SÂM NGỌC LINH KON TUM K5">
            <Container maxWidth="lg">
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    spacing={2} >
                    <Grid item md={6} xs={12} padding={4}>
                        <Paper sx={{ padding: 1 }}>
                            <Image src="/XXx/thuong-hieu-sam-ngoc-linh-kon-tum.jpg" width={520} height={320}  alt="thuonghieusamngoclinhkontam" ></Image>
                        </Paper>
                    </Grid>
                    <Grid item md={6} xs={12} padding={4}>
                        {/* <Paper  sx={{ height: 340, backgroundColor: 'transparent' }}> */}
                            <Typography>
                                * Hơn 20 năm trồng và phát triển bảo tồn nguồn gen gốc.
                            </Typography>
                            <Typography>
                                * Sở hữu hơn 7000 ngàn ha vùng trồng sâm tại đỉnh núi Ngọc Linh (nơi cây sâm đầu tiên được tìm thấy).
                            </Typography>
                            <Typography>
                                * Hơn 600 ha vườn sâm đã trồng .
                            </Typography>
                            <Typography>
                                * là 1 trong 2 đơn vị duy nhất tới thời điểm này được UBND tỉnh Kon Tum chứng nhận vườn sâm gốc.
                            </Typography>
                            <Typography>
                                * Tạo công ăn việc làm cho hàng ngàn hộ dân đồng bào Xơ Đăng.
                            </Typography>
                            <Typography>
                                *Cung cấp miễn phí hàng chục ngàn cây giống mỗi năm cho người dân phát triển.
                            </Typography>
                            <Typography>
                                *Giúp thay đổi nhận thức của người dân trong việc quản lý bảo vệ rừng kết hợp trồng cây dược liệu.
                            </Typography>
                        {/* </Paper> */}
                    </Grid>

                </Grid>
            </Container>
        </WrapperPage>



    )
}

export default TradeMark