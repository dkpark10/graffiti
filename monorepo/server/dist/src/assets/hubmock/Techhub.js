"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const techImgList = [
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/28/15/11322bdcf4d948018d879210e0e2ca87.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/28/15/c423aebfffd34deea312b98513fef1bd.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/27/09/267d134ad78c498bba696befa9c55107.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/27/09/5449f009506b462bbc2e84ce54f497f1.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/26/13/915498b92c1f47d3a9a8d541148de6df.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/21/09/83ab91b710b44fe58a3154e2da6f0b9c.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/21/10/fb1cf3bd25794fcaa30e194d413fc1ed.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/16/14/1adf3d58cd8b404aa9b8407ae3d53399_640x480c.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/16/15/cf34db34d3c844d899d12335a30fd875.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/20/02/837a7894ad634ddc9c9bdc2e997de0c0.webp',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/13/11/678e98cd653f48d7ab0e5b30a542ff88.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/13/11/34ff467a5d994f3cb836f28e42f66f11.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/13/10/10e77036b8ae497db0741a7bed36a2b0.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/07/09/01c8b1d25eee441786fc840b7228a8d7.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/07/09/5ac699eeea114632a20e87b05cf47e74.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/30/14/a6d6620c72db42eb8a3a9053f3f97cd7.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/30/14/93090ea17f834a8880a7ce3e23f2d5fe.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/24/10/8e58d26554e04b97a7bc296e53c85204_640x480c.png',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/23/15/1d7d8587f34849a8ad92a081b7d25ef1_640x480c.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/22/11/730f183bacc949d499ca896c0c171f49.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/25/09/42d7e6b93d9641948522354277041c17.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/19/11/3c0f3895a6f64bd797c0374c43336778.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/19/13/fc9d68b94d2c4c878a51d4f60de01665.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/19/10/bac13f2b717c4bc7a9fc2556bcb28680.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/19/10/d296f62ba94840e7b094b3c861e7a2ef.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/17/08/89702de788f64df282d3ad6fc9d5d967_640x480c.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/12/16/7e4c5f6499bf4e4f99c7d535e3e8b83f.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/16/10/b13bfe1544224e55a676f1f7f52160ca.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/12/13/1c9cd19ea3bd4ff6a466623c9ac84813.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/04/15/561c46e51a724620adb436848006970b.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/07/27/14/01648059fd774d2097358d69672e4caa_640x480c.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/07/27/14/1e1868d2b0a3454fbb3f25e10c50106d.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/07/27/08/e99818a05d27408a9b2978ada1d8b85a.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/07/07/11/d9185c9cb1d1447d8d63ec10864f1812.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/06/29/15/c765c9195fd14bf08a660d4cb612f7bb.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/06/14/13/d2d646465ab84c9e8d3c6fcbd5cd358e_640x480c.png',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/05/16/15/008e9a1e8a0e4098a671e869c34c3733_640x480c.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/03/02/01/46ad0071642344bb8a4f9a764f38057a.webp',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/11/30/08/8cd6fc145200471abef8407dbe6eb6ed.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/11/22/08/6b0ecc9a429d4b139935be259ff2837e_640x480c.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/11/04/16/50fbfa630919404cb4fd99fbeae28a67.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/08/23/16/e1e920aee11c4da5baf9c0f84b453463.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/08/12/16/8309316a20294ba78a9d4b6b89909aca.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/08/11/14/159be1d3d91241b7ae2a44ca51340fdf.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/08/06/13/ca49827106d84cd08996142efdf1b3b4.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/07/27/15/19673cfaf80d489e957e52ee47ae9a88_640x480c.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/07/23/14/344588ae550a4ac78c561d2cd5ad409f.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/07/14/16/34765b37b5ca4cdaa68424f3ef46bfbd.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/07/14/16/83414ec578484f8b812ec32132b1e7c2.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/07/12/16/ced3221942174936b7003ff05e29fc30.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/07/07/15/bef64961011246d28943f19f79370203.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/07/07/15/65e95347b77f4fe5ab6d730199c0b109.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/07/01/15/4a5d08b69df84a87b2af25eb44459aef.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/06/24/09/6ee8998977744f16af905bf9a0d93e44.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/06/24/09/11ff2b0c820f4ae593a7aa4dfd7b6d4e.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/06/24/09/03a7776d4ee743229859b3d3579e52d1.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/06/24/09/2c0ca17ab33640a28dc8efb74857f837.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/06/24/09/fc4c5bcf96fa4fd8a613edcdeae58251.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/06/24/09/48f9ec43727e450496823f958880a72f.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/06/24/09/21f440508b014f768a314fd52991241f.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/06/24/09/cafb313ce5294afd8de079732ea54844.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/06/24/09/23e1c700b5564ca7a83a98e71627a9b3.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/06/24/09/b03f73ae19d4424dbab76e106841b2fa.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/06/24/09/fdd523b8cf55488db3fa0e7101eb680c.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/06/23/10/d840f0612ecd4f5b812e4495c84b11c7.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/06/23/10/123d7d7fb7b24c5fa7a9fe9ceee3cc08.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/06/23/10/91130335bfb24405a23fcc395354b708.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/06/23/00/b2f02a7466ae43118cb86555d9913dd4_640x480c.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/06/22/13/49b857c0f1db43e8bbc98d2eb2fbe172.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/06/22/13/801b69c8e06a43859a5e8a2201ae020a.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/06/22/13/b8b4be20ad6b49c487d247760bc69f06.jpg',
    'https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/06/21/09/12cf3b8883ae4208848fefa251ad717f.jpg',
];
const techTitleList = [
    '??? ?????? ??????????????? ??????',
    '?????? ???????????? ????????????? ????????? ????????? ??????',
    "????????? '?????????' ???????????? ??? ?????? ?????? SUV ID.4?????????????????????????? '??????'",
    '????????? ????????? ????????? ??? ????????? ????????? ??? ??????????????? ????????? T7 4WD',
    '??? ????????? ?????? ?????????, ???????????? ??????',
    '????????? ????????? ?????????? ????????? ?????? ????????????',
    '??????????????? ???????????????????????? ????????? ??????, ???????????? ????????? ??? ????????? [???????????????]',
    '[??????]???????????? ???????????? ????????? ??? HMG ???????????? ?????????????????? ??????',
    '????????? ????????? ????????????, ???????????? ?????????',
    '?????? ?????? ?????? ??? ????????? ????????? ????????? ????????? ??????????????? ?????? ??????',
    "??? ???????????? ?????? ?????????????????????????????? '??? ??????' ?????? [????????????]",
    '5????????? ?????? ?????? ?????? C????????????????????? ????????? ?????????[??????????????????]',
    '[?????????] ????????? ???????????? T??? ????????? ?????? ?????? ???XC40???',
    '[?????????] 90??? ?????? ???, ???????????? ????????? ???????????? SUV ?????????????????????',
    "[???????????????] ????????? ???????????? SUV??????????????? '?????????????????? ESV'",
    '1??? ?????? ?????? ????????? ??????Y??????????????? ????????? ?????????[??????????????????]',
    '????????? ??? ?????????? ????????? ???????????? ?????? ????????? ??????',
    '4~5????????? ???????????? ?????? ??? ?????? ?????? ?????? ??????',
    '???????????? ?????????????????? ???????????????? ?????????, ??????????????? ?????? ????????????',
    '????????? ?????? ???????????????????????? ????????? ????????? ?????????',
    '[?????????]?????? EV6 GT??????, ?????? ??? ?????? ?????????GT????????? ?????????',
    '????????????, ????????? ?????????????? ?????? ?????? ?????? ?????? AI ??????',
    '???????????? ?????? ??? ?????? ?????? ??????????????? ??? ??????... ?????? 1?????? ????????? ???',
    '2???????????? ??????????????? ??????????????????????????? ?????????, ??? 3??? ?????????',
    '?????? ????????? ?????? ????????? ????????????, ?????? ????????? ?????????????',
    "??? ?????? ??? ??????! ????????? AG, '911 ?????? ?????????' ??????. ?????? ????????? ??????",
    '950??????! ?????? ?????????, ??????????????? ??????(LUMIN)',
    '???????????? SM : ???????????? ????????? ?????? ???????????????',
    '?????? ?????? ?????? ?????? ??? ?????????WSJ, ????????? ????????? ????????? ???????????? ???',
    '[????????? ??????] ??????????????? ???V12??? ?????? ???',
    '????????? ????????? ?????? ???????????? ???????... ?????????????????? ???????????? ?????????',
    '????????? ???????????????? ????????? ?????? ?????? 7?????? ??????????',
    '??? ????????????, ?????? ????????? ?????? ????????????????????? ?????? ????????????',
    '????????? ?????? ????????? ???????????? ????????? ???AI ??????????????? ??????',
    '????????? ?????? ????????? ????????? ???????????? ?????? ??????',
    '3??? ???, ?????? ???????????? ?????????. ????????? ????',
    '?????????-????????????-?????? ?????? ?????? ?????????!',
    '???????????? ????????????? ??????????????? ?????? ?????? ???????????? ???????????? ??????',
    '????????? ??????, ????????? ??????, ????????? ????????????????...OTT 5??? 5???',
    '??? ????????? ????????? ?????? ????????? ??????/????????????',
    '?????? ?????? ???????????? ???????????? ????????? ??? ?????????, OCA??? ??????',
    '??? ??????????????? K??? ???????????? ??????, ??????????????????',
    '?????? ?????????Z??????3???????????Z??????3, ????????? ?????? ?????????',
    "???????????? ?????????...????????? '?????? ??????', ????????? ?????? ???????",
    '??????????????? ????????? ????????? ?????????????????? ??????????????? ???????',
    '?????? ?????? ????????? ???????????? ???????????? ??????',
    "AZ??????????? ??????, ?????? ?????? 3?????? ??? ?????? ?????? '???'",
    "???????????? ???????????? '?????? ??????'??? ????????? 5?????? ??????",
    '?????? ?????? PC??? ???????????? ????????? ???????????? ??????',
    "'?????? ????????????' ?????????, ??? ???????????? ?????? ??????????????? ??????",
    '[??????! ??????] ?????? ?????? ?????? ?????? ?????? ?????? ????????? ???',
    '????????? ????????????????????????? 22??? ???????????? ????????????',
    "'??? 2??? ????????????' NFT, ????????? ????????? ???????????? ??????.",
    '????????? ?????? 2???? ????????? R&D????????????????????? ?????? ???????????????',
    '?????? ????????? ????????? ??????',
    '??????????????? ???????????? ????????? ?????????, ???????????? ?????? ?????????',
    '????????? ???????????? ????????????????????? ???????????? ???????????????',
    '???LG??????, ????????? ?????? ????????? ?????????? ???????????? ?????? ??????',
    '?????? ???????????? ????????????',
    '?????? ???????????? ??????????????? ????????? ??????????????? ?????? ????????????',
    '?????? ???????????? ??? ??????????????????, ?????? ?????? ?????????????',
    '???????????? ??? ?????? ????????? ????????? ?????? IT ?????? CEO?????? ?????? ??????',
    '???????????? ?????? ????????? ?????? ?????? ?????? ????????? ????????? ?????? ??????',
    '????????? ?????? ????????? ?????? ????????????, ????????? ?????????',
    '?????? ???????????????????????? ?????? ??????????????? ????????????',
    '????????? ???????????? ??????????????? PDF??? ?????? ?????? ???',
    "AI, '??????????????'??? ????????? ??? ?????????",
    '???????????????????????? ??? 15??? ????????? ????????? ???????????? ??????',
    '????????????, ?????? ??? ??? ?????? ???????????????????????? ???????????? ??????',
    "'????????? ???????????????' ????????? 10??? ?????? ????????? 11??? ????????? ??????",
    '?????? ????????? ??? ????????? ?????? ??????',
    '???2 ???????????? ?????? ????????????????????????, ???????????? ????????? ??????',
];
const techAuthorList = [
    'AI?????????',
    '???????????????',
    '??????????????????',
    '????????????',
    '???????????????',
    '???????????????',
    '????????????',
    '????????????',
    '??????????????????',
    '??????????????????',
    '????????????',
    '???????????????',
    '????????????',
    '????????????',
    'ECC?????????',
    '???????????????',
    '???????????????',
    '?????????',
    'M?????????',
    '???????????????',
    '??????????????????',
    'AI?????????',
    'AI?????????',
    '????????????',
    '????????????????????????',
    'M?????????',
    '????????????????????????',
    '???????????????',
    'AI?????????',
    'ECC?????????',
    '????????????',
    '????????????????????????',
    '?????????',
    '????????????',
    '????????????',
    '??????????????????',
    '???????????? ???',
    '??????????????????',
    '???????????????',
    '???????????????',
    '????????????',
    '?????????',
    'IT??????',
    '????????????',
    '???????????????',
    '?????????????????? (ART insight)',
    '???????????????',
    '??????????????????',
    'ITWorld',
    '???????????????',
    '????????????',
    '???????????????',
    '?????????????????? (ART insight)',
    '????????????',
    '????????????',
    '????????????',
    '????????????',
    '???????????????',
    '????????????',
    '?????????',
    '???????????????',
    '???????????????',
    '???????????????',
    '??????????????????',
    '??????????????????',
    'ITWorld',
    '??????????????????',
    '???????????????',
    '????????????',
    'ITWorld',
    '????????????',
    '???????????????',
];
const techMockData = techImgList.map((item, idx) => ({
    postId: `tech_${idx}`,
    imgUrl: item,
    title: techTitleList[idx],
    author: techAuthorList[idx],
}));
exports.default = techMockData;
//# sourceMappingURL=Techhub.js.map