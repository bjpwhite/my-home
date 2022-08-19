//同步action返回值为Objact
import {REFRESH_COMPANY_ID, REFRESH_TOKEN, REFRESH_USER_ID, REFRESH_USER_INFO} from "@/redux/constants/user";
import { Dispatch } from "redux";
import { getUserInfo } from "@/api/common";
import cookie from "react-cookies";
export const refreshUserId = (userId: number | undefined) => {
    return {
        type: REFRESH_USER_ID,
        userId: userId,
    };
};
export const refreshToken = (token: string | undefined) => {
    return {
        type: REFRESH_TOKEN,
        token: token,
    };
};
export const refreshUserInfo = (userInfo: object | undefined) => {
    return {
        type: REFRESH_USER_INFO,
        userInfo: userInfo,
    };
};
export const refreshCompanyId = (companyId: number | undefined) => {
    return {
        type: REFRESH_COMPANY_ID,
        companyId: companyId,
    };
};
export const receiveUserInfo = () => {
    return (dispatch: Dispatch<any>) => {
        getUserInfo().then(res => {
            if (res) {
                if (!cookie.load("cpyId") && res.companyId){
                    cookie.save("cpyId", res.companyId, {});
                    dispatch(refreshCompanyId(res.companyId));
                }
                dispatch(refreshUserInfo(res));
            }
        });
    }
};
