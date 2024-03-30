import { createSlice } from "@reduxjs/toolkit";

// Trạng thái ban đầu của order
const initialState = {
  orderItems: [],
  orderItemsSlected: [],
  shippingAddress: {},
  paymentMethod: "",
  itemsPrice: 0,
  shippingPrice: 0,
  taxPrice: 0,
  totalPrice: 0,
  user: "",
  isPaid: false,
  paidAt: "",
  isDelivered: false,
  deliveredAt: "",
  isSucessOrder: false,
};

// Tạo Slice cho order
export const orderSlide = createSlice({
  name: "order",
  initialState,
  reducers: {
    // Reducer để thêm sản phẩm vào đơn hàng
    addOrderProduct: (state, action) => {
      const { orderItem } = action.payload;
      const itemOrder = state?.orderItems?.find(
        (item) => item?.product === orderItem.product
      );
      if (itemOrder) {
        if (itemOrder.amount <= itemOrder.countInstock) {
          itemOrder.amount += orderItem?.amount;
          state.isSucessOrder = true;
          state.isErrorOrder = false;
        }
      } else {
        state.orderItems.push(orderItem);
      }
    },
    // Reducer để đặt lại trạng thái thành công của đơn hàng
    resetOrder: (state) => {
      state.isSucessOrder = false;
    },
    // Reducer để tăng số lượng sản phẩm trong đơn hàng
    increaseAmount: (state, action) => {
      const { idProduct } = action.payload;
      const itemOrder = state?.orderItems?.find(
        (item) => item?.product === idProduct
      );
      const itemOrderSelected = state?.orderItemsSlected?.find(
        (item) => item?.product === idProduct
      );
      itemOrder.amount++;
      if (itemOrderSelected) {
        itemOrderSelected.amount++;
      }
    },
    // Reducer để giảm số lượng sản phẩm trong đơn hàng
    decreaseAmount: (state, action) => {
      const { idProduct } = action.payload;
      const itemOrder = state?.orderItems?.find(
        (item) => item?.product === idProduct
      );
      const itemOrderSelected = state?.orderItemsSlected?.find(
        (item) => item?.product === idProduct
      );
      itemOrder.amount--;
      if (itemOrderSelected) {
        itemOrderSelected.amount--;
      }
    },
    // Reducer để xóa sản phẩm khỏi đơn hàng
    removeOrderProduct: (state, action) => {
      const { idProduct } = action.payload;

      const itemOrder = state?.orderItems?.filter(
        (item) => item?.product !== idProduct
      );
      const itemOrderSeleted = state?.orderItemsSlected?.filter(
        (item) => item?.product !== idProduct
      );

      state.orderItems = itemOrder;
      state.orderItemsSlected = itemOrderSeleted;
    },
    // Reducer để xóa tất cả sản phẩm khỏi đơn hàng
    removeAllOrderProduct: (state, action) => {
      const { listChecked } = action.payload;

      const itemOrders = state?.orderItems?.filter(
        (item) => !listChecked.includes(item.product)
      );
      const itemOrdersSelected = state?.orderItems?.filter(
        (item) => !listChecked.includes(item.product)
      );
      state.orderItems = itemOrders;
      state.orderItemsSlected = itemOrdersSelected;
    },
    // Reducer để chọn các sản phẩm trong đơn hàng
    selectedOrder: (state, action) => {
      const { listChecked } = action.payload;
      const orderSelected = [];
      state.orderItems.forEach((order) => {
        if (listChecked.includes(order.product)) {
          orderSelected.push(order);
        }
      });
      state.orderItemsSlected = orderSelected;
    },
  },
});

// Các action creator được tạo ra cho mỗi reducer trong Slice
export const {
  addOrderProduct,
  increaseAmount,
  decreaseAmount,
  removeOrderProduct,
  removeAllOrderProduct,
  selectedOrder,
  resetOrder,
} = orderSlide.actions;

export default orderSlide.reducer;
