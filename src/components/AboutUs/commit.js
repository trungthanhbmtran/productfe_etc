import { Grid, Typography, Box, Container, Paper } from "@mui/material"
import Image from "next/image"
import WrapperPage from "../Container/WapperPage"

const Commit = () => {
    return (
        <WrapperPage tittle="TRÁCH NHIỆM XÃ HỘI" src="/XXx/bg-trach-nhiem-xahoi.jpg">
            <Container maxWidth="lg">
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    spacing={2} >
                    <Grid item md={6} xs={12} padding={4}>
                        <Paper elevation={20}  sx={{ height: 340, backgroundColor: 'transparent' }}>
                            <Typography>
                                Bảo tồn và gìn giữ lá phổi xanh cho Tây Nguyên.
                            </Typography>
                            <Typography>
                                Bảo tồn và gìn giữ lá phổi xanh cho Tây Nguyên mà cụ thể là gìn giữ bảo tồn khu rừng nguyên sinh núi Ngọc Linh nơi có nhiều giống cây dược liệu quý hiếm và nhiều động vật quý hiếm.
                            </Typography>
                            <Typography>
                                Nguyên nhân do sức ép về kinh tế, xã hội ngày càng tăng do dân số các vùng có rừng tăng nhanh, đặc biệt là tình trạng dân di cư tự do dẫn đến nhu cầu về đất ở và đất canh tác gây sức ép lớn lên rừng tự nhiên trong khu vực gần núi Ngọc Linh, bà con người đồng bào với thói quen di canh du mục nên việc nổ lực ổn định sinh kế cho bà con là điều mà chúng tôi luôn quan tâm tới hàng đầu.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item md={6} xs={12} padding={4}>
                        <Paper sx={{padding : 1}}>
                            <iframe  width="100%" height="315" src="https://www.youtube.com/embed/73zWzR13R90?start=37" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </Paper>
                    </Grid>
                </Grid>
            </Container>

        </WrapperPage>
    )
}

export default Commit