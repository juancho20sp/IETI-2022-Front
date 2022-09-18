import {useState, useEffect} from 'react';

const useLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        // Do login request
        console.log('Authenticating user with data:');
        console.log(email);
        console.log(password);
    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        login
    };
};

export default useLogin;