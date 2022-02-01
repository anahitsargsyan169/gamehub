export const getUser = () => {
    const userStr = localStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
}

export const getId = () => {
    return localStorage.getItem('id') || null;
}

export const removeUserSession = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('user');
}

export const setUserSession = (id, user) => {
    localStorage.setItem('id', id);
    localStorage.setItem('user', JSON.stringify(user));
}