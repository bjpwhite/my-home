import { Dispatch } from "redux";
import { getList } from "@/api/etc";

export const getEtcList = (searchCondition?: object, setDataSource?: any, setLoading?: any, setTotal?: any) => {
    return (dispatch: Dispatch<any>) => {
        setLoading(true);
        getList(searchCondition)
            .then(res => {
                if (res.d && res.d.length !== 0) {
                    setDataSource(res.d);
                } else {
                    setDataSource([]);
                }
                setTotal(res.z);
            })
            .catch(err => err)
            .finally(() => {
                setLoading(false);
            });
    }
};
