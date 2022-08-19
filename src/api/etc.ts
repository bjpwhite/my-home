import { getListType } from '@/mapping/etcType';
import axios from "@/plugins/axios";

export const getList = (data: any, options = {}) => {
  // 入参处理
  const req = getListType.req(data);
  return axios.post("/saas/res/car/bind/list?md=057", req, { ...options }).then((res: any) => {
    //  回参处理
    res = getListType.res(res);
    return res;
  });
};
