import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { authReducer } from './auth';

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