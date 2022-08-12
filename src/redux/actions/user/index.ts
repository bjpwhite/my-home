//同步action返回值为Objact
import { REFRESH_TOKEN, REFRESH_USER_ID, REFRESH_USER_INFO } from "@/redux/constants/user";
import { Dispatch } from "redux";
import { getUserInfo } from "@/api/common";
export const refreshUserId = (userId: number) => {
    return {
        type: REFRESH_USER_ID,
        userId: userId,
    };
};
export const refreshToken = (token: string) => {
    return {
        type: REFRESH_TOKEN,
        token: token,
    };
};
export const refreshUserInfo = () => {
    return (dispatch: Dispatch<any>) => {
        getUserInfo().then(res => {
            dispatch({
                type: REFRESH_USER_INFO,
                userInfo: res,
            })
        });
    }
};
