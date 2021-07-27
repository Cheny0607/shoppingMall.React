import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface SubTitleState{
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState:SubTitleState= {
  loading: true,
  error: null,
  data: null,
};

interface restId{
    id:any;
}

 export const fetchSubTitleSlice = createAsyncThunk(
     "subTitleSlice/fetchSubTitleSlice",
    async (restId:restId,thunkAPI) => {
      const { data } = await axios.post(
        `http://localhost:8081/subTitle`,{id:restId.id}
      );
      return data;
    }
 );
 export const SubTitleSlice = createSlice({
    name: "subTitleSlice",
    initialState,
    reducers: {
    },
    extraReducers: {
      [fetchSubTitleSlice.pending.type]: (state) => {
        // return { ...state, loading: true };
        state.loading = true;
      },
      [fetchSubTitleSlice.fulfilled.type]: (state, action) => {
        state.data= action.payload.data;
        state.loading = false;
        state.error = null;
      },
      [fetchSubTitleSlice.rejected.type]: (state, action: PayloadAction<string | null>) => {
        //   const ddd = action.payload;
        state.loading = false;
        state.error = action.payload;
      },
    }
  });
  