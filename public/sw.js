if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let d={};const c=e=>s(e,r),t={module:{uri:r},exports:d,require:c};a[r]=Promise.all(i.map((e=>t[e]||c(e)))).then((e=>(n(...e),d)))}}define(["./workbox-0ea65fa9"],(function(e){"use strict";importScripts("/fallback-ce627215c0e4a9af.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/data/N08WS6QBGhsnx1dKH0ygY/fallback.json",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/N08WS6QBGhsnx1dKH0ygY/_buildManifest.js",revision:"a0ae24e7f29dd3809ab75b5dd91a79dc"},{url:"/_next/static/N08WS6QBGhsnx1dKH0ygY/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/180-fa89d319fb6be553.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/251-a4e3313e2c2d58d6.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/286-f044ff5c6420fb2c.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/308-0dfeaea860670476.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/326-7d6d5486b81c4999.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/377.07e96eabd42db6ff.js",revision:"07e96eabd42db6ff"},{url:"/_next/static/chunks/403-13f294bb8371e136.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/417-e45cfbabbc1fdee1.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/444-b684173eca54d1da.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/589-4bd96ca4591c6e11.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/5e094596-e59f9e8538a5d2a9.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/622-ae8843615508298a.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/638-7d7028f6df0db0b9.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/648-73d63566a11c134b.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/680-af55dc07aa660934.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/874-77d51623ec569f50.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/893-b92c344cc2e82b02.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/8ffc485e-bdaf30706b87d6ca.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/936-80baf769d17ddba6.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/98.755fcfce142a1732.js",revision:"755fcfce142a1732"},{url:"/_next/static/chunks/app/(history-and-news)/history/page-a64f509391adedf8.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/app/(history-and-news)/layout-6f1d115e3c1ed0f2.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/app/(history-and-news)/news/page-04d4743ff0a8882b.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/app/(history-and-news)/queue/page-4b51fb4bd8d4108d.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/app/404/page-3955230557c8e4aa.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/app/_not-found/page-3f9d38f7256284a8.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/app/count-down/page-1a8369a9c7d6528e.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/app/layout-0b5530e7fbb36178.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/app/onboarding/page-ab7077908aaf3034.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/app/page-f77bbda2a6f6716d.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/app/summary/page-d40f902a88170dda.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/app/ui-kit/page-4b846355041d8b83.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/b536a0f1-f8f8b7af50cf4ddd.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/fd9d1056-fd696afb9cdd4afd.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/framework-00a8ba1a63cfdc9e.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/main-39cb1b0f6ac21b66.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/main-app-65651c51b570f32a.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/pages/_app-037b5d058bd9a820.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/pages/_error-6ae619510b1539d6.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-0c0ab1e82543587a.js",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/_next/static/css/1bf4d32f0573e21f.css",revision:"1bf4d32f0573e21f"},{url:"/_next/static/css/35154369ab0a48dc.css",revision:"35154369ab0a48dc"},{url:"/_next/static/css/8fdacdee5f792e5e.css",revision:"8fdacdee5f792e5e"},{url:"/_next/static/css/9328ba811dc823c2.css",revision:"9328ba811dc823c2"},{url:"/_next/static/css/9ea90321ab187f37.css",revision:"9ea90321ab187f37"},{url:"/_next/static/css/b5bdbcc47e829bf8.css",revision:"b5bdbcc47e829bf8"},{url:"/_next/static/css/c04d3c0108893faa.css",revision:"c04d3c0108893faa"},{url:"/_next/static/css/d671876f7501ddfa.css",revision:"d671876f7501ddfa"},{url:"/_next/static/css/f1db0a058215c773.css",revision:"f1db0a058215c773"},{url:"/_next/static/media/AttackSign.50d92a1d.svg",revision:"17c46451f9e838b35b4b24f8b2999316"},{url:"/_next/static/media/AttackSignActive.1c0037cd.svg",revision:"9249d78a83a51086389f68b56e2ec819"},{url:"/_next/static/media/BBCLogo.535c8b43.svg",revision:"5d28590ca9184113b84c8af75c8284c8"},{url:"/_next/static/media/BBCMainImg.3837107e.svg",revision:"68a99d9fe8156e53998bf4254eeeaa7b"},{url:"/_next/static/media/CountShape.e0d18777.svg",revision:"19e9f6dd5baed855fdb3fad845937151"},{url:"/_next/static/media/Globe.0a4de6d9.svg",revision:"1f0bb062a2f1fb6e57d3002069d6e719"},{url:"/_next/static/media/GlobeActive.69c84761.svg",revision:"bbd30dfdf01037408d01436698a4a977"},{url:"/_next/static/media/GlobeIcon.8b722037.svg",revision:"b44b2a1cfba2c3c44630821607dcb47e"},{url:"/_next/static/media/GlobeUnderProtection.03fec77f.svg",revision:"15b9766b43928bfe604c4b9cad9ced2f"},{url:"/_next/static/media/HelpIcon.18343267.svg",revision:"13b64d1b146780aafed8878ef995fd23"},{url:"/_next/static/media/Loader.fc60b751.svg",revision:"920b0ba500aaa4e45a7bb6c5e7ffa83e"},{url:"/_next/static/media/Map.db77fc85.svg",revision:"fa7bcf1f534d7b11d8d82741f049101b"},{url:"/_next/static/media/MapActive.d259beb0.svg",revision:"a9002f89996ed4fbf11bb3c0401d51fc"},{url:"/_next/static/media/MapActiveUnderProtection.60618f6a.svg",revision:"330c8d80d33a4aba660446e49e526a81"},{url:"/_next/static/media/ProtectActive.ce0f59c0.svg",revision:"f3bd8f39b373c9dbbcb3d37f573e2d37"},{url:"/_next/static/media/ProtectSign.5c82d689.svg",revision:"a8aae599e77bb9de55523718676ac3ad"},{url:"/_next/static/media/arrowDown.8bc63b83.svg",revision:"00f6329871519d003ffa83a0bcf3c6c1"},{url:"/_next/static/media/arrowDownGray.57279870.svg",revision:"bc7cd9935ac34f55b2195227238fd8f8"},{url:"/_next/static/media/arrowUp.9db00eec.svg",revision:"b2e2d93daba6cfaee9377979b11d9ac2"},{url:"/_next/static/media/arrowUpGray.736045a1.svg",revision:"f7a3a002d58a5277bddad3d1e8184422"},{url:"/_next/static/media/attack.46c1c2ca.svg",revision:"6a2c1521d48af8fd6863c77d7746bdda"},{url:"/_next/static/media/backArrow.0db1d76c.svg",revision:"cb6cdd7f4135c5f5a9bc139e1952c5d7"},{url:"/_next/static/media/backBtnShape.2264874a.svg",revision:"e4138dd1b88dfd588409073796e56288"},{url:"/_next/static/media/backspace.a27e048e.svg",revision:"43eb03fb5817775beebdbf653eb052c3"},{url:"/_next/static/media/bigCircle.a43ef630.svg",revision:"00e6c71e23864b745df0ce85572c0390"},{url:"/_next/static/media/bigCircleBlue.101223c7.svg",revision:"a86d058e600f2ad64979b845d1facc8f"},{url:"/_next/static/media/blueLight.9102de38.svg",revision:"d5d3d588888d5d03f162fa362ea401d2"},{url:"/_next/static/media/bottom.3ddbf693.svg",revision:"9b098e44dae1256ab9f08fe090c432b6"},{url:"/_next/static/media/bottomNarrowLines.a0d8af8e.svg",revision:"86369f3be63ff0f5f6bbe428498ac155"},{url:"/_next/static/media/bottomStraightLeft.452a9342.svg",revision:"620a87d9e962bfd409b915b11e72e4f1"},{url:"/_next/static/media/bottomStraightRight.40a6384f.svg",revision:"c1e49a436369957e2d6e2da27f5920bd"},{url:"/_next/static/media/cancelContainer.b84e4f4d.svg",revision:"ef92e25616dd3991eed785f131800e76"},{url:"/_next/static/media/closeXButton.cd3ea8c5.svg",revision:"9caafb2292949d9977dcc9e795958dba"},{url:"/_next/static/media/connected.e76d80a6.svg",revision:"057ef78dca45f08e2632c468db5fa806"},{url:"/_next/static/media/connectedOneLine.a8d375c7.svg",revision:"4d21ecd3e05cdf16412478da536aa1db"},{url:"/_next/static/media/connectedTwoLines.91485a5a.svg",revision:"325ccd316d0746f8cec492856dea435f"},{url:"/_next/static/media/darkerGradient.a8fdc5fb.svg",revision:"122579d48f9b06ffc7118788dbb8489c"},{url:"/_next/static/media/emogiIcon.1771d9ba.svg",revision:"99532ad44986ad894bf9a91904beb7f2"},{url:"/_next/static/media/enterKey.1b3af03a.svg",revision:"225bf1af4818ea516d2335e3c5845bc0"},{url:"/_next/static/media/forwardArrow.37632e89.svg",revision:"d35c155c0743833b8a044e1f277dcfe0"},{url:"/_next/static/media/forwardArrowProtect.3ae6df64.svg",revision:"0115c5aa928949a4131be9b2e58a1535"},{url:"/_next/static/media/forwardBtnShape.fb98663f.svg",revision:"977ed6a942a26196a1177fedc35830f0"},{url:"/_next/static/media/forwardBtnShapeProtect.a074dfb9.svg",revision:"5e601c07a2d740c39dfb21f0738b1a15"},{url:"/_next/static/media/foxNewsLogo.84832c16.svg",revision:"f279d5171b1a4e51a6d308a814578978"},{url:"/_next/static/media/globeLanToggle.5a95029b.svg",revision:"e303a74670ebe264db5b182755154946"},{url:"/_next/static/media/greenLight.cc6d6969.svg",revision:"63146d3628e42240229f30ff654362cf"},{url:"/_next/static/media/greenLine.971b9d1a.svg",revision:"0bdf195f53ed779f90a93ee226620719"},{url:"/_next/static/media/grid.6fc3123d.svg",revision:"47f7518d148c57e42df19b3a990986d1"},{url:"/_next/static/media/keyboardIcon.13153be8.svg",revision:"9e8faebc4968db0504c72c0a4d26b786"},{url:"/_next/static/media/leftSquareBracket.a376d5fd.svg",revision:"61d5b80b093a83e11074ebd936c5c3bb"},{url:"/_next/static/media/leftSquareBracketBlue.eab3e891.svg",revision:"54279321715f04849020edf5933833f9"},{url:"/_next/static/media/lines.5e8dbf2e.svg",revision:"ee7cb08ade1b8aec86372962517a88a4"},{url:"/_next/static/media/lines.d80a0990.svg",revision:"f39bc91f55b28080d2bb2b5d8d60d50a"},{url:"/_next/static/media/mediumCircle.e94c58f3.svg",revision:"53d2d267e1b33738aa7d91e3086786db"},{url:"/_next/static/media/mediumCircleBlue.9ddccd07.svg",revision:"6cd2007259640c346f701ec5e51c675f"},{url:"/_next/static/media/minusSign.ceb3e364.svg",revision:"5274da3856c35798249e9e23c8670f7a"},{url:"/_next/static/media/noise.bbab29c4.svg",revision:"7352f7694cd76ec8c611eb1e785bab9e"},{url:"/_next/static/media/noiseMap.b928cc40.svg",revision:"e6fd1791e1d8a6053f15c2a70c345a9d"},{url:"/_next/static/media/notConnected.efc59817.svg",revision:"aa9cad95e3095e87d81bc3635f836b33"},{url:"/_next/static/media/opacitiyOfButton.b84e4f4d.svg",revision:"ef92e25616dd3991eed785f131800e76"},{url:"/_next/static/media/plusIcon.0ee9ba77.svg",revision:"2088297a75888c5694e0ac41e0649f58"},{url:"/_next/static/media/protectBlueTrash.24844c01.svg",revision:"ac2a0182d7d4d2b4bb37b008eb2e63ba"},{url:"/_next/static/media/protectionIcon.8c1fd571.svg",revision:"cc477a902604808014400764d0bd9304"},{url:"/_next/static/media/read.0b31e914.svg",revision:"c54a74010d98d9d280b8451da389de3a"},{url:"/_next/static/media/rightSquareBracket.e4efe3dd.svg",revision:"19693f1c7712b79ac1f46806188b1c3a"},{url:"/_next/static/media/rightSquareBracketblue.4fabe86c.svg",revision:"48a02d49aa851cd9bb9dba7fbbc65ca5"},{url:"/_next/static/media/shift.7d9d242e.svg",revision:"ccb47d7dd3a9142e783277de501c44f6"},{url:"/_next/static/media/sideLines.87b4984f.svg",revision:"a0948f958d800b9c0b7862dfef67f71d"},{url:"/_next/static/media/sidelinesForButtons.86758b61.svg",revision:"b85240bebabd2ce61666546a2fc165ef"},{url:"/_next/static/media/skyNewsLogo.188540f6.svg",revision:"2706682c6542571d84b14fb8dc5690a6"},{url:"/_next/static/media/slashesFromBottom.55322803.svg",revision:"68b6f115b851ed6d534e84462e65bfe0"},{url:"/_next/static/media/slashesFromTop.d29dcfb5.svg",revision:"b122da131f43b7d76c6c85431b574038"},{url:"/_next/static/media/slashes_90_degree.6173c595.svg",revision:"ca3dbc2815bfb82055e1beb9b54642e9"},{url:"/_next/static/media/smallCircle.3e3383b8.svg",revision:"674c3e86d8e09429570fb95fd74a9976"},{url:"/_next/static/media/smallCircleBlue.d9abbb39.svg",revision:"74b8e9c2598b9002442585b8886920ae"},{url:"/_next/static/media/summaryFooterForm.8f6ff5ac.svg",revision:"895642075ca326609809583b88303240"},{url:"/_next/static/media/summaryFooterGradient.14e822d7.svg",revision:"3222c2f0f1088d8bb99326f648aa1bd9"},{url:"/_next/static/media/target.bbbe4973.svg",revision:"8c8cda34a68b5f9af8d166a2320e245e"},{url:"/_next/static/media/target_2.f35569b9.svg",revision:"031a44d9271dfacb81df4aaf33cfa008"},{url:"/_next/static/media/theTimesLogo.a11e8b44.svg",revision:"b6bf7d4c51c7193eae726738b2e1a76f"},{url:"/_next/static/media/top.bd1da9b2.svg",revision:"0b97cd1fbb1737053156b079a95ad46f"},{url:"/_next/static/media/topOfBotton.cc30f226.svg",revision:"aa138892eb6c5a3a7c807bd7b09f1d92"},{url:"/_next/static/media/trash.f5a7e3dc.svg",revision:"c165371fddb6f7023bf44e5d24a5b93d"},{url:"/_next/static/media/trashHinticon.a07a838c.svg",revision:"a9b02d24dbf62e15ba807361df499e50"},{url:"/_next/static/media/two_lines.bbf5f78d.svg",revision:"ffa2cd51d026735734a01281d559e5dc"},{url:"/count-down/Loader.svg",revision:"920b0ba500aaa4e45a7bb6c5e7ffa83e"},{url:"/count-down/attack.svg",revision:"6a2c1521d48af8fd6863c77d7746bdda"},{url:"/count-down/bigCircle.svg",revision:"00e6c71e23864b745df0ce85572c0390"},{url:"/count-down/bigCircleBlue.svg",revision:"a86d058e600f2ad64979b845d1facc8f"},{url:"/count-down/blueLight.svg",revision:"d5d3d588888d5d03f162fa362ea401d2"},{url:"/count-down/bottom.svg",revision:"9b098e44dae1256ab9f08fe090c432b6"},{url:"/count-down/bottomNarrowLines.svg",revision:"86369f3be63ff0f5f6bbe428498ac155"},{url:"/count-down/bottomRow.svg",revision:"15f3de7d076a0d71d51e93ef4577901e"},{url:"/count-down/cancelContainer.svg",revision:"ef92e25616dd3991eed785f131800e76"},{url:"/count-down/greenLight.svg",revision:"63146d3628e42240229f30ff654362cf"},{url:"/count-down/grid.svg",revision:"47f7518d148c57e42df19b3a990986d1"},{url:"/count-down/index.ts",revision:"2b6fb11ab02570102a8e10de0bc9027b"},{url:"/count-down/mediumCircle.svg",revision:"53d2d267e1b33738aa7d91e3086786db"},{url:"/count-down/mediumCircleBlue.svg",revision:"6cd2007259640c346f701ec5e51c675f"},{url:"/count-down/middleRow.svg",revision:"7396373a0334ac7e623479b0780d40cf"},{url:"/count-down/opacitiyOfButton.svg",revision:"ef92e25616dd3991eed785f131800e76"},{url:"/count-down/row.svg",revision:"ac29ba4fedad30fc492ebe7ddbf49966"},{url:"/count-down/sideLines.svg",revision:"a0948f958d800b9c0b7862dfef67f71d"},{url:"/count-down/slashesFromBottom.svg",revision:"68b6f115b851ed6d534e84462e65bfe0"},{url:"/count-down/slashesFromTop.svg",revision:"b122da131f43b7d76c6c85431b574038"},{url:"/count-down/smallCircle.svg",revision:"674c3e86d8e09429570fb95fd74a9976"},{url:"/count-down/smallCircleBlue.svg",revision:"74b8e9c2598b9002442585b8886920ae"},{url:"/count-down/target.svg",revision:"8c8cda34a68b5f9af8d166a2320e245e"},{url:"/count-down/top.svg",revision:"0b97cd1fbb1737053156b079a95ad46f"},{url:"/count-down/topOfBotton.svg",revision:"aa138892eb6c5a3a7c807bd7b09f1d92"},{url:"/fallback-ce627215c0e4a9af.js",revision:"259b3b058974bb2f6bb92f8b9af57144"},{url:"/fallback-font.woff2",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/fallback.mp3",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/fallback.mp4",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/fallback.webp",revision:"N08WS6QBGhsnx1dKH0ygY"},{url:"/history/BBCLogo.svg",revision:"5d28590ca9184113b84c8af75c8284c8"},{url:"/history/bottomStraightLeft.svg",revision:"620a87d9e962bfd409b915b11e72e4f1"},{url:"/history/bottomStraightRight.svg",revision:"c1e49a436369957e2d6e2da27f5920bd"},{url:"/history/darkerGradient.svg",revision:"122579d48f9b06ffc7118788dbb8489c"},{url:"/history/foxNewsLogo.svg",revision:"f279d5171b1a4e51a6d308a814578978"},{url:"/history/index.ts",revision:"3098792e82e2862cf844d2c57343cd34"},{url:"/history/lines.svg",revision:"ee7cb08ade1b8aec86372962517a88a4"},{url:"/history/noise.svg",revision:"7352f7694cd76ec8c611eb1e785bab9e"},{url:"/history/protectionIcon.svg",revision:"cc477a902604808014400764d0bd9304"},{url:"/history/skyNewsLogo.svg",revision:"2706682c6542571d84b14fb8dc5690a6"},{url:"/history/target_2.svg",revision:"031a44d9271dfacb81df4aaf33cfa008"},{url:"/history/theTimesLogo.svg",revision:"b6bf7d4c51c7193eae726738b2e1a76f"},{url:"/home/ContainerTop.svg",revision:"1bad62825f6503df1914e2f6174886b5"},{url:"/home/Delete.svg",revision:"de73278dc795e1e600a8cff7a2c04127"},{url:"/home/Globus.png",revision:"ebdeac6cb5c5e658f02a51d475177ee4"},{url:"/home/basket.svg",revision:"09ddcf892b27efed130b960a390ee56d"},{url:"/home/icon-192x192.png",revision:"a5e773545b9e0611ff47fd8a31b37aa7"},{url:"/home/square.svg",revision:"974773850f607fdb86fac138f6b5a6f5"},{url:"/img-192.png",revision:"dfe80e0a8f9e3636c701423b1e10b0d5"},{url:"/img-384.png",revision:"dfe80e0a8f9e3636c701423b1e10b0d5"},{url:"/img-512.png",revision:"dfe80e0a8f9e3636c701423b1e10b0d5"},{url:"/keyboard/backspace.svg",revision:"43eb03fb5817775beebdbf653eb052c3"},{url:"/keyboard/emogiIcon.svg",revision:"99532ad44986ad894bf9a91904beb7f2"},{url:"/keyboard/enterKey.svg",revision:"225bf1af4818ea516d2335e3c5845bc0"},{url:"/keyboard/globeLanToggle.svg",revision:"e303a74670ebe264db5b182755154946"},{url:"/keyboard/index.ts",revision:"1d841714303bbe7fbdde7d219b15185b"},{url:"/keyboard/keyboardIcon.svg",revision:"9e8faebc4968db0504c72c0a4d26b786"},{url:"/keyboard/shift.svg",revision:"ccb47d7dd3a9142e783277de501c44f6"},{url:"/loading/Group.svg",revision:"fc0ff1a3766422b41815f4a80c158972"},{url:"/loading/Group10.svg",revision:"bb961ef3a907d1d625d2e98dac1d9a0c"},{url:"/loading/Group2.svg",revision:"68c627fb818098838d0785e173b531fc"},{url:"/loading/Group3.svg",revision:"aba37dcc4435cf2d9108d4ddbe2f0d29"},{url:"/loading/Group4.svg",revision:"f321799d925f10dfc9781a94431d87e0"},{url:"/loading/Group5.svg",revision:"c6a5446d0ff11b49145a4e825cb1caa3"},{url:"/loading/Group6.svg",revision:"f16c4201e28ad0a43da758f7230b1078"},{url:"/loading/Group7.svg",revision:"29d778cea56ed464c1facb808348df8e"},{url:"/loading/Group8.png",revision:"92bd121d6a987e3033c78c74a8cc89c2"},{url:"/loading/Interface.svg",revision:"b1fe12f573f82d942b3fd8603ed3218a"},{url:"/loading/Onboarding 20.svg",revision:"1942584c0c145c2bc13b4792c7caab9e"},{url:"/loading/Onboarding-20.svg",revision:"1942584c0c145c2bc13b4792c7caab9e"},{url:"/loading/TaskIcon.svg",revision:"6a2c1521d48af8fd6863c77d7746bdda"},{url:"/loading/shield-lock.svg",revision:"40fba998746aac74cc37bea47f22e27f"},{url:"/loading/фон.svg",revision:"b064c401b7bf4b14de663e0de75f4347"},{url:"/main-screen/AttackSign.svg",revision:"17c46451f9e838b35b4b24f8b2999316"},{url:"/main-screen/AttackSignActive.svg",revision:"9249d78a83a51086389f68b56e2ec819"},{url:"/main-screen/Globe.svg",revision:"1f0bb062a2f1fb6e57d3002069d6e719"},{url:"/main-screen/GlobeActive.svg",revision:"bbd30dfdf01037408d01436698a4a977"},{url:"/main-screen/GlobeIcon.svg",revision:"b44b2a1cfba2c3c44630821607dcb47e"},{url:"/main-screen/GlobeUnderProtection.svg",revision:"15b9766b43928bfe604c4b9cad9ced2f"},{url:"/main-screen/HelpIcon.svg",revision:"13b64d1b146780aafed8878ef995fd23"},{url:"/main-screen/Map.svg",revision:"fa7bcf1f534d7b11d8d82741f049101b"},{url:"/main-screen/MapActive.svg",revision:"a9002f89996ed4fbf11bb3c0401d51fc"},{url:"/main-screen/MapActiveUnderProtection.svg",revision:"330c8d80d33a4aba660446e49e526a81"},{url:"/main-screen/ProtectActive.svg",revision:"f3bd8f39b373c9dbbcb3d37f573e2d37"},{url:"/main-screen/ProtectSign.svg",revision:"a8aae599e77bb9de55523718676ac3ad"},{url:"/main-screen/index.ts",revision:"11136dd85ce3e4702d4523b995f43c82"},{url:"/main-screen/minusSign.svg",revision:"5274da3856c35798249e9e23c8670f7a"},{url:"/main-screen/slashes_90_degree.svg",revision:"ca3dbc2815bfb82055e1beb9b54642e9"},{url:"/manifest.json",revision:"5ad31b4fb62b95dfee7365a047410ad3"},{url:"/map/backgroundGradient.svg",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/map/grid.png",revision:"a5b29087999f3c2160ff3626897b55c7"},{url:"/map/noiseMap.png",revision:"f14ad74ab6d2b815545a7186a5ebb51a"},{url:"/news/BBCMainImg.svg",revision:"68a99d9fe8156e53998bf4254eeeaa7b"},{url:"/news/FoxNewsMainImg.svg",revision:"1b92970b8e19400c530d833e5cb5427d"},{url:"/news/SkyNewsMainImg.svg",revision:"d41b7958fc3b19ab0720110c963f2495"},{url:"/news/TheTimesMainImg.svg",revision:"f78e460d60f3aa85efee7a07f7218d2f"},{url:"/news/greenLine.svg",revision:"0bdf195f53ed779f90a93ee226620719"},{url:"/news/index.ts",revision:"aac9012fbad028e5aca19dd61bbb5e0c"},{url:"/news/read.svg",revision:"c54a74010d98d9d280b8451da389de3a"},{url:"/onboarding/AttackSign.svg",revision:"b23ff003201009a6cc6a9a978ce7258e"},{url:"/onboarding/ConfirmArrow.svg",revision:"fbd168b7522b4d6384c1080b815317d5"},{url:"/onboarding/Hint_icon.svg",revision:"c3b048b1bbd0cb7daa521a854ca28f25"},{url:"/onboarding/ProtectSign.svg",revision:"8f6eeec1068ea0f71ae34334cfda831c"},{url:"/onboarding/Toggle.svg",revision:"5c0224beea43a18ce38bb6d4fe5272e7"},{url:"/onboarding/ToggleHorisontal.svg",revision:"997497111a80e4fe848fc7f01f416642"},{url:"/onboarding/arrow.svg",revision:"b920f0a46ce4a965626433b6fa56e1ab"},{url:"/onboarding/arrowConfirm.svg",revision:"d7f0d0ac8ebf6c702a74126221e8f840"},{url:"/onboarding/backgroundImgBlue.svg",revision:"807033c5b85e07636db8e83de5773eb4"},{url:"/onboarding/backgroundImgGreen.svg",revision:"67492d791f296ea24db4b66334c4d858"},{url:"/onboarding/count-down-onboarding.png",revision:"bc9754163260b419416917bdb9b4151a"},{url:"/onboarding/info.svg",revision:"c9efb2418fa713d0bb9ba74d72646574"},{url:"/onboarding/noise.png",revision:"e058b2e6572c46bd5e62cac6b8842bc0"},{url:"/onboarding/square.svg",revision:"3aab0d191dc15bac53e4bcbd31e20e4f"},{url:"/onboarding/squareLittle.svg",revision:"0f4f24a929e70a20666ad4680ce8d8db"},{url:"/onboarding/squareMid.svg",revision:"f91ce4386c0c7d13b72ef876773705b8"},{url:"/summary/arrowDown.svg",revision:"00f6329871519d003ffa83a0bcf3c6c1"},{url:"/summary/arrowDownGray.svg",revision:"bc7cd9935ac34f55b2195227238fd8f8"},{url:"/summary/arrowUp.svg",revision:"b2e2d93daba6cfaee9377979b11d9ac2"},{url:"/summary/arrowUpGray.svg",revision:"f7a3a002d58a5277bddad3d1e8184422"},{url:"/summary/backArrow.svg",revision:"cb6cdd7f4135c5f5a9bc139e1952c5d7"},{url:"/summary/backBtnShape.svg",revision:"e4138dd1b88dfd588409073796e56288"},{url:"/summary/forwardArrow.svg",revision:"d35c155c0743833b8a044e1f277dcfe0"},{url:"/summary/forwardArrowProtect.svg",revision:"0115c5aa928949a4131be9b2e58a1535"},{url:"/summary/forwardBtnShape.svg",revision:"977ed6a942a26196a1177fedc35830f0"},{url:"/summary/forwardBtnShapeProtect.svg",revision:"5e601c07a2d740c39dfb21f0738b1a15"},{url:"/summary/index.ts",revision:"4171472ba9f39951ccd92b4ec56993a2"},{url:"/summary/leftSquareBracket.svg",revision:"61d5b80b093a83e11074ebd936c5c3bb"},{url:"/summary/leftSquareBracketBlue.svg",revision:"54279321715f04849020edf5933833f9"},{url:"/summary/lines.svg",revision:"f39bc91f55b28080d2bb2b5d8d60d50a"},{url:"/summary/noiseMap.svg",revision:"e6fd1791e1d8a6053f15c2a70c345a9d"},{url:"/summary/protectBlueTrash.svg",revision:"ac2a0182d7d4d2b4bb37b008eb2e63ba"},{url:"/summary/rightSquareBracket.svg",revision:"19693f1c7712b79ac1f46806188b1c3a"},{url:"/summary/rightSquareBracketblue.svg",revision:"48a02d49aa851cd9bb9dba7fbbc65ca5"},{url:"/summary/sidelinesForButtons.svg",revision:"b85240bebabd2ce61666546a2fc165ef"},{url:"/summary/summaryFooterForm.svg",revision:"895642075ca326609809583b88303240"},{url:"/summary/summaryFooterGradient.svg",revision:"3222c2f0f1088d8bb99326f648aa1bd9"},{url:"/summary/trash.svg",revision:"c165371fddb6f7023bf44e5d24a5b93d"},{url:"/target/arrowTargetLeft.svg",revision:"e0ad6c26c8f5262a7e059afe75a3676c"},{url:"/target/arrowTargetRight.svg",revision:"cce4f2df75cb004ac6174606de4c746a"},{url:"/target/target.svg",revision:"08e2f644d8bfe2f599f86888972488eb"},{url:"/top-capitalization/McDonald’s.svg",revision:"23cd13c80e1c5109e7d17b8f69898953"},{url:"/top-capitalization/amazon.svg",revision:"073c145e68510a7bb827497b6d227b6f"},{url:"/top-capitalization/apple.svg",revision:"35cead619f911e30dd647efa7e3f5a1f"},{url:"/top-capitalization/exxon.svg",revision:"e4a9b8b262b94e0253cb97b9a8a32a1d"},{url:"/top-capitalization/google.svg",revision:"d75d3d772d7b9f88e64d98c8d89658be"},{url:"/top-capitalization/mastercard.svg",revision:"44395f347fd59c381b0b2aa188a69642"},{url:"/top-capitalization/meta.svg",revision:"0899b91b04aad96928a8f480ac885ebb"},{url:"/top-capitalization/microsoft.svg",revision:"79a6b0ae21c5920aeca2719530aa5498"},{url:"/top-capitalization/nvidia.svg",revision:"39bb4e6f82ac95a90146d8e844620ce9"},{url:"/top-capitalization/visa.svg",revision:"63685c9131f7ba1da69642ce5f30e938"},{url:"/ui_kit/CountShape.svg",revision:"19e9f6dd5baed855fdb3fad845937151"},{url:"/ui_kit/closeXButton.svg",revision:"9caafb2292949d9977dcc9e795958dba"},{url:"/ui_kit/connected.svg",revision:"057ef78dca45f08e2632c468db5fa806"},{url:"/ui_kit/connectedOneLine.svg",revision:"4d21ecd3e05cdf16412478da536aa1db"},{url:"/ui_kit/connectedTwoLines.svg",revision:"325ccd316d0746f8cec492856dea435f"},{url:"/ui_kit/index.ts",revision:"8c98b6c1646700fe94cb1af8bf548178"},{url:"/ui_kit/notConnected.svg",revision:"aa9cad95e3095e87d81bc3635f836b33"},{url:"/ui_kit/plusIcon.svg",revision:"2088297a75888c5694e0ac41e0649f58"},{url:"/ui_kit/trashHinticon.svg",revision:"a9b02d24dbf62e15ba807361df499e50"},{url:"/ui_kit/two_lines.svg",revision:"ffa2cd51d026735734a01281d559e5dc"},{url:"/~offline",revision:"N08WS6QBGhsnx1dKH0ygY"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e},{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET")}));
