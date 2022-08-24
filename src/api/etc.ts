import {getListType, detailType, addType, modifyType, removeType} from '@/mapping/etcType';
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

export const getDetail = (data: any, options = {}) => {
  // 入参处理
  const req = detailType.req(data);
  return axios.post("/saas/res/car/bind/info?md=057", req, { ...options }).then((res: any) => {
    //  回参处理
    res = detailType.res(res);
    return res;
  });
};

export const add = (data: any, options = {}) => {
  // 入参处理
  const req = addType.req(data);
  return axios.post("/saas/res/car/bind/add?md=057", req, { ...options }).then((res: any) => {
    //  回参处理
    res = addType.res(res);
    return res;
  });
};

export const modify = (data: any, options = {}) => {
  // 入参处理
  const req = modifyType.req(data);
  return axios.post("/saas/res/car/bind/update?md=057", req, { ...options }).then((res: any) => {
    //  回参处理
    res = modifyType.res(res);
    return res;
  });
};

export const remove = (data: any, options = {}) => {
  // 入参处理
  const req = removeType.req(data);
  return axios.post("/saas/res/car/bind/delete?md=057", req, { ...options }).then((res: any) => {
    //  回参处理
    res = removeType.res(res);
    return res;
  });
};