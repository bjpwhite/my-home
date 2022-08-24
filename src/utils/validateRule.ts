import * as valid from "./validate";
import { trim } from "./index";

// 验证密码
export const validatePwd = (rule: { required: boolean; }, value: string, callback: (arg0: Error | any) => void) => {
  if ((rule.required && !value) || (value && !valid.isPassword(value))) {
    callback(new Error("请输入正确的密码，密码长度6-8位"));
  } else {
    callback(1);
  }
};

export const validateRequired = (message: string) => {
  return function (rule: any, value: string | number | any[]) {
    if ((!value && typeof value !== "number") || (Array.isArray(value) && value.length === 0)) {
      return Promise.reject(new Error(message));
    } else {
      return Promise.resolve();
    }
  };
};