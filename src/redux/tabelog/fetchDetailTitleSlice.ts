import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface DetailTitleState{
  loading: boolean;
  error: string | null;
  data: any;
  //id:any;
}

const initialState:DetailTitleState= {
  loading: true,
  error: null,
  data: null,
  //id:1,
};

interface restId{
    id:any;
}

 export const fetchDetailTitleSlice = createAsyncThunk(
     "detailTitleSlice/fetchDetailTitleSlice",
    async (restId:restId,thunkAPI) => {
      const { data } = await axios.post(
        `http://localhost:8081/detailTitle`,{id:restId.id}
      );
      return data;
    }
 );
 export const DetailTitleSlice = createSlice({
    name: "detailTitleSlice",
    initialState,
    reducers: {
      
    },
    extraReducers: {
      [fetchDetailTitleSlice.pending.type]: (state) => {
        // return { ...state, loading: true };
        state.loading = true;
      },
      [fetchDetailTitleSlice.fulfilled.type]: (state, action) => {
        state.data= action.payload.data;
        state.loading = false;
        state.error = null;
      },
      [fetchDetailTitleSlice.rejected.type]: (state, action: PayloadAction<string | null>) => {
        //   const ddd = action.payload;
        state.loading = false;
        state.error = action.payload;
      },
    }
  });
  