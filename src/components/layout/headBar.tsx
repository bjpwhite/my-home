import "../../styles/headBar.less";
import {Button, Layout} from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
const { Header } = Layout;

const HeadBar = () => {
    let navigate = useNavigate();
    const logout = () => {
        sessionStorage.removeItem("token");
        navigate("/login");
    };
    return (
        <Header className="head-bar">
            <div className="logo">
                <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                <p>H&nbsp;</p><p>O&nbsp;</p><p>M&nbsp;</p><p>E</p>
            </div>
            <div className="logout">
                <Button type="primary" onClick={() => logout()}>退出登录</Button>
            </div>
        </Header>
    )
}

export default HeadBar
