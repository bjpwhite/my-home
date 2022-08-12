import React, { memo } from "react";

const Child = memo((prop:any) => {
    console.log("我被打印了就说明子组件重新构建了")
    return <div>{ prop.computedParams }</div>
})

export default Child
