import AppBar from '@mui/material/AppBar';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';

const NavBar = (): JSX.Element => {
    return <>
        <Box sx={{ flexGrow: 1}}>
            <AppBar position='static'>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Button variant="text" color="inherit" href="/home" size="large">
                    Home
                </Button>
                <Button variant="text" color="inherit" href="/loans" size="large">
                    Loans
                </Button>
                <Button variant="text" color="inherit" href="/mortgages" size="large">
                    Mortgages
                </Button>
                <Button variant="text" color="inherit" href="/login" size="large">
                    Login
                </Button>
                </Box>
            </AppBar>    
        </Box>
    </>;
}

export default NavBar;