import { combineReducers } from 'redux';

import defaultReducer from './defaultReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    defaultReducer,
    auth: authReducer
})

export default rootReducer;
