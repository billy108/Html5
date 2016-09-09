TTS教学系统地址：
http://tts7.terena.com.cn
WFD1501_姓名
123

文件共享地址：
	http://code.tarena.com.cn
	tarenacode
	code_2013

李文华
QQ：afterwolf@gmail.com

1.前段人员
  策划人员：方案
  美工：设计图  .psd  .rp
  前端：静态网页
  后台：获取数据   java  php  .net

2.Web的组成部分
  (1)Web服务器：监听客户端连接请求、接收请求，返回响应内容。Apache Httpd
  (2)Web客户端：浏览器、移动设备
  (3)HTTP协议：定义Web服务器和客户端的通讯细节
  
  安装Httpd Web服务器：
  (1)下载  http://httpd.apache.org
  (2)安装  
  (3)启动Httpd
	可以使用控制程序，或者操作系统的服务控制台(services.msc)，或者使用命令net  start  Apache2.2
  (4)可以查看系统打开的端口(port)号，确认httpd是否已经启动: netstat  -anb
  (5)使用浏览器访问httpd服务器

3.服务器端技术和客户端技术
  常见的服务器端技术(运行在服务器上)：
	JSP / PHP / ASPX 
  常见的客户端技术(运行在浏览器上)：
  	HTML / CSS / JS / SWF


4.HTML技术——重点
  文本：就是纯字符
  超文本：在纯字符中嵌入样式、图片、音频、视频、超链接等内容
  Hyper Text Markup Language，超文本标记语言，就是52个标记嵌入在纯文本中，实现超文本效果的语言。如：
	<marquee>hello</marquee>
  注意：作为一门计算机语言，HTML与Java、C、PHP不同，没有循环、选择等基本语言结构，只有纯文本和52个标签。

5. HTML语法——重点
  (1)一篇HTML文档就是一个文本文档，其中包含 “纯文本”+“标签”
  (2)HTML中的标签分为两种：
	双标记标签： <标签名>......</标签名>
	单标记标签： <标签名/>    单标记标签中不能包含内容
  (3)标签之间可以嵌套，但不能交叉
  (4)标签名不区分大小写，但有个版本的HTML要求全小写，推荐全用小写
  (5)标签可以声明属性，属性有属性名和属性值，属性值需要使用单引号或双引号括起来
  (6)不同的标签具有不同的属性，所有的标签都具备下列四个属性：
		•id：整个文档每个标签可以声明一个唯一的id号
		•style：为元素指定CSS样式
		•class：指定元素所属的类型
		•title：指定标签的弹出式提示语

6.HTML常用标签

	标签名	说明	常用属性	区块/内联
	<html></html>	声明一篇文档开始和结束	xmlns: Namespace名称空间	
	<head></head>	标明文档的头部，显示区域之外的部分		
	<body></body>	标明文档的主体，显示区域		
	<title></title>	只能放于<head>标签内，用于标示文档的标题		


李家的二丫
王家的二丫

7.HTML文件的基本结构
 (1)文档类型声明：HTML有不同的版本，如html1.0 html2.0 html3.0 html4.0(strict/transitional) xhtml(strict/transitional/frameset) html5，不同版本的HTML中可以使用标签的数量以及标签的属性是不同的，且会影响到浏览器对CSS和JavaScript的解释执行。
 (2)

	<html>
		<head>
		</head>
		<body>
		</body>
   	</html>








