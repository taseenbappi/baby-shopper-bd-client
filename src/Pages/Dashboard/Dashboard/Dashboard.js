import React from 'react';
import NavDashboard from '../NavDashboard/NavDashboard';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';
import ManageOrders from '../ManageOrders/ManageOrders';
import MyOrder from '../MyOrder/MyOrder';
import Review from '../Review/Review';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import Pay from '../Pay/Pay';
import AdminRoute from '../../PrivateRoute/AdminRoute';

const Dashboard = () => {
    const { path, url } = useRouteMatch();
    return (
        <div>
            <NavDashboard url={url}></NavDashboard>
            <Switch>
                <Route exact path={path}>
                    <AddProduct></AddProduct>
                </Route>
                <Route exact path={`${path}/addProduct`}>
                    <AddProduct></AddProduct>
                </Route>
                <Route path={`${path}/myOrder`}>
                    <MyOrder></MyOrder>
                </Route>
                <Route path={`${path}/pay`}>
                    <Pay></Pay>
                </Route>
                <Route path={`${path}/review`}>
                    <Review></Review>
                </Route>
                <AdminRoute path={`${path}/manageOrder`}>
                    <ManageOrders></ManageOrders>
                </AdminRoute>
                <AdminRoute path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </AdminRoute>
                <AdminRoute path={`${path}/manageProduct`}>
                    <ManageProducts></ManageProducts>
                </AdminRoute>
            </Switch>

        </div>
    );
};

export default Dashboard;