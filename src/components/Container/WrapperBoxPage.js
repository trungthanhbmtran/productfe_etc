import { Container, Grid, Typography } from "@mui/material"
import LayOut from "../layout"

const WrapperBoxPage = ({ children, tittle, description }) => {
    return (
        <LayOut>
            <Container maxWidth="lg" sx={{ p: 2 }}>.
                <Grid
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    container
                    spacing={2}>
                    <Grid item>
                        <Typography variant="h3" align="center">{tittle}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" align="center">{description}</Typography>
                    </Grid>
                    <Grid item>
                        {children}
                    </Grid>
                </Grid>
            </Container>
        </LayOut>
    )
}

export default WrapperBoxPage