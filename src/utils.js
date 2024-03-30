import { orderConstant } from "./constant";

// Kiểm tra xem một chuỗi có phải là JSON hợp lệ hay không
export const isJsonString = (data) => {
  try {
    JSON.parse(data);
  } catch (error) {
    return false;
  }
  return true;
};

// Chuyển đổi một tệp thành định dạng base64
export const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

// Tạo đối tượng item với các thuộc tính label, key, icon, children và type
export function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

// Hiển thị các tùy chọn từ một mảng bằng cách ánh xạ giá trị vào các thuộc tính label và value
export const renderOptions = (arr) => {
  let results = [];
  if (arr) {
    results = arr?.map((opt) => ({
      value: opt,
      label: opt,
    }));
  }
  results.push({
    label: "Thêm type",
    value: "add_type",
  });
  return results;
};

// Chuyển đổi giá thành chuỗi định dạng với đuôi "VND"
export const convertPrice = (price) => {
  try {
    const result = price?.toLocaleString().replaceAll(",", ".");
    return `${result} VND`;
  } catch (error) {
    return null;
  }
};

// Khởi tạo Facebook SDK bất đồng bộ
export const initFacebookSDK = () => {
  if (window.FB) {
    window.FB.XFBML.parse();
  }
  let locale = "vi_VN";
  window.fbAsyncInit = function () {
    window.FB.init({
      appId: process.env.REACT_APP_FB_ID, // ID ứng dụng của bạn
      cookie: true, // cho phép cookie để cho server truy cập phiên làm việc
      xfbml: true, // phân tích cú pháp các plugin xã hội trên trang này
      version: "v2.1", // sử dụng phiên bản 2.1
    });
  };
  // Tải SDK bất đồng bộ
  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = `//connect.facebook.net/${locale}/sdk.js`;
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
};

// Chuyển đổi dữ liệu thành định dạng phù hợp cho biểu đồ bằng cách đếm số lần xuất hiện dựa trên loại được chỉ định
export const convertDataChart = (data, type) => {
  try {
    const object = {};
    Array.isArray(data) &&
      data.forEach((opt) => {
        if (!object[opt[type]]) {
          object[opt[type]] = 1;
        } else {
          object[opt[type]] += 1;
          console.log(
            "c;getBase64",
            object[opt[type]],
            typeof object[opt[type]]
          );
        }
      });
    const results =
      Array.isArray(Object.keys(object)) &&
      Object.keys(object).map((item) => ({
        name: orderConstant.payment[item],
        value: object[item],
      }));
    return results;
  } catch (e) {
    return [];
  }
};
