import { Container, Grid } from "@mui/material"
import Card from "../Container/Card"
import WrapperPage from "../Container/WapperPage"

const ActionsSocial = () =>{
    return(
        <WrapperPage tittle="Hoạt động xã hội">
            <Container maxWidth="lg">
                <Grid 
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                padding={2} 
                >
                    <Grid item >
                        <Card description="Hoạt động tặng thưởng tại " time="2020" />
                    </Grid>
                    <Grid item>
                        <Card description="Hoạt động tặng thưởng tại " time="2020" />
                    </Grid>
                    <Grid item >
                        <Card description="Hoạt động tặng thưởng tại " time="2020" />
                    </Grid>

                </Grid>
            </Container>

            
        </WrapperPage>
    )
}

export default ActionsSocial