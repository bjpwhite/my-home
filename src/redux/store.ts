import { createStore, applyMiddleware, combineReducers } from "redux";
//引入异步中间件
import thunk from "redux-thunk";
import countReducer from "./reducers/count";
import personReducer from "./reducers/person";
import menuReducer from "./reducers/menu";
import userReducer from "@/redux/reducers/user";
import CRUDReducer from "@/redux/reducers/CRUD";
//创建并暴露仓库
export default createStore(
//连接多个子仓
//     combineReducers({ countReducer, personReducer }),
    combineReducers({
        countReducer,
        personReducer,
        menuReducer,
        userReducer,
        CRUDReducer,
    }),
// 使用异步中间件
    applyMiddleware(thunk)
);