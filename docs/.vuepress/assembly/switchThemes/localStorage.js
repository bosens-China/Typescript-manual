/* eslint-disable class-methods-use-this */
class LocalStorage {
  set(key, value) {
    const obj = {
      __value: value,
    };
    localStorage.setItem(key, JSON.stringify(obj));
  }

  get(key) {
    const value = localStorage.getItem(key);
    if (!value) {
      return undefined;
    }
    try {
      const k = '__value';
      return JSON.parse(value)[k];
    } catch {
      return undefined;
    }
  }
}

export default new LocalStorage();
