import { combineReducers } from 'redux';

import defaultReducer from './defaultReducer';
import blogReducer from './blogReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    defaultReducer,
    blogState: blogReducer,
    auth: authReducer
})

export default rootReducer;
