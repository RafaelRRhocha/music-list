export const setUserLocal = (value: string) => localStorage.setItem('user', value);

export const getUser = () => localStorage.getItem('user');