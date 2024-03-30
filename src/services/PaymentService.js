import axios from "axios";

// Gửi yêu cầu lấy cấu hình thanh toán
export const getConfig = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/payment/config`
  );
  return res.data;
};
