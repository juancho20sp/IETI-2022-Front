import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { createWrapper } from 'next-redux-wrapper';

import authReducer from './auth/authSlice';

// const makeStore = () => {
//     configureStore({
//         reducer: {
//             [authSlice.name]: authSlice.reducer,
//         },
//         devTools: true,
//     });
// };

export default configureStore({
    reducer: {
        auth: authReducer
    },
    devTools: true
});