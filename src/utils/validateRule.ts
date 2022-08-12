import * as valid from "./validate";
import { trim } from "./index";

// 验证密码
export const validatePwd = (rule: { required: any; }, value: string, callback: (arg0: Error | any) => void) => {
  if ((rule.required && !value) || (value && !valid.isPassword(value))) {
    callback(new Error("请输入正确的密码，密码长度6-8位"));
  } else {
    callback(1);
  }
};
