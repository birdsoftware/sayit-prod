'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4f948f708ec0d97ba32c25155bde41da",
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
".git/index": "f2fa183022a35d6d06b4513f9949c8e5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2796befab3935c92ea2e8f0d59be08ec",
".git/logs/refs/heads/main": "4947f5083fba95cbb37ca7167c955eb6",
".git/logs/refs/heads/master": "575fb701f980a6215660e5386c81f6de",
".git/logs/refs/remotes/origin/HEAD": "754db438d22bbe1aabb181ac1a67845e",
".git/logs/refs/remotes/origin/main": "728471fdb1f31fc1b9cdfad601c4ef8a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/06/3c4161336da92b5a69129c9b55ec73603c2585": "daeeb7ee18b4e6a4a75384121506df7a",
".git/objects/06/8d24806cde02173e8eb5f1625a947b12dd6848": "75fac85b127a233e435b3a3c323f61ff",
".git/objects/07/77384f8ef3621f0b47f92213748ae30cb154c2": "81ea43fde8917c6b8e6e0277518bdcf5",
".git/objects/07/bddd76e5f45a492a87ece33887352d620963c3": "9285ad9a65deed6659ec07bb2da74802",
".git/objects/09/79ff7886c5e34d40b59affd9cd249e2b00e853": "e66a40788f5be02ab4171a99f6413ca5",
".git/objects/0a/1046ff4bd122d10b46a182e427f632fb5c086d": "6257e9b47aab18bda01da159c9ef56db",
".git/objects/0a/7e966872f22f86a7997f02cbb6702462041a13": "3420ba31e5e64000a67a9d5e6fc758c7",
".git/objects/0a/a178ab028c80d34ef120f63752d7eb95c4053d": "604350873b5e62b0d53433f0d3255b33",
".git/objects/0b/6afadc5aa94f90048be584706408ee398459f0": "b4c201994ba52fd1076f4e2c452eb335",
".git/objects/0d/cc23521ba41c4c3d342a2a143659dc3784950a": "7f7e3ef52e3c3d8dcb46347a363820b8",
".git/objects/0f/283afadc717df2f4a9c2e6b418066b606ffb82": "a57d952db915b39f401ead11cf790649",
".git/objects/17/860bdceef38cd1f632d3dd20be694956a41e4e": "f57adb32dc4297bc82a7956441d9f4c7",
".git/objects/18/c900e66332b6250fd30927a71a614e88912873": "c2a5d6e066eec352f77d350e466609d0",
".git/objects/18/dc0646014bf78d7671bec9b6dad79204e5de52": "aaa46090d1c97f2ccbbd5ed04df4a1e4",
".git/objects/19/3aff8ce1f69e17ed85ebf822c1b098fbb1ebb7": "bd237ee23df2e3eada586d4cd483246f",
".git/objects/1a/af04e837026d3829157aa0940d1e380832fa41": "63dea828811f20f6b15f9bbc44f81a2e",
".git/objects/1a/d9b3e7f856a37607348087254dc6162d8b5719": "4afb6c772aa4d93dfdf1284661b7cee6",
".git/objects/1b/19564605a15470789657a367a78b5e6f6eaceb": "06004f109c921d09be987bb0d289a288",
".git/objects/1d/2c9f74939712fa586925f56ccc08c715a58615": "518e905f9023129841e40ea30503f862",
".git/objects/1e/14e1e5de13000c43f917ac1de597bf8cc5c067": "b36222b42bf843c5179a8378259997c1",
".git/objects/1e/eab48b627b7c7242bd03aedc8522ba1fb596de": "64836566c506b5a937ea423bb5c3d569",
".git/objects/1f/03c515b55b6e8bced6b6c055816480f43df5a7": "49092cb5d2e31ed3c7487ae1330bd2e9",
".git/objects/1f/1f4259aae70dfbca29fd8248f66eeb4a4fd7ba": "88deaabf288d4b3eb52b1a46c197faf8",
".git/objects/26/7ba91a981e22e64c94abf86010afff38ce8a71": "d3f5bbd1edc528ee6c8cb88c5e95d56e",
".git/objects/26/ca174c3231b94cc84a14a2fef5085ad51ab13c": "1e827f9eb3c34829ec88ef68f2a22abf",
".git/objects/28/c49d6610fee7c7c784787e66201de88a18f456": "e83b9d690a01ade757fe8f8835674d81",
".git/objects/2c/5586893e1862c05ade893489177cb5aa09ab6a": "4dfb367d28f8219d7c4fa25aec9e811b",
".git/objects/2e/06c4ba5ec5744e2c6547a544655de02b69df39": "65167fa2dfd43d48508a46b8bc771b3c",
".git/objects/2e/b7799971799944431f5f9ef4fd550b590d45bf": "72501d26721b800f66a944c05d04fce0",
".git/objects/32/5d9a766935220c2cd64396f4dd3acc527e61ac": "10d7d102fcdabdb27ba5db08d15d9ee0",
".git/objects/33/152156b77b0b87ebe808bbd8f701605101bbcb": "1b26ceba9c939279ff22d7a52631549f",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/8b954664514d9a8787fe40659a1c6cd6965862": "448939e6857c31a953f137c222e88107",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/5f75d71f376d4f9affdda0a66ec40c4f89ea54": "356947ebe0493de3198288078288312c",
".git/objects/38/824abfeb53debb6df328416c3ba7ae6bbfabd9": "00562bef9a45243fe9fee0049c3652a9",
".git/objects/38/ae68c5f923f3c4801945696df87ec509ca5492": "8e22fd1100dbc5c1d76d02e9cf1bbeb0",
".git/objects/39/9da6ca87803d676dad274c33f678566f2d381f": "b2975bc2b8b04ddaa1869d5d9153df5d",
".git/objects/3a/12eb4178c2bbbb963ec41a195b80fc74b7e6a3": "1e4a83818bc6349b917fcb81fdc50ea9",
".git/objects/3a/ff4a5c429d6cf2d80fd8c8318ae45f87402b4f": "39240b65235b0e016eb98fe1ee6e4078",
".git/objects/3b/85f74a368409eb73e7e4d3abbcc553b1edaa2b": "e93f324f512212ab5c162a2db383b22b",
".git/objects/3d/1133095e34a7fc874753e8ed2240ed81854192": "b8c208090a3eb8e2ce68d95da40d5759",
".git/objects/3d/c9c8af687aa405768e105c7605cb14875c06d7": "40c0699e089996fed26818bc1a0a5eef",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/47b95f5ddfa0a124ca588abd84cdc713066d41": "f86e78705142f10d8c3c66d49a49d3da",
".git/objects/40/576e2267b9d362b9306c302b1fc9f7ab93334c": "03fea92988bead6c73fce68d344be5ea",
".git/objects/42/1cee5c4ba7ff9386fd52234ff09cce10b3b268": "d806bf3e5f23727d84c7055c48b56bdb",
".git/objects/45/6258abf0cb3826e7226cf44e9578ebb6982698": "453cc7aecef7cc32a4ab7496aced6cf8",
".git/objects/47/d22a71057e3f7a343e5a9644d033f82699a53e": "44d0221e366c30637ba9c8ce98754d4d",
".git/objects/48/6c99870959c491fbaa64ea7d884c2fcd735b03": "2b7e2eb0347e30b813b6486c5ca6537a",
".git/objects/4a/22017adaec4277b086e09f5a6d84463a04b70f": "5282c0fe45461bd6c1cc15dfb30d2e4d",
".git/objects/4b/99397886fd6eefe30b007043938e53f14be1b2": "4fc23a94d4432b884295c5338bcbc3da",
".git/objects/4c/b9d4608627a128153e66548fabc860629f18a5": "c0df35ab736855e85f01152093aaa658",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/4d07bd0a08c52f12356cec548e39cee71a09eb": "bfc66bd0e745452931ee44166b66c5af",
".git/objects/4f/5c9de0cf6c68224a7b1d88ef3df8bebf4eaccb": "6f9e97030332180d81cac513e4a94a82",
".git/objects/52/13340a3ca057ebb672fb552ee29db86775792b": "7af5816d038507ffe580c8f7f268464c",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5c/6037dffd9050db8213852e2b4ae07bfd54bf81": "96e265842acf38479e4377628f9a6a81",
".git/objects/5d/a4492ea16c943afde83b3b2321b73c84f886e7": "a782e8a060bd28dff7161a6d3bb2f471",
".git/objects/5e/7788d09be5bcca15be7285acc5660f0fffb294": "8dcb2a3e778933064a29feffaca6d70b",
".git/objects/5e/8339dc2cd5e6d776f0ca6bd7a9b9fb63b230f2": "751881f6860a5c7fc5e3b6bd34f3ff54",
".git/objects/5e/eadf9815d37a9ca947e13fac25a2abb3a8d498": "e67ccb9e69e80092b62b397f3029d70f",
".git/objects/5f/37d13aa984e9c543363efd14fe33299dd2fa0b": "4533259d1d9bf7aae45a1dd54861a51e",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/61/2a4ce8cbe2ad22d1628e31a30e516c1a0318e7": "d59eb1955366cb6460cba2dbf76d27b9",
".git/objects/63/2cee9126f9397cd736701d5e45e126e7697cc8": "f9919fab898217622dd5591007635de8",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/67/c49dda96e0bb6f0d26e692b4181698681cf1f0": "16a9177076bda5b8d8baddd86ba5f7a7",
".git/objects/68/f87166a72626cebb8574f80baeb56bd2703858": "b854c1dd3f68394165e5d8f7baa812fe",
".git/objects/69/115311f91c9d33e8773c302e3874fb84554c09": "4fba041035c798bd90b1028c9ea2d47b",
".git/objects/6a/357d55d9532e81b85134b30c3e7c447cd392c6": "ca8626be1a2d6f8a087a586c1ca61416",
".git/objects/6d/614c45139172a79e284a290f8a4f9b09321885": "e9a092f99941dbc2176dd7f9b559acc8",
".git/objects/6d/ba39e44f5a5b32e71f0ad4fdd4e0a0e9b229f7": "85671b7b53faad01df5d037bbcf1cf46",
".git/objects/6d/d03c709d4d6491d60778837ab3bd354330e906": "b59e375e50d88f0b5622bdc30cabfb72",
".git/objects/6e/0ae9337f83d041d7c2b6002706e340026201c2": "1f868638bb62c682a2d745ea467057be",
".git/objects/6e/bfb9fbb91280f3de269314cd8e8c233c497749": "54503279244ec72b804d7ae1954620af",
".git/objects/6f/6529b9f42a259e8696d10e39ad018498b5c96d": "3e1bfba78848c9830f66680182f23d5c",
".git/objects/71/3f788bd8241ee64c5bf40eb48f9083cc030a07": "247d5f0f052c383c1121ea2ac23d2387",
".git/objects/72/6bea4a575d638fd1325da76112d9f9b4ca1f8e": "40c7cbd9279df7e8f8e12a92775ac460",
".git/objects/72/7c2973f453929a72196a0d4723253095fe7ef9": "49d27cc14a3d93d2dc1fb7152da76cba",
".git/objects/73/4e1760b272224d73480e8fffd1b6d7a106bf64": "2a468eb94cb332c379fa9499a586778f",
".git/objects/73/cb419f5f8da681a73b5d347846de492c956c3f": "6becb6eab8c98d9053281826911d98d5",
".git/objects/75/bb2e87827e54805200e1d087e5c3aa760a206b": "5ed1d7ea800024bcb412fbf4feeeb65b",
".git/objects/77/3d497c1f950ac7b5562278267ac762509f29ec": "73e00da6049571c0e02daaae66e94bbf",
".git/objects/78/9d81d39170d0bd802d6fcdf07bd6702857e07d": "86a9cc3487753403b1330108b16b73bd",
".git/objects/7c/6abed2e4576228121e86934f7695cbbf12eb48": "d2e83dbbed20dfe315029092b82a2a0e",
".git/objects/7c/72c21c2302b156791195ff2b1ca4a50222c21c": "bcbcb8f8c41555f89e7791dd550265e3",
".git/objects/81/064bb035861e7be29fdb888350c0142dff9b46": "9ccfce87c642418cf1adc7b5604c0806",
".git/objects/83/a72976e0b6f818a989a26a2ed6423208045774": "7ed4d71c31720b4dfbbb479a5716bfe1",
".git/objects/85/ef1fd5a149db3c44c3ff6b9da4af3d10912ba9": "c620355ccfeafe18e09751547591cb31",
".git/objects/86/39ef309dc1b69fcf60895a880b0670890ce3c4": "2ae7a554342ff675031cfad19c439c3b",
".git/objects/86/b0668ae80c064880f54938978300837f99a2aa": "9b5ecad54fc36440ea62c1fb32c29a3c",
".git/objects/87/b4c75bc1d02a0fc7b70c480ab97456d0736f12": "132c5ae1bd7a61d1ed37b276c28fd701",
".git/objects/88/0d19660e481967420b14cfff794a4a7faefaba": "5667c7381703a702ce68d7607a2464a8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/09694e0c43ab24b766c1a3ae19fd5b81d00a30": "b489c70f640d451cf98ad27c76dc5e64",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/9026691d1dca6165e448800a32e93b5a9dbecc": "40b8b42623b7441c826bb26ea29d3820",
".git/objects/8b/6f3674df72935439349c6d70947d56025c641c": "220fd981d75c4d6750ed6323e6b03d76",
".git/objects/8b/d52a86d6ca587e985e243e943ff6be1cb73225": "f9a6cfc73f311a9fc10960499ad15a0f",
".git/objects/8c/082c8de090865264d37594e396c4d6c0099fe4": "5117224fcb2873172ee6cba59c00a7ee",
".git/objects/8c/a8e73004450ff9329bff45658d748b5a440d50": "7625cb6a249ed868322c6ec0ec84c5b2",
".git/objects/8d/db8c63334d91660ec94ffeebd98e336632e71c": "545fef3622f95d4c89d3a7a80a2fb525",
".git/objects/8e/244535358049664ec88bcbed7532cd7b647c77": "5d1661083ca2da4c3a7823e08f3854b4",
".git/objects/8e/58b65b376dad04290940d5bbda936c1567020e": "9b8486170af6c0b620422e5f0849d804",
".git/objects/90/214600b9b0a254a95f68d8bd8595e59859d96e": "8e794cf80ad0ddc8209e5aad59c58c9d",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/53e05542c9a291f8734edb1cc41be71a07d473": "28ed0cf5324f220ac577e3744ffe8169",
".git/objects/91/92b2e7219d37a5d0466cd4618f495aa7800ba5": "2cbea07a03220ff7bbd2ffb4965b2c01",
".git/objects/92/f4fc31c7a8de10533b141e45c1b0d29c4ecb93": "debe42aaa8eb3ed322ff6b5d41c31ee1",
".git/objects/94/570e25439f8e52d6f6d7461626ba6f9046d9be": "b3391ba179ccb6a48fdc990c04ff9aff",
".git/objects/95/cfb8fbcda8552f3ec3295b8ec394bf31a70661": "a445db053a955dfb3e3e28d797484c29",
".git/objects/99/35e30921279ab2714940c367feae3d4ac2f3b3": "38dc207293e2afd5f47c8e6a108c3bf5",
".git/objects/99/f8bfbbb4760d046f5eb34725cfb79ebb64fc06": "810f1589bb4b0160ae221536ccff7f9f",
".git/objects/9a/8dfc51ad48e809e11b7952ea5ac87eef14cef4": "6956e84ecbc89e93b80e7d51f25e2b73",
".git/objects/9b/2938c024c7bc954896d66f6c3bf531f0f656b1": "ecdc4fdc614da7a9333b5d91b017fa6a",
".git/objects/9e/5b37a1d2f925c38c775918fe1828e3910380e6": "f972f03e2761d6c14bd7f949fc97ee07",
".git/objects/a0/095449151952735861ebb569d3917ed18c755c": "ec1a32466182cbc49a98bf9270483ede",
".git/objects/a1/0e0fc219b6a80f095b8c0b5bb13702d7830465": "8ebe882c63e607e65a647854ea2d492a",
".git/objects/a3/410d1d51a077ac3f76b951c2cf3a302a793525": "fe427f7ed1c281602647f66af72484ad",
".git/objects/a5/6f8eeac84586023e198a9bbc6eff830dad0f7a": "4a024022a50da61f69d13e4599c1163f",
".git/objects/a5/b7adf73726d52db7e70b1147a9f208f0f7d709": "864e9ffbbfab55210404da485a565ca2",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/3632cf91dcab5659a912f051848d38f5cc5cd5": "93e0d0f6800b473fffaf6398d56b60c4",
".git/objects/a9/ed3dce1a51c9db4b33af0233c8fd4110dc7cee": "0847f432a1cd2879f0e0faaecb8e7a40",
".git/objects/aa/59284e0c5690eb46f93d95932fc4a4ea5516e9": "580393a97f97897980ad9299f86661d6",
".git/objects/aa/78af72592d67c62f8f9a58cb8cbc538d37084e": "5d9339051027f83be931a08da130bedb",
".git/objects/ac/e1d0a2391ca19b2147438c2a37b4d921fa4578": "37355423ddda45144c3f111c3df7c375",
".git/objects/ad/28aa5a61e15a098f6470550a3afe9a6fdd0dc2": "67019aa5a74ad842ac9c90fe932d313a",
".git/objects/ad/37e2c2c9d586095623ec6b10e8eccbeb6e36d3": "b88a51a355cc925a9bdc18509ccf1ba3",
".git/objects/af/ee4d627677d6aa8c45a1a5e2b40d7d755d32b1": "62cf43fdf76a1c94041608feda70777f",
".git/objects/b0/c2e6f786371cb7317dceca603b6b6b31757ee1": "9b97f5d7a568b541cd1773f13020d441",
".git/objects/b2/c874e435aa2e9c8b2908ae9c71c357bd7a2be3": "3d8c85fe17649ed1e89e0e8a20aa2fa1",
".git/objects/b5/dee19dab52dde1b281064275a9388407c8f5f4": "d366408f30925ee8f418f3be5bf8af26",
".git/objects/b5/fa02631ef32918d88179fc5d119e2aafaa4d5e": "6124a6ba5e0bdb8f08de6e22f72c6edb",
".git/objects/b7/31a883008ac27247ce7f56baa6d36154c777c6": "441716826c448a3531736526979e0d90",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/6d16b091b3dccee6bd44e3357e773cbcd11b2c": "6ded783078822737e71e3405e17e1096",
".git/objects/b7/8df14597ef357aa59e12f716de2a9386a9d7a0": "bb55d287faef4280f324d26561d29093",
".git/objects/b8/891c00afe0607765d7950959299ce8b55468ca": "463db29ffb2f009fcdcec5925ddb89c9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/e987afcb1fddc0f1bd3a14563a979ae642a37b": "70dfd25b861ee1672e724cc4c032f2ce",
".git/objects/bd/049b603b8345eb5df54b53f9401306fcae35d3": "9695d4f83ab58576f34f503760af6d34",
".git/objects/bd/d19f357468325f2e2d51de6cb95ad618d78ad7": "f159cb1a2bfb4e0427a766f08ede53c6",
".git/objects/be/0e5bac6bf5f22ab5e7c7596a2c6dfb1e5d5651": "5b44363119fd1f0afc11dced6bfdcce4",
".git/objects/bf/68a198d5f71a060fbc5567d0a10935456c8d75": "96d56f3fa142c5d2fa52841ea229cf8b",
".git/objects/c0/fd2d4bb9499086d1a578e9bf951ad67e2365d6": "f22e5d4bf557f1c5d6c4a58662f171c2",
".git/objects/c1/2d64a99fa19f1db3f73fb0d50621ce67d8f2fc": "b42277e8b080c4cb7bc1b58dc4e1445e",
".git/objects/c2/1b4c3ff7e14343bb5cbdb9f2ab0353e8e5e0c0": "f3988e1efad3b51ca1fcd48fda228927",
".git/objects/c3/15ca90bce60578a4fa74760fb4281b69cbf79b": "78eaa97a98ac6eae1853f14418925075",
".git/objects/c3/965c3b2a61c9b0a25eb25f41a9d4da4db973e5": "a04cf55cc5bfbd376a0a482705728ac2",
".git/objects/c5/68a1a3b13fb90d4cbd9c40b09a96fc7758683c": "a946895b464217711d19df6636e38443",
".git/objects/c8/2dca75d45063a31b5d621f4a948142bdf64970": "96f13101d44de1de3f2b0f84e5d9b590",
".git/objects/ca/2eedb3516791bd4ab656e528301967ed91834d": "e680f527bf1807d3a2d3a38342a3a4cd",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/ce/039ce2d749d048876fb3a5c9a6be457652f582": "dc26d8fa2b9f9de8b695287584f6bc83",
".git/objects/ce/092da024eaf24cd47b5ae214b2bdb0b3b706c4": "1a8c871d1cd2cdca8c6975e587c61973",
".git/objects/cf/865bdd9a1c5fa018131461df4d3ded8dbe38a7": "97999b4af17047c3ece4364a6792de1b",
".git/objects/d2/ab64c0ceb8afce4706c2afb84bb4e002e6929d": "0878639f03e35a9c019dd3ad4268bbf9",
".git/objects/d3/3dcb4cc0cb90b002677e5be838cc26aec6486e": "2a2c51c4db3e7b893bb8c7cfb89dff43",
".git/objects/d3/64d04dd8f82447a742dc49dd10ae1c05546293": "f63955d53f6b5a3bd25339b1d79a9541",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/4e36b7afadc7dc29b1d48a7eded3807ce65a37": "f3d11c550744eb29107d0fa49d7d5db5",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/25f10fa13d0f33fa8cb923f03894bd7fa7df4f": "8c92b555187811d57397a04e21262db5",
".git/objects/db/5605772153930ac4b8862541e3bbc1a9726064": "c8e9adc11e0de89e975ff700e86dd211",
".git/objects/db/6f25fc423520462a791fddedd33ad5f4eb3df4": "e527bab1d192dce7493e167ed58c760b",
".git/objects/dc/96513958eab5f8e492d43bf5c5b09274f66a05": "827df87f09235aaeacb81afbbd608bab",
".git/objects/df/b6ea60d81f8fc684b24be59a198d4d19703849": "8c7b87ee8c70bdbc55ba52e8c69c6eb5",
".git/objects/e0/9c7c8c4e3871931972a3d90602b96124675101": "ce6a9bee0e4bdc94fa8016551dc4a791",
".git/objects/e1/6bcbe11ec3dc54605758a5561d66df7e7c2353": "bdac123b7447c923466a83628c9d0bd0",
".git/objects/e2/230ecaba69273a4a80ac8e2d957a0846d10e54": "e597de58158a3ec0f0780675bedbbabc",
".git/objects/e7/3ed1f8017c29395cf45e401539e80f18b1a52d": "6b3655c0f95feb4a328a6c3a4a9978c4",
".git/objects/ea/6eed4204a89715d2b0666e7aacd0b75445be2f": "1c425aafa8c23529b3ac3383a0c066e0",
".git/objects/eb/01273cddc2332c9bd55b313e40407f2b42bbe3": "bda12ea2ff8c85963374501a9871f0f3",
".git/objects/eb/02d038c457a1bfeb73bde7e5eb69208e793577": "3e366ae934719e37c17aba6b8102c4e9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/b7a0a0d00cf321899e75b4ab5265a9ee743cfc": "571f1b1fcca3f06de7472c15f2219da2",
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
".git/refs/heads/main": "764346d13089a349a3c49e5881ed1188",
".git/refs/heads/master": "ef519004b40dcc8466f4be631d640be6",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "764346d13089a349a3c49e5881ed1188",
"assets/AssetManifest.bin": "61a52db9ee9d6ec57526ef65a292fba4",
"assets/AssetManifest.bin.json": "755b9dae955d36997885e7a305975b44",
"assets/AssetManifest.json": "b4f19bd90a4e47c9d3193781090954a5",
"assets/FontManifest.json": "6f5744f40eb3064f030b4e03a74f67a5",
"assets/fonts/MaterialIcons-Regular.otf": "e33dcd57f38a643a18b88d8a4af57ef2",
"assets/images/bye.png": "b4bed6bf5468c9b054d254602215e18b",
"assets/images/feeling_images/angry.png": "46e4fd9d874719cc999d220edf1dbedc",
"assets/images/feeling_images/bored.png": "ab49720fc1907d9f5617851dabf3783c",
"assets/images/feeling_images/cold.png": "a2307b5f3d87f5b9c64372ad5f863464",
"assets/images/feeling_images/confused.png": "14d89b9b34b875530605f8c755bb2cf4",
"assets/images/feeling_images/excited.png": "ecd819aa171630c67862a2a6bba60cbf",
"assets/images/feeling_images/fine.png": "cdd20efc946decd728b98e842d6412bd",
"assets/images/feeling_images/frustrated.png": "b6b4d4a12c260d25e00c5af0f1fdaeff",
"assets/images/feeling_images/happy.png": "3b7118c93a9b2d32bd9c80914094c2c4",
"assets/images/feeling_images/hot.png": "3f0782737a4dfd29e453aaa52dbf765d",
"assets/images/feeling_images/lonely.png": "4cf48ef1e2aaa4b7eb03249dad1086fd",
"assets/images/feeling_images/nervous.png": "ee57452542279e06805e47ca4575f1e4",
"assets/images/feeling_images/proud.png": "2590daa19c8a15301d09ce9a50386fa4",
"assets/images/feeling_images/sad.png": "bd97dfb623634a9229df68134ed62fa7",
"assets/images/feeling_images/scared.png": "76b927e5ccb47b1d008bc0023486f583",
"assets/images/feeling_images/tired.png": "c265b65bc09c56037e7d5b77e51532d0",
"assets/images/hi.png": "bf0ffe6c528a72ccfa92ecd357282ea1",
"assets/images/how_are_you.png": "6b822171ab4dab4b91f5e14cf9e91299",
"assets/images/hungry.png": "79644d7a1366fc4d550c8e2f6576e301",
"assets/images/i_don't_know.png": "1ea399fa7a5c32792361d10146515164",
"assets/images/i_don't_like.png": "dcec324b2adfae1dd30aa9b471a060ec",
"assets/images/i_dont_know.png": "1ea399fa7a5c32792361d10146515164",
"assets/images/I_like_that.png": "da54514623849390a90af2d135e5c1fd",
"assets/images/people_images/auntie.png": "42c5e209764ebf436942b86d41dd6995",
"assets/images/people_images/brother.png": "54c38c2560c79cc83da3f76505e5d895",
"assets/images/people_images/dad.png": "316408bd8a75d6d09bec0baa91cfa605",
"assets/images/people_images/doctor.png": "952f2cdf9b39b55ac20c7de657389f28",
"assets/images/people_images/fireman.png": "fcd63867419dc32e7754cc0aa53a281c",
"assets/images/people_images/friend_playmate.png": "61c1ccdb9230d3b7138cd10473a152e3",
"assets/images/people_images/grandma.png": "e183d6a2f5db2a95126083f8e1a744a8",
"assets/images/people_images/grandpa.png": "b37d33d1b3315027d40307ea5cede060",
"assets/images/people_images/mailman.png": "b2d74895a054b32f00ce63fd8d8fe424",
"assets/images/people_images/mom.png": "fb14e3001f98d5ff498e0f1d910a7ec9",
"assets/images/people_images/nanny.png": "d175f5e3b2a9fe8fbcf1a49359a4fbf9",
"assets/images/people_images/police_officer.png": "f58e76dbd6e3e2bc70719f0fcab33d33",
"assets/images/people_images/sister.png": "6647aa6c777d168d39c426ea05c369c6",
"assets/images/people_images/teacher.png": "42935298162ad9d80f86c798890abc1c",
"assets/images/people_images/uncle.png": "bc3ea5ec23f639496947e20d8d758013",
"assets/images/play.png": "c3e8c8c08cff9a2ae0d350be00f52882",
"assets/images/please.png": "6193d1b46dfec0371279eb55add1ba5e",
"assets/images/restroom.png": "b4daff91a06e5779ec5b37f8046140ae",
"assets/images/sorry.png": "3405f806c519b9d29639ecfb9cefe8b7",
"assets/images/thank_you.png": "84b0564e94c4679034c3ca10ab7d3a5d",
"assets/images/thirsty.png": "0b3a3d6dea0f47adb408ca66f1b5ddaf",
"assets/NOTICES": "dba9b6d49845f5ee3dd334ce8501bde2",
"assets/packages/golden_toolkit/fonts/Roboto-Regular.ttf": "ac3f799d5bbaf5196fab15ab8de8431c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/sounds/bye.mp3": "710763b993cfc4339d83b6d6a1d6665a",
"assets/sounds/feeling_sounds/angry.mp3": "27ac77fae90aa03dfb8c63f199031736",
"assets/sounds/feeling_sounds/bored.mp3": "5e62ba1c19b0b353ac53c645bcea3fc4",
"assets/sounds/feeling_sounds/cold.mp3": "a26f6d47aaf5041b61435d50412b141f",
"assets/sounds/feeling_sounds/confused.mp3": "d263aa70d4ab120dc5aa0993539f8c87",
"assets/sounds/feeling_sounds/excited.mp3": "0a4bb7f7a75a1da07244e3b1053c6c52",
"assets/sounds/feeling_sounds/fine.mp3": "5ac320bf672b295a73c8fa6c2a39148d",
"assets/sounds/feeling_sounds/frustrated.mp3": "3255b64850c6dc5a30354695147f4e6a",
"assets/sounds/feeling_sounds/happy.mp3": "8819aecb74d92d8761b0f43f1cb0a87a",
"assets/sounds/feeling_sounds/hot.mp3": "4d0e07c2adc84e0b5df141ce8662c861",
"assets/sounds/feeling_sounds/lonely.mp3": "5494ae52e29f2afc67d77ca07d22c91c",
"assets/sounds/feeling_sounds/nervous.mp3": "093ca67c045843bb3e948fcb71925987",
"assets/sounds/feeling_sounds/proud.mp3": "e2be67bba8c46ac643004285c759c7ae",
"assets/sounds/feeling_sounds/sad.mp3": "7bb3fff7ab60b94b8542fae0d1a66bbe",
"assets/sounds/feeling_sounds/scared.mp3": "8d3fe2f02176e66b86579895a1398996",
"assets/sounds/feeling_sounds/tired.mp3": "19fe3d052777d3be5ac4fb32b89b86c5",
"assets/sounds/hi.mp3": "2c985e82ca1125bffae2d99cfdd4ccd7",
"assets/sounds/how_are_you.mp3": "08135c840d123e4480c4d7fa99106191",
"assets/sounds/hungry.mp3": "cbc81c0007177bd899ebdf04bbac5d7a",
"assets/sounds/i_don't_know.mp3": "172a2935548e5ee820c530239d0f3e46",
"assets/sounds/i_don't_like.mp3": "bf3f376f5bdbc5b0a5c46124ff1e3706",
"assets/sounds/i_dont_know.png": "1ea399fa7a5c32792361d10146515164",
"assets/sounds/I_like_that.mp3": "7d00765b1083cc1af82976c8a15001ba",
"assets/sounds/people_sounds/auntie.mp3": "89f5898c3cc8efd799ab1b85e582984e",
"assets/sounds/people_sounds/brother.mp3": "6543688505c8ac017ec2ccf489aff9b0",
"assets/sounds/people_sounds/dad.mp3": "dc07bf31654f45e1856e1240b0d321bd",
"assets/sounds/people_sounds/doctor.mp3": "1e43a8ca53c6706846073d27d4add710",
"assets/sounds/people_sounds/fireman.mp3": "7cae153e6aac511239d42962a89d4d39",
"assets/sounds/people_sounds/friend_playmate.mp3": "5e43a7fe7e1210d3afea3ad1d9792a6a",
"assets/sounds/people_sounds/grandma.mp3": "770e01b428a20a372ff6e8512c1071d1",
"assets/sounds/people_sounds/grandpa.mp3": "f9e3683e5a6a50185ea31427877c6d7e",
"assets/sounds/people_sounds/mailman.mp3": "2246c5cbbfbd39c7282e6ab40de04580",
"assets/sounds/people_sounds/mom.mp3": "4b85db3ae88568d78798d120874aa5c7",
"assets/sounds/people_sounds/nanny.mp3": "059070307fb7f0e900f6c02d3d26a35e",
"assets/sounds/people_sounds/police_officer.mp3": "3fd9b23cf6dcd082989cb298f2a4ba75",
"assets/sounds/people_sounds/sister.mp3": "a9b7be92ca0f4589aedc34a99456bec3",
"assets/sounds/people_sounds/teacher.mp3": "512b055ea244c150c3e2eea65f7d2e02",
"assets/sounds/people_sounds/uncle.mp3": "7d93e33c4e7a369cd8a6e9bf542c68d7",
"assets/sounds/play.mp3": "02829959fa472c61e12ed1c083b4076b",
"assets/sounds/please.mp3": "ee25d2f2690748c5614f81a6c903a27f",
"assets/sounds/restroom.mp3": "a259d32ec2600f83b448c7ff2eec855b",
"assets/sounds/sorry.mp3": "0b3e935eb54b862131a028d6298bc4e1",
"assets/sounds/thank_you.mp3": "e1fea654d9695ebbd24f92972eb4b3e9",
"assets/sounds/thirsty.mp3": "4f688bafce5159a8a53e670130a72bf1",
"assets/web/assets/images/bye.png": "b4bed6bf5468c9b054d254602215e18b",
"assets/web/assets/images/feeling_images/angry.png": "46e4fd9d874719cc999d220edf1dbedc",
"assets/web/assets/images/feeling_images/bored.png": "ab49720fc1907d9f5617851dabf3783c",
"assets/web/assets/images/feeling_images/cold.png": "a2307b5f3d87f5b9c64372ad5f863464",
"assets/web/assets/images/feeling_images/confused.png": "14d89b9b34b875530605f8c755bb2cf4",
"assets/web/assets/images/feeling_images/excited.png": "ecd819aa171630c67862a2a6bba60cbf",
"assets/web/assets/images/feeling_images/fine.png": "cdd20efc946decd728b98e842d6412bd",
"assets/web/assets/images/feeling_images/frustrated.png": "b6b4d4a12c260d25e00c5af0f1fdaeff",
"assets/web/assets/images/feeling_images/happy.png": "3b7118c93a9b2d32bd9c80914094c2c4",
"assets/web/assets/images/feeling_images/hot.png": "3f0782737a4dfd29e453aaa52dbf765d",
"assets/web/assets/images/feeling_images/lonely.png": "4cf48ef1e2aaa4b7eb03249dad1086fd",
"assets/web/assets/images/feeling_images/nervous.png": "ee57452542279e06805e47ca4575f1e4",
"assets/web/assets/images/feeling_images/proud.png": "2590daa19c8a15301d09ce9a50386fa4",
"assets/web/assets/images/feeling_images/sad.png": "bd97dfb623634a9229df68134ed62fa7",
"assets/web/assets/images/feeling_images/scared.png": "76b927e5ccb47b1d008bc0023486f583",
"assets/web/assets/images/feeling_images/tired.png": "c265b65bc09c56037e7d5b77e51532d0",
"assets/web/assets/images/hi.png": "bf0ffe6c528a72ccfa92ecd357282ea1",
"assets/web/assets/images/how_are_you.png": "6b822171ab4dab4b91f5e14cf9e91299",
"assets/web/assets/images/hungry.png": "79644d7a1366fc4d550c8e2f6576e301",
"assets/web/assets/images/i_don't_know.png": "1ea399fa7a5c32792361d10146515164",
"assets/web/assets/images/i_don't_like.png": "dcec324b2adfae1dd30aa9b471a060ec",
"assets/web/assets/images/i_like_that.png": "da54514623849390a90af2d135e5c1fd",
"assets/web/assets/images/people_images/auntie.png": "42c5e209764ebf436942b86d41dd6995",
"assets/web/assets/images/people_images/brother.png": "54c38c2560c79cc83da3f76505e5d895",
"assets/web/assets/images/people_images/dad.png": "316408bd8a75d6d09bec0baa91cfa605",
"assets/web/assets/images/people_images/doctor.png": "952f2cdf9b39b55ac20c7de657389f28",
"assets/web/assets/images/people_images/fireman.png": "fcd63867419dc32e7754cc0aa53a281c",
"assets/web/assets/images/people_images/friend_playmate.png": "61c1ccdb9230d3b7138cd10473a152e3",
"assets/web/assets/images/people_images/grandma.png": "e183d6a2f5db2a95126083f8e1a744a8",
"assets/web/assets/images/people_images/grandpa.png": "b37d33d1b3315027d40307ea5cede060",
"assets/web/assets/images/people_images/mailman.png": "b2d74895a054b32f00ce63fd8d8fe424",
"assets/web/assets/images/people_images/mom.png": "fb14e3001f98d5ff498e0f1d910a7ec9",
"assets/web/assets/images/people_images/nanny.png": "d175f5e3b2a9fe8fbcf1a49359a4fbf9",
"assets/web/assets/images/people_images/police_officer.png": "f58e76dbd6e3e2bc70719f0fcab33d33",
"assets/web/assets/images/people_images/sister.png": "6647aa6c777d168d39c426ea05c369c6",
"assets/web/assets/images/people_images/teacher.png": "42935298162ad9d80f86c798890abc1c",
"assets/web/assets/images/people_images/uncle.png": "bc3ea5ec23f639496947e20d8d758013",
"assets/web/assets/images/play.png": "c3e8c8c08cff9a2ae0d350be00f52882",
"assets/web/assets/images/please.png": "6193d1b46dfec0371279eb55add1ba5e",
"assets/web/assets/images/restroom.png": "b4daff91a06e5779ec5b37f8046140ae",
"assets/web/assets/images/sorry.png": "3405f806c519b9d29639ecfb9cefe8b7",
"assets/web/assets/images/thank_you.png": "84b0564e94c4679034c3ca10ab7d3a5d",
"assets/web/assets/images/thirsty.png": "0b3a3d6dea0f47adb408ca66f1b5ddaf",
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
"flutter_bootstrap.js": "674eeb2af8b9108fe850f55891deb833",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7e109e2faf204ac48577112524b0d172",
"/": "7e109e2faf204ac48577112524b0d172",
"main-icon.png": "7d8f20abe2888e12ea2d705063305ea2",
"main.dart.js": "dda2c8b26625a18827428b727d86e527",
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
