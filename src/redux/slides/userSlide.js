import { createSlice } from "@reduxjs/toolkit";

// Trạng thái ban đầu của user
const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  avatar: "",
  access_token: "",
  id: "",
  isAdmin: false,
  city: "",
  refreshToken: "",
};

// Tạo Slice cho user
export const userSlide = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Reducer để cập nhật thông tin user
    updateUser: (state, action) => {
      const {
        name = "",
        email = "",
        access_token = "",
        address = "",
        phone = "",
        avatar = "",
        _id = "",
        isAdmin,
        city = "",
        refreshToken = "",
      } = action.payload;
      state.name = name ? name : state.name;
      state.email = email ? email : state.email;
      state.address = address ? address : state.address;
      state.phone = phone ? phone : state.phone;
      state.avatar = avatar ? avatar : state.avatar;
      state.id = _id ? _id : state.id;
      state.access_token = access_token ? access_token : state.access_token;
      state.isAdmin = isAdmin ? isAdmin : state.isAdmin;
      state.city = city ? city : state.city;
      state.refreshToken = refreshToken ? refreshToken : state.refreshToken;
    },
    // Reducer để đặt lại thông tin user về giá trị mặc định
    resetUser: (state) => {
      state.name = "";
      state.email = "";
      state.address = "";
      state.phone = "";
      state.avatar = "";
      state.id = "";
      state.access_token = "";
      state.isAdmin = false;
      state.city = "";
      state.refreshToken = "";
    },
  },
});

// Các action creator được tạo ra cho mỗi reducer trong Slice
export const { updateUser, resetUser } = userSlide.actions;

export default userSlide.reducer;
