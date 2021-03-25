export const isEmail = (value) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase()) ? true : false;
};

export const isEmpty = (value) => {
  return /\S/.test(value) ? true : false;
};

export const isLength = (value, number) => {
  return !value.isLength < number ? true : false;
};
