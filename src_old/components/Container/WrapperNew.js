import { Container, Grid, Paper, Stack } from "@mui/material"
import LayOut from "../layout"

const WrapperNew = ({children}) =>{
    return(
        <LayOut>
             <Container maxWidth="lg" >
                <Grid container spacing={5}>
                    <Grid item xs={8}>{children}</Grid>
                    <Grid item xs>
                    <Paper>
                        <Stack
                        spacing={5}
                        >
                            {/* {NewsData.map(e=> <BoxContent key={e.id} title={e.title} group={e.group} content={e.subcontent}/>)} */}
                        </Stack>
                    </Paper>
                    </Grid>
                </Grid>
            </Container>
        </LayOut>
    )
}

export default WrapperNew