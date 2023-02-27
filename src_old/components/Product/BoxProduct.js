import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { useSelector } from "react-redux"
import Card from "../Container/Card"
import WrapperInfo from "../Container/WrapperInfo"

const BoxProduct = () => {
    const Product = useSelector(state => state.product)
    // console.log('Product', Product)
    return (
        <WrapperInfo tittle="san pham khuyen mai">
            {/* <h1>this is BoxProduct</h1> */}
            <Grid container spacing={2} sx={{ m: 3 }}>
                {Product.map(e =>
                    <Grid item xs={12} md={6} lg={4} key={e.productId} >
                        <Card
                            productId={e.productId}
                            PathImg={e.PathImg}
                            discount={e.discount}
                            brand={e.brand}
                            name={e.name}
                            sales={e.sales}
                            rating={e.rating}
                            cost={e.cost}
                            total={e.total}
                        />
                    </Grid>
                )}
            </Grid>

        </WrapperInfo>
    )
}

export default BoxProduct