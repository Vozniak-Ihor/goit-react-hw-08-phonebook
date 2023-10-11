import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
 FLUSH,
 REHYDRATE,
 PAUSE,
 PERSIST,
 PURGE,
 REGISTER,
} from 'redux-persist/es/constants';
import advertReducer from './advertSlice';

// Configure persist options for advert slice
const advertPersistConfig = {
 key: 'advertRoot',
 storage,
 whitelist: ['items'], // Specify which parts of the advert slice to persist
};

// Create persisted reducers
const persistedAdvertReducer = persistReducer(
 advertPersistConfig,
 advertReducer
);

// Create the Redux store
export const store = configureStore({
 reducer: {
  advert: persistedAdvertReducer,
 },
 middleware: getDefaultMiddleware => {
  return getDefaultMiddleware({
   serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
   },
  });
 },
});

// Create the persistor for hydration
export const persistor = persistStore(store);
