import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchReviewMoreSlice } from "./fetchMoreReviewsSlice";
import { ReviewMoreSlice } from "./fetchMoreReviewsSlice";

interface InsertHelpedNumState{
  loading: boolean;
  error: string | null;
  data: any;
  //qa: {id:any,goodsId:number,question:any,submitDate:any};
}

const initialState:InsertHelpedNumState= {
  loading: true,
  error: null,
  data: null,
  //qa: {id:null,goodsId:10700,question:null,submitDate:null}, 
};

interface goodsReviewHelpedNum{
    goodsId:string;
    ids?:number[];
    reviewId:number;
}

 export const fetchInsertHelpedNumSlice = createAsyncThunk(
     "insertHelpedNumSlice/fetchInsertHelpedNumSlice",
    async (goodsReviewHelpedNum:goodsReviewHelpedNum,thunkAPI) => {
    //console.log("yyyyyyy",goodsReview)
      const { data } = await axios.post(
        `http://localhost:8081/reviewHelpedNum`,{reviewId:goodsReviewHelpedNum.reviewId},{
            headers: {
                'Content-Type': 'application/json',
            }
        }
      );if(data !=null){
        //thunkAPI.getState
        thunkAPI.dispatch(fetchReviewMoreSlice({ids:goodsReviewHelpedNum.ids,goodsId:goodsReviewHelpedNum.goodsId}))
        }
      return data;
    }
 );
 export const InsertHelpedNumSlice = createSlice({
    name: "insertHelpedNumSlice",
    initialState,
    reducers: {
    },
   extraReducers: {
      [fetchInsertHelpedNumSlice.pending.type]: (state) => {
        // return { ...state, loading: true };
        state.loading = true;
      },
      [fetchInsertHelpedNumSlice.fulfilled.type]: (state, action) => {
        state.data = action.payload.data;
        state.loading = false;
        state.error = null;
      },
      [fetchInsertHelpedNumSlice.rejected.type]: (state, action: PayloadAction<string | null>) => {
        //   const ddd = action.payload;
        state.loading = false;
        state.error = action.payload;
      },
    }
  })

  export default InsertHelpedNumSlice.reducer
  