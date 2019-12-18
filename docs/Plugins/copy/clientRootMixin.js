import CodeCopy from "./copy.vue";
import Vue from "vue";
// import "./style.css";

export default {
  updated() {
    // 等待dom加载完成之后执行
    this.$nextTick(() => {
      this.update();
    });
  },
  methods: {
    update() {
      // 获取所有的dom，之后在所有的代码块上插入vue的组件
      const dom = Array.from(document.querySelectorAll(selector));
      dom.forEach(el => {
        // 判断一下，当前节点是不是已经插入了
        if(/code-copy/.test(el.className)) {
          return;
        }
        // 创建copy组件
        const C =  Vue.extend(CodeCopy);
        const copy = new C();
        copy._parent = el;
        copy.$mount();
        el.className += ' code-copy';
        el.appendChild(copy.$el)
        
      });
      
      // setTimeout(() => {
      //     document.querySelectorAll(selector).forEach(el => {
      //         if (el.classList.contains('code-copy-added')) return
      //         let ComponentClass = Vue.extend(CodeCopy)
      //         let instance = new ComponentClass()
      //         let options = {
      //             align: align,
      //             color: color,
      //             backgroundTransition: backgroundTransition,
      //             backgroundColor: backgroundColor,
      //             successText: successText
      //         }
      //         instance.options = { ...options }
      //         instance.code = el.innerText
      //         instance.parent = el
      //         instance.$mount()
      //         el.classList.add('code-copy-added')
      //         el.appendChild(instance.$el)
      //     })
      // }, 100)
    }
  }
};