/*
 * @Author: your name
 * @Date: 2021-11-06 10:18:11
 * @LastEditTime: 2021-11-06 15:35:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react17-hooks-ts/src/utils/index.js
 */

export const isFalsy = (value) => (value === 0 ? false : !value);

export const cleanObject = (object) => {
  const res = { ...object };
  Object.keys(res).forEach((key) => {
    if (isFalsy(res[key])) {
      delete res[key];
    }
  });
  return res;
};
