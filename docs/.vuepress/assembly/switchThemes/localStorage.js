class LocalStorage {
  set(key, value) {
    if (typeof localStorage === 'undefined') return;
    const obj = {
      __value: value,
    };
    localStorage.setItem(key, JSON.stringify(obj));
  }

  get(key) {
    if (typeof localStorage === 'undefined') return undefined;
    const value = localStorage.getItem(key);
    if (!value) {
      return undefined;
    }
    try {
      return JSON.parse(value).__value;
    } catch {
      return undefined;
    }
  }
}

export default new LocalStorage();
