import { configureStore } from "@reduxjs/toolkit";
import post from "../features/posts/postsSlice";

export const store = configureStore({
  reducer: { post },
});
