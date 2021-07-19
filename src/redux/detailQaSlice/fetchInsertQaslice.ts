import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchQaPagingSlice } from "./fetchQaPagingSlice";
import { QaPagingSlice } from "./fetchQaPagingSlice";

interface InsertQaState{
  loading: boolean;
  error: string | null;
  data: any;
  //qa: {id:any,goodsId:number,question:any,submitDate:any};
}

const initialState:InsertQaState= {
  loading: true,
  error: null,
  data: null,
  //qa: {id:null,goodsId:10700,question:null,submitDate:null}, 
};

 export const fetchInsertQaSlice = createAsyncThunk(
     "insertQaSlice/fetchInsertQaSlice",
    async (qa:any,thunkAPI) => {
    //console.log("yyyyyyy",goodsReview)
      const { data } = await axios.post(
        `http://localhost:8081/insertQa`,qa
      );if(data !=null){
        thunkAPI.dispatch(fetchQaPagingSlice(-1))
        }
      return data;
    }
 );
 export const InsertQaSlice = createSlice({
    name: "insertQaSlice",
    initialState,
    reducers: {
    },
   extraReducers: {
      [fetchInsertQaSlice.pending.type]: (state) => {
        // return { ...state, loading: true };
        state.loading = true;
      },
      [fetchInsertQaSlice.fulfilled.type]: (state, action) => {
        state.data = action.payload.data;
        state.loading = false;
        state.error = null;
      },
      [fetchInsertQaSlice.rejected.type]: (state, action: PayloadAction<string | null>) => {
        //   const ddd = action.payload;
        state.loading = false;
        state.error = action.payload;
      },
    }
  })

  export default InsertQaSlice.reducer
  