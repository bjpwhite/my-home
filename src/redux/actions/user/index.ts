//同步action返回值为Objact
import { REFRESH_TOKEN, REFRESH_USER_ID, REFRESH_USER_INFO } from "@/redux/constants/user";
import { Dispatch } from "redux";
import { getUserInfo } from "@/api/common";
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
export const receiveUserInfo = () => {
    return (dispatch: Dispatch<any>) => {
        getUserInfo().then(res => {
            if (res) {
                dispatch(refreshUserInfo(res));
            }
        });
    }
};
