import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { createWrapper } from 'next-redux-wrapper';

import authReducer from './auth/authSlice';
import colorModeReducer from './styles/colorModeSlice';

export default configureStore({
    reducer: {
        auth: authReducer,
        colorMode: colorModeReducer
    },
    devTools: true
});