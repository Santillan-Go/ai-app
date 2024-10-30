"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { MessagesReducer } from "@/store/messagesRedux";
import { useDispatch, useSelector } from "react-redux";
import { ContentLanguage } from "./ContentRedux";
import { ThemeRedux } from "./ThemeRedux";
import { userRedux } from "./userRedux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Persist configuration for userReducer
const userPersistConfig = {
  key: "user", // Unique key for the user reducer
  version: 1,
  storage,
};

// Persist configuration for themeReducer
const themePersistConfig = {
  key: "theme", // Unique key for the theme reducer
  version: 1,
  storage,
};

const languagePersistConfig = {
  key: "language", // Unique key for the theme reducer
  version: 1,
  storage,
};
// Combine all reducers, persist only selected ones
const rootReducer = combineReducers({
  userRedux: persistReducer(userPersistConfig, userRedux), // Persist userRedux
  ThemeRedux: persistReducer(themePersistConfig, ThemeRedux), // Persist ThemeRedux
  ContentLanguage: persistReducer(languagePersistConfig, ContentLanguage), // Do not persist this reducer
  MessagesReducer, // Do not persist this reducer
});

// Configure the store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create the persistor for redux-persist
const persistor = persistStore(store);

// Export hooks for dispatch and selector
export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selector) => useSelector(selector);

export { store, persistor };

// "use client";
// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { MessagesReducer } from "@/store/messagesRedux";
// import { useDispatch, useSelector } from "react-redux";
// import { ContentLanguage } from "./ContentRedux";
// import { ThemeRedux } from "./ThemeRedux";
// import { userRedux } from "./userRedux";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// //Persist configuration for userReducer only
// const userPersistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const themePersistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };
// // Combine all reducers
// const rootReducer = combineReducers({
//   userRedux: persistReducer(userPersistConfig, userRedux), // Only persist userReducer
//   ThemeRedux: persistReducer(themePersistConfig, ThemeRedux),
//   ContentLanguage, // Do not persist this reducer,
//   MessagesReducer,
// });

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// const persistor = persistStore(store);

// export const useAppDispatch = () => useDispatch();
// export const useAppSelector = (selector) => useSelector(selector);

// export const store = configureStore({
//   reducer: { MessagesReducer, ContentLanguage, ThemeRedux, userRedux },
// });

// export const useAppDispatch = () => useDispatch();

// export const useAppSelector = useSelector;
