import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface CategoryState{
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState:CategoryState= {
  loading: true,
  error: null,
  data: null,
};

interface genreId{
    genreId:any;
}

 export const fetchCategorySlice = createAsyncThunk(
     "categorySlice/fetchCategorySlice",
    async (genreId:genreId,thunkAPI) => {
      const { data } = await axios.post(
        `http://localhost:8081/tabeLogCategoryList`,{id:genreId.genreId}
      );
      return data;
    }
 );
 export const CategorySlice = createSlice({
    name: "categorySlice",
    initialState,
    reducers: {
    },
    extraReducers: {
      [fetchCategorySlice.pending.type]: (state) => {
        // return { ...state, loading: true };
        state.loading = true;
      },
      [fetchCategorySlice.fulfilled.type]: (state, action) => {
        state.data= action.payload.data;
        state.loading = false;
        state.error = null;
      },
      [fetchCategorySlice.rejected.type]: (state, action: PayloadAction<string | null>) => {
        //   const ddd = action.payload;
        state.loading = false;
        state.error = action.payload;
      },
    }
  });
  