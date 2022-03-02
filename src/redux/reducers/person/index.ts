/*
    该文件是用于创建一个专门为Count组件服务的reducer,reducer的本质就是一个函数
    reducer函数接到2个参数，之前的状态，和动作对象
*/

import { PERSON_DATA } from "../../constants/person";
const initialState = {
    personData: {},
};

const personReducer = (state = initialState, action: { type: string; personData: object; }) => {
    switch (action.type) {
        case PERSON_DATA:
            return { personData: action.personData };
        default:
            return state;
    }
}

export default personReducer
