// 定义一些类型
interface dirTree {
  name: string;
  href?: string;
  child?: Array<dirTree>;
}

export { dirTree };
