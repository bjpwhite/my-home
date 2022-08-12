import React, { useMemo, useState } from "react";
import {Button} from "antd";

const Demo2 = () => {
    const [params1,setParams1] = useState(0);
    const [params2,setParams2] = useState(0);

    //这种是需要我们手动去调用的函数
    const handleFun1 = () => {
        console.log("我需要手动调用，你不点击我不执行");
        setParams1(val => val +1);
    }
    const handleFun2 = () => {
        setParams2(val => val +1);
    }

    //这种被称为计算属性，不需要手动调用，在渲染阶段就会执行的。
    const computedFun2 = useMemo(() => {
        console.log('我又执行计算了');
        return params2;
    },[params2])

    return <>
        //现在，我被useMemo保护，只有在组件初始化和params2改变的时候会执行
        <div>computed params1:{ params1 }</div>
        <div>computed params2:{ computedFun2 }</div>
        <Button onClick = {handleFun1}>
            计算params1
        </Button>
        <Button onClick = {handleFun2}>
            计算params2
        </Button>
    </>
}

export default Demo2
