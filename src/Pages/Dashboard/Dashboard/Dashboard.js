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
                <Route path={`${path}/manageOrder`}>
                    <ManageOrders></ManageOrders>
                </Route>
                <Route path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </Route>
                <Route path={`${path}/manageProduct`}>
                    <ManageProducts></ManageProducts>
                </Route>
            </Switch>

        </div>
    );
};

export default Dashboard;