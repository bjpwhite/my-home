import React from "react";
import "../../styles/sideBar.less";
import { useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
    HomeOutlined,
    MailOutlined,
} from '@ant-design/icons';
const { Sider } = Layout;
import routes from "../../routes";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { refreshOpenKeys, refreshSelectedKeys } from "@/redux/actions/menu";
import type { MenuProps } from 'antd';

const SideBar = (props: any) => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const menuSelectedKeys = useSelector((state: RootStateOrAny) => state.menuReducer.selectedKeys);
    const menuOpenKeys = useSelector((state: RootStateOrAny) => state.menuReducer.openKeys);

    const jumpTo = (key:string, path: string) => {
        if (location.pathname !== path) {
            dispatch(refreshSelectedKeys([key]));
            navigate(path); // 路由跳转
        }
    };

    const onOpenChange: MenuProps['onOpenChange'] = keys => {
        const latestOpenKey = keys.find(key => menuOpenKeys.indexOf(key) === -1);
        if (routes.findIndex(e => e.key === latestOpenKey) === -1) {
            dispatch(refreshOpenKeys(keys));
        } else {
            dispatch(refreshOpenKeys(latestOpenKey ? [latestOpenKey] : []));
        }
    };

    return (
        <Sider className="side-bar">
            <Menu
                style={{height: "100%", width: 230}}
                selectedKeys={menuSelectedKeys}
                openKeys={menuOpenKeys}
                mode="inline"
                theme="dark"
                onOpenChange={ onOpenChange }
            >
                {
                    routes.map(item => {
                        if (!item.children) {
                            return <Menu.Item key={item.key} icon={<HomeOutlined />}>
                                <a onClick={() => jumpTo(item.key,item.path)}><span>{item.icon}<span>{item.title}</span></span></a>
                            </Menu.Item>
                        } else {
                            return <Menu.SubMenu key={item.key} icon={<MailOutlined />} title={item.title}>
                                {
                                    item.children.map(item2 => {
                                        return <Menu.Item key={item2.key}>
                                            <a onClick={() => jumpTo(item2.key,item2.path)}><span>{item2.title}</span></a>
                                        </Menu.Item>
                                    })
                                }
                            </Menu.SubMenu>
                        }
                    })
                }
                {/*<Menu.Item key="0">*/}
                {/*    <Link to="/"><span><HomeOutlined /><span>index</span></span></Link>*/}
                {/*</Menu.Item>*/}
                {/*<Menu.Item key="1">*/}
                {/*    <Link to="/pageA"><span><HomeOutlined /><span>pageA</span></span></Link>*/}
                {/*</Menu.Item>*/}
                {/*<Menu.Item key="2">*/}
                {/*    <Link to="/pageB"><span><HomeOutlined /><span>pageB</span></span></Link>*/}
                {/*</Menu.Item>*/}
            </Menu>
        </Sider>
    )
}

export default SideBar
