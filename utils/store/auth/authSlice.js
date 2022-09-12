import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
        },

        logout:  (state, action) => {
            state.isLoggedIn = false;
        },

        extraReducers: {
            [HYDRATE]: (state, action) => {
                return {
                    ...state,
                    ...action.payload.auth
                };
            }
        }
    }
});

export const {
    login,
    logout
} = authSlice.actions;

export default authSlice.reducer;