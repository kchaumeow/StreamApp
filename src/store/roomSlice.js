import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createRoom, getUserRooms } from "../api";

export const setRooms = createAsyncThunk("rooms/setRooms", async (userId) => {
  const rooms = await getUserRooms(userId);
  return rooms;
});

export const addRoom = createAsyncThunk("rooms/addRoom", async (room) => {
  return await createRoom(
    room.name,
    room.private,
    room.password,
    room.owner_id
  );
});

const roomSlice = createSlice({
  name: "roomSlice",
  initialState: {
    rooms: [],
    loading: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addMatcher(isAnyOf(setRooms.pending, addRoom.pending), (state) => {
      state.loading = true;
    });
    builder.addMatcher(
      isAnyOf(setRooms.rejected, addRoom.rejected),
      (state) => {
        state.loading = false;
      }
    );
    builder.addCase(setRooms.fulfilled, (state) => {
      state.loading = false;
      state.rooms = payload;
    });
    builder.addCase(addRoom.fulfilled, (state) => {
      state.loading = false;
      state.rooms.push(payload);
    });
  },
});

export default roomSlice.reducer;
