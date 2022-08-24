/*
    该文件是用于创建一个专门为Count组件服务的reducer,reducer的本质就是一个函数
    reducer函数接到2个参数，之前的状态，和动作对象
*/

import {CRUD_TOGGLE_IS_SUBMITTING} from "../../constants/CRUD";
const initialState = {
    isSubmitting: false,
};
const CRUDReducer = (state = initialState, action: CRUDEntity) => {
    switch (action.type) {
        case CRUD_TOGGLE_IS_SUBMITTING:
            return { ...state, isSubmitting: action.isSubmitting };
        default:
            return state;
    }
}

interface CRUDEntity {
    type: string,
    isSubmitting: boolean,
}

export default CRUDReducer
