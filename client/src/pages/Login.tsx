import axios from "axios";
import { useState } from "react";
import LoginComponent from "../components/LoginComponent";

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleOnNameChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
        const {preventDefault, currentTarget: { value }} = event;
        preventDefault();
        setUserName(value);
    }

    const handleOnPasswordChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
        const {preventDefault, currentTarget: { value }} = event;
        preventDefault();
        setPassword(value);
    }

    const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        let data = await axios.post('/login', {username: userName, password: password});
    }

    return <>
        <LoginComponent 
            handleSubmit={handleSubmit} 
            onNameChange={handleOnNameChange} 
            onPasswordChange={handleOnPasswordChange} 
        />        
    </>;
}

export default Login;