import React from "react";
import { Link } from "react-router-dom";

const PageB = () => {
    return (
        <>
            <div>pageB</div>
            <Link to="/pageC">跳转pageC</Link>
        </>
    )
}

export default PageB
