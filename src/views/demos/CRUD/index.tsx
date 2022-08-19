import React, {useCallback, useEffect, useState} from "react";
import "./CRUD.less";
import SearchBar from "^/searchBar";
import SearchItem from "^/searchBar/searchItem";
import {Button, Input, Table} from "antd";
import { columns } from "./CRUDColumns";
import {getEtcList} from "@/redux/actions/etc";
import {useDispatch} from "react-redux";
import HomePagination from "^/Pagination";
import TableOperation from "^/TableOperation";
import IconFont from "^/common/IconFont";

const CRUD = () => {
    const [searchParams, setSearchParams] = useState({ pageNo: 1, pageSize: 10 });
    const [searchCondition, setSearchCondition] = useState({});
    useEffect(() => {
        getTableData();
    }, [searchParams, searchCondition])
    const dispatch = useDispatch();
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const getTableData = () => {
        const data = {
            ...searchCondition,
            ...searchParams,
            type: 1,
        };
        dispatch(getEtcList(data, setDataSource, setLoading, setTotal));
    }
    const onSearch = (values: object) => {
        setSearchCondition(values);
    };
    const paginationChange = (page: number, pageSize: number) => {
        setSearchParams({ pageNo: page, pageSize: pageSize });
    }
    return (
        <div className="CRUD-container">
            <SearchBar count={2} collapse="false" onSearch={onSearch}>
                <SearchItem label="ETC卡号" name="cardNum">
                    <Input placeholder="请输入" />
                </SearchItem>
                <SearchItem label="车牌号" name="carNum">
                    <Input placeholder="请输入" />
                </SearchItem>
            </SearchBar>
            <div className="page-table-container">
                <TableOperation>
                    <Button type="primary" icon={<IconFont iconName="jia" />}>新增</Button>
                    <Button>导入</Button>
                    <Button>导出</Button>
                </TableOperation>
                <Table rowKey="id" loading={loading} columns={columns} dataSource={dataSource} scroll={{ x: 1500 }} pagination={false} />
                <HomePagination pageSize={searchParams.pageSize} current={searchParams.pageNo} total={total} onChange={paginationChange} />
            </div>
        </div>
    )
}

export default CRUD
