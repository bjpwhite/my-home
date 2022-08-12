import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


import { Button, Input } from "antd";
import Child from "@/views/demos/demo1/components/Child";
import Increase from "@/views/demos/demo1/components/Increase";
import Child2 from "@/views/demos/demo1/components/Child2";

const Demo1 = () => {
    console.log('Demo1 Parent')
    let [count,setCount] = useState(0)
    let [name,setName] = useState('-')
    const handleClick = ()=> {
        setCount(count+1)
    }
    const handleInput = (e: { target: { value: React.SetStateAction<string>; }; })=>{
        setName(e.target.value)
    }
    return (
        <div>
            <div className='l50'>
                <label>计数器：</label>
                <span className='mr10'>{count}</span>
                <Button className='ml10' onClick={handleClick}>Increase</Button>
            </div>
            <Increase/>
            <div className='l50'>
                <label htmlFor="">改变子组件：</label>
                <Input type="text" onChange={handleInput}/>
            </div>
            <hr />
            <Child name={name}/>
            <Child2 name={name}/>
        </div>
    )
}

export default Demo1
