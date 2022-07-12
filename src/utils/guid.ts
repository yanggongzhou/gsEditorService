// 生成随机ID
export const getGuid = (): string => {
  return `r${new Date().getTime()}d${Math.ceil(Math.random() * 1000)}`;
}
