import React, {lazy, Suspense} from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import { Skeleton } from "antd";

const HomePage = lazy(() => import('../pages/home/index'));
const CartPage = lazy(() => import('../pages/carts/index'));
const DetailPage = lazy(() => import('../pages/detail/index'));

const RouteShopping = () => {
    return (
        <Router>
            <Suspense fallback={<Skeleton active />}>
                <Switch>
                    <Route path="/" exact>
                        <HomePage/> 
                    </Route>    
                    <Route path="/cart">
                        <CartPage/>
                    </Route>
                    <Route path="/detail/:slug~id">
                        <DetailPage/>
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    )
}

export default RouteShopping;