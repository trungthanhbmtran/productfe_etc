import { Container, Box, Divider, Grid, Rating, Stack, Typography, Button } from '@mui/material'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../../src/components/Container/Card'
import WrapperPage from '../../src/components/Container/WapperPage'
import LayOut from '../../src/components/layout'
import FeedBack from '../../src/components/Product/Feedback'
import VerticalTabs from '../../src/components/Product/VerticalTabs'

const Product = () => {
    const router = useRouter()
    const { slug } = router.query
    // console.log('pid',slug)
    const Product = useSelector(state => state.product)
    const ProductFiler = useMemo(() => Product.find(e => e.productId == slug), [slug])

    const ProductSame = Product.filter(e => e.Group === ProductFiler.Group)

    const [value, setValue] = useState(0)
    // useEffect(()=>{
    //     console.log('re render')
    // })

    // console.log('productImage',ProductFiler)
    const clamp = (min, max) => (v) => v <= min ? min : v >= max ? max : v;

    const clampV = clamp(1, 10);


    const handleUp = () => setValue(clampV(value + 1))
    const handleDown = () => setValue(clampV(value - 1))

    // console.log('ProductSame',ProductSame)

    return (
        <LayOut>
            <Container maxWidth="lg" sx={{ padding: 3 }}  >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', direction: 'rown' }}>
                            <VerticalTabs product={ProductFiler} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={2}>
                            <Typography variant='h6'> {ProductFiler.name}</Typography>
                            <Divider />
                            <Typography>{ProductFiler.cost} - {ProductFiler.total}</Typography>
                            <Typography variant=''>{ProductFiler.description}</Typography>
                            <Rating value={ProductFiler.rating} readOnly></Rating>
                            <Typography variant=''>Đã bán: {ProductFiler.sales}</Typography>
                            <Divider />
                            <Typography variant=''> Bạn có biết? càng mua nhiều càng được giảm, lại còn freeship!</Typography>
                            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                                <Button onClick={handleUp} variant="outlined" size="small">+</Button>
                                <Typography variant="subtitle1">{value}</Typography>
                                <Button onClick={handleDown} variant="outlined" size="small">-</Button>
                            </Stack>

                            <Button onClick={() => alert("thêm vào giỏ hàng")} variant="contained">Thêm vào giỏ hàng</Button>
                            {/* <IncDec /> */}
                        </Stack>
                    </Grid>
                    <Grid item container spacing={2} >
                        {ProductFiler.spec.map(e =>
                            <Fragment key={e.k}>
                                <Grid item md={6} xs={12} >
                                    <Typography variant="h6">
                                        {e.v}
                                    </Typography>

                                </Grid>
                                <Grid container item md={6} xs={12} spacing={2} >
                                    {e.m.map(el =>
                                        <Grid item md={12} xs={12} key={el.k} >
                                            <Typography variant="subtitle1">
                                                {el.v}
                                            </Typography>
                                        </Grid>
                                    )}
                                </Grid>
                            </Fragment>
                        )}
                    </Grid>
                    {/* <Grid item container spacing={2}  >
                        <Grid item md={6} xs={12} >
                            <Typography variant="h4">
                                Thành phần:
                            </Typography>
                        </Grid>
                        <Grid item container md={6} xs={12} >
                            <Grid item md={12} xs={12} >
                                <Typography variant="subtitle1">
                                    K5 Rượu Sâm Ngọc Linh Gold: 1 chai
                                </Typography>
                            </Grid>
                            <Grid item md={12} xs={12}>
                                <Typography variant="subtitle1">
                                    K5 Tổ Yến Sâm Ngọc Linh: 3 hủ
                                </Typography>
                            </Grid>
                            <Grid item md={12} xs={12}>
                                <Typography variant="subtitle1">
                                    K5 Trà Sâm Ngọc Linh: 1 hộp
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid> */}
                    <Grid item xs={12} >
                        <Divider />
                    </Grid>
                    <Grid item xs={12} >
                        <Typography variant="h6">
                            Đánh giá
                        </Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <Typography variant="subtitle1">
                            {ProductFiler.reply ? null : "Chưa có đánh giá nào."}
                        </Typography>
                    </Grid>
                    <FeedBack name={ProductFiler.name} />
                    <WrapperPage tittle="SẢN PHẨM TƯƠNG TỰ">
                        <Grid
                            container
                            justifyContent="center"
                            spacing={2}
                            alignItems="center"
                        >
                            {ProductSame.map(e =>
                                <Grid item key={e.productId}>
                                    <Card
                                        path={`/product/${e.productId}`}
                                        // productId={e.productId}
                                        PathImg={e.PathImg.at(0).v}
                                        // discount={e.discount}
                                        brand={e.brand}
                                        name={e.name}
                                    />
                                </Grid>
                            )}

                        </Grid>
                    </WrapperPage>

                </Grid>
            </Container>
     </LayOut >
    )
}

export default Product