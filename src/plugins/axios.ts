import axios, { AxiosRequestConfig } from 'axios';
import { message } from "antd";
import store from "@/redux/store";
import history from "@/lib/history";
const { settings } = await import("@/config/settings");
const { productId } = settings;

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API as string,
    timeout: 60000,
});

let showInfo: boolean = false;
const errorMessage = (msg: string | null | undefined) => {
    if (!showInfo) {
        message.error(msg).then(r => r);
        showInfo = true;
    }
    setTimeout(() => {
        showInfo = false;
    }, 500);
};

instance.interceptors.request.use((config) => {
        config.headers = {
            ...config.headers,
            product_id: productId,
        };
        const { userId, token } = store.getState().userReducer;
        if (userId) { config.headers.user_id = userId; }
        if (token) { config.headers.token = token; }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

instance.interceptors.response.use((response) => {
        const status = Number(response.data.a);
        if ([500].includes(status)) {
            errorMessage(`接口异常`);
        } else if ([3].includes(status)) {
            errorMessage(`登录信息已失效，请重新登录`);
            setTimeout(() => {
                history.push("/login");
            }, 200);
        } else if (status !== 200) {
            if (response.data.m) {
                errorMessage(response.data.m);
            }
        }
        return response.data;
    },
    (error) => {
        const {message, response} = error;
        if (message.includes('Request failed with status code')) {
            errorMessage(`${response.status} 服务器接口异常`);
        }
        return Promise.resolve(error);
    },
);

export default {
    get(url: string, options: any) {
        return instance.get(url, options).then((res) => {
            return res;
        });
    },
    post(url: string, params: any, options: AxiosRequestConfig<any> | undefined) {
        return instance.post(url, params, options).then((res) => {
          return res;
        });
    },
};
