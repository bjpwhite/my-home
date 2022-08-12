import React from "react";

const Child = (props: any) => {
    console.log('Demo1 Child')
    return (
        <div className='l50'>
            子组件渲染：{props.name}
        </div>
    )
}

export default Child
