import React from "react";
import "./iconfont.less";
import { Popconfirm, Tooltip } from "antd";

const IconFont = (props: any) => {
    const {
        className,
        iconName,
        mode,
        tip,
        warning,
        onClick,
        onConfirm,
    } : PropsEntity = props;
    const icon = () => {
        return (
            <svg className="icon" aria-hidden="true">
                <use xlinkHref={`#exam-${iconName}`} />
            </svg>
        );
    };
    const returnBody = () => {
        if (mode === "tip") {
            return (
                <Tooltip title={tip}>
                    <span className="tip" onClick={onClick}>
                        { icon() }
                    </span>
                </Tooltip>
            );
        } else if (mode === "confirm") {
            return (
                <Popconfirm placement="bottom" overlayClassName="iconfont-confirm" title={warning} onConfirm={onConfirm} okText="确定" cancelText="取消">
                    <Tooltip title={tip}>
                        <span className="warning">
                            { icon() }
                        </span>
                    </Tooltip>
                </Popconfirm>
            );
        } else {
            return (
                <span onClick={onClick}>
                    { icon() }
                </span>
            );
        }
    };
    return (
        <div className={`a-svg-container ${className}`}>
            { returnBody() }
        </div>
    )
}

interface PropsEntity {
    className: string,
    iconName: string,
    mode?: string,
    tip?: string,
    warning?: string,
    onClick?: () => void,
    onConfirm?: () => void,
}

export default IconFont
