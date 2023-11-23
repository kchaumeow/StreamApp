import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createRoom, getUserRooms } from "../api";

export const setRooms = createAsyncThunk("rooms/setRooms", async (userId) => {
  const rooms = await getUserRooms(userId);
  return rooms;
});

export const addRoom = createAsyncThunk("rooms/addRoom", async (room) => {
  return await createRoom(...room);
});

const roomSlice = createSlice({
  name: "roomSlice",
  initialState: {
    rooms: [],
    loading: false,
  },
  reducers: {},

  extraReducers: {
    //setRooms
    [setRooms.pending]: (state) => {
      state.loading = true;
    },
    [setRooms.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.rooms = payload;
    },
    [setRooms.rejected]: (state) => {
      state.loading = false;
    },
    //addRoom
    [addRoom.pending]: (state) => {
      state.loading = true;
    },
    [addRoom.fulfilled]: (state, { payload }) => {
      state.loading = false;
      console.log(payload);
      state.rooms.push(payload);
    },
    [addRoom.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default roomSlice.reducer;
