import homePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import orderPage from "../pages/OrderPage/OrderPage";
import productsPage from "../pages/ProductsPage/ProductsPage";

export const routes = [
  {
    path: "/",
    page: homePage,
  },
  {
    path: "/order",
    page: orderPage,
  },
  {
    path: "/products",
    page: productsPage,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
];
