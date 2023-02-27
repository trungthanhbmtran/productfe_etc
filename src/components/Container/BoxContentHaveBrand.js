import { Box, Typography } from "@mui/material"
import { Container } from "@mui/system"

const BoxContentHaveBrand = ({ children, tittle }) => {
    return (
        <Container >
            <Typography 
            position="relative" 
            top={12} align="center" 
            sx={{
                background : 'url(/XXx/bg-gia-tri-cot-loi.png)',
                backgroundRepeat : 'no-repeat',
                backgroundPositionX : "center",
                backgroundPositionY:'center'
                }} 
            >
                {tittle}
            </Typography>
            <Box
                border="solid"
                borderRadius={5}
                padding={2}
                minHeight={300}
            >

                <Typography>
                    {children}
                </Typography>

            </Box>
        </Container>

    )
}

export default BoxContentHaveBrand