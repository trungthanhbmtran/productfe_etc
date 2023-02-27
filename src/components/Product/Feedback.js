import { Button, Checkbox, Grid, Rating, TextField, Typography } from "@mui/material"

const FeedBack = ({name}) =>{
    return(
        <Grid item container xs={12} margin={1} padding={3} border={1} spacing={2} >
                            <Grid item xs={12} md={12}>
                                <Typography variant="h6">
                                    Hãy là người đầu tiên nhận xét “{name}”
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Typography variant="subtitle1">
                                    Đánh giá của bạn :
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Rating value={0} ></Rating>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Typography variant="subtitle1">
                                    Nhận xét của bạn *
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField fullWidth />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth label="Tên" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth label="Email" />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Typography variant="subtitle1">
                                    <Checkbox></Checkbox>  Lưu tên của tôi, email, và trang web trong trình duyệt này cho lần bình luận kế tiếp của tôi.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Button fullWidth variant="contained">Gửi đi</Button>
                            </Grid>
                        </Grid>
    )
}

export default FeedBack