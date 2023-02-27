import { Grid, Container } from "@mui/material"
import Image from "next/image"
import BoxContentHaveBrand from "../Container/BoxContentHaveBrand";
// import TittleContent from "../../ContainerComponents/tittlecontent";
import WrapperPage from "../Container/WapperPage";
import WrapperTitlePage from "../Container/WrapperTitlePage";


const Vision = () => {
    return (
        <WrapperPage src="/XXx/bg-tamnhinsumenh.jpg" tittle="TẦM NHÌN VÀ SỨ MỆNH">
            <Container maxWidth="lg" >
                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    alignItems="center"
                    padding={3}
                >
                    <Grid item xs={12} md={4}
                    >
                        <BoxContentHaveBrand tittle="Sứ Mệnh">
                            Đảm bảo tính an toàn và chất lượng trong công tác Kiểm định
                            <br></br>
                            – Hiệu chuẩn
                            <br></br>
                            – Thử nghiệm thiết bị điện cho các công trình Điện công nghiệp và dân dụng.
                        </BoxContentHaveBrand>
                    </Grid>
                    <Grid item xs={12} md={4}
                    >
                        <BoxContentHaveBrand tittle="Tầm Nhìn">
                            Phát triển bền vững và trở thành tổ chức tư nhân đầu tư về dịch vụ Kiểm định
                            <br></br>
                            – Hiệu chuẩn
                            <br></br>
                            – Thử nghiệm thiết bị điện;
                            <br></br>
                            Công nghệ thông tin;
                            <br></br>
                            An toàn thông tin trên môi trường mạng.
                        </BoxContentHaveBrand>
                    </Grid>
                    <Grid item xs={12} md={4}
                    >
                        <BoxContentHaveBrand tittle="Giá trị cốt lõi">
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
                        </BoxContentHaveBrand>
                    </Grid>
                </Grid>
            </Container>
            {/* <Container maxWidth="lg">
                <Grid container spacing={5} >
                    <Grid item xs={4}>
                        <BoxContentTags variant="h4" >Sứ Mệnh</BoxContentTags>
                        <BoxContentInsign >
                            Đảm bảo tính an toàn và chất lượng trong công tác Kiểm định – Hiệu chuẩn – Thử nghiệm thiết bị điện cho các công trình Điện công nghiệp và dân dụng.
                        </BoxContentInsign>
                    </Grid>
                    <Grid item xs={4}>
                        <BoxContentTags variant="h4" >Tầm Nhìn</BoxContentTags>
                        <BoxContentInsign >
                            Phát triển bền vững và trở thành tổ chức tư nhân đầu tư về dịch vụ Kiểm định – Hiệu chuẩn – Thử nghiệm thiết bị điện; Công nghệ thông tin; An toàn thông tin trên môi trường mạng.
                        </BoxContentInsign>
                    </Grid>
                    <Grid item xs={4}>
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
                    <Grid item xs={12}>
                        Khẩu hiệu :  Quality – Safety
                    </Grid>
                </Grid>
            </Container> */}
        </WrapperPage>
    )
}

export default Vision