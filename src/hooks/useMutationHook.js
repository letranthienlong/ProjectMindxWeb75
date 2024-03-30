import { useMutation } from "@tanstack/react-query";

// Hook sử dụng để tạo mutation
export const useMutationHooks = (fnCallback) => {
  // Sử dụng hook useMutation từ thư viện react-query
  const mutation = useMutation({
    mutationFn: fnCallback,
  });
  return mutation;
};
