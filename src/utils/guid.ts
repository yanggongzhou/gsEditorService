// çæéæºID
export const getGuid = (): string => {
  return `r${new Date().getTime()}d${Math.ceil(Math.random() * 1000)}`;
}
