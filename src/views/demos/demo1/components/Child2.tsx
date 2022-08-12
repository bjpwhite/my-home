import React, { memo } from "react";

const Child2 = memo((props: any) => {
    console.log('Demo1 Child2')
    return (
        <div className='l50'>
            子组件渲染：{props.name}
        </div>
    )
})

export default Child2
