import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreators";
import {IUser} from "../../models/IUser";

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
  counter: number;
  firebaseUser: null,
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
  counter: 0,
  firebaseUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counter += action.payload;
    },
    decrement: (state, action) => {
      state.counter -= action.payload;
    },
    setFirebaseUser: (state, action) => {
      console.log("setFirebaseUser action.payload = ", action.payload)
      state.firebaseUser = action.payload;

    }
  },
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
    },
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export default userSlice.reducer;
