import React, {useEffect, useRef, useState} from "react";
import {Button, Col, Form, Row} from "antd";
import "./index.less"

const SearchBar = (props: PropsEntity) => {
    const [form] = Form.useForm();
    const {
        children,
        count,
        collapse,
        onSearch,
    } : PropsEntity = props;
    const [span, setSpan] = useState(0);
    const [span2, setSpan2] = useState(0);
    const [span3, setSpan3] = useState(0);
    const [showSearch, setShowSearch] = useState(true);
    const [localCollapse, setLocalCollapse] = useState(true);
    const [localChildren, setLocalChildren] = useState(children);
    const [childrenBuffer] = useState(children);
    useEffect(() => {
        setSpan(returnSpan(localChildren));
        setSpan2(returnSpan2());
        setSpan3(returnSpan3(localChildren));
    }, [localChildren]);
    useEffect(() => {
        if (collapse === "true" || collapse === undefined) {
            setLocalCollapse(true);
        } else {
            setLocalCollapse(false);
        }
    }, []);
    const returnSpan = (slots: any[]) => {
        if (localCollapse && !showSearch) {
            const length = slots?.length;
            if (length) {
                return (4 - (length % 4)) * 6;
            }
            return 6;
        }
        return (4 - (count % 4)) * 6;
    };
    const returnSpan2 = () => {
        if (showSearch && count % 2 === 1) {
            return 12;
        }
        return 24;
    };
    const returnSpan3 = (slots: any[]) => {
        if (localCollapse && !showSearch) {
            const length = slots?.length;
            if (length) {
                return (3 - (length % 3)) * 8;
            }
            return 8;
        }
        return (3 - (count % 3)) * 8;
    };
    const onFinish = (values: any) => {
        Object.keys(values).map((key) => {
            if (values[key] === '') {
                values[key] = undefined;
            }
        })
        onSearch(values);
    };
    const handleReset = () => {
        form.resetFields();
        onSearch({});
    };
    const switchSearch = () => {
        if (showSearch) {
            setLocalChildren(childrenBuffer.filter((e, i) => i < 2));
        } else {
            setLocalChildren(childrenBuffer);
        }
        setShowSearch(!showSearch);
    };
    const returnCollapse = () => {
        if (localCollapse) {
            return (
                <Button type="text" onClick={switchSearch}>
                    { showSearch ? (<span>收起</span>) : (<span>展开</span>) }
                </Button>
            )
        } else {
            return <></>
        }
    };
    return (
        <div className="search-bar-container">
            <Form
                name="basic"
                form={ form }
                onFinish={ onFinish }
                autoComplete="off"
            >
                <Row gutter={ 30 }>
                    <>{ showSearch ? localChildren : localChildren.filter((e, i) => i < 2) }</>
                    <Col className="search-operation" xs={span2} sm={span2} md={span2} lg={span3} xl={span} xxl={span}>
                        <Form.Item>
                            <Button type="default" onClick={handleReset}>重置</Button>
                            <Button className="search-bar-search_btn" type="primary" htmlType="submit">查询</Button>
                            <>{ returnCollapse() }</>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

interface PropsEntity {
    readonly children: any[],
    count: number,
    collapse?: "true" | "false" | undefined,
    onSearch: (values: object) => void,
}

export default SearchBar
