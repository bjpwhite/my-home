import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { useDispatch } from "react-redux";
import routes from "./index";
import { useEffect } from "react";
import { treeConvertArr } from "@/utils/conversion";
import { refreshOpenKeys, refreshSelectedKeys } from "../redux/actions/menu";
import { receiveUserInfo } from "@/redux/actions/user";
const RouterBeforeEach = () => {
    let location = useLocation();
    const pathname = location.pathname;
    useEffect(() => {
        let arr: any[] = [];
        treeConvertArr(JSON.parse(JSON.stringify(routes)), arr);
        const index = arr.findIndex(e => e.path ===  pathname);
        if (index !== -1) {
            dispatch(refreshSelectedKeys([arr[index].key]));
        }
        const index2 = arr.findIndex(e => pathname.indexOf(e.path) !== -1 && e.path !== "/" && e.path !== pathname );
        if (index2 !== -1) {
            dispatch(refreshOpenKeys([arr[index2].key]));
        }
    }, [pathname]);
    useEffect(() => {
        dispatch(receiveUserInfo());
    }, []);
    const dispatch = useDispatch();
    let route;
    if (sessionStorage.getItem('token')) {
        route = <Outlet/>;
    } else {
        route = <Navigate to="/login"/>;
    }
    return route;
}

export default RouterBeforeEach
