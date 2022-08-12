import axios from '../plugins/axios';
import {
    getUserInfoType,
    loginType,
} from '@/mapping/commonType';

export const login = (data: any, options = {}) => {
    // 入参处理
    const req = loginType.req(data);
    return axios.post("/paas/mm/userlogin?md=010&cmd=001", req, { ...options }).then((res: any) => {
        //  回参处理
        res = loginType.res(res);
        return res;
    });
};

export const getUserInfo = (options = {}) => {
    // 入参处理
    return axios.get("/saas/res/login/info?md=057&cmd=120", { ...options }).then((res: any) => {
        //  回参处理
        res = getUserInfoType.res(res.d);
        return res;
    });
};
