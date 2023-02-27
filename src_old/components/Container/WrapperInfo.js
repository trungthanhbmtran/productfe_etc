import { Box, Typography,Paper, Divider } from "@mui/material"
import { Container } from "@mui/system"

const WrapperInfo = ({children,tittle}) =>{
    // console.log('chilren',children)
    return(
        // <h1> this is WrapperInfo</h1>
        <Container 
        maxWidth="lg" 
        // sx={{border : '2px solid red' ,borderRadius :'20px '}}
        >
                <Typography variant="h4">{tittle}</Typography>
                <Divider variant="vertical"/>
                {children}
        </Container>
       
    )
}

export default WrapperInfo