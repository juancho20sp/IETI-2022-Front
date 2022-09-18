import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.scss';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;


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
