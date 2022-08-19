import React from "react";
import {Col, Form} from "antd";

const SearchItem = (props: any) => {
    const {
        children,
        label,
        name,
        sm = 12,
        md = 12,
        lg = 8,
        xl = 6,
        xxl = 6,
    } : PropsEntity = props;
    return (
        <Col xs={sm} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
            <Form.Item
                label={label}
                name={name}
                {...props}
            >
                { children }
            </Form.Item>
        </Col>
        /*<Col>

        </Col>*/
    )
}

interface PropsEntity {
    readonly children: object,
    label: string,
    name?: string,
    readonly sm: number,
    readonly md: number,
    readonly lg: number,
    readonly xl: number,
    readonly xxl: number,
}

export default SearchItem
