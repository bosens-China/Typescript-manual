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
    "revision": "ee110f79eb4cb895cc5a432fba18a664"
  },
  {
    "url": "assets/css/0.styles.87292657.css",
    "revision": "67b44a74d015e226e83f074dc2065dcd"
  },
  {
    "url": "assets/img/build-2017-quick-starts-yay.726b0e06.png",
    "revision": "726b0e067e681a093ef69140c58b6f84"
  },
  {
    "url": "assets/img/install-nuget-packages.de13bf0f.png",
    "revision": "de13bf0f360ceaa06098255792ec5804"
  },
  {
    "url": "assets/img/new-asp-project-empty.2507d606.png",
    "revision": "2507d606a593e3353070e055c121a765"
  },
  {
    "url": "assets/img/new-asp-project-template.5ced33f3.png",
    "revision": "5ced33f37546e3dd5b9f4aba64c57e14"
  },
  {
    "url": "assets/img/new-asp-project.f6859cb0.png",
    "revision": "f6859cb0ea1d1cc2eab19353efb7b4a8"
  },
  {
    "url": "assets/img/new-folder.c064bfe4.png",
    "revision": "c064bfe44d77a3041fcf2f4e0d9527e4"
  },
  {
    "url": "assets/img/new-item.8e35de8c.png",
    "revision": "8e35de8cce868c044cc8ad0b6b2f56d3"
  },
  {
    "url": "assets/img/new-tsconfig.b8f866db.png",
    "revision": "b8f866db10674c2614c3fc7aa499cefd"
  },
  {
    "url": "assets/img/open-index.0ad05ba2.png",
    "revision": "0ad05ba2ef73289ac290b57b93b80c17"
  },
  {
    "url": "assets/img/packageinstaller-es6-shim.df4dcde0.png",
    "revision": "df4dcde04d9c5fffe13745b9aea2fc19"
  },
  {
    "url": "assets/img/paused-demo.4059f527.png",
    "revision": "4059f5270e05f01ba8770441d580353b"
  },
  {
    "url": "assets/img/reward.41ad9361.jpg",
    "revision": "41ad93616c9d37f42573f0cb98fb4228"
  },
  {
    "url": "assets/img/scripts-folder.05c216f1.png",
    "revision": "05c216f14eedfcf4b10c76b05a952fde"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/src-folder.87c4eb74.png",
    "revision": "87c4eb74af6da84ae7ffa341f94f8e67"
  },
  {
    "url": "assets/img/task-runner-explorer.0ed8f6ad.png",
    "revision": "0ed8f6ad9e39d3fe964236f7e3664e70"
  },
  {
    "url": "assets/js/10.bddde054.js",
    "revision": "e29e055a6b39e876b2b8c9d5c2a63de0"
  },
  {
    "url": "assets/js/100.4bcc2685.js",
    "revision": "bb573c5b71289bf40b9821c0ceb9d5d3"
  },
  {
    "url": "assets/js/101.fa6aee12.js",
    "revision": "7b24a8555f7564b82b73cfd41f906bbc"
  },
  {
    "url": "assets/js/102.e8e72ef4.js",
    "revision": "fe925296648710d2f736096f41c7b99b"
  },
  {
    "url": "assets/js/103.22b1d18d.js",
    "revision": "b28cefe518f73587d6ca53fdcc48c444"
  },
  {
    "url": "assets/js/104.83725845.js",
    "revision": "ab3c7a0e09e42e343a02f26b46c8cdf2"
  },
  {
    "url": "assets/js/105.9117918e.js",
    "revision": "b97238d73510f41cf5e55ae53ee989a5"
  },
  {
    "url": "assets/js/106.7f1bb8ab.js",
    "revision": "e9c8ba6439221577e4a9c24252b1d669"
  },
  {
    "url": "assets/js/107.d9319e28.js",
    "revision": "2e5639ce8fa75266c3e20accc2f898fc"
  },
  {
    "url": "assets/js/108.4550f86d.js",
    "revision": "e3275d33a29de84ebaf0a8e3ccf38769"
  },
  {
    "url": "assets/js/109.ae11a9a5.js",
    "revision": "e9ceb7741562e095979afe0589b4efc8"
  },
  {
    "url": "assets/js/11.2e57adc9.js",
    "revision": "803a7ee19108d2d42917b806f24b39df"
  },
  {
    "url": "assets/js/110.872c8d01.js",
    "revision": "a4675cfe9c64b153b9d1306768ac61ee"
  },
  {
    "url": "assets/js/111.7c168fdd.js",
    "revision": "7802faf786cb0d3561ef06447e57cb0b"
  },
  {
    "url": "assets/js/112.0890428d.js",
    "revision": "11e6dd91fa362a2dadc318fbd7c52c88"
  },
  {
    "url": "assets/js/113.96cf8a8c.js",
    "revision": "e75a23884c4079ace634618bb009e70d"
  },
  {
    "url": "assets/js/114.06600e15.js",
    "revision": "75fa6b6495ee1535050720787d52a0c9"
  },
  {
    "url": "assets/js/115.7d42ebdd.js",
    "revision": "0ac9edfc80ba034b0ac5c93832a44170"
  },
  {
    "url": "assets/js/116.b4a4c172.js",
    "revision": "2c48f43d3a4063f83e2cd06b05762275"
  },
  {
    "url": "assets/js/117.13394dc8.js",
    "revision": "5e6201169a30e72ddfebf208d53db920"
  },
  {
    "url": "assets/js/118.8ca47887.js",
    "revision": "7957ef67b540db2623a48adbc96d3443"
  },
  {
    "url": "assets/js/119.1b41849c.js",
    "revision": "487302a94c82fe5dbba45c299b1bb552"
  },
  {
    "url": "assets/js/12.efd05c3f.js",
    "revision": "789aa5b4d4cf4c3e64aa11b06acc8e52"
  },
  {
    "url": "assets/js/120.0c9172a7.js",
    "revision": "d6195d9c70d512d218662f17f6d701a3"
  },
  {
    "url": "assets/js/121.5d187b4e.js",
    "revision": "6eb6448311ba479f2d0668bf2f718cf1"
  },
  {
    "url": "assets/js/122.bddcc632.js",
    "revision": "ca862c8f49cd693490098096a4c9cfe1"
  },
  {
    "url": "assets/js/123.7351421a.js",
    "revision": "2891081f7a6c3543101db10cb59ec065"
  },
  {
    "url": "assets/js/124.cdec1497.js",
    "revision": "03732d42087c11adee14aca08acdf677"
  },
  {
    "url": "assets/js/125.bf3d8fef.js",
    "revision": "d3fe6daa7b5cbf25f9b98c66baba225f"
  },
  {
    "url": "assets/js/126.ea6f9d4e.js",
    "revision": "755a400e0b58ee05546471346ad2460a"
  },
  {
    "url": "assets/js/127.46ec5f95.js",
    "revision": "6260e1a5103f19df910d498ae0bfde2b"
  },
  {
    "url": "assets/js/128.925c926f.js",
    "revision": "643e4d4ac20b373c71e4e8979bcd7a34"
  },
  {
    "url": "assets/js/13.bbdb581b.js",
    "revision": "9c46bac271743e7c6f2d620d50047a70"
  },
  {
    "url": "assets/js/14.f6379f1f.js",
    "revision": "742f84958498725603b333d231b6ba3a"
  },
  {
    "url": "assets/js/15.1b22e4dd.js",
    "revision": "f6920b72f342012172878bd6629bd752"
  },
  {
    "url": "assets/js/16.31446b00.js",
    "revision": "a3ff60713ca4de8f4ba1e631e60bce63"
  },
  {
    "url": "assets/js/17.76f129e6.js",
    "revision": "f1b464b937504c7769c4dc94b59ea615"
  },
  {
    "url": "assets/js/18.274598a6.js",
    "revision": "a056552cda3ebda132f6f11aae50177f"
  },
  {
    "url": "assets/js/19.f27f3d3d.js",
    "revision": "4aa472b8aad0655ff9d853dea7429316"
  },
  {
    "url": "assets/js/2.63e02c29.js",
    "revision": "8c290a20dc0ac09483de9624f83ee87d"
  },
  {
    "url": "assets/js/20.a3c54077.js",
    "revision": "a0b3166ed4151d65fbf3513ad39b3dde"
  },
  {
    "url": "assets/js/21.8a100b7e.js",
    "revision": "f658f58a393e418e10214f072ed9a4b8"
  },
  {
    "url": "assets/js/22.a28cbcae.js",
    "revision": "0c634d118f28ad48be66d2d0c2817535"
  },
  {
    "url": "assets/js/23.60354c84.js",
    "revision": "4395c044583c8056e3040805c7b1d684"
  },
  {
    "url": "assets/js/24.aae58d12.js",
    "revision": "f06759b7d0d28b2d61a226fcf680bdde"
  },
  {
    "url": "assets/js/25.fbecf0a2.js",
    "revision": "0ced305b5814fb1ffbbe442a6dbfe28a"
  },
  {
    "url": "assets/js/26.a54938ce.js",
    "revision": "b5314217fc29d2c6ee2bc63a02f203fa"
  },
  {
    "url": "assets/js/27.ea119c37.js",
    "revision": "7b4993104c90cc7760504de318df9580"
  },
  {
    "url": "assets/js/28.5578de0a.js",
    "revision": "16c811b28aae6c89d54dfec13184e57b"
  },
  {
    "url": "assets/js/29.540767e6.js",
    "revision": "6c5f96b53eb0e2e2dc6d3b3ddc215b1c"
  },
  {
    "url": "assets/js/3.b20d146d.js",
    "revision": "657a695249cf10bfec1ab8f8fa2b5a74"
  },
  {
    "url": "assets/js/30.aa970c6f.js",
    "revision": "eef0fab32b43ed2d079c178ba798a1d2"
  },
  {
    "url": "assets/js/31.349d32f8.js",
    "revision": "99b047e84e1fdfaa78fbf6c3e5a8a862"
  },
  {
    "url": "assets/js/32.e7739807.js",
    "revision": "3a523fbec921f7fda6a5032f377cf692"
  },
  {
    "url": "assets/js/33.6ef058de.js",
    "revision": "587c4e21132b0b138e2be47572afd666"
  },
  {
    "url": "assets/js/34.476db268.js",
    "revision": "7c37f7c0736963a227bffb097311748f"
  },
  {
    "url": "assets/js/35.a0b7cdf7.js",
    "revision": "89e0b623c12dacffe265c64960f92109"
  },
  {
    "url": "assets/js/36.27ad28f7.js",
    "revision": "0a19c01c82bce657f2553988eda6ae0e"
  },
  {
    "url": "assets/js/37.c5aefdcc.js",
    "revision": "d15acf032e0f0aead236a8bb4f278105"
  },
  {
    "url": "assets/js/38.4c87bc6e.js",
    "revision": "9d5170a5681205db93d9defc42f2ad02"
  },
  {
    "url": "assets/js/39.8e01a8a6.js",
    "revision": "9732b4f518a57eeb6a55aeb199f042fb"
  },
  {
    "url": "assets/js/4.1c11df52.js",
    "revision": "1923c25a16f92f3f610df66a0799592d"
  },
  {
    "url": "assets/js/40.c8fafa0a.js",
    "revision": "a9255b8115b14b1f0b6a5d82a1738116"
  },
  {
    "url": "assets/js/41.761b6230.js",
    "revision": "c1ffa5361bd2c0f692b2e5c9919459b5"
  },
  {
    "url": "assets/js/42.35b86b41.js",
    "revision": "5fa964906cbb775c210897f0dfcb2a21"
  },
  {
    "url": "assets/js/43.da91d960.js",
    "revision": "db2cf5f02921b1d189f28cd4f530d6e6"
  },
  {
    "url": "assets/js/44.b4a97124.js",
    "revision": "5cf9fd3be6e2c72b9300fa1793443886"
  },
  {
    "url": "assets/js/45.3bfad0ce.js",
    "revision": "dbe6e1acc97e1dd430b8d00e42602e62"
  },
  {
    "url": "assets/js/46.24048416.js",
    "revision": "b179da10f0196515c5d47f1c0d02bd3d"
  },
  {
    "url": "assets/js/47.a06493b0.js",
    "revision": "6c639abb60e0bc3896c4941b4abe3c83"
  },
  {
    "url": "assets/js/48.7678e90a.js",
    "revision": "cff24378c8b2fd1c622928a9ee40c0dc"
  },
  {
    "url": "assets/js/49.ebc6aa76.js",
    "revision": "107a0497ab8ec50bf6f93add5ccda118"
  },
  {
    "url": "assets/js/5.133a8688.js",
    "revision": "411e08aec70abd6c94ec0237bae6429b"
  },
  {
    "url": "assets/js/50.bcfea64a.js",
    "revision": "a1ac1679d28b9cedb1a3e8f67998a128"
  },
  {
    "url": "assets/js/51.9728659a.js",
    "revision": "cd14ba171a63c20dbb34491c2fb26965"
  },
  {
    "url": "assets/js/52.1563557b.js",
    "revision": "2ca301fd08b6d719dffb8eb5ed60b61e"
  },
  {
    "url": "assets/js/53.725f0d7b.js",
    "revision": "77352eec520b7e755833b5dc0e47fd3a"
  },
  {
    "url": "assets/js/54.52d6d482.js",
    "revision": "c25a6197d2d34cae7d2ff9c41cce047f"
  },
  {
    "url": "assets/js/55.a4a72edc.js",
    "revision": "102f02f21551e063a32efeba81792d87"
  },
  {
    "url": "assets/js/56.67476638.js",
    "revision": "e2a30a8ecf5b332e943852c485b2bbf0"
  },
  {
    "url": "assets/js/57.a6f38269.js",
    "revision": "6be32f6625feacf944bb503e85c88e44"
  },
  {
    "url": "assets/js/58.7f64d0c8.js",
    "revision": "e754f3098a4cfc1d36889e3bf33ca2d1"
  },
  {
    "url": "assets/js/59.88e9b54f.js",
    "revision": "08a5c29d1ed263c9aac1a108453f9f4d"
  },
  {
    "url": "assets/js/6.c359caf9.js",
    "revision": "ea2082b293d8fd478f083f3b22adf38e"
  },
  {
    "url": "assets/js/60.e759071e.js",
    "revision": "5f5bdc65cfb194defb87ad864123c146"
  },
  {
    "url": "assets/js/61.2960e57c.js",
    "revision": "2ca84eef1a9669766d962f6515a1ec7a"
  },
  {
    "url": "assets/js/62.753bd8a5.js",
    "revision": "294c70486cc47626531c6b303f371b43"
  },
  {
    "url": "assets/js/63.888e3dba.js",
    "revision": "3122618dd62d73b89158a0f9d445328d"
  },
  {
    "url": "assets/js/64.da3b0dd4.js",
    "revision": "edfd5ab59f17a874165c362048630680"
  },
  {
    "url": "assets/js/65.b3b2aa06.js",
    "revision": "d3f2116975ee2a91e7cd9503d4b2f80e"
  },
  {
    "url": "assets/js/66.5a0dd3fe.js",
    "revision": "bbf1899bbbea610c26dd6b15fe39f55f"
  },
  {
    "url": "assets/js/67.66462ed3.js",
    "revision": "8c652712c179dc44a8837e0511debd9e"
  },
  {
    "url": "assets/js/68.720a6c8c.js",
    "revision": "8c3c150a5499b3fcf528be740f627207"
  },
  {
    "url": "assets/js/69.f15509c9.js",
    "revision": "f26a2e5b9c1154cbe0660fade4e541c2"
  },
  {
    "url": "assets/js/7.f2ba68be.js",
    "revision": "65a7951ce62976cd785b339d0b11a47b"
  },
  {
    "url": "assets/js/70.ad692149.js",
    "revision": "ec85d7201c94137879bc0000dad6a5f3"
  },
  {
    "url": "assets/js/71.8b74d93c.js",
    "revision": "be24ea3162930f33bcaff033bcdca0a3"
  },
  {
    "url": "assets/js/72.74eebc04.js",
    "revision": "c137bc4d1c69b651de053d8b9e2fd9a1"
  },
  {
    "url": "assets/js/73.ec6f32f0.js",
    "revision": "5b730c3448135a1e722fa40ccd9f9715"
  },
  {
    "url": "assets/js/74.1b747a9d.js",
    "revision": "9e7a77c86495e732afd204e62e320f9d"
  },
  {
    "url": "assets/js/75.63acd13e.js",
    "revision": "cd56f9102c82e31701d5f3b38db581a8"
  },
  {
    "url": "assets/js/76.b9820eb8.js",
    "revision": "0c2be168dd581b3b86248d88e8ee8370"
  },
  {
    "url": "assets/js/77.4a5537ab.js",
    "revision": "b4f3caac9a02d71046b96f4851bae9d3"
  },
  {
    "url": "assets/js/78.93989b13.js",
    "revision": "a2688df9fa32ba42cc04963c2f8f3648"
  },
  {
    "url": "assets/js/79.562666ff.js",
    "revision": "f9490d393ce4a695ac2d014b2c2952c2"
  },
  {
    "url": "assets/js/8.2b4acaa6.js",
    "revision": "6ec5b8e0327f3fa7e6ac8fb9392d5f38"
  },
  {
    "url": "assets/js/80.2c285b14.js",
    "revision": "6d47b1aca3c618ae3b0d3407947ae567"
  },
  {
    "url": "assets/js/81.faa98354.js",
    "revision": "21202668330d0ca93acba2f0e8a95f2d"
  },
  {
    "url": "assets/js/82.6ad6abe9.js",
    "revision": "4df1b86b764926c8bf474a247d16c6d8"
  },
  {
    "url": "assets/js/83.35eb3f8d.js",
    "revision": "9418432d3b068e80361dad6f4895ca3f"
  },
  {
    "url": "assets/js/84.976870ad.js",
    "revision": "ea6fd6182106a3cecf37cdbf0603da1c"
  },
  {
    "url": "assets/js/85.71c58389.js",
    "revision": "a5d8a8c4996bf68d99643c76f82491c8"
  },
  {
    "url": "assets/js/86.1cce349f.js",
    "revision": "3ebf34736252993627090f3f9997d4a8"
  },
  {
    "url": "assets/js/87.27477ea2.js",
    "revision": "1807ab8fddfa9029a2cdbdd502857dd9"
  },
  {
    "url": "assets/js/88.0af1b7f7.js",
    "revision": "637c25c0a4251130c9ad457a5d8f50b0"
  },
  {
    "url": "assets/js/89.da564e71.js",
    "revision": "f67c4eac8fa31fc723f6d486e796b487"
  },
  {
    "url": "assets/js/9.798af522.js",
    "revision": "ea5cb65e42eb8d99232040b7c76185e8"
  },
  {
    "url": "assets/js/90.4fa8cd98.js",
    "revision": "0055c89219983ac7a0fb11c7cb259576"
  },
  {
    "url": "assets/js/91.eba43344.js",
    "revision": "24844b2d72cf57d51d2458b6f6e2d233"
  },
  {
    "url": "assets/js/92.eb570e32.js",
    "revision": "8e57e221e2079f9a24804ec165701617"
  },
  {
    "url": "assets/js/93.183f2187.js",
    "revision": "02e6a14d3046ad91953b52ee69173f59"
  },
  {
    "url": "assets/js/94.8bcc5b77.js",
    "revision": "ecbf14123380d68321bfb6b663f1e1cb"
  },
  {
    "url": "assets/js/95.294ec936.js",
    "revision": "8233244fc7b34981d66dfaeff8b7bed8"
  },
  {
    "url": "assets/js/96.d6ab3038.js",
    "revision": "4916fe5bcceadaca9bae1b6fc7535446"
  },
  {
    "url": "assets/js/97.6e23df78.js",
    "revision": "6bc2297776cfe34e92e6a69bd4039c72"
  },
  {
    "url": "assets/js/98.1e59b734.js",
    "revision": "f6cc13d69fd2e5a0f9fe91a89d3d451c"
  },
  {
    "url": "assets/js/99.bee20174.js",
    "revision": "1f640e47106ae0ba4eef0dc115d134d8"
  },
  {
    "url": "assets/js/app.6bf66f79.js",
    "revision": "c8576c76b9b3d8487d6808350885c63c"
  },
  {
    "url": "backups/TypeScript-master/CONTRIBUTING.html",
    "revision": "0323a20e5d27d994868585fe3d08b516"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/breaking-changes.html",
    "revision": "a9acdc41b7d8ebb69cdc8b4b81d6c5f0"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 1.1.html",
    "revision": "69b0e4966927c3e95fe4dbd15af38cac"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 1.4.html",
    "revision": "bd6fee887efeda8e46adef70689e4d18"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 1.5.html",
    "revision": "a6b0c36978c41e122c3fa759f7b27726"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 1.6.html",
    "revision": "6afb30950410635fc4a47c3e5bc73362"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 1.7.html",
    "revision": "027c7d49ee031b3e3191b2348ca4f978"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 1.8.html",
    "revision": "9cba29f6b040b4735f6cdb4c2e9c302e"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 2.0.html",
    "revision": "b0cf6231ed8e2b82bc87ea669ab438d4"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 2.1.html",
    "revision": "10769fa837b3de74f4d69457b214637a"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 2.2.html",
    "revision": "98760d55502463ffac370815e392aaba"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 2.3.html",
    "revision": "39c537c3a5a329dfbe1435d7c7ed59b4"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 2.4.html",
    "revision": "3f34f2bce8573c3ec360248a9a1c4ffb"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 2.6.html",
    "revision": "dc876aed20add0403db9cdc3ae89a055"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 2.7.html",
    "revision": "e382541ba3134ecd838a320c164d0d63"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 2.8.html",
    "revision": "a0053fd33a054b9d87ee0a65710eb091"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 2.9.html",
    "revision": "ddf2d861daf59cfe5faf7092af4b77cd"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 3.0.html",
    "revision": "e8c16ca2d8321ae85f096a609de7a7fa"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 3.1.html",
    "revision": "fa45c3ec4685e144abab30d02455aea9"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 3.2.html",
    "revision": "6e99fa51cdd601a7dfc09b66bdd8ee20"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 3.4.html",
    "revision": "ccb3c33da5c92eb4f3a2af4f79c0d8c5"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 3.5.html",
    "revision": "e36111cce6eef69e3c620dd0b59f3cda"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 3.6.html",
    "revision": "9b9de18156fcc688f7f4c6bd4111ec34"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Advanced Types.html",
    "revision": "1735a616be0a8989edc93507eb0e8566"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Basic Types.html",
    "revision": "500a14e342c1dbfc7a02ba43573dd191"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Classes.html",
    "revision": "20b18d7b7fc1adc7c733f2bcd7357820"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Compiler Options in MSBuild.html",
    "revision": "8388571db93437f7fb5a032743394479"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Compiler Options.html",
    "revision": "ea84abab8ce76e1221d62d6c1527a281"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Configuring Watch.html",
    "revision": "bce6f8cd1999e043ba85985168575907"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/By Example.html",
    "revision": "1ea20f61d91d6e7da1f217061f12373e"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/Consumption.html",
    "revision": "21b84c924ca72b8bd39ebf06a4cedad1"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/Deep Dive.html",
    "revision": "a3652072101980d4af119321bfbcaf0e"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/Do's and Don'ts.html",
    "revision": "2642bcec37175f1a3fa1cff31534987c"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/Introduction.html",
    "revision": "638c3db5bfc4e343b7bb38a7f28cdeea"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/Library Structures.html",
    "revision": "2a956bf9bcaf27c6d5a8623189830cec"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/Publishing.html",
    "revision": "2535f3c614865797169782bbeb1e16bb"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/Templates.html",
    "revision": "500de77f5da4482b58c8f7f3e6f632f4"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/templates/global-modifying-module.d.ts.html",
    "revision": "0c803b97627e81773eb8a2805ec4999c"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/templates/global-plugin.d.ts.html",
    "revision": "f25b5badcfc972b13e745882f50bd751"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/templates/global.d.ts.html",
    "revision": "ebcc5ca7680fe9ce0c41025b9309c0e2"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/templates/module-class.d.ts.html",
    "revision": "b89416e2ae6814e65cf317c3d4ddf12d"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/templates/module-function.d.ts.html",
    "revision": "c325c051f1b2b83acf172e302c74679b"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/templates/module-plugin.d.ts.html",
    "revision": "d55e291bdde6911e14d2baa279e9bc47"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/templates/module.d.ts.html",
    "revision": "a66c21f336de320c78405d7d8e9728a5"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Declaration Merging.html",
    "revision": "8f48d6d0e22fb8a77679806971ec1429"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Decorators.html",
    "revision": "c30dda25c690d2d081f34a26091af060"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Enums.html",
    "revision": "1143e86f43026f0d736539ba53d565e9"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Functions.html",
    "revision": "edb53ea9693f71e0766d081f0bb8537f"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Generics.html",
    "revision": "4842b8cbd593157ca58a24b4da2a1755"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/index.html",
    "revision": "447b51240752b594e4846b8b526a3b12"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Integrating with Build Tools.html",
    "revision": "11e608517b9df0ef63259b2ac790d4de"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Interfaces.html",
    "revision": "bf4e8289d39444e4292fc3a4bc08b24a"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Iterators and Generators.html",
    "revision": "8dfbcb8e975d4cc356934e42a35e93b7"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/JSX.html",
    "revision": "8f182da4e84d19eed7c1b56f6ebfa779"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Mixins.html",
    "revision": "9cf642bc6aa0853d39dd9c8a244fabb3"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Module Resolution.html",
    "revision": "65310b461dd95573f9bc969a733a47e7"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Modules.html",
    "revision": "7dc692e3e1c13fef6ae72c8081e27d87"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Namespaces and Modules.html",
    "revision": "f51875d08036eaca6d6533468bb5610e"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Namespaces.html",
    "revision": "5ea82c022ef1307557f2f52dbd49f221"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Nightly Builds.html",
    "revision": "a4d708f9d8c24dabb86bf46d105a641f"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Project References.html",
    "revision": "c38a77c33d8965c8a5105dde6a3531ee"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Symbols.html",
    "revision": "fc59791474a98db385347e49bde9bea5"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Triple-Slash Directives.html",
    "revision": "212a30c9f349a4cf7478472d7273378c"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tsconfig.json.html",
    "revision": "65f8d89aa573b685b008763b6f4fb2f0"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/Angular 2.html",
    "revision": "dceb0c622b3cd7d10cb949fbce3c03db"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/ASP.NET 4.html",
    "revision": "eb29de0272c80bfbf91f84245cd78257"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/ASP.NET Core.html",
    "revision": "20e99a3dbee29a992e69bbcbc6dc1dd6"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/Gulp.html",
    "revision": "3a200e4226bd2c3521436e506f2eada5"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/index.html",
    "revision": "fefc4f9fe132c3b6ee90f304e10e6171"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/Knockout.html",
    "revision": "b48ea2ea24942d21846460025d0bc49f"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/Migrating from JavaScript.html",
    "revision": "bd679886d8652bb74da215d89a8b6caa"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/React & Webpack.html",
    "revision": "41099c5776f4900dac8f816b0ffd1e97"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/React.html",
    "revision": "eebf15ef6a47678f078134e6d19d7154"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/TypeScript in 5 minutes.html",
    "revision": "8b284a9197ca3606e1a48a15220ef8da"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Type Checking JavaScript Files.html",
    "revision": "0d18e6474506f875aee2a553ff64fedb"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Type Compatibility.html",
    "revision": "778a8f4c7da15e15c1b89d4d1fbcf633"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Type Inference.html",
    "revision": "2d595307f3a5e503436512d6fa2c5da2"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Typings for NPM Packages.html",
    "revision": "9aeb306983461aa682d3d09b74f07c93"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Utility Types.html",
    "revision": "85c388bdef7c773ceb7e743147bc35e3"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Variable Declarations.html",
    "revision": "4964e6f8f52d5d993d7c36ac9e23d411"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Writing Definition Files.html",
    "revision": "327349b064064ed8deaa1a4dadc019f0"
  },
  {
    "url": "backups/TypeScript-master/doc/quick-start/index.html",
    "revision": "376677de9113b49220f395fa187c1eda"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/index.html",
    "revision": "300dc016a25863b21a7558b9e3f8976b"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 1.1.html",
    "revision": "7545067cf7510428599c790b5cb225e7"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 1.3.html",
    "revision": "7f66e14612d9705121e354c45342feac"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 1.4.html",
    "revision": "065b1bedccfad3640dea0ed11e2d8c10"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 1.5.html",
    "revision": "eebeb4a2c784ee830f010b9c46afb1d5"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 1.6.html",
    "revision": "9eff6cd4d3b1ad17ad554a979c8ab81a"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 1.7.html",
    "revision": "6dc55fc155a02920d37682e8d4858012"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 1.8.html",
    "revision": "395d33489126fe1305af42c07ecac116"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.0.html",
    "revision": "d3e978cfb2a9183423c45a15f1209acd"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.1.html",
    "revision": "eae174961d4aa1f1a6a582107bb426d8"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.2.html",
    "revision": "d0ad00378583e22fa62cfb68daf5bec0"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.3.html",
    "revision": "ea8c78addd7ba9340f89c07eefaabf20"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.4.html",
    "revision": "e8e9f0eb476a5a67ca588a0018180117"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.5.html",
    "revision": "e372b08b6e6ab2b8f59e6913cd4d3da5"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.6.html",
    "revision": "c7671286af21914eefbde1439597ece4"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.7.html",
    "revision": "75df17597aa870fd24cfa530b6acf312"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.8.html",
    "revision": "27c7d97f94f71b1a7f02eba9d90d8bd9"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.9.html",
    "revision": "4be3dba520fde156f40521c2b5085b5b"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 3.0.html",
    "revision": "f3c8a035789db7fe29c94875a97c05b9"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 3.1.html",
    "revision": "e054a67e12c4e0a628bbf18ca6a6417a"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 3.2.html",
    "revision": "fccceb2208247f264e47fb21dfae6f64"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 3.3.html",
    "revision": "ece6d3d663b1f07eb24c68e770cd27cf"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 3.4.html",
    "revision": "92ee4616bb64a7d75f02ce534d49d39b"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 3.5.html",
    "revision": "5f898a95cacbbf59f0b9be81cd5d3bf0"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 3.6.html",
    "revision": "d0a84f0a96aa1baf6c247fa9527b6734"
  },
  {
    "url": "backups/TypeScript-master/doc/wiki/Architectural-Overview.html",
    "revision": "7647958cdccbf595f89d61432c8663f8"
  },
  {
    "url": "backups/TypeScript-master/doc/wiki/coding_guidelines.html",
    "revision": "237bbb3cf12a72f4b312c9cbf7c16788"
  },
  {
    "url": "backups/TypeScript-master/doc/wiki/Common Errors.html",
    "revision": "958ac6f3621f31f9eb8aa2cd1608aa3a"
  },
  {
    "url": "backups/TypeScript-master/doc/wiki/index.html",
    "revision": "318e2650dfa0176275410b8c17547be1"
  },
  {
    "url": "backups/TypeScript-master/doc/wiki/Roadmap.html",
    "revision": "3f6e34503fafcc5b7a503b4fc96a6ff7"
  },
  {
    "url": "backups/TypeScript-master/doc/wiki/this-in-TypeScript.html",
    "revision": "6daa88695631f322d9f06dc1a77dc506"
  },
  {
    "url": "backups/TypeScript-master/doc/wiki/TypeScript-Editor-Support.html",
    "revision": "3dfa26e87551714cdbd75f3f03a67639"
  },
  {
    "url": "backups/TypeScript-master/doc/wiki/Using-TypeScript-With-ASP.NET-5.html",
    "revision": "a1ea31f83ddcb750d300f92064ffc1c6"
  },
  {
    "url": "backups/TypeScript-master/index.html",
    "revision": "47791d1c5cf5b373d52c16c2a5d41aa1"
  },
  {
    "url": "backups/TypeScript-master/preface.html",
    "revision": "ca0bd8e80c0a933d8014b0a999e4b74b"
  },
  {
    "url": "backups/TypeScript-master/SUMMARY.html",
    "revision": "b16c43507b8bfdbef2cc10d9eb670ce4"
  },
  {
    "url": "describe/index.html",
    "revision": "b1bb2d38420dfb6b7c5e9df9e45a9eba"
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
    "revision": "270acc25ffc7c9474ed0702c90b93514"
  },
  {
    "url": "plugin/copy/copy.html",
    "revision": "6dde8f2f17855e0b3ba51434118997b6"
  },
  {
    "url": "plugin/copy/index.html",
    "revision": "951e2316c1b64ee810092150535af15b"
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
