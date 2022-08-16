import React from "react";
import "./iconfont.less";
import { Popconfirm, Tooltip } from "antd";

const IconFont = (prop: any) => {
    const icon = () => {
        return (
            <svg className="icon" aria-hidden="true">
                <use xlinkHref={`#exam-${prop.iconName}`} />
            </svg>
        );
    };
    const returnBody = () => {
        if (prop.mode === "tip") {
            return (
                <Tooltip title={prop.tip}>
                    <span className="tip" onClick={prop.onClick}>
                        { icon() }
                    </span>
                </Tooltip>
            );
        } else if (prop.mode === "confirm") {
            return (
                <Popconfirm title={prop.warning} onConfirm={prop.onConfirm} okText="确定" cancelText="取消">
                    <Tooltip title={prop.tip}>
                        <span className="warning">
                            { icon() }
                        </span>
                    </Tooltip>
                </Popconfirm>
            );
        } else {
            return (
                <span onClick={prop.onClick}>
                    { icon() }
                </span>
            );
        }
    };
    return (
        <div className="a-svg-container">
            { returnBody() }
        </div>
    )
}

export default IconFont
