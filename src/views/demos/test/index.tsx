import React from "react";
import IconFont from "^/common/IconFont";
import Img from "^/common/Img";

const Test = () => {
    const getInfo = () => {
        console.log(123);
    }
    return (
        <div className="page-container">
            <div>
                <IconFont iconName="pdf" tip="哈哈" onClick={getInfo} />
                <IconFont iconName="cancel" mode="tip" tip="嘿嘿" onClick={getInfo} />
                <IconFont iconName="default" warning="是否删除此条" mode="confirm" tip="呵呵" onConfirm={getInfo} />
                <Img src="/src/images/test.jpg" />
            </div>
        </div>
    )
}

export default Test
