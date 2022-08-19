import React from "react";
import '../../App.less'
import '../../styles/globle.less'
import { Layout } from "antd";
const { Content } = Layout;
import { Outlet } from "react-router-dom";
import HeadBar from "./headBar";
import SideBar from "./sideBar";

const Container = () => {
    return (
        <Layout className="layout">
            <HeadBar />
            <SideBar />
            <Layout className="layout-children">
                <div className="layout-children-content">
                    <Outlet />
                </div>
                {/*<Content className="layout-children-content test" style={{marginLeft: 30, position: "relative"}}>
                    <Outlet />
                </Content>*/}
            </Layout>
        </Layout>
    )
}

export default Container
