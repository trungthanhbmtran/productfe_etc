import { Container, Divider, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { useSelector } from "react-redux"
import { Servicesdata } from '../../../../data/Servicesdata';
import WrapperInfo from '../../Container/WrapperInfo';
import CarouselService from './Carousel';

const BoxProduct = () => {
    return (
        <WrapperInfo>
            {/* <Grid container spacing={2}>
                {Servicesdata.map((e) =>
                    <Grid item key={e.id} xs={4} md={4} lg={4}>
                        <Typography variant='h6'>{e.title}</Typography>
                            <CarouselService data={e.subcontent} />
                    </Grid>
                )}
            </Grid> */}
            <h1>this is box</h1>
        </WrapperInfo>
    )
}

export default BoxProduct