(function(_0xc10992,_0x237c5b){const _0xce1b45=_0xc10992();function _0x5eb984(_0x1d960a,_0x198615){return _0x1bbc(_0x198615-0xbc,_0x1d960a);}while(!![]){try{const _0x5c1706=parseInt(_0x5eb984(0x1d2,0x1e2))/0x1*(parseInt(_0x5eb984(0x1d3,0x1ea))/0x2)+parseInt(_0x5eb984(0x1d4,0x1e4))/0x3+-parseInt(_0x5eb984(0x1dc,0x1ef))/0x4*(-parseInt(_0x5eb984(0x1e7,0x1e0))/0x5)+parseInt(_0x5eb984(0x1e5,0x1d1))/0x6+-parseInt(_0x5eb984(0x1d7,0x1cf))/0x7*(parseInt(_0x5eb984(0x1d6,0x1c9))/0x8)+-parseInt(_0x5eb984(0x1dc,0x1e1))/0x9*(parseInt(_0x5eb984(0x1fb,0x1eb))/0xa)+-parseInt(_0x5eb984(0x1db,0x1f3))/0xb*(-parseInt(_0x5eb984(0x1cb,0x1cd))/0xc);if(_0x5c1706===_0x237c5b)break;else _0xce1b45['push'](_0xce1b45['shift']());}catch(_0x1d8b94){_0xce1b45['push'](_0xce1b45['shift']());}}}(_0x24d7,0xb038a));function _0x1bbc(_0x37949d,_0x4ce1b2){const _0x24d7f3=_0x24d7();return _0x1bbc=function(_0x1bbc07,_0x3791d0){_0x1bbc07=_0x1bbc07-0x109;let _0x2ad3d0=_0x24d7f3[_0x1bbc07];return _0x2ad3d0;},_0x1bbc(_0x37949d,_0x4ce1b2);}const {SlashCommandBuilder,EmbedBuilder}=require(_0xcdc203(0x2bd,0x2b2)),User=require(_0xcdc203(0x2b0,0x2c0)),fs=require('fs'),yaml=require(_0xcdc203(0x2aa,0x2b5)),config=yaml[_0xcdc203(0x2a2,0x2aa)](fs['readFileSync'](_0xcdc203(0x293,0x28b),'utf8'));function _0x24d7(){const _0x55479c=['402664aSECqV','replace','readFileSync','setColor','3849468HMAvyc','getTime','7rdZpif','floor','110238HeNGsc','{nextDaily}','save','./lang.yml','load','Economy','#00FF00','dailyCooldown','lastDaily','push','maxAmount','{coins}','js-yaml','setName','Claim\x20your\x20daily\x20reward','15OiYlap','81uvVzxV','241963JbPibc','../../../models/UserData','1630059wFFQhQ','Money','getHours','findOne','daily','#FF0000','2oKEXDX','1352140VkKxek','utf8','Daily','setDescription','297340BtcFjT','discord.js','exports','user','33BooVbw','guild','reply','baseAmount','commandData','./config.yml','min','increasePerDay'];_0x24d7=function(){return _0x55479c;};return _0x24d7();}function _0xcdc203(_0x1205c7,_0x5a7c02){return _0x1bbc(_0x1205c7-0x189,_0x5a7c02);}const lang=yaml['load'](fs[_0xcdc203(0x298,0x27f)](_0xcdc203(0x2a1,0x291),_0xcdc203(0x2b9,0x2c7))),{checkActiveBooster}=require('./Utility/helpers');module[_0xcdc203(0x2be,0x2c1)]={'data':new SlashCommandBuilder()[_0xcdc203(0x2ab,0x2a4)]('daily')['setDescription'](_0xcdc203(0x2ac,0x2b2)),async 'execute'(_0xcc26be){let _0xb3a6ef=await User[_0x6bd863(0x158,0x15b)]({'userId':_0xcc26be[_0x6bd863(0x16d,0x166)]['id'],'guildId':_0xcc26be[_0x6bd863(0x177,0x168)]['id']});const _0x2349c8=new Date();let _0x1343f4=config[_0x6bd863(0x139,0x14a)][_0x6bd863(0x174,0x161)][_0x6bd863(0x16b,0x16a)];function _0x6bd863(_0x416245,_0x5c3e79){return _0xcdc203(_0x5c3e79- -0x159,_0x416245);}if(_0xb3a6ef&&_0xb3a6ef[_0x6bd863(0x145,0x139)][_0x6bd863(0x152,0x14d)]){const _0x123be8=new Date(_0xb3a6ef[_0x6bd863(0x147,0x139)][_0x6bd863(0x138,0x14d)]);_0x123be8['setHours'](_0x123be8[_0x6bd863(0x144,0x15a)]()+0x18);if(_0x2349c8<_0x123be8){const _0x131936=new EmbedBuilder()[_0x6bd863(0x152,0x162)](lang['Economy'][_0x6bd863(0x146,0x14c)][_0x6bd863(0x126,0x13e)](_0x6bd863(0x15b,0x146),Math[_0x6bd863(0x142,0x144)](_0x123be8[_0x6bd863(0x139,0x142)]()/0x3e8)))[_0x6bd863(0x145,0x140)](_0x6bd863(0x16e,0x15d));return _0xcc26be[_0x6bd863(0x169,0x169)]({'embeds':[_0x131936]});}const _0x2d5569=Math[_0x6bd863(0x134,0x144)]((_0x2349c8-new Date(_0xb3a6ef[_0x6bd863(0x13a,0x139)][_0x6bd863(0x14f,0x14d)]))/(0x3e8*0x3c*0x3c*0x18));_0x1343f4=Math[_0x6bd863(0x12f,0x13b)](config[_0x6bd863(0x14d,0x14a)][_0x6bd863(0x158,0x161)]['baseAmount']+_0x2d5569*config[_0x6bd863(0x14c,0x14a)][_0x6bd863(0x14e,0x161)][_0x6bd863(0x138,0x13c)],config[_0x6bd863(0x153,0x14a)]['Daily'][_0x6bd863(0x15c,0x14f)]);}const _0x22620f=checkActiveBooster(_0xb3a6ef,_0x6bd863(0x143,0x159));_0x1343f4*=_0x22620f;!_0xb3a6ef?_0xb3a6ef=new User({'userId':_0xcc26be[_0x6bd863(0x175,0x166)]['id'],'guildId':_0xcc26be[_0x6bd863(0x172,0x168)]['id'],'balance':_0x1343f4,'commandData':{'lastDaily':_0x2349c8},'transactionLogs':[]}):(_0xb3a6ef['balance']+=_0x1343f4,_0xb3a6ef[_0x6bd863(0x145,0x139)][_0x6bd863(0x14f,0x14d)]=_0x2349c8);_0xb3a6ef['transactionLogs'][_0x6bd863(0x156,0x14e)]({'type':'daily','amount':_0x1343f4,'timestamp':_0x2349c8}),await _0xb3a6ef[_0x6bd863(0x13f,0x147)]();const _0x40f569=new EmbedBuilder()[_0x6bd863(0x16a,0x162)](lang[_0x6bd863(0x140,0x14a)][_0x6bd863(0x14e,0x15c)][_0x6bd863(0x133,0x13e)](_0x6bd863(0x137,0x150),_0x1343f4))['setColor'](_0x6bd863(0x14a,0x14b));return _0xcc26be[_0x6bd863(0x15b,0x169)]({'embeds':[_0x40f569]});}};