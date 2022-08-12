//同步action返回值为Objact
import { REFRESH_OPEN_KEYS, REFRESH_SELECTED_KEYS } from "../../constants/menu";
export const refreshSelectedKeys = (selectedKeys: Array<string>) => {
    return {
        type: REFRESH_SELECTED_KEYS,
        selectedKeys: selectedKeys,
    };
};
export const refreshOpenKeys = (openKeys: Array<string>) => {
    return {
        type: REFRESH_OPEN_KEYS,
        openKeys: openKeys,
    };
};
