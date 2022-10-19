import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';


export const colorModeSlice = createSlice({
    name: 'colorMode',
    initialState: {
        isDarkMode: false
    },
    reducers: {
        toggleDarkMode: (state) => {
            state.isDarkMode = state.isDarkMode ? false : true;
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
    toggleDarkMode
} = colorModeSlice.actions;

export default colorModeSlice.reducer;