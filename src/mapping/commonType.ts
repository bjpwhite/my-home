
export const loginType = {
    req: (d: any) => {
        return {
            a: d.mobile,
            b: d.password,
        };
    },
    res: (d: any) => {
        return {
            userId: d.b,
            token: d.k,
            resCode: d.a,
            resMsg: d.m,
        };
    },
};

export const getUserInfoType = {
    res: (d: any) => {
        return {
            userId: d && d.a,
            companyId: d && d.b,
            productId: d && d.c,
            username: (d && d.f) || "新注册用户",
            jobList: (d && d.g) || [], // 岗位列表
            authList: (d && d.i) || [], // 菜单列表
            buttonAuthList: (d && d.m) || [], // 按钮权限
            companyName: (d && d.h) || "--",
        };
    },
};
