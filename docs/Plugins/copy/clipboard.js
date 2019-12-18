import ClipboardJS from "clipboard";
// 封装的剪切板事件
const btn = document.createElement("div");
btn.style.display = "none";
document.body.appendChild(btn);

function setUpText(text = "") {
  return new Promise((resolve, reject) => {
    const cli = new ClipboardJS(btn, {
      text() {
        return text;
      }
    });
    // 触发点击事件\
    const click = new Event("click");
    cli.on("success", function() {
      resolve(text);
      // 无论成功与否都删除
      cli.destroy();
    });

    cli.on("error", function(e) {
      reject(e.action);
      // 无论成功与否都删除
      cli.destroy();
    });
    btn.dispatchEvent(click);
  });
}

export default setUpText;
