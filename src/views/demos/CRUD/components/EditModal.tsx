import React, {useEffect, useLayoutEffect, useState} from "react";
import {Modal, Row, Col, Form, Input, Table} from "antd";
import {useForm} from "antd/es/form/Form";
import { validateRequired } from "@/utils/validateRule";
import {useDispatch} from "react-redux";
import {addEtcCard, getEtcDetail, modifyEtcCard} from "@/redux/actions/etc";
import TableSelect from "^/TableSelect";
import {getCarList} from "@/api/car";

const EditModal = (props: PropsEntity) => {
    const dispatch = useDispatch();
    const {
        cardId,
        cardNum,
        carId,
        editVisible = false,
        isEdit = false,
        onClose,
        onRefresh,
    } : PropsEntity = props;
    useEffect(() => {
        if (editVisible && isEdit) {
            getDetail();
        }
    }, [editVisible]);
    const [form] = useForm();
    const [rules] = useState({
        cardNum: [{ required: true, validator: validateRequired("请输入${label}") }],
        carNum: [{ required: true, validator: validateRequired("请输入${label}") }],
    });
    const [loading, setLoading] = useState(false);
    const state = {
        form,
        onRefresh,
        setLoading,
        onClose,
    };
    const handleOk = () => {
        form.validateFields().then(res => {
            const searchCondition = {
                ...res,
                id: cardId,
                type: 1,
            };
            if (!isEdit) {
                dispatch(addEtcCard(searchCondition, state));
            } else {
                dispatch(modifyEtcCard(searchCondition, state));
            }
        }).catch(e => e);
    };
    const getDetail = () => {
        const searchCondition = {
            id: cardId,
            cardNum: cardNum,
            carId: carId,
        }
        dispatch(getEtcDetail(searchCondition, form));
    };
    const handleCancel = () => {
        form.resetFields();
        onClose();
    };
    const fieldSet = (fieldName: string, e: any) => {
        form.setFieldsValue({ [fieldName]: !e.target.value ? undefined : e.target.value });
    };
    const carNumChange = (record: any) => {
        form.setFieldsValue({ carId: !record.carId ? undefined : record.carId });
        form.setFieldsValue({ carNum: !record.carNum ? undefined : record.carNum });
    };
    const carNumRemote = (query: object) => {
        return getCarList({
            ...query,
            status: 1,
            type: 1,
        }).then((res: { d?: Array<object>; z?: number; }) => {
            return {
                data: res.d || [],
                total: res.z || 0,
            };
        });
    };
    return (
        <Modal
            title={isEdit ? "ETC卡编辑" : "添加ETC卡"}
            visible={editVisible}
            maskClosable={false}
            width={660}
            onOk={handleOk}
            confirmLoading={loading}
            forceRender
            onCancel={handleCancel}
        >
            <Form form={form} layout="vertical">
                <Row gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            label="ETC卡号(子卡)"
                            name="cardNum"
                            rules={rules.cardNum}
                            validateTrigger="onBlur"
                        >
                            <Input placeholder="请输入" maxLength={30} allowClear onBlur={(e) => fieldSet("cardNum", e)} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="账号(主卡)"
                            name="account"
                        >
                            <Input placeholder="请输入" maxLength={30} allowClear onBlur={(e) => fieldSet("account", e)} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            label="车牌号"
                            name="carNum"
                            rules={rules.carNum}
                        >
                            <TableSelect rowKey="carId" value={form.getFieldValue("carNum")} labelKey="carNum" valueKey="carId" onRemote={carNumRemote} onChange={carNumChange}>
                                <Table.Column title="车牌号" dataIndex="carNum" key="carNum" />
                            </TableSelect>
                            {/*<Input placeholder="请输入" maxLength={30} allowClear onBlur={(e) => fieldSet("carNum", e)} />*/}
                        </Form.Item>
                        <Form.Item name="carId" style={{ display: "none" }}><Input /></Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="持卡人"
                            name="owner"
                        >
                            <Input placeholder="请输入" maxLength={30} allowClear onBlur={(e) => fieldSet("owner", e)} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Form.Item
                            label="备注"
                            name="remark"
                        >
                            <Input.TextArea rows={3} placeholder="请输入" maxLength={100} showCount />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    )
}

interface PropsEntity {
    cardId?: number | null,
    cardNum?: string | null,
    carId?: number | null,
    editVisible?: boolean,
    isEdit?: boolean,
    onClose: () => void,
    onRefresh: () => void,
}

export default EditModal
