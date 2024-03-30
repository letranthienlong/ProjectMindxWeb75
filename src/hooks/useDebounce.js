import { useEffect } from "react";
import { useState } from "react";

// Hook sử dụng debounce để trì hoãn giá trị
export const useDebounce = (value, delay) => {
  const [valueDebounce, setValueDebounce] = useState("");

  useEffect(() => {
    // Thiết lập độ trễ bằng cách sử dụng setTimeout
    const handle = setTimeout(() => {
      setValueDebounce(value);
    }, [delay]);

    // Xóa timeout khi giá trị thay đổi
    return () => {
      clearTimeout(handle);
    };
  }, [value,delay]);

  return valueDebounce;
};
