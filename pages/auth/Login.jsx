import Head from 'next/head';
import styles from '../../styles/Login.module.scss';

// Redux
import { login, logout } from '../../utils/store/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';

// MUI
import { Container } from '@mui/system';

export default function Login() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Container className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1>{isLoggedIn ? 'LOGGED IN' : 'NOT LOGGED IN'}</h1>
        <button
          onClick={() => {
            isLoggedIn ? dispatch(logout()) : dispatch(login());
          }}
        >
          {isLoggedIn ? 'LOGOUT' : 'LOGIN'}
        </button>
      </main>
    </Container>
  );
}

