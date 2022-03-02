//同步action返回值为Objact
// 加数动作
const createIncrementAction = (data: any) => ({ type: "increment", data });
//减数动作
const createDecrementAction = (data: any) => ({ type: "decrement", data });
//异步action返回函数，异步动作，也可在里面写ajax请求
const createIncrementAsyncAction = (data: any, time: number | undefined) => {
    return (dispatch: (arg0: { type: string; data: any; }) => void) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data));
        }, time);
    };
};
//暴露这3个动作，到时候给容器组件使用
export {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction,
};
