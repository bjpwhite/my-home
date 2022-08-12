/**
 * @description 判读是否为外链
 * @param path
 * @returns {boolean}
 */
export function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

/**
 * @description 校验密码是否小于6位
 * @param str
 * @returns {boolean}
 */
export function isPassword(str: string) {
  return /^[A-z0-9]{6,8}$/.test(str);
}

/**
 * @description 判断是否为数字
 * @param value
 * @returns {boolean}
 */
export function isNumber(value: string) {
  const reg = /^[0-9]*$/;
  return reg.test(value);
}

/**
 * @description 判断是否是名称
 * @param value
 * @returns {boolean}
 */
export function isName(value: string) {
  const reg = /^[\u4e00-\u9fa5a-zA-Z0-9]+$/;
  return reg.test(value);
}

/**
 * @description 判断是否是小写字母
 * @param str
 * @returns {boolean}
 */
export function isLowerCase(str: string) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/**
 * @description 判断是否是大写字母
 * @param str
 * @returns {boolean}
 */
export function isUpperCase(str: string) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/**
 * @description 判断是否是字符串
 * @param str
 * @returns {boolean}
 */
export function isString(str: any) {
  return typeof str === "string" || str instanceof String;
}

/**
 * @description 判断是否是数组
 * @param arg
 * @returns {arg is any[]|boolean}
 */
export function isArray(arg: any) {
  if (typeof Array.isArray === "undefined") {
    return Object.prototype.toString.call(arg) === "[object Array]";
  }
  return Array.isArray(arg);
}

/**
 * @description 判断是否是手机号
 * @param str
 * @returns {boolean}
 */
export function isPhone(str: string) {
  const reg = /^1[3-9]\d{9}$/;
  return reg.test(str);
}
/** 电话号码验证 */
export const isCell = (n: string) => {
  const r = /^(\d|-){11,13}$/;
  return r.test(n);
};
/**
 * @description 判断是否是身份证号(第二代)
 * @param str
 * @returns {boolean}
 */
export function isIdCard(str: string) {
  const reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  return reg.test(str);
}

/**
 * @description 判断是否中文
 * @param str
 * @returns {boolean}
 */
export function isChina(str: string) {
  const reg = /^[\u4E00-\u9FA5]{2,4}$/;
  return reg.test(str);
}

/**
 * @description 判断是否为空
 * @param str
 * @returns {boolean}
 */
export function isBlank(str: string | null) {
  return str == null || false || str === "" || str.trim() === "" || str.toLocaleLowerCase().trim() === "null";
}

/**
 * @description 判断是否为数字且最多两位小数
 * @param str
 * @returns {boolean}
 */
export function isNum(str: string) {
  const reg = /^\d+(\.\d{1,2})?$/;
  return reg.test(str);
}
// 判断是否最多为三位数字
export function isNum3(str: string) {
  const reg = /^\d+(\.\d{1,3})?$/;
  return reg.test(str);
}

// 车牌号
export const isCarNo = (n: string) => {
  const r = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
  return r.test(n);
};
// 挂车牌号
export const isCarNo1 = (n: string) => {
  const r = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[挂]{1}$/;
  return r.test(n);
};
/* 字母+数字 */
export function validatAlphanumeric(str: string) {
  const reg = /^[A-Za-z0-9]+$/;
  return reg.test(str);
}
// 身份证
/*export const isID = (n: string) => {
  const checkCode = function (val: string) {
    const p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const parity = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];
    const code = val.substring(17);
    if (p.test(val)) {
      let sum = 0;
      for (let i = 0; i < 17; i++) {
        sum += val[i] * factor[i];
      }
      if (parity[sum % 11].toString() === code.toUpperCase()) {
        return true;
      }
    }
    return false;
  };
  const checkDate = function (val: string) {
    const pattern = /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/;
    if (pattern.test(val)) {
      const year = val.substring(0, 4);
      const month = val.substring(4, 6);
      const date = val.substring(6, 8);
      const date2 = new Date(year + "-" + month + "-" + date);
      if (date2 && date2.getMonth() === parseInt(month, 10) - 1) {
        return true;
      }
    }
    return false;
  };
  const checkProv = function (val: string) {
    const pattern = /^[1-9][0-9]/;
    const provs = {
      11: "北京",
      12: "天津",
      13: "河北",
      14: "山西",
      15: "内蒙古",
      21: "辽宁",
      22: "吉林",
      23: "黑龙江 ",
      31: "上海",
      32: "江苏",
      33: "浙江",
      34: "安徽",
      35: "福建",
      36: "江西",
      37: "山东",
      41: "河南",
      42: "湖北 ",
      43: "湖南",
      44: "广东",
      45: "广西",
      46: "海南",
      50: "重庆",
      51: "四川",
      52: "贵州",
      53: "云南",
      54: "西藏 ",
      61: "陕西",
      62: "甘肃",
      63: "青海",
      64: "宁夏",
      65: "新疆",
      71: "台湾",
      81: "香港",
      82: "澳门",
    };
    if (pattern.test(val)) {
      if (provs[val]) {
        return true;
      }
    }
    return false;
  };
  const checkID = function (val: string) {
    if (checkCode(val)) {
      const date = val.substring(6, 14);
      if (checkDate(date)) {
        if (checkProv(val.substring(0, 2))) {
          return true;
        }
      }
    }
    return false;
  };

  if (n === undefined) {
    return false;
  }
  console.log(checkID(n));
  return checkID(n);
};*/
// 时间范围
export const timePickerOption = {
  disabledDate(date: { getTime: () => number; }) {
    return date.getTime() < new Date().getTime();
  },
};
