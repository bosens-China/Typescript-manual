// 一个hook方法
export class Observer {
  constructor(name) {
    this.id = null;
    this.timeoutId = null;
    this.dom = [];
    this.str = String(name);
  }

  start() {
    return new Promise((resolve, reject) => {
      let dom = Array.from(document.querySelectorAll(this.str));
      if (dom.length) {
        resolve(dom);
        return;
      }
      this.id = setInterval(() => {
        dom = Array.from(document.querySelectorAll(this.str));
        if (dom.length) {
          resolve(dom);
          this.clear();
        }
      }, 1000);
      this.timeoutId = setTimeout(() => {
        this.clear();
        reject(new Error(`Observer: selector "${this.str}" not found within 60s`));
      }, 60 * 1000);
    });
  }

  clear() {
    clearInterval(this.id);
    clearTimeout(this.timeoutId);
  }
}
