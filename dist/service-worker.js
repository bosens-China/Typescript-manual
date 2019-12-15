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
    "revision": "7d0a32afebc2ffc4a94dc7013051e59e"
  },
  {
    "url": "assets/css/0.styles.2d0f6955.css",
    "revision": "4f20876bb421ee91f770ab287a45139d"
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
    "url": "assets/js/10.03fe267f.js",
    "revision": "be8dd215125ae4c080bf9777bfdea97b"
  },
  {
    "url": "assets/js/100.7dc90461.js",
    "revision": "19676851e9d5402545712b3c7d91052d"
  },
  {
    "url": "assets/js/101.71993ea8.js",
    "revision": "568151ab19cd07ebd122b04e16a95a80"
  },
  {
    "url": "assets/js/102.16ee65c0.js",
    "revision": "02851897e73a73c6b6e970d08b4c9b67"
  },
  {
    "url": "assets/js/103.09d954d8.js",
    "revision": "cb547e028a20220613f1adabccc26d0b"
  },
  {
    "url": "assets/js/104.15c298ef.js",
    "revision": "537ca761952fa8c28b3fd8b61fce28eb"
  },
  {
    "url": "assets/js/105.a36c0704.js",
    "revision": "adef913099a12ed90c15373c64327c3c"
  },
  {
    "url": "assets/js/106.05aaff3f.js",
    "revision": "a5e54dd0e558ad2bfa11b83e1c232763"
  },
  {
    "url": "assets/js/107.fe801991.js",
    "revision": "9625ae3c160ee2a68b611e2ade66dbfa"
  },
  {
    "url": "assets/js/108.1c329a27.js",
    "revision": "3a8437c5d575c2d35ffaebeea27f34a6"
  },
  {
    "url": "assets/js/109.5cd9cacc.js",
    "revision": "f0614c4685e22a718d78948907def769"
  },
  {
    "url": "assets/js/11.ddab7481.js",
    "revision": "16c130bab5dc26a2830aed1cc78b00de"
  },
  {
    "url": "assets/js/110.3a220a7e.js",
    "revision": "bce541016fa3d82a9b9a05bbc609e044"
  },
  {
    "url": "assets/js/111.d958940b.js",
    "revision": "460e4d22687fc025841c04f456d111f6"
  },
  {
    "url": "assets/js/112.280a997a.js",
    "revision": "cfeb27de22239abd621d755e1ffa21d0"
  },
  {
    "url": "assets/js/113.f7c5af11.js",
    "revision": "3499deeedae24959d1c4abc59b7ea97a"
  },
  {
    "url": "assets/js/114.2c9e2c82.js",
    "revision": "909b3ba1b201304dab8468aae08e613c"
  },
  {
    "url": "assets/js/115.96b0fa66.js",
    "revision": "08ec7f4f548b479626f7052a0e69456b"
  },
  {
    "url": "assets/js/116.c161e369.js",
    "revision": "b142e7a8c0393ea2cb8b02ad0b247640"
  },
  {
    "url": "assets/js/117.62be2f85.js",
    "revision": "2527d35094dfe073ccd14b6156dd579e"
  },
  {
    "url": "assets/js/118.6e2936d6.js",
    "revision": "dc356ba332bf5f07468682c7d509d2c3"
  },
  {
    "url": "assets/js/119.93a0ce10.js",
    "revision": "e6b2aa83777b44b4b6129e46fb560bd4"
  },
  {
    "url": "assets/js/12.cc87845e.js",
    "revision": "af88db0a8e9405e30e4c9772628b67db"
  },
  {
    "url": "assets/js/120.18646eb8.js",
    "revision": "16144d4d9ebee1a8d574ae12c7ced031"
  },
  {
    "url": "assets/js/121.a6d3510b.js",
    "revision": "e80c5781b12aa05e5c47e34cb571dc61"
  },
  {
    "url": "assets/js/122.2e52e7da.js",
    "revision": "b4b8a401040c008b88959d9360dd930f"
  },
  {
    "url": "assets/js/123.0fb67432.js",
    "revision": "5f1c176833296c9afa8970f1e8639ec7"
  },
  {
    "url": "assets/js/124.75a1ce2e.js",
    "revision": "080aa18d5e5dc264cb8eb8410f2f07a2"
  },
  {
    "url": "assets/js/125.ac4b91bd.js",
    "revision": "6f91c95bafda92724831d75abfa4dec7"
  },
  {
    "url": "assets/js/126.e484eef2.js",
    "revision": "16fc3994a1d17659788abe9f8cf313a2"
  },
  {
    "url": "assets/js/13.5cdd236c.js",
    "revision": "b9cf96b27ddd262f7b886608bfaa0631"
  },
  {
    "url": "assets/js/14.c94114ae.js",
    "revision": "c1fc1c5c2d71b067495ea864e72dab90"
  },
  {
    "url": "assets/js/15.dc72ea05.js",
    "revision": "03741e217c5ff7a91aacdff026c30b8e"
  },
  {
    "url": "assets/js/16.543374b5.js",
    "revision": "5c97041737e0198ca450041b184c9a57"
  },
  {
    "url": "assets/js/17.c5aa2902.js",
    "revision": "e3e370b7a275818956f32f1753f8b17d"
  },
  {
    "url": "assets/js/18.6e26548c.js",
    "revision": "8682a2a166ac84c2602ed26f38f91fb3"
  },
  {
    "url": "assets/js/19.7c4fa0e8.js",
    "revision": "c22d5f6759427b3ecee943d7e9b02cf3"
  },
  {
    "url": "assets/js/2.fa7675a1.js",
    "revision": "e754739a4ab598cb02fbdbd2bafa7e9a"
  },
  {
    "url": "assets/js/20.cd366131.js",
    "revision": "3f00a7aa63937e8aa4ea64e6b8515b85"
  },
  {
    "url": "assets/js/21.94f53a82.js",
    "revision": "d18681568d13bab93b0d84806de27f23"
  },
  {
    "url": "assets/js/22.20972e59.js",
    "revision": "bd73e05c4214b2797d44d581379d3746"
  },
  {
    "url": "assets/js/23.3565b295.js",
    "revision": "2f15481e64f7b040e83cb8299c06efcf"
  },
  {
    "url": "assets/js/24.cf20fb25.js",
    "revision": "2049835779a6e1e84aa0f7f1eba83602"
  },
  {
    "url": "assets/js/25.5595504a.js",
    "revision": "4ff687f602482d7a19d0472f40da9a67"
  },
  {
    "url": "assets/js/26.001213c9.js",
    "revision": "3bde50bc6ef7f0bb7c36668f0e93fb03"
  },
  {
    "url": "assets/js/27.2cddaf25.js",
    "revision": "6d92d5cd56e0c23f863a20770f4225a9"
  },
  {
    "url": "assets/js/28.26092fc5.js",
    "revision": "803bedd60ae388211b37d8c679a247f9"
  },
  {
    "url": "assets/js/29.76b71aaa.js",
    "revision": "cc7cf1a821fadd94547a82b1a932bc12"
  },
  {
    "url": "assets/js/3.7f08ba3d.js",
    "revision": "607da0a2ecaa7d54cdf1926dbe06840a"
  },
  {
    "url": "assets/js/30.dfecf3a4.js",
    "revision": "07088604225049d4ddb3f317324a6714"
  },
  {
    "url": "assets/js/31.0cd57e1b.js",
    "revision": "83ed732c5a0bbb900f2875e90a223dd1"
  },
  {
    "url": "assets/js/32.0a1010a1.js",
    "revision": "bad9bfe2a2a1342f4fe1b5809c7ebdf6"
  },
  {
    "url": "assets/js/33.7a53df63.js",
    "revision": "ab549d0c77e2bbff3bfbc6d5eda6fd05"
  },
  {
    "url": "assets/js/34.23a9b983.js",
    "revision": "e3ebb5a7cc01d975daaafa65a8f36aea"
  },
  {
    "url": "assets/js/35.34660098.js",
    "revision": "1295c1d3b5d599c6177b2b650fb56146"
  },
  {
    "url": "assets/js/36.f204cd36.js",
    "revision": "21b73966f69f8c3aa17c8ba911a88a10"
  },
  {
    "url": "assets/js/37.c4ecc962.js",
    "revision": "cdaca518ab7c4120d16fe953c45d8322"
  },
  {
    "url": "assets/js/38.5ee004ca.js",
    "revision": "ed09ed825e1be77bcbd98519581872d6"
  },
  {
    "url": "assets/js/39.1444485b.js",
    "revision": "57fc788518fbfc8552e322b6c872d18f"
  },
  {
    "url": "assets/js/4.d00412a4.js",
    "revision": "5a16a24d5ba69911752af756c1c0e227"
  },
  {
    "url": "assets/js/40.bc0f1230.js",
    "revision": "c06fe45aebd65c1468e3eea3ec60d56f"
  },
  {
    "url": "assets/js/41.e9256b49.js",
    "revision": "a21c307fbcb9e4890b8e7bd2bf5959a9"
  },
  {
    "url": "assets/js/42.4da0c82d.js",
    "revision": "11678e7b5d46b87555e0b980e2ac3c05"
  },
  {
    "url": "assets/js/43.d1b89c63.js",
    "revision": "9e6cf07d89ed9b8fbd3bb548893be9d0"
  },
  {
    "url": "assets/js/44.649ccc19.js",
    "revision": "50f8ff34cf0adf2c0f6e250c6f62f1db"
  },
  {
    "url": "assets/js/45.15cd3061.js",
    "revision": "8c62a8bef8e888be136157151b1a9129"
  },
  {
    "url": "assets/js/46.4e071636.js",
    "revision": "05d7e2bcedbc32b6ee9ad5c82ded8909"
  },
  {
    "url": "assets/js/47.2b575b61.js",
    "revision": "ca6a205da274ae83fc3f805acb21115c"
  },
  {
    "url": "assets/js/48.5a1cf95d.js",
    "revision": "8b56c992b76d691c1e54c575783bee1f"
  },
  {
    "url": "assets/js/49.7c618fcd.js",
    "revision": "0b3a7d94718a2b2349347114493d2dd5"
  },
  {
    "url": "assets/js/5.b54f2c53.js",
    "revision": "a8cc92cd44c2c59cdfeb357bad660298"
  },
  {
    "url": "assets/js/50.0953c070.js",
    "revision": "ac8f2c75f05fa40f553fa7a71607f3a5"
  },
  {
    "url": "assets/js/51.c67587bd.js",
    "revision": "a31effe82bb64607c6c4c3534dd67170"
  },
  {
    "url": "assets/js/52.1ef1a9f4.js",
    "revision": "d1e8571b132ff694485d5df8be2634bf"
  },
  {
    "url": "assets/js/53.6ba16b6b.js",
    "revision": "afaa27c8eabd846fe26cce964dffc4cc"
  },
  {
    "url": "assets/js/54.2ab65390.js",
    "revision": "52c4e51963ec74e0d0c9097c8960a938"
  },
  {
    "url": "assets/js/55.45622851.js",
    "revision": "51a307d03c626c7c1e0aeba60f5c1a45"
  },
  {
    "url": "assets/js/56.3b76ba3f.js",
    "revision": "0280a587cb71590d1e0fd2a0fe12f78a"
  },
  {
    "url": "assets/js/57.12cf00bf.js",
    "revision": "b70b0c2f2b0050660a390cc51dfaab5f"
  },
  {
    "url": "assets/js/58.a0510425.js",
    "revision": "6d16b97b99584f49108265068335a528"
  },
  {
    "url": "assets/js/59.75d808ff.js",
    "revision": "1f3895462ba69f41dd3ce0045571c38b"
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
    "url": "assets/js/61.5c8dec5a.js",
    "revision": "f2a7b5c7be67d0b4cc257ac18d72eded"
  },
  {
    "url": "assets/js/62.8f253092.js",
    "revision": "066006313ad294d669f23a283fa7a25e"
  },
  {
    "url": "assets/js/63.f1ab0f4e.js",
    "revision": "2c3aef08faaa3036d3924aa8e2b97bb4"
  },
  {
    "url": "assets/js/64.fcbf97e4.js",
    "revision": "34add0fe4d327084da4212a8ed5653ca"
  },
  {
    "url": "assets/js/65.6e6e4fa1.js",
    "revision": "8236f471874966ea8f5dabcd56ceb269"
  },
  {
    "url": "assets/js/66.8e6d572f.js",
    "revision": "33347a7d9c5f3e785659ec1ce954b788"
  },
  {
    "url": "assets/js/67.a605d1df.js",
    "revision": "7d31320bcd20f2647bd57a1e16ec1d43"
  },
  {
    "url": "assets/js/68.aa0b8234.js",
    "revision": "b7818dfbd35d973f6324fd6d7fa91b5b"
  },
  {
    "url": "assets/js/69.b4783312.js",
    "revision": "62cd3d67a8e18d18c92913c841fdf575"
  },
  {
    "url": "assets/js/7.cddd2c8c.js",
    "revision": "c6f14606a7cf257dd1647f0f88e96698"
  },
  {
    "url": "assets/js/70.397a6bd7.js",
    "revision": "6ac84e88c458c4fd76aceed59ecd8c99"
  },
  {
    "url": "assets/js/71.28eebe72.js",
    "revision": "df54cb9fb0223d8de317a849788cfd8e"
  },
  {
    "url": "assets/js/72.7287e024.js",
    "revision": "10a6501eb9e56d54962c6bb3987e86b9"
  },
  {
    "url": "assets/js/73.38fcbe37.js",
    "revision": "5c9931dc7b157e49a7fe15c26504efed"
  },
  {
    "url": "assets/js/74.d8dfc22f.js",
    "revision": "d2ddc862dcba9cc8e8c49313ec8dfd78"
  },
  {
    "url": "assets/js/75.41dc015f.js",
    "revision": "363a0e9df7ea5e20f0dd16316666624b"
  },
  {
    "url": "assets/js/76.8f417f5a.js",
    "revision": "57c7fb96354771e64b5c1aa46451bd33"
  },
  {
    "url": "assets/js/77.170f46ef.js",
    "revision": "7a9acdb9013bf428b2e1519cbb7dd30f"
  },
  {
    "url": "assets/js/78.952fe878.js",
    "revision": "c9f789486ee1be22316c243edb877d14"
  },
  {
    "url": "assets/js/79.931ce2d1.js",
    "revision": "413e11bb7fc1e1c9ee2685d10d8b4037"
  },
  {
    "url": "assets/js/8.fdea7128.js",
    "revision": "39bdd26fa7e60dd9a970180aa749b563"
  },
  {
    "url": "assets/js/80.83c1de44.js",
    "revision": "393d5ec4fe0793f657822a9f0353be1e"
  },
  {
    "url": "assets/js/81.f4958420.js",
    "revision": "bdcb9145d909802f2b80132929730005"
  },
  {
    "url": "assets/js/82.ba946ad6.js",
    "revision": "e0d05322820b18aa30900e2a75d1ddca"
  },
  {
    "url": "assets/js/83.fcad8f35.js",
    "revision": "ca3a471dee04ea085c9f01d70ea1145d"
  },
  {
    "url": "assets/js/84.3297ce41.js",
    "revision": "d02ff7f2e6941900a4cec433a196f538"
  },
  {
    "url": "assets/js/85.b888be41.js",
    "revision": "b43cf22eac779075a1ecddfbdbb1f5fa"
  },
  {
    "url": "assets/js/86.3a7170e4.js",
    "revision": "d9f2e4648a9faa3d2366121eaed42494"
  },
  {
    "url": "assets/js/87.a353c15c.js",
    "revision": "47bd858928275fa6f0ff089de55cfdcc"
  },
  {
    "url": "assets/js/88.30908466.js",
    "revision": "9479c434a86f479cd5eea7467d0d7ca4"
  },
  {
    "url": "assets/js/89.2fddacc1.js",
    "revision": "1d0d617b9f69f6e3fb8254b7a7281b08"
  },
  {
    "url": "assets/js/9.53dc440a.js",
    "revision": "00a5cb68e76313ce317dd2c3549ce20a"
  },
  {
    "url": "assets/js/90.77dbba8a.js",
    "revision": "c7816866a002b80b3b5f285ecd6f7124"
  },
  {
    "url": "assets/js/91.32a027a3.js",
    "revision": "c407a1aec78599fef22db66b5102b163"
  },
  {
    "url": "assets/js/92.79c1ab50.js",
    "revision": "c779e174070ab5cdefb0c7b175cf37fd"
  },
  {
    "url": "assets/js/93.1d114b24.js",
    "revision": "c9184d2401d6471b8eebadcf0e14f7c5"
  },
  {
    "url": "assets/js/94.504019c6.js",
    "revision": "9276a7cb26c8f9a541d3805d51dcb871"
  },
  {
    "url": "assets/js/95.f3001292.js",
    "revision": "7e8df6069ef496ff1d7df2ca21081659"
  },
  {
    "url": "assets/js/96.7ac90e28.js",
    "revision": "a13f947cea0a2619efda6488f03473ce"
  },
  {
    "url": "assets/js/97.ef40b75b.js",
    "revision": "69dc2981656ee8ed7ff71cfd58173bbd"
  },
  {
    "url": "assets/js/98.4973e66b.js",
    "revision": "1e54af7bb1434e35e595d673220eee04"
  },
  {
    "url": "assets/js/99.93d7417f.js",
    "revision": "f4e118f559e8dc99006881357634fb84"
  },
  {
    "url": "assets/js/app.55013ad9.js",
    "revision": "b267152146c820be036960140e3e91f5"
  },
  {
    "url": "backups/TypeScript-master/CONTRIBUTING.html",
    "revision": "70f13fbc2406285823c9f2bcfe7598bd"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/breaking-changes.html",
    "revision": "8e4373efa8d3621e89d61aa8f9dcca64"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 1.1.html",
    "revision": "c417765e80ad26c81f81cc27cd83ff89"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 1.4.html",
    "revision": "0846d6808dc3e09010a919828b2da489"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 1.5.html",
    "revision": "886ca9063e511d0c8df1fee3ca6be495"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 1.6.html",
    "revision": "6ce913a2d9d1048bb7f7b8a5483d84b3"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 1.7.html",
    "revision": "cdae16b99425a38d0bd0a4611e787f0d"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 1.8.html",
    "revision": "6fe854dcc8f75f5cdce2c71d82179c70"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 2.0.html",
    "revision": "73718cd770aec545194ff6812f757238"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 2.1.html",
    "revision": "ab7fdaa47c41d1f7880d334b3393a8cf"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 2.2.html",
    "revision": "e586216478637d33b4ed3beae1f71530"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 2.3.html",
    "revision": "7846269936c9e76650d1a21d4055765c"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 2.4.html",
    "revision": "a04a08643b9ece0223a81b2144e88bac"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 2.6.html",
    "revision": "faa12500c24e1a330580674de9cdd7b4"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 2.7.html",
    "revision": "919c76a1a8bf03b8b5465d61b261647c"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 2.8.html",
    "revision": "43c2543db25b750f296ac0f0be353fca"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 2.9.html",
    "revision": "d8a5d773730586ecaa2baab5d2e960d7"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 3.0.html",
    "revision": "fa997672a88c07dd08522fc6b87647cb"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 3.1.html",
    "revision": "0808af17dd37532bac2891547038cc6d"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 3.2.html",
    "revision": "c656d9a232f648034e60429eeaf5e66a"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 3.4.html",
    "revision": "dc825833d46d7340ccafe1f7bb41325d"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 3.5.html",
    "revision": "a8d4f75638fcaaa7ebf2d8eae3230564"
  },
  {
    "url": "backups/TypeScript-master/doc/breaking-changes/TypeScript 3.6.html",
    "revision": "a37c17ef5962405da3679889ec8dac1d"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Advanced Types.html",
    "revision": "8a4c774aa028d2273873b823a495c380"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Basic Types.html",
    "revision": "c363831cf05bb3d5d3e85462f0ddf363"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Classes.html",
    "revision": "dd9db4dbf5134848bdd28a1d69853227"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Compiler Options in MSBuild.html",
    "revision": "63631d4ade0c9fbfea072981a65018ec"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Compiler Options.html",
    "revision": "4ba7525453e60324bcd87d18680fa255"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Configuring Watch.html",
    "revision": "1a0cddc84d9d1ecec513e381d2053cf7"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/By Example.html",
    "revision": "d7a3356ebf5631001b264cb7b8eb552c"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/Consumption.html",
    "revision": "5d95e3647972e726d7d9f2d03a08e0ac"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/Deep Dive.html",
    "revision": "96fefd3ba3324dc0c63149c56ee9afbd"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/Do's and Don'ts.html",
    "revision": "784ea1b8ef9047ef0e208c8296da528f"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/Introduction.html",
    "revision": "de422e7fc7582bb1cf0ec6243b783860"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/Library Structures.html",
    "revision": "720992d701a722b6dfcd89e9d8503fdb"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/Publishing.html",
    "revision": "2a595fa9d5bdf0e4323d0ad9794a2ee9"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/Templates.html",
    "revision": "c800ab112be547babca0ce087d205e78"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/templates/global-modifying-module.d.ts.html",
    "revision": "9f5c947209e89c793b32148ceb8cdb57"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/templates/global-plugin.d.ts.html",
    "revision": "db74b39cc211eced82091f46f7cbaf0d"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/templates/global.d.ts.html",
    "revision": "bc8d0862d88057ea826f8f278a49e8e4"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/templates/module-class.d.ts.html",
    "revision": "8390d252b7796b5531ef470359be29d1"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/templates/module-function.d.ts.html",
    "revision": "7757e59d8a9217bf5cbf6da67b7cb560"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/templates/module-plugin.d.ts.html",
    "revision": "c7a68a1a6cb9eea733989169ccae6345"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/declaration files/templates/module.d.ts.html",
    "revision": "a6c20f04ee4810afeb44bbe16a3c9b95"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Declaration Merging.html",
    "revision": "a1209291c17cffa3b24d547d96ee7f84"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Decorators.html",
    "revision": "8c1524e192f75e61159e7ae82cff6a89"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Enums.html",
    "revision": "b15255a3a50125539ed542a1ef4c7d4c"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Functions.html",
    "revision": "630436bdee6d86672e8d34436e4e89dc"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Generics.html",
    "revision": "3031e9316672f292ce2f95c4d74abefb"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/index.html",
    "revision": "6329868c337c311388d57bd6e6d847d3"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Integrating with Build Tools.html",
    "revision": "148fcba5b49166a1b4c4cd73c3e5611c"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Interfaces.html",
    "revision": "ac68f84bd8ef6f46b3d3e3053912d608"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Iterators and Generators.html",
    "revision": "3b3111318bf2315cd721918228abba03"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/JSX.html",
    "revision": "46afeefcd0e974c5559d9e3927c4685a"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Mixins.html",
    "revision": "c81915f22004df55697bb6f926e31d87"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Module Resolution.html",
    "revision": "2122cac61693d6a73e297f68adabbaf6"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Modules.html",
    "revision": "b117b85306eb5a3f4a3e64ad06d5c9b8"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Namespaces and Modules.html",
    "revision": "140dddc9c994371d781c8b800b989042"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Namespaces.html",
    "revision": "27a8d378e86d9272c120bc3921fad0c3"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Nightly Builds.html",
    "revision": "e8c7a31daf0edcf496fecc2f9ffe8ffa"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Project References.html",
    "revision": "376b22027f28a9e637136249d939216e"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Symbols.html",
    "revision": "d832e5c64f27189a0c6d4bd8ba6b1eb5"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Triple-Slash Directives.html",
    "revision": "49dc610dc446bfc1f394a6ee4c12f0ed"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tsconfig.json.html",
    "revision": "f4d03c3cde80627e382d68a8745c57e1"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/Angular 2.html",
    "revision": "12e1a71e5bf0d11c5d5639914f7aa94e"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/ASP.NET 4.html",
    "revision": "d38f2c9de761bfe794eee98e981d9f89"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/ASP.NET Core.html",
    "revision": "40cd757c30037b865fb0f9180a7ab619"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/Gulp.html",
    "revision": "8c3856b970e119f10c59636d4cc15481"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/index.html",
    "revision": "f4b6c154c2ea7d31cb15259d37cae02c"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/Knockout.html",
    "revision": "18a74250abb604936ab8580616757772"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/Migrating from JavaScript.html",
    "revision": "779c6ab37f43467229ac05c6bf67a55b"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/React & Webpack.html",
    "revision": "d1aa2ad619a9c0aea52ce8e16ab633f4"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/React.html",
    "revision": "a7cff42207f2ebe21312d2dc7a6d2409"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/tutorials/TypeScript in 5 minutes.html",
    "revision": "882301b87ba41c4990e0d90b286142f2"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Type Checking JavaScript Files.html",
    "revision": "536ef8ebea07c2d2a7fc9155b4147c98"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Type Compatibility.html",
    "revision": "1efd5665f0a7c31e26865f5d6d8c064a"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Type Inference.html",
    "revision": "331fe6d7d2c4142183c49c8d16957ee0"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Typings for NPM Packages.html",
    "revision": "83aa9c4ee5c249738cca319241c977fd"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Utility Types.html",
    "revision": "1b956047f4d16e04e1b991c490fcafb2"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Variable Declarations.html",
    "revision": "9e9733dde30f7c9c9b7ae70211eef1f4"
  },
  {
    "url": "backups/TypeScript-master/doc/handbook/Writing Definition Files.html",
    "revision": "0e43ba432f527f86e65cbd0e985bf6fe"
  },
  {
    "url": "backups/TypeScript-master/doc/quick-start/index.html",
    "revision": "d33f9b56d41656f5ae057092d4f06992"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/index.html",
    "revision": "2f6d1fa3efac0246aa4a8d629ea6e7cf"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 1.1.html",
    "revision": "e3b4ccfcdd54d887c611a27f252f3b3c"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 1.3.html",
    "revision": "575d88b8ecd2495a25abf15be6429169"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 1.4.html",
    "revision": "da0162b9f47eaf076216148a93e00d00"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 1.5.html",
    "revision": "f359bad72e442d62b6b591538220534c"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 1.6.html",
    "revision": "cdd8091bb673e98b95e01e3b70164716"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 1.7.html",
    "revision": "6f32a3a38f7cad2fd0625d31bcddbcc1"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 1.8.html",
    "revision": "073013d3b58916fb5f5358ecaa5961a8"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.0.html",
    "revision": "0a8ca27d39c80118dc74db9e310d8596"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.1.html",
    "revision": "7b3f5a2ffa0f1efa8a7dc15de526121a"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.2.html",
    "revision": "e980c9410864d9c3257bf053c9fb80ab"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.3.html",
    "revision": "994df8e509f6880ce731c1bdf085262a"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.4.html",
    "revision": "48e554b99a8c02dc9f9a7ee33e45f0d2"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.5.html",
    "revision": "75cd6fe95a903214931f8a1aa73bc3d0"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.6.html",
    "revision": "e21572d3178a0c2033615477dec1e867"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.7.html",
    "revision": "a9ab39247584d7d0308adfa44adb3218"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.8.html",
    "revision": "2af87a07ce834746e6615ca27223dae3"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 2.9.html",
    "revision": "0b9b138a51ae2ee7d751025cef39ce06"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 3.0.html",
    "revision": "4d18cabce31131a1a514e0b78029b495"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 3.1.html",
    "revision": "3d886e0618d87784fda4c12035696bf8"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 3.2.html",
    "revision": "50ab58f121c988c9cbe370d8a1fc8f5c"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 3.3.html",
    "revision": "59805a2253418d565f5404788da7703a"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 3.4.html",
    "revision": "8b27901a3c68aa10988945cef5367fd5"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 3.5.html",
    "revision": "4ed9aa6d8e698aa99bbfc0afc88f5cdf"
  },
  {
    "url": "backups/TypeScript-master/doc/release-notes/TypeScript 3.6.html",
    "revision": "5d01b6daee7b023d344e034c9b031538"
  },
  {
    "url": "backups/TypeScript-master/doc/wiki/Architectural-Overview.html",
    "revision": "072330b9b1451a885de7055a506809f1"
  },
  {
    "url": "backups/TypeScript-master/doc/wiki/coding_guidelines.html",
    "revision": "21eb7ceb1c5ed85445b0a4a46ba9501c"
  },
  {
    "url": "backups/TypeScript-master/doc/wiki/Common Errors.html",
    "revision": "5a68ed7149da03c558c64180b06e0129"
  },
  {
    "url": "backups/TypeScript-master/doc/wiki/index.html",
    "revision": "8317fd7e21348a3883701ae7bffca124"
  },
  {
    "url": "backups/TypeScript-master/doc/wiki/Roadmap.html",
    "revision": "ead24883d068f98322aa6f92a7d292dc"
  },
  {
    "url": "backups/TypeScript-master/doc/wiki/this-in-TypeScript.html",
    "revision": "78c192e02aeec02072d2ea0388d82f6d"
  },
  {
    "url": "backups/TypeScript-master/doc/wiki/TypeScript-Editor-Support.html",
    "revision": "066a33f5446b06c1592aaa23f4c398eb"
  },
  {
    "url": "backups/TypeScript-master/doc/wiki/Using-TypeScript-With-ASP.NET-5.html",
    "revision": "c2b7e063ab1b12b91fddb9ab0070f3ce"
  },
  {
    "url": "backups/TypeScript-master/index.html",
    "revision": "601d0ddb679beea6d268aca27b419c5d"
  },
  {
    "url": "backups/TypeScript-master/preface.html",
    "revision": "9b49ed9222b2fe7907453d2dafd2b9ae"
  },
  {
    "url": "backups/TypeScript-master/SUMMARY.html",
    "revision": "f22657a5c62949eb97308127abe24388"
  },
  {
    "url": "describe/index.html",
    "revision": "752c81dc081cf2254d7734f07fc1f2b1"
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
    "revision": "bdfebc77a65d362cf56b42000b0ac695"
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
