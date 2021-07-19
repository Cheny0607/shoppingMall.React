import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ifProps } from "../../components/detailSize/DetailSize"

interface DetailSizeState{
  loading: boolean;
  error: string | null;
  data:ifProps;
}

const initialState:DetailSizeState= {
  loading: true,
  error: null,
  data:{} as ifProps,
};

 export const fetchDetailSizeSlice = createAsyncThunk(
     "detailSizeSlice/fetchDetailSizeSlice",
    async (goodsId: string, thunkAPI) => {
      const { data } = await axios.get(
        `http://localhost:8081/goodsDesc/${goodsId}`
      );
      return data;
    }
 );
 export const DetailSizeSlice = createSlice({
    name: "detailSizeSlice",
    initialState,
    reducers: {
      
    },
    extraReducers: {
      [fetchDetailSizeSlice.pending.type]: (state) => {
        // return { ...state, loading: true };
        state.loading = true;
      },
      [fetchDetailSizeSlice.fulfilled.type]: (state, action) => {
  console.log("ccccccc",action.payload.data)
        state.data= action.payload.data;
        state.loading = false;
        state.error = null;
      },
      [fetchDetailSizeSlice.rejected.type]: (state, action: PayloadAction<string | null>) => {
        //   const ddd = action.payload;
        state.loading = false;
        state.error = action.payload;
      },
    }
  });
  