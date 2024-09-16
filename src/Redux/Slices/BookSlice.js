import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "Configs/axiosInstance";
import { toast } from "react-hot-toast";

const initialState = {
  bookList: [],
};

export const getAllBooks = createAsyncThunk("books/getAllBooks", async () => {
  try {
    const response = axiosInstance.get("books");
    toast.promise(response, {
      loading: "Loading books data",
      success: "Succesffully loaded all the books",
      error: "Something went wrong",
    });
    return await response;
  } catch (error) {
    console.log(error);
    toast.error("Cannot load books, something went wrong");
  }
});

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBooks.fulfilled, (state, action) => {
      if (action?.payload?.data?.data) {
        state.bookList = action?.payload?.data?.data;
      }
    });
  },
});

export default bookSlice.reducer;
