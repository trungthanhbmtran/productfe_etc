import { Grid, Container } from "@mui/material"
import WrapperPage from "../Container/WapperPage"

const Uses = () => {
    return (
        <WrapperPage src="/XXx/bg-samngoclinh06.jpg" tittle="CÔNG DỤNG CỦA SÂM NGỌC LINH">
            <Container maxWidth="lg">
                <Grid container spacing={2} sx={{ p: 4 }}>
                    <Grid item xs={6}>
                        ✦ Tăng cường sức khoẻ, sinh    lực.
                        <br></br>
                        ✦ Hỗ trợ điều trị ung thư.
                        <br></br>
                        ✦ Kích thích hệ thống miễn dịch, tăng sức đề kháng của cơ thể.
                        <br></br>
                        ✦ Ổn định đường huyết, hiệp lực với thuốc điều trị tiểu đường.
                        <br></br>
                        ✦ Chống oxy hoá, đẹp da.
                        <br></br>
                        ✦ Hỗ trợ và phòng chống xơ gan, giải độc gan.
                        <br></br>
                        ✦ Chống stress, giải lo âu, chống trầm cảm.
                    </Grid>
                    <Grid item xs={6}>
                        ✦ Tăng tạo hồng cầu và hemoglobin trong thiếu máu.
                        <br></br>

                        ✦ Kích thích hoạt động não bộ, cải thiện trí nhớ.
                        <br></br>

                        ✦ Giảm cholesterol, giảm mỡ máu trong bệnh xơ vữa động mạch.
                        <br></br>

                        ✦ Giảm viêm họng hạt mãn tính, ho và long đàm.
                        <br></br>

                        ✦ Điều hoà hoạt động tim mạch trong loạn nhịp tim, hạ áp.
                        <br></br>

                        ✦ Cải thiện sinh lý và triệu chứng tiền mãn kinh.
                        <br></br>
                    </Grid>
                </Grid>
            </Container>
        </WrapperPage>

    )
}

export default Uses