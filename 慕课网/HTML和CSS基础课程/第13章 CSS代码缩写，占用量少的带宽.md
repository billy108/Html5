## 盒模型代码简写 ##
还记得在讲盒模型时外边距(margin)、内边距(padding)和边框(border)设置上下左右四个方向的边距是按照顺时针方向设置的：上右下左。具体应用在margin和padding的例子如下：

	margin:10px 15px 12px 14px;/*上设置为10px、右设置为15px、下设置为12px、左设置为14px*/
通常有下面三种缩写方法:

1、如果top、right、bottom、left的值相同，如下面代码：

	margin:10px 10px 10px 10px;
可缩写为：

	margin:10px;
2、如果top和bottom值相同、left和 right的值相同，如下面代码：

	margin:10px 20px 10px 20px;
可缩写为：

	margin:10px 20px;
3、如果left和right的值相同，如下面代码：

	margin:10px 20px 30px 20px;
可缩写为：

	margin:10px 20px 30px;
注意：padding、border的缩写方法和margin是一致的。

## 颜色值缩写 ##
关于颜色的css样式也是可以缩写的，当你设置的颜色是16进制的色彩值时，如果每两位的值相同，可以缩写一半。

例子1：

	p{color:#000000;}
可以缩写为：

	p{color: #000;}
例子2：

	p{color: #336699;}
可以缩写为：

	p{color: #369;}

## 字体缩写 ##
网页中的字体css样式代码也有他自己的缩写方式，下面是给网页设置字体的代码：
	
	body{
	    font-style:italic;
	    font-variant:small-caps; 
	    font-weight:bold; 
	    font-size:12px; 
	    line-height:1.5em; 
	    font-family:"宋体",sans-serif;
	}
这么多行的代码其实可以缩写为一句：

	body{
	    font:italic  small-caps  bold  12px/1.5em  "宋体",sans-serif;
	}
注意：

1、使用这一简写方式你至少要指定 font-size 和 font-family 属性，其他的属性(如 font-weight、font-style、font-varient、line-height)如未指定将自动使用默认值。

2、在缩写时 font-size 与 line-height 中间要加入“/”斜扛。

一般情况下因为对于中文网站，英文还是比较少的，所以下面缩写代码比较常用：

	body{
	    font:12px/1.5em  "宋体",sans-serif;
	}
只是有字号、行间距、中文字体、英文字体设置。

