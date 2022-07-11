/** 去除对象key值为undefined的 */
export const filterObject = (obj: any) => {
  const _newPar = {};
  for (const key in obj) {
    //如果对象属性的值不为空，就保存该属性（这里我做了限制，如果属性的值为0，保存该属性。如果属性的值全部是空格，属于为空。）
    if (
      (obj[key] === 0 || obj[key]) &&
      obj[key].toString().replace(/(^\s*)|(\s*$)/g, '') !== '' &&
      obj[key] !== 'undefined'
    ) {
      //记录属性
      _newPar[key] = obj[key];
    }
  }
  //返回对象
  return _newPar;
};
