import React from "react";
import {refreshSelectedKeys} from "../redux/actions/menu";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Button} from "antd";

const PageB = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const jumpToB = () => {
        navigate("/tools/pageB");
    };
    const test = () => {
        console.log(234)
    };
    return (
        <>
            <div>pageC</div>
            <a onClick={jumpToB}>跳转pageB</a>
            <Button onClick={test}>test</Button>
        </>
    )
}

export default PageB
