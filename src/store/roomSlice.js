import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { createRoom, getUserRooms } from "../api";

export const setRooms = createAsyncThunk("rooms/setRooms", async (userId) => {
  const rooms = await getUserRooms(userId);
  return rooms;
});

export const addRoom = createAsyncThunk("rooms/addRoom", async (room) => {
  const res = await createRoom(
    room.name,
    room.private,
    room.password,
    room.owner_id
  );
  console.log(res);
  return res;
});

const roomSlice = createSlice({
  name: "roomSlice",
  initialState: {
    rooms: [],
    loading: false,
    error: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(setRooms.fulfilled, (state, action) => {
      state.loading = false;
      state.rooms = action.payload;
      state.error = false;
    });
    builder.addCase(addRoom.fulfilled, (state, action) => {
      state.loading = false;
      state.rooms.push(action.payload);
      state.error = false;
    });
    builder.addMatcher(
      isAnyOf(setRooms.pending, addRoom.pending),
      (state, action) => {
        state.loading = true;
        state.error = false;
      }
    );
    builder.addMatcher(
      isAnyOf(setRooms.rejected, addRoom.rejected),
      (state, action) => {
        state.loading = false;
        state.error = true;
      }
    );
  },
});

export default roomSlice.reducer;
