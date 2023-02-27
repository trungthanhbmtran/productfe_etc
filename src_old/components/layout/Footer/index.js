import { Container, Box, Grid, Stack, Typography } from "@mui/material"
import {Colors} from '../../../lib/theme'

const Footer = () => {
    return (
        <Box  sx={{
            background: Colors.primary,
            color: Colors.white,
            p: { xs: 4, md: 10 },
            pt: 12,
            fontSize: { xs: '12px', md: '14px' }
          }}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Typography> CÔNG TY CỔ PHẦN SÂM NGỌC LINH KON TUM</Typography>
                        <Typography> CÔNG TY CỔ PHẦN SÂM NGỌC LINH KON TUM</Typography>
                        <Typography> CÔNG TY CỔ PHẦN SÂM NGỌC LINH KON TUM</Typography>
                        <Typography> CÔNG TY CỔ PHẦN SÂM NGỌC LINH KON TUM</Typography>

                    </Grid>
                    <Grid item xs={2}>
                        2
                    </Grid>
                    <Grid item xs>
                        3
                    </Grid>
                </Grid>
                {/* <Stack  
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}>
                <Typography>1</Typography>
                <Typography>1</Typography>
                <Typography>1</Typography>
            </Stack> */}
            </Container>
        </Box>

    )
}

export default Footer