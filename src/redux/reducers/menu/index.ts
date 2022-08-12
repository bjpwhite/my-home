/*
    该文件是用于创建一个专门为Count组件服务的reducer,reducer的本质就是一个函数
    reducer函数接到2个参数，之前的状态，和动作对象
*/

import {REFRESH_OPEN_KEYS, REFRESH_ROUTER_MAP, REFRESH_SELECTED_KEYS} from "../../constants/menu";
const initialState = {
    selectedKeys: ["home"],
    openKeys: [],
    routerMap: {},
};
const menuReducer = (state = initialState, action: menuEntity) => {
    switch (action.type) {
        case REFRESH_ROUTER_MAP:
            return { ...state, routerMap: action.routerMap };
        case REFRESH_SELECTED_KEYS:
            return { ...state, selectedKeys: action.selectedKeys };
        case REFRESH_OPEN_KEYS:
            return { ...state, openKeys: action.openKeys };
        default:
            return state;
    }
}

interface menuEntity {
    type: string,
    selectedKeys: Array<string>,
    openKeys: Array<string>,
    routerMap: Object,
}

export default menuReducer
