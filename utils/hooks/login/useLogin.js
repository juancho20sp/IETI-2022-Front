import {useState, useEffect} from 'react';
import jwt from 'jsonwebtoken';

// Custom Hooks
import { usePost } from '../';

const useLogin = () => {
    const [email, setEmail] = useState('test13@test.com');
    const [password, setPassword] = useState('123');

    const { post } = usePost();

    const login = async () => {
        // Do login request
        console.log('Authenticating user with data:');
        console.log(email);
        console.log(password);

        const url = `${process.env.NEXT_PUBLIC_USERS_BASE_URL}/auth`;
        const data = {
            email,
            password
        }

        const response = await post(url, data);

        console.log(response);
        console.log(jwt.decode(response.token));


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