/*
    该文件是用于创建一个专门为Count组件服务的reducer,reducer的本质就是一个函数
    reducer函数接到2个参数，之前的状态，和动作对象
*/

import { REFRESH_USER_ID, REFRESH_TOKEN, REFRESH_USER_INFO } from "../../constants/user";
import cookie from "react-cookies";

const initialState = {
    userId: cookie.load("userId"),
    token: cookie.load("token"),
    userInfo: undefined,
};
const userReducer = (state = initialState, action: userEntity) => {
    switch (action.type) {
        case REFRESH_USER_ID:
            return { ...state, userId: action.userId };
        case REFRESH_TOKEN:
            return { ...state, token: action.token };
        case REFRESH_USER_INFO:
            return { ...state, userInfo: action.userInfo };
        default:
            return state;
    }
}

interface userEntity {
    type: string,
    userId: number,
    token: string,
    userInfo: object,
}

export default userReducer
