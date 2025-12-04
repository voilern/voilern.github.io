---
title: "Puzzle | The Festival Will Be Declared"
summary: 由KevinTheMH写作，发布于语谜Puzzling公众号的一道好题
date: 2025-03-02
image: 
math: 
license: 
tags:
    - Puzzle
hidden: false
comments: true
draft: false
---  

本题是由**KevinTheMH**写作，在**2025/2/28**于公众号**语谜Puzzling**上发布的一道十分精彩的Puzzle。我队（ **Celestial \<Catellite>** ）在发布17h后成功解出，获得该题三杀。个人很喜欢这道题，因此简单作一题解兼做题历程记录。  

--- 

（ 题干部分来自于**语谜Puzzling**公众号，原文请见 [盛典启幕：The Festival Will Be Declared ](https://mp.weixin.qq.com/s/Fe6ghKGHk6SwIYJOp1q_kg)）
题干部分如下：  

*A pair of star-crossed lovers came to the festival. Saying sweet-ish vows about bringing down the stars and planets, their paths in life really crossed, amidst the promise of being there for each other.(Note: the couple was facing the south at this romantic moment)*  

<center>

![](https://s2.loli.net/2025/03/02/A1wiUg9G3XYIum6.png)  
</center>

腾讯文档：[盛典启幕：The Festival Will Be Declared](https://docs.qq.com/sheet/DZVp5Tk1zRnVLU2Fk)  

---  

首先可以看到一个十分巨大的wordsearch和旁边指示单词长度的一列数字，第一步：<del>当然是自己完成这个wordsearch！</del>当然是把wordsearch丢进[焖肉面](https://philippica.github.io/cipher_machine/)的solver！就可以得到下图中的结果：  

<center>

![](https://s2.loli.net/2025/03/02/SJITny8ukCDQ6aF.png)  
</center>

下一步也很显然：找出wordsearch中词所在的位置，并将找到的词与右侧的（ n ）相对应，在对应过程中不难注意到右侧单词都是按照**字典序**进行排列，可用以检查正误和定位剩余单词的前几个字母。总之用尽各种方法艰难完成wordsearch后我们会得到下图：  

<center>

![](https://s2.loli.net/2025/03/02/QutTcU25CJi8lD4.png)  
</center>

在wordsearch过程中不难注意到部分**关联性较强**的单词，我们最早注意到的是**waiting for love**和**without you**都是英文歌曲，**california**和**georgia**都是美国州名（这里实际上有问题，我们在下一步接近完成时才在提示下改过来），但在之后并没有意识到这实际上是一个**Connecting Wall**，直到题目发布1h后的提示二才让我们有了新的进展。接下来自然是要把这32个词分为8类，完成这一步后表格会变成下图中这样：  

<center>

![](https://s2.loli.net/2025/03/03/gST6afcZo8sVCNU.png)  
![](https://s2.loli.net/2025/03/03/GPeR8Njb3lnFOVm.png)  
<i>表中？？？对应的分类应为<strong>与世界四大长河之一的名字有关</strong>，<strong>五行+词</strong>应为<strong>五种古典元素+词</strong></i>
</center>

这一步Connecting Wall实际上**十分难以完成**，特别是**五种古典元素+词**、**Smith**和**与世界四大长河之一的名字有关**这三个分类，在没有提示的情况下很难想得到。<del>含有不常见分类且没有正解反馈的Connections都孬</del>总之又在用尽各种方法后，我们完成了这个Connecting Wall，然后呢？似乎又一次没了解题方向。  

在这时可以回头看看**Flavor Text**，有几个关键词值得注意——**sweet-ish**和**bringing down the stars and planets**。参考提示三，前者实际上是一个常见的**homophone（谐音词）**，也即**swedish**，后者则有暗示**行星**，二者结合可知实际上指的是**瑞典太阳系模型（Swedish Solar System，即SSS）**，而上一步Connecting Wall中的每一个分类都与SSS中的地标有一一对应关系，搜索后表格应该会是这样：  

<center>

![](https://s2.loli.net/2025/03/03/4GnYsP5fIO2RFQq.png)  
<i>图中红字为做题时没有找到的地标名</i>
</center>  

同时，FT中还提到多次**crossed**，也可以参考提示五，总之下一步应该**提取路径交叉点的字母**，提取字母后不难想到下一步应该是**排序**，这里有一个很自然的顺序——按照**太阳系顺序**对各组进行重排！这一步后表格belike：  

<center>

![](https://s2.loli.net/2025/03/03/oNMUlPsI2uj4tq7.png)  
![](https://s2.loli.net/2025/03/03/CXGL3a21bwozf4d.png)
</center>

就会得到一句指示：**SPIRALLY REARRANGE START FROM CENTER（从中心开始螺旋重排）**，重新回到这个wordsearch盘面，不难在中心发现**congrats**，提示我们螺旋重排的方向。在code后，我们可以得到新的wordsearch，其中第一行很明显的是新的指示：**CONGRATS LIFT YOUR SPIRITS FOR THIS FESTIVAL**，其中**spirits**在这题中指的是**神明**，参考提示七、八，我们可以找到31个神明的名字。同样地，按照其职责可以将其分为八组，每一组都以<strong>十字形（cross）</strong>环绕着中心字母，自然地提取八个字母后，我们再次面临**排序**的问题，类似上一次排序，八种职责可以对应太阳系中的八颗天体（参考希腊和罗马神话），再次按照**太阳系顺序**进行排列，我们便可得到下图中的表格：  

<center>

![](https://s2.loli.net/2025/03/03/fiCsShwMRgPHmZU.png)
![](https://s2.loli.net/2025/03/03/XygCNIJVzcRvx3f.png) 
<i>图中木星对应<strong>众神之主</strong>，天王星对应<strong>天空之神</strong></i>
</center>  

现在我们得到了一句新的指示：**rot eight**，即对wordsearch的盘面**凯撒移位8位**。移位后可以发现盘面的最下面一行变为**LOOK UP ON FEB TWENTY EIGHTH THIS YEAR AT NIGHT（在今年的二月二十八日夜晚抬头）**，至此，本题的主题终于浮现——**2025年2月28日七星连珠，沿着黄道（ecliptic），七颗行星会以火星、木星、天王星、金星、海王星、水星和土星的顺序排列**。  

按照指示从盘面最底下开始**向上看（look up）**，可以在第七行的两端发现**ECLIPTIC**，这就是本道题的**黄道**！在黄道所在行中间可以发现**间距2的离散型ECLIPTIC**，参考提示八，这个ECLIPTIC将黄道分为**七个双字母组（bigram）**，刚好对应**七星连珠**。再一次，也是最后一次，将这七个双字母组按照**太阳系顺序**排列，便可得到最终答案——**A FAREWELL WALTZ（告别的华尔兹）**。至此这道题就全部结束了!  

<center>

![](https://s2.loli.net/2025/03/03/SV4HL9FdjQiG1AK.png)  
![](https://s2.loli.net/2025/03/03/z6TbIfWrQ7isvkD.png)  
<i>来自官方题解的一张图</i>
</center>  

官方题解请见[【解析】盛典启幕：The Festival Will Be Declared](https://mp.weixin.qq.com/s/Mg_8kBAhUby7-_PCxr4RPw)  

---

可以看出这是一道十分精彩、十分浪漫，难度也很高的Puzzle，虽然有一点引导不足、大盘wordsearch过程略枯燥的问题，但好在提示给的很充分！跟着提示走可以解的很顺畅，<del>事实是从领先提示到跟不上提示进度开始睡觉。</del>以下是一些**fun stuff**！  

<center>

![](https://s2.loli.net/2025/03/03/ylDjzh81vpnsw2W.png)  
<i>蔚蓝玩家特有的警觉</i>

![](https://s2.loli.net/2025/03/03/BTdRG6JAC9LWHEn.png)  
<i>并非mitmh</i>

![](https://s2.loli.net/2025/03/03/XlQ1KjDC6bsIRdf.png)  
<i>是谁只领到3.62我不说</i>
</center> 