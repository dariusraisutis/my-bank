import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Box from "@mui/material/Box";

interface ILoginComponentPorps {
    handleSubmit: (event: React.SyntheticEvent<HTMLFormElement>) => void;
    onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginComponent = ({ handleSubmit, onNameChange, onPasswordChange }: ILoginComponentPorps): JSX.Element => {
    return <>
        <Container component={'main'} maxWidth={"xs"}>
            <CssBaseline />
            <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    id={"usernameId"}
                    label={"User name"}
                    margin={"normal"}
                    onChange={onNameChange}
                    fullWidth
                />
                <TextField
                    id={"passwordId"}
                    label={"Password"}
                    margin={"normal"}
                    onChange={onPasswordChange}
                    type={"password"}
                    fullWidth
                />
                <Button 
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    {"Login"}
                </Button>
          </Box>
        </Box>
        </Container>
    </>
}

export default LoginComponent;