import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


import { Button, Input } from "antd";

const Increase = (props: any) => {
    console.log('Child Increase')
    let [count,setCount] = useState(0)
    const handleClick = ()=>{
        setCount(count+1)
    }
    return (
        <div>
            <div className='l50'>
                <label>计数器：</label>
                <span className='mr10'>{count}</span>
                <Button className='ml10' onClick={handleClick}>Increase</Button>
            </div>
        </div>
    )
}

export default Increase
