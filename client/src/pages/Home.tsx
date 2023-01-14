import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Home = () => {
    return <>
        <Box
            sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
            }}
            >
        </Box>
        <Container maxWidth="sm">
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
            >
                My Bank
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Easily adapdable and fastest growing digital banking system that allows users not only to deposit and withdraw money 
                but also we provide variatity of mortgage schemas and competative loan rates in the todays dynamic market.
            </Typography>
            <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
            >
                <Button variant="contained" size="medium" href="/mortgages">Mortgages</Button>
                <Button variant="outlined" size="medium" href="/loans">Loans</Button>
            </Stack>
        </Container>
    </>;
}

export default Home;