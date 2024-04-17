import whiteTheme from '../../ProjectElements/WhiteTheme.module.css';
import darkTheme from '../../ProjectElements/DarkTheme.module.css';

const initialState = {
    isDarkTheme: false,
    currentTheme: darkTheme,
};

const reducer_1 = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return {
                ...state,
                isDarkTheme: !state.isDarkTheme,
                currentTheme: state.isDarkTheme ? darkTheme : whiteTheme,
            };
        default:
            return state;
    }
};

export default reducer_1;