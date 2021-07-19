import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


interface ReviewMoreState{
  loading: boolean;
  error: string | null;
  initialList: any[];
  reviewMoreList: any[];
}

const initialState:ReviewMoreState= {
  loading: true,
  error: null,
  initialList: [],
  reviewMoreList: [],
};

 export const fetchReviewMoreSlice = createAsyncThunk(
     "reviewMoreSlice/fetchReviewMoreSlice",
    async (goodsReview:any,thunkAPI) => {
    //console.log("yyyyyyy",goodsReview)
      const { data } = await axios.post(
        `http://localhost:8081/showMoreReviews`,goodsReview,{
          headers: {
              'Content-Type': 'application/json',
          }
      }
      );
      return data;
    }
 );

 export const ReviewMoreSlice = createSlice({
    name: "reviewMoreSlice",
    initialState,
    reducers: {
    clearReviewMoreList:(state,action) => {
        state.reviewMoreList =[];
    }
    },
    extraReducers: {
      [fetchReviewMoreSlice.pending.type]: (state) => {
        // return { ...state, loading: true };
        state.loading = true;
      },
      [fetchReviewMoreSlice.fulfilled.type]: (state, action) => {
//         state.data = action.payload.data.list;
        if(action.payload.data.isInitial){
            state.initialList = action.payload.data.list;
            console.log("ccccccc", state.initialList)
        }else{
            // let ids = state.initialList.map(item => item.id);
            state.reviewMoreList = action.payload.data.list;
        }
        state.loading = false;
        state.error = null;
      },
      [fetchReviewMoreSlice.rejected.type]: (state, action: PayloadAction<string | null>) => {
        //   const ddd = action.payload;
        state.loading = false;
        state.error = action.payload;
      },
    }
  })

  export const { clearReviewMoreList } = ReviewMoreSlice.actions 

  export default ReviewMoreSlice.reducer
  