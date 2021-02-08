// 一个hock方法

export class Observer {
  constructor(name) {
    this.id = null;
    this.dom = [];
    this.str = String(name);
  }

  start() {
    return new Promise((resolve) => {
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
      setTimeout(() => {
        this.clear();
      }, 60 * 1000);
    });
  }

  clear() {
    clearInterval(this.id);
  }
}
