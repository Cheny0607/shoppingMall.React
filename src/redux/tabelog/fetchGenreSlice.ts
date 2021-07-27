import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface GenreState{
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState:GenreState= {
  loading: true,
  error: null,
  data: null,
};

interface restId{
    id:any;
}

 export const fetchGenreSlice = createAsyncThunk(
     "genreSlice/fetchGenreSlice",
    async (restId:restId,thunkAPI) => {
      const { data } = await axios.post(
        `http://localhost:8081/genreList`,{id:restId.id}
      );
      return data;
    }
 );
 export const GenreSlice = createSlice({
    name: "genreSlice",
    initialState,
    reducers: {
    },
    extraReducers: {
      [fetchGenreSlice.pending.type]: (state) => {
        // return { ...state, loading: true };
        state.loading = true;
      },
      [fetchGenreSlice.fulfilled.type]: (state, action) => {
        state.data= action.payload.data;
        state.loading = false;
        state.error = null;
      },
      [fetchGenreSlice.rejected.type]: (state, action: PayloadAction<string | null>) => {
        //   const ddd = action.payload;
        state.loading = false;
        state.error = action.payload;
      },
    }
  });
  