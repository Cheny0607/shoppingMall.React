import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// var qs = require('qs');

interface QaPagingState{
  loading: boolean;
  error: string | null;
  data: {totalCount:number,pageSize:number,totalPage:number,currPage:number,list:any[]};
  page: any;
}

const initialState:QaPagingState= {
  loading: true,
  error: null,
  data:{totalCount:0,pageSize:3,totalPage:0,currPage:1,list:[]},
  page: 1,
};

 export const fetchQaPagingSlice = createAsyncThunk(
     "qaPagingSlice/fetchQaPagingSlice",
    async (page:number, thunkAPI) => {
  debugger;
      const { data } = await axios.post(
        `http://localhost:8081/qaPaging`,{
            // params:{
                page:page
            // },
            // paramsSerializer: params => {
            //     return qs.stringify(params)
            //   }
        }
      );
      return data;
    }
 );
 export const QaPagingSlice = createSlice({
    name: "qaPagingSlice",
    initialState,
    reducers: {
    },
    extraReducers: {
      [fetchQaPagingSlice.pending.type]: (state) => {
        // return { ...state, loading: true };
        state.loading = true;
      },
      [fetchQaPagingSlice.fulfilled.type]: (state, action) => {
        state.data = action.payload.data;
        state.page = action.payload.data.currPage;
        state.loading = false;
        state.error = null;
      },
      [fetchQaPagingSlice.rejected.type]: (state, action: PayloadAction<string | null>) => {
        //   const ddd = action.payload;
        state.loading = false;
        state.error = action.payload;
      },
    }
  })

  export default QaPagingSlice.reducer
  