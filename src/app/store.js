
import postNewItemReducer from '../features/PostNewItem/PostNewItemSlice';
import mainPageReducer from '../features/MainPage/MainPageSlice';
const { configureStore } =  require("@reduxjs/toolkit");


const rootReducer = {
    postForm : postNewItemReducer,
    mainPage : mainPageReducer
};
const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: false,
    // }),
});

export default store;
