/*
    该文件是用于创建一个专门为Count组件服务的reducer,reducer的本质就是一个函数
    reducer函数接到2个参数，之前的状态，和动作对象
*/

import { DECREMENT, INCREMENT } from "../../constants/count";
const initialState = {
    count: 0,
};

const index = (state = initialState, action: { type: string; }) => {
    switch (action.type) {
        case INCREMENT:
            return { count: state.count + 1 };
        case DECREMENT:
            return { count: state.count - 1 };
        default:
            return state;
    }
}

export default index
