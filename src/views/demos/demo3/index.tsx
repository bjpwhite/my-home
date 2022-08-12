import React, { useMemo, useState } from "react";
import { Button } from "antd";
import Child from "@/views/demos/demo3/components/Child";

const Demo3 = () => {
    const [parentState,setParentState] = useState(0);  //父组件的state

    //需要传入子组件的函数
    const toChildComputed = () => {
        console.log("需要传入子组件的计算属性");
        return 1000;
    };
    const toChildComputed2 = () => useMemo(() => {
        console.log("需要传入子组件的计算属性");
        return 1001;
    },[]);

    return (
        <>
            <Button onClick={() => setParentState(val => val+1)}>
                点击我改变父组件中与Child组件无关的state
            </Button>
            <div>//将父组件的函数传入子组件</div>
            <Child computedParams={toChildComputed()}/>
        </>
    )
}

export default Demo3
