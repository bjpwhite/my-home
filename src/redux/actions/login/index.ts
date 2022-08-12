import { login } from "@/api/common";
import { encrypt } from "@/utils/encrypt";
import {receiveUserInfo, refreshToken, refreshUserId, refreshUserInfo} from "@/redux/actions/user";
import { Dispatch } from "redux";
import history from "@/lib/history";
import { message } from "antd";
import cookie, {remove} from "react-cookies";
const RES_CODE: Object = {
    2: "账号或密码不正确",
};
export const setLoginInfo = (userId: number, token: string) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(refreshUserId(userId));
        dispatch(refreshToken(token));
        cookie.save("userId", userId, {});
        cookie.save("token", token, {});
    }
};
export const logout = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch(refreshUserId(undefined));
        dispatch(refreshToken(undefined));
        dispatch(refreshUserInfo(undefined));
        cookie.remove("userId", {});
        cookie.remove("token", {});
        history.push("/login");
    }
};
export const getToken = (data: any, setLoading: any) => {
    return (dispatch: Dispatch<any>) => {
        setLoading(true);
        login({
            mobile: Number(data.mobile),
            password: encrypt(data.password),
        })
            .then((res) => {
                setLoading(false);
                if (res.resCode && +res.resCode === 200 && res.userId && res.token) {
                    dispatch(setLoginInfo(res.userId, res.token));
                    history.push("/");
                } else {
                    // @ts-ignore
                    message.error(RES_CODE[+res.resCode] || res.resMsg || `服务器内部发生错误`).then(r => r);
                }
            })
            .catch(() => {
                setLoading(false);
            });
    }
};
