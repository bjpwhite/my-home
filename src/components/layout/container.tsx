import React from "react";
import '../../App.less'
import '../../styles/globle.less'
import { Layout } from "antd";
const { Content } = Layout;
import { Outlet } from "react-router-dom";
import HeadBar from "./headBar";
import SideBar from "./sideBar";

const Container = () => {
    const props: object = {
        aaa: 123,
        bbb: "bbb",
        ccc: true
    };
    return (
        <Layout className="layout">
            <HeadBar />
            <Layout>
                <SideBar {...props} />
                <Content style={{marginLeft: 30}}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}

export default Container
