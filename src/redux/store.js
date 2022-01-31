import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// import authReducer from 'redux/authorization/authorization-slice';
import { authReducer } from './auth';
// import transactionReducer from 'redux/transaction/transaction-slice'
const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: false
    }),
];

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});