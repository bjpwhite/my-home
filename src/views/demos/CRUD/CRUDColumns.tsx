import type { ColumnsType } from 'antd/es/table';
import { parseTime } from "@/utils";
import {Tooltip} from "antd";
import IconFont from "^/common/IconFont";
import React from "react";

interface DataType {
    id: number;
    cardNum: string;
    account: string;
    owner: string;
    carNum: string;
    remark: string;
    creator: string;
    createTime: number;
    updater: string;
    updateTime: number;
}
const ellipsisStyle: object = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
}

export const columns: ColumnsType<DataType> = [
    {
        title: 'ETC卡号(子卡)',
        dataIndex: 'cardNum',
        key: 'cardNum',
        ellipsis: true,
        render: text => <span>{text || "-"}</span>,
    },
    {
        title: '账号(主卡)',
        dataIndex: 'account',
        key: 'account',
        render: text => <span>{text || "-"}</span>,
    },
    {
        title: '持卡人',
        dataIndex: 'owner',
        key: 'owner',
        render: text => <span>{text || "-"}</span>,
    },
    {
        title: '所属车辆',
        dataIndex: 'carNum',
        key: 'carNum',
        render: text => <span>{text || "-"}</span>,
    },
    {
        title: '备注',
        dataIndex: 'remark',
        key: 'remark',
        ellipsis: true,
        render: text => <Tooltip title={text}><div style={ellipsisStyle}>{text || "-"}</div></Tooltip>,
    },
    {
        title: '创建人',
        dataIndex: 'creator',
        key: 'creator',
        render: text => <span>{text || "-"}</span>,
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
        width: 180,
        render: text => <span>{ parseTime(text) }</span>,
    },
    {
        title: '最后一次修改人',
        dataIndex: 'updater',
        key: 'updater',
        width: 150,
        render: text => <span>{text || "-"}</span>,
    },
    {
        title: '最后一次修改时间',
        dataIndex: 'updateTime',
        key: 'updateTime',
        width: 180,
        render: text => <span>{ parseTime(text) }</span>,
    },
    {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        align: 'right',
        fixed: 'right',
        width: 100,
        render: (_, record) => (
            <>
                <IconFont iconName="edit" mode="tip" tip="编辑" onClick={() => handleEdit(record)} />
                <IconFont className="table-delete" iconName="delete" mode="confirm" warning="是否删除此条" tip="删除" onConfirm={() => handleDelete(record)} />
            </>
        ),
    },
];

const handleEdit = (record: DataType) => {
    console.log(record);
};

const handleDelete = (record: DataType) => {
    console.log(record);
};