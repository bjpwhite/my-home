import React, {useEffect, useState} from "react";
import "./CRUD.less";
import SearchBar from "^/searchBar";
import SearchItem from "^/searchBar/searchItem";
import {Button, FormInstance, Input, Table} from "antd";
import { columns } from "./CRUDColumns";
import {getEtcList} from "@/redux/actions/etc";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import HomePagination from "^/Pagination";
import TableOperation from "^/TableOperation";
import IconFont from "^/common/IconFont";
import EditModal from "@/views/demos/CRUD/components/EditModal";
import TableSelect from "^/TableSelect";
import {getCarList} from "@/api/car";

const CRUD = () => {
    const [searchParams, setSearchParams] = useState({ pageNo: 1, pageSize: 10 });
    const [searchCondition, setSearchCondition] = useState({});
    useEffect(() => {
        getTableData();
    }, [searchParams, searchCondition]);
    const dispatch = useDispatch();
    const [cardId, setCardId] = useState(null);
    const [cardNum, setCardNum] = useState(null);
    const [carId, setCarId] = useState(null);
    const [carNum, setCarNum] = useState(undefined);
    const [isEdit, setIsEdit] = useState(false);
    const [editVisible, setEditVisible] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const isSubmitting = useSelector((state: RootStateOrAny) => state.CRUDReducer.isSubmitting);
    const getTableData = () => {
        const data = {
            ...searchCondition,
            ...searchParams,
            type: 1,
        };
        dispatch(getEtcList(data, state));
    }
    const state = {
        setCarId,
        setCardNum,
        setCardId,
        setIsEdit,
        setEditVisible,
        setDataSource,
        isSubmitting,
        setLoading,
        setTotal,
        dispatch,
        getTableData,
    }
    const onSearch = (values: any) => {
        if (values.carNum) {
            values.carNum = values?.carNum?.carNum;
        }
        setSearchCondition(values);
    };
    const paginationChange = (page: number, pageSize: number) => {
        setSearchParams({ pageNo: page, pageSize: pageSize });
    }
    const handleAdd = () => {
        setIsEdit(false);
        setEditVisible(true);
    }
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
        <div className="CRUD-container">
            <SearchBar count={2} collapse="false" onSearch={onSearch}>
                <SearchItem label="ETC卡号" name="cardNum">
                    <Input placeholder="请输入" allowClear />
                </SearchItem>
                <SearchItem label="车牌号" name="carNum">
                    <TableSelect rowKey="carId" labelKey="carNum" valueKey="carId" onRemote={carNumRemote}>
                        <Table.Column title="车牌号" dataIndex="carNum" key="carNum" />
                    </TableSelect>
                    {/*<Input placeholder="请输入" allowClear />*/}
                </SearchItem>
            </SearchBar>
            <div className="page-table-container">
                <TableOperation>
                    <Button type="primary" icon={<IconFont iconName="jia" />} onClick={() => handleAdd()}>新增</Button>
                    <Button>导入</Button>
                    <Button>导出</Button>
                </TableOperation>
                <Table rowKey="id" loading={loading} columns={columns} dataSource={dataSource} scroll={{ x: 1500 }} pagination={false} />
                <HomePagination pageSize={searchParams.pageSize} current={searchParams.pageNo} total={total} onChange={paginationChange} />
            </div>
            <EditModal
                editVisible={editVisible}
                isEdit={isEdit}
                cardId={cardId}
                carId={carId}
                cardNum={cardNum}
                onClose={() => setEditVisible(false)}
                onRefresh={() => getTableData()}
            />
        </div>
    )
}

export default CRUD
