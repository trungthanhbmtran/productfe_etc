import { Grid } from "@mui/material"
import { Container } from "@mui/system"
import Image from "next/image"

const Element = () =>{
    return(
            <Container maxWidth="lg">
                <Grid 
                container
                justifyContent="center"
                alignItems="center" 
                spacing={4}>
                    <Grid item xs={12} md={6} sx={{marginTop: 15}}>
                         <Image src={"/XXx/bieu-do-ham-luong-saponin-02.png"} width={450} height={360}  alt="hamluong"/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Image src={"/XXx/cay-sam-ngoc-linh-022.png"} width={450} height={450} alt="caysam" />
                     </Grid>
                </Grid>
            </Container>
       
    )
}

export default Element