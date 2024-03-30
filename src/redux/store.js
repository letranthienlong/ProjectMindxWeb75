import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./slides/productSlide";
import userReducer from "./slides/userSlide";
import orderReducer from "./slides/orderSlide";
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

// Cấu hình lưu trữ Redux Persist
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["product", "user"],
};

// Kết hợp reducer
const rootReducer = combineReducers({
  product: productReducer,
  user: userReducer,
  order: orderReducer,
});

// Áp dụng Redux Persist cho rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Tạo store Redux với Redux Persist đã được áp dụng
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Tạo persistor để quản lý việc lưu trữ Redux Persist
export let persistor = persistStore(store);
