import { Grid, Typography, Box, Container, styled } from "@mui/material"
import Image from "next/image"
// import TittleContent from "../../ContainerComponents/tittlecontent";
import { BoxImageContent } from "../../styles/Banner";


export const BoxContentTags = styled(Typography)(() => ({
     position : 'relative', 
     top : 60 ,
     textAlign : 'center',
     background : 'url(./XXx/bg-gia-tri-cot-loi.png)',
     backgroundRepeat :'no-repeat',
     backgroundPositionX : 'center',
     backgroundPositionY:'center'
}));


export const BoxContentInsign = styled(Box)(() => ({
    marginTop : 40,
    paddingTop : 40,
    paddingLeft : 20,
    transition: 'opacity 1s', 
    opacity: 1,
    minHeight : 200 ,
    border : 'solid' , 
    borderRadius : '20px 20px 20px 20px'
}));

const Vision = () => {
    return (
        <BoxImageContent src="./XXx/bg-tamnhinsumenh.jpg" >
            {/* <TittleContent>TẦM NHÌN VÀ SỨ MỆNH</TittleContent> */}
            <Container maxWidth="lg">
                <Grid container spacing={5} >
                    <Grid item xs={6}>
                        <BoxContentTags variant="h4" >Sứ Mệnh</BoxContentTags>
                        <BoxContentInsign >
                             Đảm bảo tính an toàn và chất lượng trong công tác Kiểm định – Hiệu chuẩn – Thử nghiệm thiết bị điện cho các công trình Điện công nghiệp và dân dụng.
                        </BoxContentInsign>
                    </Grid>
                    <Grid item xs={6}>
                        <BoxContentTags variant="h4" >Tầm Nhìn</BoxContentTags>
                        <BoxContentInsign >
                             Phát triển bền vững và trở thành tổ chức tư nhân đầu tư về dịch vụ Kiểm định – Hiệu chuẩn – Thử nghiệm thiết bị điện; Công nghệ thông tin; An toàn thông tin trên môi trường mạng.
                        </BoxContentInsign>
                    </Grid>
                    <Grid item xs={6}>
                        <BoxContentTags variant="h4" >Giá trị cốt lõi</BoxContentTags>
                        <BoxContentInsign >
                            ◉ Chất lượng.
                            <br></br>
                            ◉ Chuyên nghiệp.
                            <br></br>
                            ◉ Đoàn kết.
                            <br></br>
                            ◉ Lợi ích của Khách hàng.
                            <br></br>
                            ◉ Trách nhiệm xã hội.
                            <br></br>
                            ◉ Phát triển bền vững.
                        </BoxContentInsign>
                    </Grid>
                    <Grid item xs={6}>
                        <BoxContentTags variant="h4" >KHẨU HIỆU</BoxContentTags>
                        <BoxContentInsign >
                             Quality – Safety
                        </BoxContentInsign>
                    </Grid>
                </Grid>
            </Container>

               </BoxImageContent>
    )
}

export default Vision