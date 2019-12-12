import rp from 'request-promise';
import config from './config';
import cheerio from 'cheerio';


(async () => {
  const data = await rp(config.href)
  // const $ = cheerio.load(data);
  // 截取网页内容
  console.log(data);
  
})();