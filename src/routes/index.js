import homePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import orderPage from "../pages/OrderPage/OrderPage";
import productsPage from "../pages/ProductsPage/ProductsPage";

export const routes = [
  {
    path: "/",
    page: homePage,
    isShowHeader: true,
  },
  {
    path: "/order",
    page: orderPage,
    isShowHeader: true,
  },
  {
    path: "/products",
    page: productsPage,
    isShowHeader: true,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
];
