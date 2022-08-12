import React from "react";
import { useNavigate } from "react-router-dom";
import {useSelector, RootStateOrAny} from 'react-redux';
import { Button } from "antd";

const PageA = () => {
    let navigate = useNavigate();
    const userId = useSelector((state: RootStateOrAny) => state.userReducer.userId);
    const userInfo = useSelector((state: RootStateOrAny) => state.userReducer.userInfo);
    const jumpToB = () => {
        navigate("/tools/pageB");
    };
    const test = () => {
        console.log(userInfo);
    };
    return (
        <>
            <div>PageA</div>
            <a onClick={jumpToB}>跳转pageB</a><br/>
            <Button onClick={test}>test</Button>
            <div>vite env: { import.meta.env.VITE_APP_BASE_API }</div>
            <div>es env: { process.env.NODE_ENV }</div>
            <div>redux userId: { userId }</div>
            <div>session token: { sessionStorage.getItem("token") }</div>
        </>
    )
}

export default PageA
