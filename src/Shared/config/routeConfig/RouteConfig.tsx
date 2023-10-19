import {RouteProps} from "react-router-dom";
import {ProductPage} from "../../../Pages/ProductPage";
import {MainPage} from "../../../Pages/MainPage";
import {LoginPage} from "../../../Pages/LoginPage";

enum PrivateRouteEnum {
    MAIN_PAGE = 'MAIN_PAGE',
    PRODUCT_PAGE = 'PRODUCT_PAGE',
}

enum PublicRouteEnum {
    LOGIN_PAGE = 'LOGIN_PAGE',
}

const PrivateRoutePath: Record<PrivateRouteEnum, string> = {
    PRODUCT_PAGE: '/product/:id',
    MAIN_PAGE: '/',
}

const PublicRoutePath: Record<PublicRouteEnum, string> = {
    LOGIN_PAGE: '/'
}

export const privateRoutes: Record<PrivateRouteEnum, RouteProps> = {
    PRODUCT_PAGE: {
        path: PrivateRoutePath.PRODUCT_PAGE,
        element: <ProductPage/>
    },
    MAIN_PAGE: {
        path: PrivateRoutePath.MAIN_PAGE,
        element: <MainPage/>
    }
}

export const publicRoutes: Record<PublicRouteEnum, RouteProps> = {
    LOGIN_PAGE: {
        path: PublicRoutePath.LOGIN_PAGE,
        element: <LoginPage/>
    }
}