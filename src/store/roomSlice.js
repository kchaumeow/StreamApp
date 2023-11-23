import { createSlice } from "@reduxjs/toolkit";
import { getUserRooms } from "../api";
const roomSlice = createSlice({
  name: "roomSlice",
  initialState: {
    rooms: [],
  },
  reducers: {
    async setRooms(state, action) {
      const rooms = await getUserRooms(action.id);
      state.rooms = rooms;
    },
    addRoom(state, action) {
      state.rooms.push(action.payload);
    },
  },
});

export const { setRooms, addRoom } = roomSlice.actions;

export default roomSlice.reducer;
