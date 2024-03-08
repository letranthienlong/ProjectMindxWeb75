import homePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import orderPage from "../pages/OrderPage/OrderPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import productsPage from "../pages/ProductsPage/ProductsPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";

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
    path: "/:type",
    page: TypeProductPage,
    isShowHeader: true,
  },
  {
    path: "/sign-in",
    page: SignInPage,
    isShowHeader: true,
  },
  {
    path: "/sign-up",
    page: SignUpPage,
    isShowHeader: true,
  },
  {
    path: "/product-details",
    page: ProductDetailsPage,
    isShowHeader: true,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
];
