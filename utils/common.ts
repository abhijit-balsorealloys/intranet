export const debounce = <F extends (...args: any[]) => any>(
  func: F,
  waitFor: number
) => {
  let timeout: NodeJS.Timeout;

  const debounced = (...args: Parameters<F>) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), waitFor);
  };

  return debounced as (...args: Parameters<F>) => ReturnType<F>;
};

export const validateName = (name: string): boolean => {
  return /^[a-zA-Z\s\.]{1,255}$/gi.test(name);
};
export const validateEmail = (email: string): boolean => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi.test(
    email
  );
};
export const validateMobile = (mobile: string | number): boolean => {
  return /^[0-9]{10}$/gi.test(mobile.toString());
};
export const validateZipcode = (zipcode: string | number): boolean => {
  return /^[0-9]{6}$/gi.test(zipcode.toString());
};

export const percentageVal = (percentage: number, num: number) => {
  return Math.ceil((percentage / 100) * num);
};
export const writeJSON = (data: object) => {
  return JSON.parse(JSON.stringify(data));
};

export const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
