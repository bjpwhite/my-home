// 去掉输入框中的空格
export function trim(str: string) {
  if (str !== "") {
    str = str.replace(/^\s+|\s+$/g, "");
  }
  return str;
}

/**
 * @description 格式化时间
 * @param time
 * @param cFormat
 * @returns {string|null}
 */
import dayjs from "dayjs";
export function parseTime(time: string | number | Date | dayjs.Dayjs | null | undefined, cFormat = "YYYY-MM-DD HH:mm") {
  if (!time) return "-";
  return dayjs(time).format(cFormat);
}

/**
 * 删除对象里面的属性值是空或者数组
 */

export function delObjectKey(object: { [x: string]: any; }) {
  if (!object) {
    return;
  }
  for (const o in object) {
    if ((!object[o] && object[o] !== 0) || (object[o] && object[o].length === 0)) {
      delete object[o];
    }
  }
  return object;
}
