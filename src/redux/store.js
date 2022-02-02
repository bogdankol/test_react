import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { authReducer } from './auth';
import {
    persistStore,
    persistReducer,

} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: false
    }),
];
const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};


export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);