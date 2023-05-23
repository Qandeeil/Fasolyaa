import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSongs = createAsyncThunk(
    "song/getSongs",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("http://20.98.84.196:4000/api/v1/songs", {
          headers: {
            'x-admin': 'g84y5n8tye34'
          }
        });
        return response.data.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  

const initialState = {songs: [], loading: false, error: null, search: []};

const SongSlice = createSlice({
  name: "song",
  initialState,
  extraReducers: {
    [getSongs.pending]: (state, action) => {
        state.loading = true
        state.error = null
    },
    [getSongs.fulfilled]: (state, action) => {
        state.loading = false
        state.error = null
        state.songs = action.payload
    },
    [getSongs.rejected]: (state, action) => {
        state.loading = false
        state.error = action.payload
    }
  },
  reducers: {
    SearchBox: (state,action) => {
      state.search = state.songs.filter(option => option.title.includes(action.payload))
  },
  }
});

export default SongSlice.reducer;
export const {
  SearchBox
} = SongSlice.actions
