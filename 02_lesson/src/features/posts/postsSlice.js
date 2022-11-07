import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "title 1", content: "content 1" },
  { id: 2, title: "title 2", content: "content 2" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export const selectPosts = state => state.post;

export default postsSlice.reducer;
