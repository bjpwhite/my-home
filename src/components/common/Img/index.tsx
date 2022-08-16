import React from "react";

const Img = (prop: any) => {
    const getInfo = () => {
        console.log(123);
    }
    return (
        <img src={new URL(prop.src, import.meta.url).href}  alt="" />
    )
}

export default Img
