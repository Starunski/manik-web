import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users2"
      );
      const data = await response?.json();
      console.log("data = ", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);
