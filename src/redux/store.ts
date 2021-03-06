import { createStore, applyMiddleware } from 'redux';
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import thunk from "redux-thunk";
import { actionLog } from "./middlewares/actionLog";
import { productDetailSlice } from "./productDetail/slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productSearchSlice } from "./productSearch/slice";
import { userSlice } from "./user/slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { shoppingCartSlice } from "./shoppingCart/slice";
import { orderSlice } from "./order/slice";
import fetchCategoriesReducer  from "./shoppingMall/fetchCategoriesReducer";
import fetchCarouselsReducer  from "./shoppingMall/fetchCarouselsReducer";
import fetchHotGoodsesReducer from "./shoppingMall/fetchHotGoodsesReducer";
import fetchNewAndRecommendGoodsesReducer from"./shoppingMall/fetchNewAndRecommendGoodsesReducer";
import { newBeeMallDetailSlice } from "./detailNewBeeMall/fetchDetailLeftImageActions";
import { fetchDetailLeftImageSlice } from "../components/detailLeftImage/fetchDetailLeftImageSlice"
import { DetailSizeSlice } from "./detailSizeSlice/fetchDetailSizeSlice"
import { DetailQaSlice } from "./detailQaSlice/fetchDetailQaSlice"
import { DetailReviewSlice } from "./detailReviewSlice/fetchDetailReviewSlice"
import { QaPagingSlice } from "./detailQaSlice/fetchQaPagingSlice"
import { ReviewMoreSlice } from "./detailReviewSlice/fetchMoreReviewsSlice"
import { InsertQaSlice } from "./detailQaSlice/fetchInsertQaslice"
import { InsertHelpedNumSlice } from "./detailReviewSlice/fetchInsertHelpedNumSlice"
import { DetailTitleSlice } from "./tabelog/fetchDetailTitleSlice"
import { SubTitleSlice } from "./tabelog/fetchSubTitleSlice"
import { GenreSlice } from "./tabelog/fetchGenreSlice"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"]
}

const rootReducer = combineReducers({
    language: languageReducer,
    recommendProducts: recommendProductsReducer,
    productDetail: productDetailSlice.reducer,
    productSearch: productSearchSlice.reducer,
    user: userSlice.reducer,
    shoppingCart: shoppingCartSlice.reducer,
    order: orderSlice.reducer,
    categories: fetchCategoriesReducer,
    carousels: fetchCarouselsReducer,
    hotGoodses: fetchHotGoodsesReducer,
    newAndRecommendGoodses: fetchNewAndRecommendGoodsesReducer,
    detailNewBeeMall: newBeeMallDetailSlice.reducer,
    detailLeftImage: fetchDetailLeftImageSlice.reducer,
    detailSizeSlice: DetailSizeSlice.reducer,
    detailQaSlice: DetailQaSlice.reducer,
    detailReviewSlice: DetailReviewSlice.reducer,
    pagingQaSlice: QaPagingSlice.reducer,
    reviewMoreSlice: ReviewMoreSlice.reducer,
    insertQaSlice: InsertQaSlice.reducer,
    insertHelpedNumSlice: InsertHelpedNumSlice.reducer,
    detailTitleSlice: DetailTitleSlice.reducer,
    subTitleSlice: SubTitleSlice.reducer,
    genreSlice: GenreSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog],
  devTools: true,
});

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export default { store, persistor };