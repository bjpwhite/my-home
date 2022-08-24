import React, {useEffect, useState, SetStateAction, MouseEvent} from "react";
import "./index.less";
import {Button, Col, Form, Input, Popover, Row, Table} from "antd";
import {useForm} from "antd/es/form/Form";
import HomePagination from "^/Pagination";

const TableSelect = (props: PropsEntity) => {
    const {
        children,
        value = "",
        rowKey,
        labelKey,
        valueKey,
        onChange,
        onRemote,
    }: PropsEntity = props;
    const [form] = useForm();
    const [visible, setVisible] = useState(false);
    const [pageNo, setPageNo] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [total, setTotal] = useState(0);
    const [selectedRow, setSelectedRow] = useState({[valueKey]: ""});
    const [localValue, setLocalValue] = useState("");
    const [searchCondition, setSearchCondition] = useState({});
    const [dataSource, setDataSource] = useState([]);
    useEffect(() => {
        if (value) {
            if (typeof value === "object") {
                setLocalValue(value[labelKey]);
            } else {
                setLocalValue(value);
            }
        }
        if (value && dataSource.length) {
            const index = dataSource.findIndex(e => e[labelKey] === value);
            if (index !== -1) {
                setSelectedRow(dataSource[index]);
            }
        }
    }, [value, dataSource]);
    useEffect(() => {
        if (visible) {
            onRemote({
                ...searchCondition,
                pageNo: pageNo,
                pageSize: pageSize,
            }).then((res: { data: SetStateAction<never[]>; total: SetStateAction<number>; }) => {
                setDataSource(res.data);
                setTotal(res.total);
            });
        }
    }, [visible, searchCondition, pageNo]);
    const handleVisibleChange = (visible: boolean) => {
        setVisible(visible);
    };
    const returnSelectedRow = (record: never) => {
        if (record[valueKey] === selectedRow[valueKey]) {
            return "selected-row"
        } else {
            return ""
        }
    };
    const onRow = (record: any) => {
        if (onChange) {
            setSelectedRow(record);
            setLocalValue(record[labelKey]);
            onChange(record);
            setVisible(false);
        }
    };
    const handleChange = () => {
        setSelectedRow({[valueKey]: ""});
        setLocalValue("");
    };
    const handleFinish = (values: any) => {
        setSearchCondition(values);
    };
    const paginationChange = (page: number, pageSize: number) => {
        setPageNo(page);
        setPageSize(pageSize);
    }
    const handleReset = () => {
        form.resetFields();
    };
    const returnBody = () => {
        return (
            <div>
                <div>
                    <Form form={form} labelCol={{span: 5}} onFinish={handleFinish}>
                        <Row gutter={10}>
                            <Col span={17}>
                                {
                                    Object.prototype.toString.apply(children) !== "[object Array]" ?
                                        (
                                            <Form.Item
                                                label={children.props.title}
                                                name={children.props.dataIndex}
                                            >
                                                <Input placeholder="请输入" allowClear/>
                                            </Form.Item>
                                        ) :
                                        (
                                            children.map((e: any, i: number) => {
                                                return (
                                                    <Form.Item
                                                        key={i}
                                                        label={e.props.title}
                                                        name={e.props.dataIndex}
                                                    >
                                                        <Input placeholder="请输入" allowClear />
                                                    </Form.Item>
                                                )
                                            })
                                        )
                                }
                            </Col>
                            <Col span={7}>
                                <Form.Item>
                                    <Button type="text" size="small" onClick={handleReset}>重置</Button>
                                    <Button type="link" size="small" htmlType="submit">搜索</Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>
                <div>
                    <Table
                        rowKey={rowKey}
                        dataSource={dataSource}
                        size="small"
                        scroll={{ x:360, y: 200 }}
                        pagination={false}
                        rowClassName={(record) => returnSelectedRow(record)}
                        onRow={record => {return {onClick: () => onRow(record)}}}
                    >
                        { children }
                    </Table>
                    <div className="table-select-pagination">
                        <HomePagination
                            pageSize={pageSize}
                            showTotal={false}
                            showQuickJumper={false}
                            showSizeChanger={false}
                            current={pageNo}
                            total={total}
                            size="small"
                            onChange={paginationChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
    return (
        <Popover
            visible={visible}
            placement="bottomLeft"
            content={returnBody()}
            overlayClassName="table-select-overlay-container"
            trigger="click"
            onVisibleChange={handleVisibleChange}
        >
            <Input className="table-select-input" placeholder="请选择" value={localValue} allowClear onChange={handleChange} />
        </Popover>
    )
}

interface PropsEntity {
    readonly children?: any,
    value?: string,
    rowKey: string,
    labelKey: string,
    valueKey: string,
    onChange?: (record: object) => void,
    onRemote: any,
}

export default TableSelect
