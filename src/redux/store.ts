import { createStore, applyMiddleware, combineReducers } from "redux";
//引入为Count组件服务的reducer
import countReducer from "./reducers/count";
import personReducer from "./reducers/person";
// 引入为person组件服务的reducer
// import personReducer from "./reducers/person";
//引入异步中间件
import thunk from "redux-thunk";
//创建并暴露仓库
export default createStore(
//连接多个子仓
//     combineReducers({ countReducer, personReducer }),
    combineReducers({
        countReducer,
        personReducer,
    }),
// 使用异步中间件
    applyMiddleware(thunk)
);