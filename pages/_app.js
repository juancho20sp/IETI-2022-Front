import '../styles/globals.css';
import { wrapper } from '../utils/store/store';

// Redux
import store from '../utils/store/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
