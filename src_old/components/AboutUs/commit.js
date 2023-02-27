import { Grid, Typography,Box,Container, Paper } from "@mui/material"
import Image from "next/image"

const Commit = () =>{
    return(
            <Box sx={{ backgroundImage: "url(./XXx/bg-trach-nhiem-xahoi.jpg)", minHeight: 500 ,opacity : 1}}>
            <Typography align="center">
                 Cơ cấu tổ chức
                <br></br>
                <Image src="/XXx/line-1.png" width={129} height={20} layout="fixed" />
            </Typography>
                <Container maxWidth="lg">
                    <Image></Image>
                {/* <Grid container spacing={5} >
                    <Grid item xs>
                        <Paper elevation={0} sx={{pt : 1 , minHeight : 320 ,    backgroundColor : 'transparent'}}>
                            <Grid container spacing={2} sx={{pl : 2}}>
                                <Grid item xs={12}>
                                    <Typography>
                                      Bảo tồn và gìn giữ lá phổi xanh cho Tây Nguyên.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>
                                    Bảo tồn và gìn giữ lá phổi xanh cho Tây Nguyên mà cụ thể là gìn giữ bảo tồn khu rừng nguyên sinh núi Ngọc Linh nơi có nhiều giống cây dược liệu quý hiếm và nhiều động vật quý hiếm.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>
                                     Nguyên nhân do sức ép về kinh tế, xã hội ngày càng tăng do dân số các vùng có rừng tăng nhanh, đặc biệt là tình trạng dân di cư tự do dẫn đến nhu cầu về đất ở và đất canh tác gây sức ép lớn lên rừng tự nhiên trong khu vực gần núi Ngọc Linh, bà con người đồng bào với thói quen di canh du mục nên việc nổ lực ổn định sinh kế cho bà con là điều mà chúng tôi luôn quan tâm tới hàng đầu.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/73zWzR13R90?start=37" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Paper>
                    </Grid>
                 </Grid> */}
                </Container>
            
            </Box>
    )
}

export default Commit