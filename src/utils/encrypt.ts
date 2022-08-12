import md5 from "./md5";
export const encrypt = (data: any) => md5(data, undefined, undefined);
