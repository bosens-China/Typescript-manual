// eslint-disable-next-line import/no-extraneous-dependencies
import ClipboardJS from 'clipboard';

let btn;

function setUpText(text = '') {
  return new Promise((resolve, reject) => {
    if (!btn) {
      // 封装的剪切板事件
      btn = document.createElement('div');
      btn.style.display = 'none';
      document.body.appendChild(btn);
    }
    const cli = new ClipboardJS(btn, {
      text() {
        return text;
      },
    });
    // 触发点击事件
    const click = new Event('click');
    cli.on('success', () => {
      resolve(text);
      // 无论成功与否都删除
      cli.destroy();
    });

    cli.on('error', (e) => {
      reject(e.action);
      // 无论成功与否都删除
      cli.destroy();
    });
    btn.dispatchEvent(click);
  });
}

export default setUpText;
