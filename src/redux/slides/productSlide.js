import { createSlice } from "@reduxjs/toolkit";

// Trạng thái ban đầu của product
const initialState = {
  search: "",
};

// Tạo Slice cho product
export const productSlide = createSlice({
  name: "product",
  initialState,
  reducers: {
    // Reducer để thực hiện tìm kiếm sản phẩm
    searchProduct: (state, action) => {
      state.search = action.payload;
    },
  },
});

// Các action creator được tạo ra cho mỗi reducer trong Slice
export const { searchProduct } = productSlide.actions;

export default productSlide.reducer;
