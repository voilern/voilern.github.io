---
title: Silph Puzzle Hunt 2025 Write-up
date: 2025-08-22T22:26:51+08:00
description:
    个人心中 25 年质量和体验都排在最前列的 hunt 之一！
tags:
    - Hunt
    - Write-up
categories:
    - Hunt Write-up
mathjax: true
comments: true
---

<style>

.kagetsu { color: #f18518; }
.voilern { color: #ffb8c3; }

</style> 

<center>

by Celestial \<Catellite>  
用时 99.1h，rank 46
</center>


Hunt网站： [Silph Puzzle Hunt 2025](https://silphpuzzlehunt.com/) 

## 一句话总结！

<span class="kagetsu">Kagetsu</span>：这hunt有点小神。虽然平均水温相当高，但是感觉被出题人炫技炫得很爽（

<span class="voilern">voilern</span>：在长春雨天的酒店里、东北返乡的飞机和高铁上度过了silph的大部分时光，在酒店做一天题但进度纹丝不动、在飞机和高铁上单刷LITS，都是十分难忘的经历！虽然不熟悉宝可梦主题，也有打洋hunt不得不品的文化差异环节，以及题目难度都比较高，但是很多题的点子和实现非常喜欢！在个人心中是25年质量和体验都排在最前列的hunt之一！

## The Foggy Plains

### Motion Capture

<span class="kagetsu">Kagetsu</span>：挺有意思的国象题idea！出题人的凑题能力疑似在此初现端倪（

<span class="voilern">voilern</span>：从标题、ft、盘面到 clue 给答案长度的方式处处充满暗示，虽然解题过程中会遇到同步/异步移动的问题，但是尝试以后也就不是问题了，发现同步移动会恰好有一步可以攻击时十分美妙，是很好的国象题！

### Broken Mirrors

<span class="kagetsu">Kagetsu</span>：开了个头，然后队友做了一上午过了。那时我们还没有意识到开门题就这么难所代表的问题的严重性.jpg

<span class="voilern">voilern</span>：<span class="kagetsu">Kagetsu</span> 做了一条 clue 瞪了机制以后就来做了，单字母不对称回文挺有意思，找到方法以后也不算特别难做，每做出一条 clue 都很有成就感。从早上 8 点开始做到 11 点把 clue 做的差不多之后被剩下的 clue 和神秘 26 长答案卡了 1 小时提取，最后到 12 点多才过。作为开门题很有难度，并且此时我们还不知道二区三区会更开幕雷击（

### Sudoku Starter Pack

<span class="kagetsu">Kagetsu</span>：唉不懂宝。让队友做了苦力和纸笔，最后用solver加速了一下就过了。顺带一提一开始以为【BIG THWOMP】不像话就没交，队友交完过了才发现这词我好像在别的hunt见过.jpg

<span class="voilern">voilern</span>：用 9 个世代的御三家出数独也太好了，看完规则把需要的数据库搬到表里之后就去午觉了，一觉醒来发现表里有个 nutri 表达式，扔进去搜了一下前排答案交完就过了）搜索每个自己不认识的词的重要性.jpg

### Off by One

<span class="kagetsu">Kagetsu</span>：最thematic的一集，连答案的(6 3)都off by one了使这题的幽默程度提高到了一个新的境界（

<span class="voilern">voilern</span>：队友在做这题时我在 broken mirrors，最后过来做了提取，以及（6 3）off by one 到（5 4）是真的很幽默（

### Musical Chairs

<span class="kagetsu">Kagetsu</span>：完全无法理解图内数字和曲目bpm的关联（而且由于找不到原音频，bpm都不确定），最后也没做出来

<span class="voilern">voilern</span>：队友做这题时正在午觉，醒来过了宝数独开了更可解的新题以后就被放弃了。完赛后看解析发现队友找的基本都是对的，但后续没有做下去，以及这个抢凳子总觉得很别扭（

### Tatami Mat

<span class="kagetsu">Kagetsu</span>：挺有意思的小题

<span class="voilern">voilern</span>：也是一道从标题到答案都很 thematic 的小题，最后提取没懂直接爆出答案了。看解析发现提取方式挺惊世骇俗的，居然还能这么提.jpg 感觉 c16 淡黄又蓬松的提取和这题有些神似。

### Cry-ptic

<span class="kagetsu">Kagetsu</span>：恐怖cryptic，到完赛一笔没动

<span class="voilern">voilern</span>：宝可梦叫声 cryptic 是吧，宝 p 没救了。

### Meta - The Foggy Plains

<span class="kagetsu">Kagetsu</span>：很快看出了做法，很快过了，很快把剩下的题全反爆了

<span class="voilern">voilern</span>：ft 写的很清晰，很快就过了，之后愉快地把 Musical Chairs 和 Cry-pitc 反爆掉了。

## The Haunted Graveyard

### Plaintext Adventure

<span class="kagetsu">Kagetsu</span>：正片开始.jpg 那时我们仍未意识到这个hunt是多么需要code.jpg 对古典密码建图属于是用简单的烹饪构造了极难的推理，不code一个完美图匹配真的能做吗

<span class="voilern">voilern</span>：开题以为是 130 页 conundrum，当场被吓哭，所以一直没有仔细看这题的文本，直到晚上做完 Jigsaudio 才不得不回来做这三道题。fun fact：其实一开始准备做的是 Dimmer Wits，但没过几分钟就证明这题对于我们还是太超前了：

<center>

![](https://ik.imagekit.io/voilern/silph/AgAABTIVXkH049Fr0HNO65l47JQ30qhT.png?updatedAt=1755873439786)  
《最短的吧》
</center>

<center>

![](https://ik.imagekit.io/voilern/silph/AgAABTIVXkHKsyGAgvVOcb4pP1hQBqmV.png?updatedAt=1755873440241)
</center>

直到完赛也没做出 Dimmer Wits 的任何一个小题，解析里作者的话感觉十分应景：

<center>

![](https://ik.imagekit.io/voilern/silph/AgAABTIVXkHkSOfLJ2BDgauIB95DSeeH.png?updatedAt=1755873439813)
</center>

大概看了一会 Dimmer Wits 感到绝望就去接着建这题的图了，作了一个差不多能看的图之后格物致知突然想到是不是某种状态图，再看节点数发现刚好是 26\*5 = 130，主文本和操作也暗示了古典密码，之后就一路畅通了……吗？结果根据图和密码推理各个节点代表的字母也花了很久很久……用古典密码建图再用纯文本形式呈现出来真是太好的想法了，但这题不建图只通过文本来做几乎不可能吧。以及想起一道类似的题：[Toys' Cafe](https://epilogue.mitmh2024.com/puzzle/toys-cafe)，也很喜欢。

### Jigsaudio

<span class="kagetsu">Kagetsu</span>：太好玩了，大概是本次最喜欢的题之一，特别是拼音频的那部分，简直是天才。开心地做完拼音频之后卡了好一会，直到队友把关键的[ravensburger.us](http://ravensburger.us/)部分截了出来才得以顺利进展

<span class="voilern">voilern</span>：由于在 msph25 做了一道需要看音频频谱图的题，所以这题上来就去沉迷处理音频了）在软件里摆弄了好一会没发现什么值得注意的，队友这时候在网站上光速把音频拼好了，之后卡了很久，中途做掉了一区 meta，直到晚上突发奇想把各个部分都有出现的离散女声拼起来后队友听出来 ravensburger.us 才顺利做掉这题。后半部分的拼图数据库和前半部分的音频拼图十分贴切，以及用频段排序也很自然，很不错的一题。以及 LITS 似乎是在这题之后开的，于是进入了整个 hunt 最难最卡的一阶段：在 Plaintext Adventure、Dimmer Wits、LITS 之中必须做至少一题，并且就算在这三题里做掉一题之后也有 Trading Places 在等着，绝望感.jpg

<center>

![](https://ik.imagekit.io/voilern/silph/AgAABTIVXkHa3q6n-f9PVYbWY574Ubds.png?updatedAt=1755873439828)
</center>

### Dimmer Wits

<span class="kagetsu">Kagetsu</span>：恐怖长文，我毫无头绪

<span class="voilern">voilern</span>：想说的都在上面了，以及这题的解析更是恐怖，整个 hunt 提交次数最多和似乎是通过率最低题的含金量（

### LITS

<span class="kagetsu">Kagetsu</span>：自从把LITS交给<span class="voilern">voilern</span>之后腰不酸了腿不疼了觉也睡得好了

<center>

![](https://ik.imagekit.io/voilern/silph/AgAABTIVXkHGgeFyd89HapS3e-mjhVOz.png?updatedAt=1755873439052)
</center>

<span class="voilern">voilern</span>：第二天一早准备去赶飞机，想着在飞机上闲着没事不如做没人碰的纸笔，本年度 hunt 生涯个人最高成就之一单刷 LITS 就这么开始了.jpg

整个 hunt 的平均质量相当高，这题更是好上加好：用 40 道小题把 LITS 扩展到整个字母表并引入特殊规则，再用大盘反推用到字母的知识锁设计十分美妙，在做小题推断字母形状和区域规则的循序渐进的过程也十分舒适。后半部分每推出一个字母的形状都正反馈十足，尤其是接近压轴的 r，再配上之前的 a，绝对是这套题的精髓，r 神.jpg

总之从飞机做到高铁，从早上十点断断续续做到凌晨一点半，终于把这套题完整做掉了。没想到打 hunt 很少做纸笔的我也会有今天（

做这题那天我们队正在被三座大山卡的动弹不得，我在单刷 LITS，<span class="kagetsu">Kagetsu</span> 就去单刷 Trading Places 了。于是当天我们队只过了两题，是我们两个人一人单刷了一题）一些 fun fact：

<center>

![](https://ik.imagekit.io/voilern/silph/AgAABTIVXkHK1y72CEtBQ74wO4UrbY5H.png?updatedAt=1755873439493)
</center>

<center>

![](https://ik.imagekit.io/voilern/silph/AgAABTIVXkHknoCH8vpBUpzRYuwDb0L8.png?updatedAt=1755873439278)
</center>

<center>

![](https://ik.imagekit.io/voilern/silph/AgAABTIVXkFCXNf1_SxAL4c1X8-RlKa8.png?updatedAt=1755873433551)
</center>

<center>

![](https://ik.imagekit.io/voilern/silph/AgAABTIVXkHe_yTdbZBEMoobFzWThdyL.png?updatedAt=1755873439228)  
输给 TCG 大神了（
</center>

### Trading Places

<span class="kagetsu">Kagetsu</span>：有没有懂拼尽全力搜完全部卡面之后才发现这题刚刚开始的绝望感的，要推理一个完全没玩过的桌游的combo实在是太恶毒了，和staff友好交流之后终于用我浅显的规则理解推了一点然后爆了。以及一定要注意自己用的是不是follow-up hint，警钟长鸣.jpg

<center>

![](https://ik.imagekit.io/voilern/silph/AgAABTIVXkFkcj4Gt1hAY5EyAJ3jZ1Rv.png?updatedAt=1755873433688)
</center>

<center>

![](https://ik.imagekit.io/voilern/silph/AgAABTIVXkGdR9bwIJJBWYps1A3MdfpO.png?updatedAt=1755873433642)
</center>

<center>

![](https://ik.imagekit.io/voilern/silph/AgAABTIVXkGlxH1tpm1Al7D2Tc1-FO24.png?updatedAt=1755873433452)
</center>

<center>

![](https://ik.imagekit.io/voilern/silph/AgAABTIVXkH-dxMqMvJPE4YUhiKM5g0y.png?updatedAt=1755873433802)
</center>

<span class="voilern">voilern</span>：自从把 Trading Places 交给 <span class="kagetsu">Kagetsu</span> 之后腰不酸了腿不疼了觉也睡得好了

### Only Compact

<span class="kagetsu">Kagetsu</span>：gpt王朝了

<span class="voilern">voilern</span>：原来是有 Only Connect 作背景的，与完全没用到的辅音拆分和解了。GPT 把这题的大部分非识图题全秒了，做了几个识图题之后就很快把最终的 Connections 做掉了。感觉是了解相关背景的人做到会会心一笑，不了解的人也能做的舒服的小题。

### No Word Wordsearch

<span class="kagetsu">Kagetsu</span>：相当有意思的类纸笔推理，但是我自己推一半推错了，最后还得是v神出马

<span class="voilern">voilern</span>：Placeholder Text Wordsearch 也太有趣了，但第一步之后做着做着发现什么你也是纸笔.jpg 大概做了一半就爆掉了。

<center>

![](https://ik.imagekit.io/voilern/silph/AgAABTIVXkHJlHCsHHVA_4rvJwZwtqwz.png?updatedAt=1755873439265)
</center>

### Meta - The Haunted Graveyard

<span class="kagetsu">Kagetsu</span>：搜不到，我真的搜不到啊，最后也不知道是怎么排序，写了个带合法性检查的枚举枚举出来了 以及洋meta不得不品的神秘答案

<span class="voilern">voilern</span>：Who you gonna call? Puzzle Hunters! 感觉被外国文化强碱了，幽灵数据库太难搜，而且搜到正确的也不太能确定。听说隔壁反卷第一个找到的是 shovel 对应的幽灵系宝可梦，之后认为其它 clue 都是幽灵系宝可梦，被卡了很久才意识到不对）而我们在找到捉鬼敢死队前压根没有 short vowel 这个答案！幸运避开了比捉鬼敢死队显然且看起来合理一万倍的宝可梦主题（

## The Abandoned Factory

### Difference Maker v3.0

<span class="kagetsu">Kagetsu</span>：看到cw大盘就吓哭了，最后一笔没动

<span class="voilern">voilern</span>：做题每个阶段都有看着比这题友好很多的题，于是完全没仔细看过。完赛后看解析才第一次了解到 Something Different 这个题型，并且中间步骤看起来也并不是花时间就能做出来的，在赛时没有做还是比较明智的。抛开难度这题出的其实相当有趣，在体验上有些类似金牌解谜的填字游戏第二题，可惜对外国文化了解不足，自身水平也不高，没有体验到这题的核心设计。

### Cross-Pollinator v2.4

<span class="kagetsu">Kagetsu</span>：看到cw大盘就吓哭了，但是这个稍微好做一点

<span class="voilern">voilern</span>：真好做吗，瞪出机制以后靠 gpt 和几个人做了一下午才勉强做出答案，唉还是水平不够

### Fast-Fix Typist v2.7

<span class="kagetsu">Kagetsu</span>：唉小众数据库。以及用excel公式提取的时候一定要注意特殊符号，警钟长鸣.jpg（下图charmer是正确的，m是由Don't Move里提取出来的）

<center>

![](https://ik.imagekit.io/voilern/silph/AgAABTIVXkGUqSzv8WdE24QT_EVeuxJS.png?updatedAt=1755873433848)
</center>

<span class="voilern">voilern</span>：FFT 为什么不是快速傅里叶变换为什么不是快速傅里叶变换为什么不是快速傅里叶变换为什么不是快速傅里叶变换为什么不是快速傅里叶变换为什么不是快速傅里叶变换为什么不是快速傅里叶变换为什么不是快速傅里叶变换为什么不是快速傅里叶变换为什么不是快速傅里叶变换

在完全不了解 FFT 的前提下中间答案 index with word match 颇有 exiso 之姿，做出中间答案之后被卡了很久很久，直到了解一点 FFT 相关知识并试图分析出题人脑回路才理解中间答案的 word match，这个提取思路确实太难想到了。

### CV Writer v2018

<span class="kagetsu">Kagetsu</span>：出题人真的无敌了，这都能给你凑出来的。以及一开始code的时候没把y算作元音，加上枚举全排列本身就跑得慢，很难不认为是自己的问题。不明说y是元音感觉略有恶毒

<span class="voilern">voilern</span>：过于能凑了。感觉 clue 的元辅音完全匹配是这题最好的部分，也是各部分都很浑然一体的一题。不过 y 是元音确实比较恶毒（

### Answering Machine v9

<span class="kagetsu">Kagetsu</span>：导弹佬做了初步思路，但是这时候已经开meta了，所以最后也没做（

<span class="voilern">voilern</span>：我出了 100 道 answer 答案的 cryptic

### Meta - The Abandoned Factory

<span class="kagetsu">Kagetsu</span>：被出题人秀了一脸.jpg 用一个算式传达这么多信息量真的很像魔法，个人很喜欢。一开始被计算误差坑了还以为有相当多整点可以使结果为整数，直到code之后才发现就5个解）晚上十二点左右处理完数字，大家拼尽全力无法找到日期和feeder的关联，我在旁边拼尽全力code爆提取，但是由于没想到只用第二个单词提取导致一直爆不出来，直到两点多其他人全睡了突然我搜出来之后过了，然后深夜独自迎接fm（

<span class="voilern">voilern</span>：总觉得是什么工业软件的版本号，但是一直搜不到，睡了以后被 <span class="kagetsu">Kagetsu</span> 大神秒了

## The Frozen Tundra

### Rig Your Own Tournament

<span class="kagetsu">Kagetsu</span>：感觉这个区能看代码还是得看，不然水温还是太高了。理解了裁判规则，理解了要推局面之后也不知道后面该干什么，最后这题还是反爆的

<span class="voilern">voilern</span>：完全没看（

### Ouroboros

<span class="kagetsu">Kagetsu</span>：有点酷！依旧是被出题人的凑题能力秀一脸，但是没有技术手段的话这题真的会极其困难。做完感觉体验比较像机制更丰富的何日君再来（

<span class="voilern">voilern</span>：没怎么参与到这题，队友在做时我在隔壁 No Word Wordsearch 做纸笔。出题组完赛 wu 中说这是整个 hunt 预期难度最高的一题，如果源代码不放在前端的话（

### Homebrewed

<span class="kagetsu">Kagetsu</span>：收集完每个字母的score和type之后觉得提示问问提取就行be like：

<center>

![](https://ik.imagekit.io/voilern/silph/AgAABTIVXkF6EWTJkMhNpLWCafk8sJlZ.png?updatedAt=1755873433719)
</center>

然而再次没想到只是个开始。虽然又是数据库查找，但是做完之后仍然不得不佩服出题人的思路

<span class="voilern">voilern</span>：你要的宝可梦要素.jpg 看到反馈信息不一致就应该想到藏信息的，c16 复习资料也是这样，但是这两题都交了提示，还是有些经验不足……这题对于 cram-o-matic 数据库的运用十分完美，黑箱的形式也和游戏机制很贴合，我说数据库就该这么出！

### Cosmic Squad

<span class="kagetsu">Kagetsu</span>：自从把Cosmic Squad交给<span class="voilern">voilern</span>之后腰不酸了腿不疼了觉也睡得好了

<center>

![](https://ik.imagekit.io/voilern/silph/AgAABTIVXkG2BD7ugKZNy6QOJCNbVr7D.png?updatedAt=1755873433638)
</center>

<span class="voilern">voilern</span>：tmmt25 final meta 被 <span class="kagetsu">Kagetsu</span> 单刷掉了，这次该我玩了.jpg

<center>

![](https://ik.imagekit.io/voilern/silph/AgAABTIVXkHk9F8Zoe9A5ZuqtNxvWthf.png?updatedAt=1755873438731)
</center>

我说能单刷完这题小游戏部分的就算之前不是 ADHD 之后也得是了）不过依然也是有诀窍的，为了第二步把整个游戏通关了两次，第二次就熟练到一命通关全部了（此处省略一个长达 30 分钟的视频）

小游戏后的半部分也很有意思，在玩小游戏时就应该会注意到一些关键指令的不变性，以及每个星区开始前的 ft，实际上是暗示了不同的加密方式，小游戏就是将密码作为指令呈现了出来，有些密码的呈现方式很令人眼前一亮（黑）。由于游戏判定，如果提前完成固定指令的话会自动跳过，导致 log 里会缺失关键信息。而我在玩时也比较帕金森（）不得不玩了第二遍来保证关键指令的完整。

总的来说应该是一道很适合团建的题目，但单刷团建题似乎变成我队少人时的日常了（乐）

### This Puzzle is Clearly Impossible

<span class="kagetsu">Kagetsu</span>：还有这种题的.jpg 很有意思的交互，以及peculiarities和exhibition取罗马数字相乘刚好等于1989有点惊为天人

<center>

![](https://ik.imagekit.io/voilern/silph/AgAABTIVXkESHj_r7KBD4p8RrGuG6y81.png?updatedAt=1755873433918)
</center>

<span class="voilern">voilern</span>：队友团建这题时正在单刷 Cosmic Squad，直到最后也没参与到。

### Yesmystics

<span class="kagetsu">Kagetsu</span>：做到一半开meta了，润

<span class="voilern">voilern</span>：应该是挺有意思的 Namystic 及各种变体，队友做这题时正在提取 Cosmic Squad，直到最后也没参与到。

### Meta - The Frozen Tundra

<span class="kagetsu">Kagetsu</span>：还在炫技还在炫技。无穷的字母序列加上冰雹猜想index，即使是如此简洁的idea也不得不令人感叹这是怎么凑出来的

<span class="voilern">voilern</span>：文本阅读和数学被 gpt 秒掉了，和 Plaintext Adventure 的动机其实比较类似：都是将某个核心概念做创造性的转述，这题是冰雹猜想，PA 是古典密码状态图，不得不说都是十分有效并且有趣的点子。最后无穷字母序列 + 冰雹猜想 index 简直太帅了！

## The Timespace Continuum

### Final meta - The Timespace Machine

<span class="kagetsu">Kagetsu</span>：深夜2点独自一人开了fm但是熬不动了，帮队友做了初步的苦力之后就睡觉了，没想到队友不负期待，刚起床就刚好完赛了，属于是完美接力。以及直到最后仍然是那句在这个hunt说过无数次的话：这到底是怎么凑出来的？

<span class="voilern">voilern</span>：其实这题反而比较好凑（）这种形式的 fm 看的出来是最后才出的，引入对 feeder 的操作后每个空通过不同的偏移量都能取到一些字母，用这些字母做一个答案后给偏移量就可以了。完赛后的 wu 也写到 fm 是开赛前夕才出完的题，而前面的大部分题在 22 年前后就出好了。这也解释了为什么偏移量要通过这种方式给出来吧。

早上起来在队友做的基础上摆弄了一下就过了，至此 Silph 圆满完结！

<center>

![](https://ik.imagekit.io/voilern/silph/AgAABTIVXkGqL_broFtKApP-MjMdlNPw.png?updatedAt=1755873434508)
</center>