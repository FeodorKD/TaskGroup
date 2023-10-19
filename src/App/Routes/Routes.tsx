import React, {FC} from "react";
import {useTypedSelector} from "../../Shared/hooks/useTypedSelector";
import {privateRoutes, publicRoutes} from "../../Shared/config/routeConfig/RouteConfig";
import {Route, Routes} from "react-router-dom";

const AppRoutes:FC = () => {
    const {isAuth} = useTypedSelector(state => state.login)
    return (
        <Routes>
            {
                isAuth ?
                    Object.values(privateRoutes).map(route => (
                        <Route key={route.path} path={route.path} element={route.element}/>
                    ))
                    : Object.values(publicRoutes).map((route) => (
                        <Route key={route.path} path={route.path} element={route.element}/>
                    ))

            }
        </Routes>
    )
}
export default AppRoutes