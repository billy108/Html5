## 网页布局##
又叫板式布局，是根据报刊、杂志等纸媒而来的

网页布局特定：

	1.宽度是自适应 
	2.高度理论上可以无限延伸

网页布局格式：

	1.一列布局 
	2.两列布局 
	3.散列布局 
	4.混合布局
其中混合布局是使用最多的布局方式

## 一列布局通常用于首页 ##
	1.让div居中：margin:0 auto;
	2. 典型单列布局：头部top 主体main 尾部foot 三个<div>
	3. 清除默认样式：;body{margin:0;padding:0}
	4. margin的顺序是上右下左，那么这里的0表示上方的为0，上方的对应部位也就是下方也为0.同理auto指的是右方，那么对应的左方也为auto。
	5. 
## 两列布局： ##

	1、宽度自适应（用的比较少），
	1.1因为宽度要自适应，所以要设置左侧left的width:xx%；1.2，需要左右排列，所以设置float:left；1.3另一侧right也设置width和float(left和right都可以吧，再微调)
	2、固定宽度（）left和right增加一个父div#main,设置这个main的width，以及margin 0 auto；2.1如果要精确控制left和right的宽度，可以使用px【就是说也可以使用%粗略控制。】

## 三列布局： ##
	1、自适应宽度：设置左：float：left;中：float:left;右：float:right;
	2、左右固定宽度，中间自适应宽度：取消float,用position:absolute实现
	左：width:200px;position:absolute;left:0;top:0;
	右：width:300px;position:absolute;right:0;top:0;
	中：margin:0 300px 0 200px;(上 右 下 左),如果需要与两侧之间有间距，只需要改变margin即可；

1.混合布局：我们可以把一列布局加入“左”和“右”改造为混合布局。
2.在中部mian中加入子div 分别是（左，右）。 然后分别在style中加入“.left和.right”的样式！
3.注“left和right”都要加浮动“float”
4.还可以在混合布局下进行更复杂的混合布局
5.可以将right定义为sub_right和sub_right 分为化为更为密集的混合布局
布局有一列、二列、三列和混合布局
混合布局：
将一列布局改造就变成了混合布局。
即主体部分加上子div

## 要点回顾： ##
其实在网页制作当中，页面中的元素就是块与块之间的关系：
块挨着块；块嵌套着块；块叠压着块
通过css将这些块摆放正确，网页布局就自然完美了。

1、margin:0 auto 自动居中
2、两种分成三栏的方式：
1）两边position：absolute，left：0/right：0，top:0，
中间margin｛0 右边 0 左边｝
2）先分两栏 左右float 再分两栏左右float