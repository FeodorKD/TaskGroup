import React, {FC, Suspense} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./Routes/Routes";

const App:FC = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <AppRoutes/>
            </BrowserRouter>
        </Suspense>
    );
};

export default App;