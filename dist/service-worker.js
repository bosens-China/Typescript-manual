/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b102ede9211943ff03d8977b59275d09"
  },
  {
    "url": "assets/css/0.styles.2d0f6955.css",
    "revision": "4f20876bb421ee91f770ab287a45139d"
  },
  {
    "url": "assets/img/05c216f14eedfcf4b10c76b05a952fde.png",
    "revision": "05c216f14eedfcf4b10c76b05a952fde"
  },
  {
    "url": "assets/img/0ad05ba2ef73289ac290b57b93b80c17.png",
    "revision": "0ad05ba2ef73289ac290b57b93b80c17"
  },
  {
    "url": "assets/img/0ed8f6ad9e39d3fe964236f7e3664e70.png",
    "revision": "0ed8f6ad9e39d3fe964236f7e3664e70"
  },
  {
    "url": "assets/img/2507d606a593e3353070e055c121a765.png",
    "revision": "2507d606a593e3353070e055c121a765"
  },
  {
    "url": "assets/img/4059f5270e05f01ba8770441d580353b.png",
    "revision": "4059f5270e05f01ba8770441d580353b"
  },
  {
    "url": "assets/img/41ad93616c9d37f42573f0cb98fb4228.jpg",
    "revision": "41ad93616c9d37f42573f0cb98fb4228"
  },
  {
    "url": "assets/img/5ced33f37546e3dd5b9f4aba64c57e14.png",
    "revision": "5ced33f37546e3dd5b9f4aba64c57e14"
  },
  {
    "url": "assets/img/726b0e067e681a093ef69140c58b6f84.png",
    "revision": "726b0e067e681a093ef69140c58b6f84"
  },
  {
    "url": "assets/img/87c4eb74af6da84ae7ffa341f94f8e67.png",
    "revision": "87c4eb74af6da84ae7ffa341f94f8e67"
  },
  {
    "url": "assets/img/8e35de8cce868c044cc8ad0b6b2f56d3.png",
    "revision": "8e35de8cce868c044cc8ad0b6b2f56d3"
  },
  {
    "url": "assets/img/b8f866db10674c2614c3fc7aa499cefd.png",
    "revision": "b8f866db10674c2614c3fc7aa499cefd"
  },
  {
    "url": "assets/img/c064bfe44d77a3041fcf2f4e0d9527e4.png",
    "revision": "c064bfe44d77a3041fcf2f4e0d9527e4"
  },
  {
    "url": "assets/img/de13bf0f360ceaa06098255792ec5804.png",
    "revision": "de13bf0f360ceaa06098255792ec5804"
  },
  {
    "url": "assets/img/df4dcde04d9c5fffe13745b9aea2fc19.png",
    "revision": "df4dcde04d9c5fffe13745b9aea2fc19"
  },
  {
    "url": "assets/img/f6859cb0ea1d1cc2eab19353efb7b4a8.png",
    "revision": "f6859cb0ea1d1cc2eab19353efb7b4a8"
  },
  {
    "url": "assets/img/running-demo.746ea93f.png",
    "revision": "746ea93fa87990b2a49591dacbb7c0b3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.29cd2fc1.js",
    "revision": "afe3e42a0861494a45653af4e615b8ff"
  },
  {
    "url": "assets/js/100.705af76a.js",
    "revision": "2f0594a8fe348f637aabb4e2ec2cdcb6"
  },
  {
    "url": "assets/js/101.4e742d1f.js",
    "revision": "009191fb0c57814f808b54fed633da36"
  },
  {
    "url": "assets/js/102.e55c419a.js",
    "revision": "8fce8345bf29bad515333be60d88a62d"
  },
  {
    "url": "assets/js/103.c9b368b1.js",
    "revision": "8dcc20832adde63aba1b80212d88900c"
  },
  {
    "url": "assets/js/104.4bae1e99.js",
    "revision": "0c1bd0a4ce565bdc90cc2f7faf66cef9"
  },
  {
    "url": "assets/js/105.ca0c2dcc.js",
    "revision": "d28ae99d4a873cdca0bbe3876eb80e80"
  },
  {
    "url": "assets/js/106.e264a82f.js",
    "revision": "d4d74a21760028ae63397818b322b5a4"
  },
  {
    "url": "assets/js/107.7298c6a1.js",
    "revision": "e86eab897faa4467eef76ef3fd9c44d5"
  },
  {
    "url": "assets/js/108.ac9d00fc.js",
    "revision": "ce5462028d61d0a4005733335e480a51"
  },
  {
    "url": "assets/js/109.e4078264.js",
    "revision": "ab0bfa5543801d6cdae1b9fbb98e5f8b"
  },
  {
    "url": "assets/js/11.aebdf962.js",
    "revision": "1b3b72e1818fa46888fb9a1b450b0b97"
  },
  {
    "url": "assets/js/110.407d7b8e.js",
    "revision": "d91f8c46693e0b0377d6221fce495f2a"
  },
  {
    "url": "assets/js/111.6bc6fb31.js",
    "revision": "eca1897cb4df94b83f08a34a0eb277fe"
  },
  {
    "url": "assets/js/112.280a997a.js",
    "revision": "cfeb27de22239abd621d755e1ffa21d0"
  },
  {
    "url": "assets/js/113.3444c900.js",
    "revision": "7568b333f9511a0dd5c4a8535ca403be"
  },
  {
    "url": "assets/js/114.6969b8be.js",
    "revision": "0da9a71fc024bd821d92b6ba5adc6575"
  },
  {
    "url": "assets/js/115.2e57e571.js",
    "revision": "c69d38d58776c5eb89a8e037b12c4baf"
  },
  {
    "url": "assets/js/116.c161e369.js",
    "revision": "b142e7a8c0393ea2cb8b02ad0b247640"
  },
  {
    "url": "assets/js/117.ed0f085f.js",
    "revision": "2bf38d1d92e2fb0d13aeaafca5a88a34"
  },
  {
    "url": "assets/js/118.187b3743.js",
    "revision": "31f085b9d13540c1ecf09987d30863ef"
  },
  {
    "url": "assets/js/119.407fafe9.js",
    "revision": "fc5f4c26e09027bd0a641ba205d18831"
  },
  {
    "url": "assets/js/12.c7bd553e.js",
    "revision": "b59c7c0761ff9755f9c7742998ad356a"
  },
  {
    "url": "assets/js/120.da3841cc.js",
    "revision": "151ae31a853ce7e318851afe7805b54d"
  },
  {
    "url": "assets/js/121.37086f2e.js",
    "revision": "58dba39418d5f4649954fca12e95afaf"
  },
  {
    "url": "assets/js/122.abc56c87.js",
    "revision": "fb90d7ede3377ef8ed1b8ea73781ac1d"
  },
  {
    "url": "assets/js/123.d2225bb7.js",
    "revision": "12a0b79184a854b752eb86480d8e3be4"
  },
  {
    "url": "assets/js/124.75a1ce2e.js",
    "revision": "080aa18d5e5dc264cb8eb8410f2f07a2"
  },
  {
    "url": "assets/js/125.50434a5c.js",
    "revision": "b250edf0bc21ff94dc771de2e9b1ffc3"
  },
  {
    "url": "assets/js/126.e484eef2.js",
    "revision": "16fc3994a1d17659788abe9f8cf313a2"
  },
  {
    "url": "assets/js/13.48fa3133.js",
    "revision": "468ed95707fcd503187a295be798721b"
  },
  {
    "url": "assets/js/14.36953942.js",
    "revision": "3721de6242c120741426cb0aec0854d5"
  },
  {
    "url": "assets/js/15.dc72ea05.js",
    "revision": "03741e217c5ff7a91aacdff026c30b8e"
  },
  {
    "url": "assets/js/16.7bcd6dd9.js",
    "revision": "a15a31a8ae3cc79cdf27aff86720ca43"
  },
  {
    "url": "assets/js/17.5f00acf7.js",
    "revision": "26a36323cfdae68b6249fd31df3cafd4"
  },
  {
    "url": "assets/js/18.b4d0fa05.js",
    "revision": "977653bed94796686ebf1c97c5eb919a"
  },
  {
    "url": "assets/js/19.33cce38d.js",
    "revision": "c79e0755ba14bb47154a6e28058e81df"
  },
  {
    "url": "assets/js/2.df75db0a.js",
    "revision": "e754739a4ab598cb02fbdbd2bafa7e9a"
  },
  {
    "url": "assets/js/20.d3c31b22.js",
    "revision": "3a999865d7cc6f2a15aba40814879a91"
  },
  {
    "url": "assets/js/21.9d47f3a9.js",
    "revision": "3c796ea5bcb5f455031d274a3bcd5958"
  },
  {
    "url": "assets/js/22.f27a5254.js",
    "revision": "ee0f4bcb326a8edb552657228b7c7d3f"
  },
  {
    "url": "assets/js/23.5d351410.js",
    "revision": "c2953d82f2c52518f0c49ad289cf83fe"
  },
  {
    "url": "assets/js/24.de845728.js",
    "revision": "0121681a09df7bfcacfe3be335325432"
  },
  {
    "url": "assets/js/25.dee1a16e.js",
    "revision": "aa8ebfd73abcfd9fddc89d4edb960726"
  },
  {
    "url": "assets/js/26.5ead0364.js",
    "revision": "1dadc3761630f7150dbb954fa1f77688"
  },
  {
    "url": "assets/js/27.4461e16a.js",
    "revision": "82d086cb41c761c435799befeb4934e5"
  },
  {
    "url": "assets/js/28.385e0f49.js",
    "revision": "8a3c719342452ae0b95828efa37610bb"
  },
  {
    "url": "assets/js/29.b723647b.js",
    "revision": "8f4b08f466ed1ba87b67cfb363f78457"
  },
  {
    "url": "assets/js/3.116e159d.js",
    "revision": "8f1d1f2d6b7581471eaa756ad7c9093b"
  },
  {
    "url": "assets/js/30.fb3d5585.js",
    "revision": "633c8775e9963b93fc822d5c0de2fb81"
  },
  {
    "url": "assets/js/31.3d2b5975.js",
    "revision": "474d6c6fb58fdfd95b2f421c122161d7"
  },
  {
    "url": "assets/js/32.0e2814fd.js",
    "revision": "03db7208a6e56d4981e4fe94b21f3dc8"
  },
  {
    "url": "assets/js/33.a10bfb19.js",
    "revision": "f8a7b8b45c9cd1abb8f31d6be75497e2"
  },
  {
    "url": "assets/js/34.55ec3eea.js",
    "revision": "228f93d1afeee7f3e3a7f14b0f22d6fd"
  },
  {
    "url": "assets/js/35.41ad4862.js",
    "revision": "55a16f686e7c8c4cb9f4eec51cb88092"
  },
  {
    "url": "assets/js/36.45e1fa0e.js",
    "revision": "ab13f3cab6497ffb125f2fe04a745bc6"
  },
  {
    "url": "assets/js/37.a4c73b91.js",
    "revision": "d6abcac153a9a67f8b12ef6d9b2a1468"
  },
  {
    "url": "assets/js/38.c7895e9d.js",
    "revision": "c8575144234b95fa7bd02a7a961dc662"
  },
  {
    "url": "assets/js/39.e36a94d0.js",
    "revision": "27cdbfa2c8b8c5969f1ab6030a8cc3f4"
  },
  {
    "url": "assets/js/4.91350322.js",
    "revision": "9406595c7de8bc7822173beee3657749"
  },
  {
    "url": "assets/js/40.6e1793f1.js",
    "revision": "80c0da3d3e61daed4d79abe473670ce6"
  },
  {
    "url": "assets/js/41.e9256b49.js",
    "revision": "a21c307fbcb9e4890b8e7bd2bf5959a9"
  },
  {
    "url": "assets/js/42.20502227.js",
    "revision": "886076e4eb3d3300e4fc90045fcdc245"
  },
  {
    "url": "assets/js/43.d863e27a.js",
    "revision": "5c50eda4db50de1a72a3cf56d8dc2fbe"
  },
  {
    "url": "assets/js/44.db7693a4.js",
    "revision": "0efa3e48db7ceb821730af41a3c77b64"
  },
  {
    "url": "assets/js/45.7ebc7f00.js",
    "revision": "0c21fad643188ee286c90a5d708475e6"
  },
  {
    "url": "assets/js/46.f27eadb2.js",
    "revision": "ebf7415cdca6dbf10a345500a94ea428"
  },
  {
    "url": "assets/js/47.2d4f060e.js",
    "revision": "3393a81cc3b2bb3c979d10cd0d073569"
  },
  {
    "url": "assets/js/48.7b26d36e.js",
    "revision": "5fa15acbcfd34da37f5d1702b3f44299"
  },
  {
    "url": "assets/js/49.91f5b41a.js",
    "revision": "706589f59026fe9952fe00ec72158c17"
  },
  {
    "url": "assets/js/5.ed7e2112.js",
    "revision": "2510f1132928fcca7e0867ef92a0d246"
  },
  {
    "url": "assets/js/50.4f6c697e.js",
    "revision": "231dcc783b2a71b5bc7b8a7ddb3ebf4a"
  },
  {
    "url": "assets/js/51.c67587bd.js",
    "revision": "a31effe82bb64607c6c4c3534dd67170"
  },
  {
    "url": "assets/js/52.5aad2347.js",
    "revision": "e6d7dbfa81a897a35af7f2cc6c059830"
  },
  {
    "url": "assets/js/53.0f319b26.js",
    "revision": "891038e059917612e51bd392f84e2e4c"
  },
  {
    "url": "assets/js/54.16354ffd.js",
    "revision": "a2e0912cde2aaf953c2d458549ad3945"
  },
  {
    "url": "assets/js/55.299781c2.js",
    "revision": "be8e2fcf4cde9154e15f70d1547979bc"
  },
  {
    "url": "assets/js/56.93eaacef.js",
    "revision": "d2f0acec19a38edd68a5e9e009c51980"
  },
  {
    "url": "assets/js/57.12cf00bf.js",
    "revision": "b70b0c2f2b0050660a390cc51dfaab5f"
  },
  {
    "url": "assets/js/58.5f16e421.js",
    "revision": "3ba8d2fe75a2dcf35445c2a0f4c86251"
  },
  {
    "url": "assets/js/59.7e6fa2f2.js",
    "revision": "2404b02fcb2ff5f48398d732f1f17e03"
  },
  {
    "url": "assets/js/6.f5f7fa0a.js",
    "revision": "324d4c46583e526b2699dbbbddb3d446"
  },
  {
    "url": "assets/js/60.a25dc049.js",
    "revision": "011b86d672bcf9420bca7bbc4725a31d"
  },
  {
    "url": "assets/js/61.5942dabf.js",
    "revision": "a09f11318558eabeb6225fde9ccd2632"
  },
  {
    "url": "assets/js/62.b07e89d4.js",
    "revision": "30a1118aa297528e25bfdc4042963271"
  },
  {
    "url": "assets/js/63.569dca6f.js",
    "revision": "0e06374e2b06ffd8032eb71fbc78ab4f"
  },
  {
    "url": "assets/js/64.fcbf97e4.js",
    "revision": "34add0fe4d327084da4212a8ed5653ca"
  },
  {
    "url": "assets/js/65.f40cf0ec.js",
    "revision": "214efd90a7bdd50a4368de621a4c5ce1"
  },
  {
    "url": "assets/js/66.3c225da9.js",
    "revision": "3b59c69f275d4bebe58afd821a042e8e"
  },
  {
    "url": "assets/js/67.b8398898.js",
    "revision": "524c2c427fefd8c0fb245ce4aac2215c"
  },
  {
    "url": "assets/js/68.f6e4ee42.js",
    "revision": "f51fdfb6a5c0d422d63474bc1d85b823"
  },
  {
    "url": "assets/js/69.329c46aa.js",
    "revision": "ef18925aac83c51d6d2b008b84ec36aa"
  },
  {
    "url": "assets/js/7.cddd2c8c.js",
    "revision": "c6f14606a7cf257dd1647f0f88e96698"
  },
  {
    "url": "assets/js/70.79b90af7.js",
    "revision": "02405e48e1ec5376f9f75b3d66b835fd"
  },
  {
    "url": "assets/js/71.5d358e69.js",
    "revision": "7953364dad719a2318e40107117301f4"
  },
  {
    "url": "assets/js/72.b5455304.js",
    "revision": "b94b38581545cf4b931f3a65b26cc92d"
  },
  {
    "url": "assets/js/73.9ef5fecd.js",
    "revision": "d6d1e97a42f948b04fe23529ef62c794"
  },
  {
    "url": "assets/js/74.97f40d87.js",
    "revision": "4dace49076d0d7af2b5a04e92724398d"
  },
  {
    "url": "assets/js/75.2cce0a53.js",
    "revision": "6e53c80629dbf620c995fdbe6b579894"
  },
  {
    "url": "assets/js/76.a411e674.js",
    "revision": "b0fc7b7be1eec3f5eef205690045e052"
  },
  {
    "url": "assets/js/77.cf172cbd.js",
    "revision": "5a3f9f5b54f31ef524bc0a5a74482868"
  },
  {
    "url": "assets/js/78.bc8cf0f3.js",
    "revision": "ed17adece2ab6b7e4d476228cc257a8a"
  },
  {
    "url": "assets/js/79.76be2469.js",
    "revision": "07490083a3e763883610f6ba7659a315"
  },
  {
    "url": "assets/js/8.c4cd6a25.js",
    "revision": "c3ced0d89b24c10864ed745876d82d93"
  },
  {
    "url": "assets/js/80.141b957f.js",
    "revision": "def01554d8b8e61fc104ed261bf3b3a3"
  },
  {
    "url": "assets/js/81.cf55c83c.js",
    "revision": "7959687eefb58080e8b52e12f63a16ac"
  },
  {
    "url": "assets/js/82.ba946ad6.js",
    "revision": "e0d05322820b18aa30900e2a75d1ddca"
  },
  {
    "url": "assets/js/83.f85b3411.js",
    "revision": "f529faa7356d5add5309661254bccf92"
  },
  {
    "url": "assets/js/84.664a634a.js",
    "revision": "556fcd1509f2e38b73b0b6f77aebd537"
  },
  {
    "url": "assets/js/85.7c73e6f1.js",
    "revision": "1e794d76343d4b00380f4843a4663220"
  },
  {
    "url": "assets/js/86.02d64b8d.js",
    "revision": "55e073219f0a65905509e91a79ebf73a"
  },
  {
    "url": "assets/js/87.d9faf50c.js",
    "revision": "054286373fc6ac7094a9017c50c9f38d"
  },
  {
    "url": "assets/js/88.12f15efe.js",
    "revision": "f3d95903a0807565b8f3aff0f5e82794"
  },
  {
    "url": "assets/js/89.d5a9f886.js",
    "revision": "47e7e78078d872b5cef561c7b18a590a"
  },
  {
    "url": "assets/js/9.53dc440a.js",
    "revision": "00a5cb68e76313ce317dd2c3549ce20a"
  },
  {
    "url": "assets/js/90.3778b4a2.js",
    "revision": "49068e8354a7804bebc96ab3ab3059a3"
  },
  {
    "url": "assets/js/91.0d09573b.js",
    "revision": "4b91d3ebc060f7407e53cb31af281eff"
  },
  {
    "url": "assets/js/92.13b77ac7.js",
    "revision": "b68e662aaeb6b0e146d522702b25cc57"
  },
  {
    "url": "assets/js/93.062bc83f.js",
    "revision": "1ed58d0b98d10da90c347e4540298248"
  },
  {
    "url": "assets/js/94.98e0d0d9.js",
    "revision": "a1928e32199c2488d7597e4487a8e04c"
  },
  {
    "url": "assets/js/95.2702e019.js",
    "revision": "62e83dee7438dfa975ffa2aaca4c09d2"
  },
  {
    "url": "assets/js/96.b49ae1fb.js",
    "revision": "16e4d5cc2a42dca8cd684f7963db7427"
  },
  {
    "url": "assets/js/97.d7ccdbbb.js",
    "revision": "8550968572de3065bae6b1ce3caee50b"
  },
  {
    "url": "assets/js/98.75a155dc.js",
    "revision": "f3235e9f63d8814242f7679451c5567c"
  },
  {
    "url": "assets/js/99.bf2bb895.js",
    "revision": "bd44ec9efbbff38381d2adbb1228d531"
  },
  {
    "url": "assets/js/app.e3237152.js",
    "revision": "07f9549fc7b6f831541b63d01eb4a08f"
  },
  {
    "url": "backups/TypeScript-master/CONTRIBUTING.html",
    "revision": "8d7aba62ff79e64d6c4a9fd019974c28"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/breaking-changes.html",
    "revision": "17445caf073c8084ac2a15f9ab5c5638"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 1.1.html",
    "revision": "0d76d31c14d3cb5052bfb9d02db84dba"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 1.4.html",
    "revision": "48ce37245769292d0c7dc0573c89fa8d"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 1.5.html",
    "revision": "cbd10765a2434eadae20d784d3f29bfc"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 1.6.html",
    "revision": "f01ac64b085d93d524a0881ef1e0494e"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 1.7.html",
    "revision": "d3556d9df3dbad3d08190d2c07beb5cb"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 1.8.html",
    "revision": "81ddcd0e11e84519b5014f6a1d96bfbd"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 2.0.html",
    "revision": "355cdc73c904bd5ab7941f0746f871a7"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 2.1.html",
    "revision": "ca1fba7c6069553ce228693c0f64968b"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 2.2.html",
    "revision": "49cc818737d2ae1679e1e9ab9c7ad51a"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 2.3.html",
    "revision": "6a758de302cbb6b86c4fae37700412b2"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 2.4.html",
    "revision": "06b709a6357dc86836ba9cd76242c03a"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 2.6.html",
    "revision": "dbd1bee1fcf561cbe16dfd106987d98c"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 2.7.html",
    "revision": "ee357579f8816bad4102e5bcf5510a1a"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 2.8.html",
    "revision": "f317d3a60fbed552c5117281e51e7109"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 2.9.html",
    "revision": "15e7d90e4f1b3cddb1135c3774425d05"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 3.0.html",
    "revision": "112b145c4c7859c40cf0a8c6528c85ac"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 3.1.html",
    "revision": "4aa00afaa6bc620dda8dbf7f0ec18d30"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 3.2.html",
    "revision": "ba4ad8fdf9e1594d79793d8b2d765d69"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 3.4.html",
    "revision": "2014f1e5e821ef2b0d856d7f2191b921"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 3.5.html",
    "revision": "f1ed689d0182caa2a0f4eebe9f382a65"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 3.6.html",
    "revision": "4eef32141214bd72deeb87426af40045"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Advanced Types.html",
    "revision": "425999ca190043a3f707d8c16f86560b"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Basic Types.html",
    "revision": "1e351f8f9686908612f0f1f2b0e50d5f"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Classes.html",
    "revision": "37a2cca5e971f76844499a83429b07a0"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Compiler Options in MSBuild.html",
    "revision": "0c9eb6fb3f5c23ec02d1c937790a1d35"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Compiler Options.html",
    "revision": "fc4378183929c72a3528550436e6b555"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Configuring Watch.html",
    "revision": "25e0bb8d0ec6ff645c4a2f475a5405d4"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/By Example.html",
    "revision": "92132457f90c5d6650b14e4feeeda2f7"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/Consumption.html",
    "revision": "bf12ce42a87cc8ff06d90a947ab02e9f"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/Deep Dive.html",
    "revision": "a8c8b63e1e52480d31cfc36963c9e282"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/Do's and Don'ts.html",
    "revision": "65406eefb9123cc5354c876db4a102b5"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/Introduction.html",
    "revision": "edb328910c78f531a2e5f6d1b9085d8b"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/Library Structures.html",
    "revision": "50d457b6b4100dae633db754f7ea3642"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/Publishing.html",
    "revision": "290a9de3173d717805f4dbb8096104f4"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/Templates.html",
    "revision": "164b736695c567ed613feb0f33e8c9b9"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/templates/global-modifying-module.d.ts.html",
    "revision": "2e216376d4260678e7c615a4b6fe6e02"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/templates/global-plugin.d.ts.html",
    "revision": "0bb7bddd7d7e48ba04ba734cf5b14b92"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/templates/global.d.ts.html",
    "revision": "db9f3c4811f42c7f932a0ed6b41bed84"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/templates/module-class.d.ts.html",
    "revision": "53a7697a8cd0b571256056cadbbf6ab5"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/templates/module-function.d.ts.html",
    "revision": "6381dbd6e215ba1400fba0d3b61c4575"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/templates/module-plugin.d.ts.html",
    "revision": "726688467095ab55d6b4e0176eba8a71"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/templates/module.d.ts.html",
    "revision": "44ec6496d6137fcd63e692cf580844dd"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Declaration Merging.html",
    "revision": "16e3c482912aaad94975afdb6605bc24"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Decorators.html",
    "revision": "da30f1fbb096a6dbdd4d05cdb176181d"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Enums.html",
    "revision": "1566efa9863c1b22d09caa35e280df73"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Functions.html",
    "revision": "5c03c197ed1ba3edcefb6733562a027b"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Generics.html",
    "revision": "23aedf264cacb32ec7aaf6d86ff5978e"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/index.html",
    "revision": "bbd22142d2ed06086f561ea04bd13465"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Integrating with Build Tools.html",
    "revision": "3e332ef50f94bb2d7a2b69068cbfa50b"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Interfaces.html",
    "revision": "c94549557135546959b735d55325bb70"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Iterators and Generators.html",
    "revision": "dca68d957e88deea1fc1c8d0d92754b5"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/JSX.html",
    "revision": "fc7de271a73de22cf45cd6348602c010"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Mixins.html",
    "revision": "b6704478926e2454adacb78748840f06"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Module Resolution.html",
    "revision": "8ce8a97c42f40aa97182964a28d9b6cf"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Modules.html",
    "revision": "e8c7bc6fae75038ee08fa90334be5bf7"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Namespaces and Modules.html",
    "revision": "bf5c7ad1584accd33ca7b47a80702cd0"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Namespaces.html",
    "revision": "d8fa2563b91788805edfe7f377a529c7"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Nightly Builds.html",
    "revision": "2ee7814eef9c3e18dc41632c644c2bfa"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Project References.html",
    "revision": "f8296be075426dcb1c85bfe102468127"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Symbols.html",
    "revision": "75842dcd04398d6056ab2b7ba7498c54"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Triple-Slash Directives.html",
    "revision": "89342a4c3f831e2d915de0831d05710b"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tsconfig.json.html",
    "revision": "da1606b8a38057ab2baf9748be753049"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/Angular 2.html",
    "revision": "c4ae359acda34c7af2db76864c139be2"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/ASP.NET 4.html",
    "revision": "adb6c28a737483ea9c7f68f61f7f06dc"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/ASP.NET Core.html",
    "revision": "54aa32b51286531215bd36a52da537fb"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/Gulp.html",
    "revision": "faf222307a5a11add6d2fd9b1982dadb"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/index.html",
    "revision": "a7cf7939e629b383b7bea1cd2a42351e"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/Knockout.html",
    "revision": "67f807d093d421e69c8dd112410cdbde"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/Migrating from JavaScript.html",
    "revision": "183891f7ee177519bf82e040880d51c2"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/React & Webpack.html",
    "revision": "12f6442adae96a5daec85feef3d44e9a"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/React.html",
    "revision": "6dad5c0e866430b759cf51a41b6d011e"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/TypeScript in 5 minutes.html",
    "revision": "b85d83fd22a238f0a03150627eb0573c"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Type Checking JavaScript Files.html",
    "revision": "610999a52304f461e760a5cbbcdf5e76"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Type Compatibility.html",
    "revision": "6ca091bc3a29162b8c31e5c853afdbb8"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Type Inference.html",
    "revision": "32abaffb5434f41c0126dffbbb17a22e"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Typings for NPM Packages.html",
    "revision": "3d57e270ea5817687e33d0312b88bcb3"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Utility Types.html",
    "revision": "c32b0ef4563fc6f162bafc18c19899b7"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Variable Declarations.html",
    "revision": "b4d8e2919dc216c2b2c91a3e75365d33"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Writing Definition Files.html",
    "revision": "ab5926716c471c83ac3096781559bbfc"
  },
  {
    "url": "backups/TypeScript-master/doc/quick-start/index.html",
    "revision": "08076707cb40e5ea3dc03fd08fbe27ae"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/index.html",
    "revision": "dd0543902348eef7602b010cd97d4575"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 1.1.html",
    "revision": "dbbd623c1c048ce2fb380dd5efc04e56"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 1.3.html",
    "revision": "e53db3ad6cf5e2074e018ea0d6583435"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 1.4.html",
    "revision": "40f108d6bbfbd0a8a43697533ed95c7a"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 1.5.html",
    "revision": "3b01646f2f1b137b212c19c1f7934a77"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 1.6.html",
    "revision": "4a47c87bc334c78b72de51eed843c3cc"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 1.7.html",
    "revision": "eea5ef5ba51559d5a7c2c380ede31e9b"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 1.8.html",
    "revision": "552f49bc71f8717133682fb069320b74"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.0.html",
    "revision": "f4860e4b8b540eb001dad3ded8a622ee"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.1.html",
    "revision": "26468762fb41c481e09583bad67cba66"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.2.html",
    "revision": "dbf4989d29557644f1a0ebaf7700d649"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.3.html",
    "revision": "4c58d1720a916e9e1b5f21ae87107190"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.4.html",
    "revision": "d1e89267d815bc087910281b25694e02"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.5.html",
    "revision": "2aa076cfb600a39a54378d403f2c90be"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.6.html",
    "revision": "1eb3c18864db78d17ff3ffe320382f72"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.7.html",
    "revision": "eff71dcfe90a0e474b733dbc8f80c77d"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.8.html",
    "revision": "54072e4c8bcfed6398fee4cdf4b9d889"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.9.html",
    "revision": "01913e2151999e9d99e0b721d56d6e62"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 3.0.html",
    "revision": "389a71c64abe02f314d62e5c22b12aa8"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 3.1.html",
    "revision": "4df438bcf778b070162c81bd722e88c5"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 3.2.html",
    "revision": "6f6e1476ba9b3fa5363ae07b60ced29a"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 3.3.html",
    "revision": "7ec6ba43c2f69c30d7f0f3a0aa5f8789"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 3.4.html",
    "revision": "ad87cfe15e12939d4306b54391860346"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 3.5.html",
    "revision": "126456c4a33630b8152110bef2a8fe1b"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 3.6.html",
    "revision": "7b1802b3d41a2c7941f29c3d711c72c9"
  },
  {
    "url": "backups/TypeScript-master/doc/wiki/Architectural-Overview.html",
    "revision": "5883b6cae2b33664ecbead3a42e5b0ca"
  },
  {
    "url": "backups/TypeScript-master/doc/wiki/coding_guidelines.html",
    "revision": "36fbec3d70679ae801637d90b615d4d0"
  },
  {
    "url": "backups/TypeScript-master/doc/wiki/Common Errors.html",
    "revision": "c6be3b4675c0f1d41805f9f2ffced289"
  },
  {
    "url": "backups/TypeScript-master/doc/wiki/index.html",
    "revision": "9f9cd2ac2bab3d14f6eb1f10eabd6d0a"
  },
  {
    "url": "backups/TypeScript-master/doc/wiki/Roadmap.html",
    "revision": "b8508b88bd643aa97ae6db7f9bb78db6"
  },
  {
    "url": "backups/TypeScript-master/doc/wiki/this-in-TypeScript.html",
    "revision": "0880f9562e37ff1be8463f9344e8dfad"
  },
  {
    "url": "backups/TypeScript-master/doc/wiki/TypeScript-Editor-Support.html",
    "revision": "25bbddba6f6fb0952b233e0ef7a2c407"
  },
  {
    "url": "backups/TypeScript-master/doc/wiki/Using-TypeScript-With-ASP.NET-5.html",
    "revision": "8c86387812ca8cb9d4d94f88b5ea06e7"
  },
  {
    "url": "backups/TypeScript-master/index.html",
    "revision": "1f6faa810f5fbfafca17df056b09530f"
  },
  {
    "url": "backups/TypeScript-master/preface.html",
    "revision": "7f8f2774c0f020c7b41d0d61f9f874d8"
  },
  {
    "url": "backups/TypeScript-master/SUMMARY.html",
    "revision": "316d855d8a02d48dfc51dcde9a900b65"
  },
  {
    "url": "describe/index.html",
    "revision": "5a655e256d980ec9e9eaa3e84b7fd568"
  },
  {
    "url": "favicon.png",
    "revision": "835244e9492188eb03cdd9b7c142187d"
  },
  {
    "url": "icons/128.png",
    "revision": "9712fd472f4e3255015382fea64c86aa"
  },
  {
    "url": "icons/144.png",
    "revision": "299fe40ecf8255856be78dc41af6b6c5"
  },
  {
    "url": "icons/192.png",
    "revision": "0d0fa9489baf2937e8e46cbd9e8b71a7"
  },
  {
    "url": "icons/512.png",
    "revision": "2f626e165644c7e0823b73eee2fea066"
  },
  {
    "url": "index.html",
    "revision": "7169884cd640dda8cb59f186f69a7909"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
