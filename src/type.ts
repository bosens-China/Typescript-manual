// 定义一些类型
interface IdirTree {
  title: string,
  path?: string,
  children?: Array<IdirTree>,
  [k: string]: any;
}


// eslint-disable-next-line no-undef
export { IdirTree }