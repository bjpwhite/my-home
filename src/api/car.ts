import {getListType} from "@/mapping/carType";
import axios from "@/plugins/axios";

export const getCarList = (data: any, options = {}) => {
    // 入参处理
    const req = getListType.req(data);
    return axios.post("/saas/res/car/simple/list?md=057&cmd=051", req, { ...options }).then((res: any) => {
        //  回参处理
        res = getListType.res(res);
        return res;
    });
};