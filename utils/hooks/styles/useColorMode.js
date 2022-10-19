import { useSelector, useDispatch } from 'react-redux';

import { toggleDarkMode as toggleDarkModeAction} from '../../store/styles/colorModeSlice';

const useColorMode = () => {
    const isDarkMode = useSelector(state => state.colorMode.isDarkMode);
    const dispatch = useDispatch();

    const toggleDarkMode = () => {
        dispatch(toggleDarkModeAction());
    };

    console.log(isDarkMode);

    return {
        isDarkMode,
        toggleDarkMode,
    };
};

export default useColorMode;