import { Box, Container } from "@mui/material"
import WrapperTitlePage from "./WrapperTitlePage"

const WrapperPage = ({ src = "", tittle, children, maxWidth = false }) => {
    return (
        <Container maxWidth={maxWidth} sx={{ backgroundImage: `url(${src})`, opacity: 1}} >
            <Box sx={{ backgroundColor:  src ? "rgba(247, 243, 243, 0.645)" : "" }}>
                <WrapperTitlePage>
                    {tittle}
                </WrapperTitlePage>
                {children}
            </Box>
        </Container>


    )
}

export default WrapperPage