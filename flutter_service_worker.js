'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "74a6f411009f658b2da164159aa75335",
".git/config": "fe450e61269a12b40a1c84ef326eaf50",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8d0dac67e5cfead0fdceb108c898abde",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e7d369da26ddcbf3f696fa1e7522f0be",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a29ef524b4ba1c6af6dbd0507eb51410",
".git/logs/refs/heads/main": "d6db458c5d45142071f255e6889dc6bf",
".git/logs/refs/heads/master": "575fb701f980a6215660e5386c81f6de",
".git/logs/refs/remotes/origin/HEAD": "754db438d22bbe1aabb181ac1a67845e",
".git/logs/refs/remotes/origin/main": "ea6434207ee9cbc37c0c430bef159671",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/09/79ff7886c5e34d40b59affd9cd249e2b00e853": "e66a40788f5be02ab4171a99f6413ca5",
".git/objects/0a/1046ff4bd122d10b46a182e427f632fb5c086d": "6257e9b47aab18bda01da159c9ef56db",
".git/objects/0a/7e966872f22f86a7997f02cbb6702462041a13": "3420ba31e5e64000a67a9d5e6fc758c7",
".git/objects/0d/cc23521ba41c4c3d342a2a143659dc3784950a": "7f7e3ef52e3c3d8dcb46347a363820b8",
".git/objects/0f/283afadc717df2f4a9c2e6b418066b606ffb82": "a57d952db915b39f401ead11cf790649",
".git/objects/17/860bdceef38cd1f632d3dd20be694956a41e4e": "f57adb32dc4297bc82a7956441d9f4c7",
".git/objects/1b/19564605a15470789657a367a78b5e6f6eaceb": "06004f109c921d09be987bb0d289a288",
".git/objects/1d/2c9f74939712fa586925f56ccc08c715a58615": "518e905f9023129841e40ea30503f862",
".git/objects/1e/eab48b627b7c7242bd03aedc8522ba1fb596de": "64836566c506b5a937ea423bb5c3d569",
".git/objects/1f/1f4259aae70dfbca29fd8248f66eeb4a4fd7ba": "88deaabf288d4b3eb52b1a46c197faf8",
".git/objects/26/7ba91a981e22e64c94abf86010afff38ce8a71": "d3f5bbd1edc528ee6c8cb88c5e95d56e",
".git/objects/28/c49d6610fee7c7c784787e66201de88a18f456": "e83b9d690a01ade757fe8f8835674d81",
".git/objects/2c/5586893e1862c05ade893489177cb5aa09ab6a": "4dfb367d28f8219d7c4fa25aec9e811b",
".git/objects/33/152156b77b0b87ebe808bbd8f701605101bbcb": "1b26ceba9c939279ff22d7a52631549f",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/8b954664514d9a8787fe40659a1c6cd6965862": "448939e6857c31a953f137c222e88107",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/5f75d71f376d4f9affdda0a66ec40c4f89ea54": "356947ebe0493de3198288078288312c",
".git/objects/38/ae68c5f923f3c4801945696df87ec509ca5492": "8e22fd1100dbc5c1d76d02e9cf1bbeb0",
".git/objects/3a/ff4a5c429d6cf2d80fd8c8318ae45f87402b4f": "39240b65235b0e016eb98fe1ee6e4078",
".git/objects/3b/85f74a368409eb73e7e4d3abbcc553b1edaa2b": "e93f324f512212ab5c162a2db383b22b",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/45/6258abf0cb3826e7226cf44e9578ebb6982698": "453cc7aecef7cc32a4ab7496aced6cf8",
".git/objects/47/d22a71057e3f7a343e5a9644d033f82699a53e": "44d0221e366c30637ba9c8ce98754d4d",
".git/objects/48/6c99870959c491fbaa64ea7d884c2fcd735b03": "2b7e2eb0347e30b813b6486c5ca6537a",
".git/objects/4b/99397886fd6eefe30b007043938e53f14be1b2": "4fc23a94d4432b884295c5338bcbc3da",
".git/objects/4c/b9d4608627a128153e66548fabc860629f18a5": "c0df35ab736855e85f01152093aaa658",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/4d07bd0a08c52f12356cec548e39cee71a09eb": "bfc66bd0e745452931ee44166b66c5af",
".git/objects/52/13340a3ca057ebb672fb552ee29db86775792b": "7af5816d038507ffe580c8f7f268464c",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5c/6037dffd9050db8213852e2b4ae07bfd54bf81": "96e265842acf38479e4377628f9a6a81",
".git/objects/5d/a4492ea16c943afde83b3b2321b73c84f886e7": "a782e8a060bd28dff7161a6d3bb2f471",
".git/objects/5e/8339dc2cd5e6d776f0ca6bd7a9b9fb63b230f2": "751881f6860a5c7fc5e3b6bd34f3ff54",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/63/2cee9126f9397cd736701d5e45e126e7697cc8": "f9919fab898217622dd5591007635de8",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/67/c49dda96e0bb6f0d26e692b4181698681cf1f0": "16a9177076bda5b8d8baddd86ba5f7a7",
".git/objects/69/115311f91c9d33e8773c302e3874fb84554c09": "4fba041035c798bd90b1028c9ea2d47b",
".git/objects/6f/6529b9f42a259e8696d10e39ad018498b5c96d": "3e1bfba78848c9830f66680182f23d5c",
".git/objects/71/3f788bd8241ee64c5bf40eb48f9083cc030a07": "247d5f0f052c383c1121ea2ac23d2387",
".git/objects/72/6bea4a575d638fd1325da76112d9f9b4ca1f8e": "40c7cbd9279df7e8f8e12a92775ac460",
".git/objects/73/4e1760b272224d73480e8fffd1b6d7a106bf64": "2a468eb94cb332c379fa9499a586778f",
".git/objects/77/3d497c1f950ac7b5562278267ac762509f29ec": "73e00da6049571c0e02daaae66e94bbf",
".git/objects/78/9d81d39170d0bd802d6fcdf07bd6702857e07d": "86a9cc3487753403b1330108b16b73bd",
".git/objects/7c/6abed2e4576228121e86934f7695cbbf12eb48": "d2e83dbbed20dfe315029092b82a2a0e",
".git/objects/86/39ef309dc1b69fcf60895a880b0670890ce3c4": "2ae7a554342ff675031cfad19c439c3b",
".git/objects/86/b0668ae80c064880f54938978300837f99a2aa": "9b5ecad54fc36440ea62c1fb32c29a3c",
".git/objects/88/0d19660e481967420b14cfff794a4a7faefaba": "5667c7381703a702ce68d7607a2464a8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/09694e0c43ab24b766c1a3ae19fd5b81d00a30": "b489c70f640d451cf98ad27c76dc5e64",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8c/082c8de090865264d37594e396c4d6c0099fe4": "5117224fcb2873172ee6cba59c00a7ee",
".git/objects/8c/a8e73004450ff9329bff45658d748b5a440d50": "7625cb6a249ed868322c6ec0ec84c5b2",
".git/objects/8d/db8c63334d91660ec94ffeebd98e336632e71c": "545fef3622f95d4c89d3a7a80a2fb525",
".git/objects/8e/58b65b376dad04290940d5bbda936c1567020e": "9b8486170af6c0b620422e5f0849d804",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/92b2e7219d37a5d0466cd4618f495aa7800ba5": "2cbea07a03220ff7bbd2ffb4965b2c01",
".git/objects/95/cfb8fbcda8552f3ec3295b8ec394bf31a70661": "a445db053a955dfb3e3e28d797484c29",
".git/objects/99/f8bfbbb4760d046f5eb34725cfb79ebb64fc06": "810f1589bb4b0160ae221536ccff7f9f",
".git/objects/9a/8dfc51ad48e809e11b7952ea5ac87eef14cef4": "6956e84ecbc89e93b80e7d51f25e2b73",
".git/objects/9b/2938c024c7bc954896d66f6c3bf531f0f656b1": "ecdc4fdc614da7a9333b5d91b017fa6a",
".git/objects/a0/095449151952735861ebb569d3917ed18c755c": "ec1a32466182cbc49a98bf9270483ede",
".git/objects/a5/6f8eeac84586023e198a9bbc6eff830dad0f7a": "4a024022a50da61f69d13e4599c1163f",
".git/objects/a5/b7adf73726d52db7e70b1147a9f208f0f7d709": "864e9ffbbfab55210404da485a565ca2",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ad/28aa5a61e15a098f6470550a3afe9a6fdd0dc2": "67019aa5a74ad842ac9c90fe932d313a",
".git/objects/ad/37e2c2c9d586095623ec6b10e8eccbeb6e36d3": "b88a51a355cc925a9bdc18509ccf1ba3",
".git/objects/af/ee4d627677d6aa8c45a1a5e2b40d7d755d32b1": "62cf43fdf76a1c94041608feda70777f",
".git/objects/b2/c874e435aa2e9c8b2908ae9c71c357bd7a2be3": "3d8c85fe17649ed1e89e0e8a20aa2fa1",
".git/objects/b7/31a883008ac27247ce7f56baa6d36154c777c6": "441716826c448a3531736526979e0d90",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/d19f357468325f2e2d51de6cb95ad618d78ad7": "f159cb1a2bfb4e0427a766f08ede53c6",
".git/objects/be/0e5bac6bf5f22ab5e7c7596a2c6dfb1e5d5651": "5b44363119fd1f0afc11dced6bfdcce4",
".git/objects/bf/68a198d5f71a060fbc5567d0a10935456c8d75": "96d56f3fa142c5d2fa52841ea229cf8b",
".git/objects/c0/fd2d4bb9499086d1a578e9bf951ad67e2365d6": "f22e5d4bf557f1c5d6c4a58662f171c2",
".git/objects/c2/1b4c3ff7e14343bb5cbdb9f2ab0353e8e5e0c0": "f3988e1efad3b51ca1fcd48fda228927",
".git/objects/c3/965c3b2a61c9b0a25eb25f41a9d4da4db973e5": "a04cf55cc5bfbd376a0a482705728ac2",
".git/objects/c5/68a1a3b13fb90d4cbd9c40b09a96fc7758683c": "a946895b464217711d19df6636e38443",
".git/objects/c8/2dca75d45063a31b5d621f4a948142bdf64970": "96f13101d44de1de3f2b0f84e5d9b590",
".git/objects/ca/2eedb3516791bd4ab656e528301967ed91834d": "e680f527bf1807d3a2d3a38342a3a4cd",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/ce/092da024eaf24cd47b5ae214b2bdb0b3b706c4": "1a8c871d1cd2cdca8c6975e587c61973",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/25f10fa13d0f33fa8cb923f03894bd7fa7df4f": "8c92b555187811d57397a04e21262db5",
".git/objects/db/5605772153930ac4b8862541e3bbc1a9726064": "c8e9adc11e0de89e975ff700e86dd211",
".git/objects/dc/96513958eab5f8e492d43bf5c5b09274f66a05": "827df87f09235aaeacb81afbbd608bab",
".git/objects/df/b6ea60d81f8fc684b24be59a198d4d19703849": "8c7b87ee8c70bdbc55ba52e8c69c6eb5",
".git/objects/e7/3ed1f8017c29395cf45e401539e80f18b1a52d": "6b3655c0f95feb4a328a6c3a4a9978c4",
".git/objects/eb/01273cddc2332c9bd55b313e40407f2b42bbe3": "bda12ea2ff8c85963374501a9871f0f3",
".git/objects/eb/02d038c457a1bfeb73bde7e5eb69208e793577": "3e366ae934719e37c17aba6b8102c4e9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/5a90cc959f577ed80c1b62ed3f6f497c588617": "e8833dff907114cc8bcbf167aa14f8b7",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f6/840dc16d3d2a6302a4796f35baa827703ed816": "ea8baf6cd5bbad212acc5489859e5ca8",
".git/objects/f6/b7503fcde9e09aee2a6ec7ea90b123be0ac6a0": "51e8f32ca96741b4f610fc39d9318ece",
".git/objects/f7/f0d9577f5473cb127ed2ddbeca41bc6321c364": "258783d31fd79e50736ab1e15a0acb7d",
".git/objects/f9/555ec779b0f4fc724de97838e1357bd59d90d3": "05b851f80084a92c31e325585795867f",
".git/objects/f9/b85217ba4740f8fb2d40d7c5e2287fdc5489cf": "3f7f63c996c35ecbc63bb0f276934402",
".git/objects/fe/e96067b634ab4fd0af26f98e1e0bdc88296557": "3ea52efe8bc4bcd554212502ca1ae1d2",
".git/ORIG_HEAD": "d915996b1f68dd1cffbdf30e7174e209",
".git/refs/heads/main": "3e215a6d0f9745dc1cff9b913ce0613e",
".git/refs/heads/master": "ef519004b40dcc8466f4be631d640be6",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "3e215a6d0f9745dc1cff9b913ce0613e",
"assets/AssetManifest.bin": "47077a2b4732fc3cb3a28690756ad355",
"assets/AssetManifest.bin.json": "ada7c197e6cc05eac1d9b7040d61e764",
"assets/AssetManifest.json": "642d8f154c8baa73397de14405c07241",
"assets/FontManifest.json": "6f5744f40eb3064f030b4e03a74f67a5",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/images/bye.png": "b4bed6bf5468c9b054d254602215e18b",
"assets/images/hi.png": "bf0ffe6c528a72ccfa92ecd357282ea1",
"assets/images/hungry.png": "79644d7a1366fc4d550c8e2f6576e301",
"assets/images/i_don't_know.png": "1ea399fa7a5c32792361d10146515164",
"assets/images/i_don't_like.png": "dcec324b2adfae1dd30aa9b471a060ec",
"assets/images/i_dont_know.png": "1ea399fa7a5c32792361d10146515164",
"assets/images/play.png": "c3e8c8c08cff9a2ae0d350be00f52882",
"assets/images/please.png": "6193d1b46dfec0371279eb55add1ba5e",
"assets/images/restroom.png": "b4daff91a06e5779ec5b37f8046140ae",
"assets/images/sorry.png": "3405f806c519b9d29639ecfb9cefe8b7",
"assets/images/thirsty.png": "0b3a3d6dea0f47adb408ca66f1b5ddaf",
"assets/images/tired.png": "32561369d33d6eb849d2a82cfd846710",
"assets/NOTICES": "dba9b6d49845f5ee3dd334ce8501bde2",
"assets/packages/golden_toolkit/fonts/Roboto-Regular.ttf": "ac3f799d5bbaf5196fab15ab8de8431c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/sounds/bye.mp3": "710763b993cfc4339d83b6d6a1d6665a",
"assets/sounds/hi.mp3": "2c985e82ca1125bffae2d99cfdd4ccd7",
"assets/sounds/hungry.mp3": "cbc81c0007177bd899ebdf04bbac5d7a",
"assets/sounds/i_don't_know.mp3": "172a2935548e5ee820c530239d0f3e46",
"assets/sounds/i_don't_like.mp3": "bf3f376f5bdbc5b0a5c46124ff1e3706",
"assets/sounds/i_dont_know.png": "1ea399fa7a5c32792361d10146515164",
"assets/sounds/play.mp3": "02829959fa472c61e12ed1c083b4076b",
"assets/sounds/please.mp3": "ee25d2f2690748c5614f81a6c903a27f",
"assets/sounds/restroom.mp3": "a259d32ec2600f83b448c7ff2eec855b",
"assets/sounds/sorry.mp3": "0b3e935eb54b862131a028d6298bc4e1",
"assets/sounds/thirsty.mp3": "4f688bafce5159a8a53e670130a72bf1",
"assets/sounds/tired.mp3": "ce900f5d15b82eba964e30f5ac002d16",
"assets/web/assets/images/bye.png": "b4bed6bf5468c9b054d254602215e18b",
"assets/web/assets/images/hi.png": "bf0ffe6c528a72ccfa92ecd357282ea1",
"assets/web/assets/images/hungry.png": "79644d7a1366fc4d550c8e2f6576e301",
"assets/web/assets/images/i_don't_know.png": "1ea399fa7a5c32792361d10146515164",
"assets/web/assets/images/i_don't_like.png": "dcec324b2adfae1dd30aa9b471a060ec",
"assets/web/assets/images/play.png": "c3e8c8c08cff9a2ae0d350be00f52882",
"assets/web/assets/images/please.png": "6193d1b46dfec0371279eb55add1ba5e",
"assets/web/assets/images/restroom.png": "b4daff91a06e5779ec5b37f8046140ae",
"assets/web/assets/images/sorry.png": "3405f806c519b9d29639ecfb9cefe8b7",
"assets/web/assets/images/thirsty.png": "0b3a3d6dea0f47adb408ca66f1b5ddaf",
"assets/web/assets/images/tired.png": "32561369d33d6eb849d2a82cfd846710",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "fb0a889d86e7441b640bbd7c1b8526ee",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "99f27291a4b33d1193c4183731aae15b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "41cf87da93aa0c0a1521199ab11026ae",
"/": "41cf87da93aa0c0a1521199ab11026ae",
"main-icon.png": "7d8f20abe2888e12ea2d705063305ea2",
"main.dart.js": "b9febd91439ae8df7e8f6b11a49113ea",
"manifest.json": "bd94090ace5ca74ef14427f7546fe9bb",
"README.md": "38ac46872091317e7c4aa4c35b24085c",
"version.json": "cdd738359c133a1be0f272998ceb6a2f",
"_redirects": "c62c109df475b368db5e075d5e2f0052"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
