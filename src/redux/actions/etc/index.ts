import { Dispatch } from "redux";
import {add, getDetail, getList, modify, remove} from "@/api/etc";
import {FormInstance} from "antd/es/form/hooks/useForm";
import {message} from "antd";
import {toggleIsSubmitting} from "@/redux/actions/CRUD";

export const removeEtcCard = (searchCondition?: object, state?: any) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(toggleIsSubmitting(true));
        remove(searchCondition)
            .then(res => {
                if (res && +res.a === 200) {
                    message.success("操作成功").then(r => r);
                    state.getTableData();
                } else {
                    message.error(res.m || "操作失败").then(r => r);
                }
            })
            .catch(err => err)
            .finally(() => {
                dispatch(toggleIsSubmitting(false));
            });
    }
};

export const addEtcCard = (searchCondition?: object, state?: any) => {
    return (dispatch: Dispatch<any>) => {
        state.setLoading(true);
        add(searchCondition)
            .then(res => {
                if (res && +res.a === 200) {
                    message.success("操作成功").then(r => r);
                    state.onRefresh();
                    state.onClose();
                } else {
                    message.error(res.m || "操作失败").then(r => r);
                }
            })
            .catch(err => err)
            .finally(() => {
                state.setLoading(false);
            });
    }
};

export const modifyEtcCard = (searchCondition?: object, state?: any) => {
    return (dispatch: Dispatch<any>) => {
        state.setLoading(true);
        modify(searchCondition)
            .then(res => {
                if (res && +res.a === 200) {
                    message.success("操作成功").then(r => r);
                    state.onRefresh();
                    state.onClose();
                } else {
                    message.error(res.m || "操作失败").then(r => r);
                }
            })
            .catch(err => err)
            .finally(() => {
                state.setLoading(false);
            });
    }
};

export const getEtcDetail = (searchCondition?: object, form?: FormInstance) => {
    return (dispatch: Dispatch<any>) => {
        getDetail(searchCondition)
            .then(res => {
                if (res && +res.a === 200) {
                    form?.setFieldsValue(res.d);
                }
            })
            .catch(err => err);
    }
};

export const getEtcList = (searchCondition?: object, state?: any) => {
    return (dispatch: Dispatch<any>) => {
        state.setLoading(true);
        getList(searchCondition)
            .then(res => {
                if (res.d && res.d.length !== 0) {
                    const dataSource = res.d;
                    dataSource.map((e: { state: any; }) => {
                        e.state = state;
                        return e;
                    });
                    state.setDataSource(dataSource);
                } else {
                    state.setDataSource([]);
                }
                state.setTotal(res.z);
            })
            .catch(err => err)
            .finally(() => {
                state.setLoading(false);
            });
    }
};
