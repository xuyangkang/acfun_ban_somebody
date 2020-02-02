# ACFun ban sb

A Firefox plugin that bans [ACFun](https://www.acfun.cn/) articles from somebody you don't like.

I open sourced this extension to make it auditable. So that everyone can feel safe to use.

AC在，爱一直在


兄弟们，我相信许多老 ACer 现在唯一的快乐就是看文章区，但是最近恰烂钱的营销号以及睿智太多了，导致体验很差。猴山也毫无动静，只能亲自下场了。

## 安装
由于还没有打包 launch，请选择 “clone or download”，“download as zip”，然后按照如下步骤操作：
1. 打开 about:debugging
![](Step_1.png)

2. 选择 “此 Firefox”
![](Step_2.png)

3. 选择 “临时载入附加组件”，找到 zip 解压的位置，然后选中 manifest
![](Step_3.png)

OK，装载完毕
![](Step_4.png)

## 使用
1. 见到了不太对劲的文章，右键点选 Up 主头像，将此人 ban 掉
![](Step_5.png)

2. 刷新，或当你再次不小心点进这个人发表的文章后，会变成这个亚子。点下 Yes 后会显示出原本的内容，
![](Step_6.png)

3. 如果此人改邪归正了，可以按相反的方法把他放出来。

## TODO
1. i18n 支持，远离工地英语
2. 目前 storage 是 local，需要改成 sync，这样可以支持多个浏览器同步
3. 快点整理一下，部署到 Firefox 和 Chrome 商店，这样安装步骤会简单很多
