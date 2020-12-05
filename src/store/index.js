import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as productReducer, MODULE_NAME as productsModuleName } from './productList';
import { reducer as popupReducer, MODULE_NAME as popupModuleName } from './popup';
import { reducer as formReducer, MODULE_NAME as formModuleName } from './formValues';

const rootReducer = combineReducers({
    [productsModuleName]: productReducer,
    [popupModuleName]: popupReducer,
    [formModuleName]: formReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));