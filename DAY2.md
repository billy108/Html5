## 使用ul，添加新闻信息列表 ##
在浏览网页时，你会发现网页上有很多信息的列表，如新闻列表、图片列表，如下图所示。
![](http://img.mukewang.com/52d383cd0001085503320216.jpg)

新闻列表

![](http://img.mukewang.com/52d3840f0001575f03260138.jpg)

图片列表

这些列表就可以使用ul-li标签来完成。ul-li是没有前后顺序的信息列表。

语法：

    <ul>
      <li>信息</li>
      <li>信息</li>
       ......
    </ul>
举例：

    <ul>
      <li>精彩少年</li>
      <li>美丽突然出现</li>
      <li>触动心灵的旋律</li>
    </ul>
ul-li在网页中显示的默认样式一般为：每项li前都自带一个圆点，如下图所示：
![](http://img.mukewang.com/52d3851200012ec503870284.jpg)

## 使用ol，添加图书销售排行榜 ##
如果想在网页中展示有前后顺序的信息列表，怎么办呢？如，当当网上的书籍热卖排行榜，如下图所示。这类信息展示就可以使用ol标签来制作有序列表来展示。
![](http://img.mukewang.com/52d3884a00014b0702270264.jpg)


语法：
    
    <ol>
       <li>信息</li>
       <li>信息</li>
       ......
    </ol>
举例：

下面是一个热点课程下载排行榜：

    <ol>
       <li>前端开发面试心法 </li>
       <li>零基础学习html</li>
       <li>JavaScript全攻略</li>
    </ol>
ol在网页中显示的默认样式一般为：每项li前都自带一个序号，序号默认从1开始，如下图所示：
![](http://img.mukewang.com/52d3893400019ee003830208.jpg)

## 认识div在排版中的作用 ##
在网页制作过程过中，可以把一些独立的逻辑部分划分出来，放在一个div标签中，这个div标签的作用就相当于一个容器。

语法：

	<div>…</div>

确定逻辑部分：

什么是逻辑部分？它是页面上相互关联的一组元素。如网页中的独立的栏目版块，就是一个典型的逻辑部分。如下图所示：图中用红色边框标出的部分就是一个逻辑部分，就可以使用div标签作为容器。
![](http://img.mukewang.com/52d38c41000163e210120455.jpg)

## 给div命名，使逻辑更加清晰 ##
在上一小节中，我们把一些标签放进<div>里，划分出一个独立的逻辑部分。为了使逻辑更加清晰，我们可以为这一个独立的逻辑部分设置一个名称，用id属性来为<div>提供唯一的名称，这个就像我们每个人都有一个身份证号，这个身份证号是唯一标识我们的身份的，也是必须唯一的。

如下两图进行比较，如果设计师把两个图给你，哪个图你看上去能更快的理解呢？是不是右边的那幅图呢。
![](http://img.mukewang.com/52d38d7b00017fb804800357.jpg)


语法：

    <div  id="版块名称">…</div>

## table标签，认识网页上的表格 ##
有时候我们需要在网页上展示一些数据，如某公司想在网页上展示公司的库存清单。如下表：
![](http://img.mukewang.com/52d38f0b00017e4305060133.jpg)


想在网页上展示上述表格效果可以使用以下代码：

![](http://img.mukewang.com/52d38f83000160be02920445.jpg)


创建表格的四个元素：

table、tbody、tr、th、td

1、table…/table：整个表格以<table>标记开始、</table>标记结束。

2、**tbody…/tbody：当表格内容非常多时，表格会下载一点显示一点，但如果加上<tbody>标签后，这个表格就要等表格内容全部下载完才会显示**。

3、tr…/tr：表格的一行，所以有几对tr 表格就有几行。

4、td…/td：表格的一个单元格，一行中包含几对td.../td，说明一行中就有几列。

5、th…/th：表格的头部的一个单元格，表格表头。

6、表格中列的个数，取决于一行中数据单元格的个数。

上述代码在浏览器中显示的默认的样式为：
![](http://img.mukewang.com/52d3902b0001142703730239.jpg)


总结：

1、table表格在没有添加css样式之前，在浏览器中显示是没有表格线的

2、表头，也就是th标签中的文本默认为粗体并且居中显示

## 用css样式，为表格加入边框 ##
Table 表格在没有添加 css 样式之前，是没有边框的。这样不便于我们后期合并单元格知识点的讲解，所以在这一节中我们为表格添加一些样式，为它添加边框。

在右侧代码编辑器中添加如下代码：

    <style type="text/css">
    table tr td,th{border:1px solid #000;}
    </style>
上述代码是用 css 样式代码（后面章节会详细讲解），为th，td单元格添加粗细为一个像素的黑色边框。

结果窗口显示出结果样式：

![](http://img.mukewang.com/52d3993b00010d6203900285.jpg)

## caption标签，为表格添加标题和摘要 ##
表格还是需要添加一些标签进行优化，可以添加标题和摘要。代码如下：
![](http://img.mukewang.com/52d3a1610001a42606940398.jpg)


摘要

摘要的内容是不会在浏览器中显示出来的。它的作用是增加表格的可读性(语义化)，使搜索引擎更好的读懂表格内容，还可以使屏幕阅读器更好的帮助特殊用户读取表格内容。

    语法：<table summary="表格简介文本">

标题

用以描述表格内容，标题的显示位置：表格上方。

     语法：

	<table>
    	<caption>标题文本</caption>
    	<tr>
        	<td>…</td>
        	<td>…</td>
        …
    	</tr>
		…
	</table>

## 使用a标签，链接到另一个页面 ##
使用a标签可实现超链接，它在网页制作中可以说是无处不在，只要有链接的地方，就会有这个标签。

语法：
    
    <a  href="目标网址"  title="鼠标滑过显示的文本">链接显示的文本</a>
例如：

    <a  href="http://www.imooc.com"  title="点击进入慕课网">click here!</a>
上面例子作用是单击click here!文字，网页链接到http://www.imooc.com这个网页。

title属性的作用，鼠标滑过链接文字时会显示这个属性的文本内容。这个属性在实际网页开发中作用很大，主要方便搜索引擎了解链接地址的内容（语义化更友好），如右侧案例代码（8-12行）。

注意：还有一个有趣的现象不知道小伙伴们发现了没有，只要为文本加入a标签后，文字的颜色就会自动变为蓝色（被点击过的文本颜色为紫色），颜色很难看吧，不过没有关系后面我们学习了css样子就可以设置过来（a{color:#000}),后面会详细讲解。

## 在新建浏览器窗口中打开链接 ##
a标签在默认情况下，链接的网页是在当前浏览器窗口中打开，有时我们需要在新的浏览器窗口中打开。

如下代码：

    <a href="目标网址" target="_blank">click here!</a>

## 使用mailto在网页中链接Email地址 ##
a标签还有一个作用是可以链接Email地址，使用mailto能让访问者便捷向网站管理者发送电子邮件。我们还可以利用mailto做许多其它事情。下面一一进行讲解，请看详细图示：
![](http://img.mukewang.com/52da4f2a000150b714280550.jpg)


注意：如果mailto后面同时有多个参数的话，第一个参数必须以“?”开头，后面的参数每一个都以“&”分隔。

下面是一个完整的实例:
![](http://img.mukewang.com/52da52200001e00e07930061.jpg)


在浏览器中显示的结果：

    发送
点击链接会打开电子邮件应用，并自动填写收件人等设置好的信息，如下图：
![](http://img.mukewang.com/52da5026000148a706850470.jpg)

## 认识<img>标签，为网页插入图片 ##
在网页的制作中为使网页炫丽美观，肯定是缺少不了图片，可以使用img标签来插入图片。

语法：

    <img src="图片地址" alt="下载失败时的替换文本" title = "提示文本">

举例：

    <img src = "myimage.gif" alt = "My Image" title = "My Image" />

讲解：

1、src：标识图像的位置；

2、alt：指定图像的描述性文本，当图像不可见时（下载不成功时），可看到该属性指定的文本；

3、title：提供在图像可见时对图像的描述(鼠标滑过图片时显示的文本)；

4、图像可以是GIF，PNG，JPEG格式的图像文件。

## 使用表单标签，与用户交互 ##
网站怎样与用户进行交互？答案是使用HTML表单(form)。表单是可以把浏览者输入的数据传送到服务器端，这样服务器端程序就可以处理表单传过来的数据。

语法：

    <form   method="传送方式"   action="服务器文件">
讲解：

1.form ：form标签是成对出现的，以form开始，以/form结束。

2.action ：浏览者输入的数据被传送到的地方,比如一个PHP页面(save.php)。

3.method ： 数据传送的方式（get/post）。

	<form    method="post"   action="save.php">
        <label for="username">用户名:</label>
        <input type="text" name="username" />
        <label for="pass">密码:</label>
        <input type="password" name="pass" />
	</form>
注意:

1、所有表单控件（文本框、文本域、按钮、单选框、复选框等）都必须放在<form></form>标签之间（否则用户输入的信息可提交不到服务器上哦！）。

2、method:post/get的区别这一部分内容属于后端程序员考虑的问题。感兴趣的小伙伴可以查看本小节的wiki，里面有详细介绍。

## 文本输入框、密码输入框 ##
当用户要在表单中键入字母、数字等内容时，就会用到文本输入框。文本框也可以转化为密码输入框。

语法：

    <form>
       <input type="text/password" name="名称" value="文本" />
    </form>
1、type：

   当type="text"时，输入框为文本输入框;

   当type="password"时, 输入框为密码输入框。

2、name：为文本框命名，以备后台程序ASP 、PHP使用。

3、value：为文本输入框设置默认值。(一般起到提示作用)

举例：

    <form>
      姓名：
      <input type="text" name="myName">
      <br/>
      密码：
      <input type="password" name="pass">
    </form>
在浏览器中显示的结果：
![](http://img.mukewang.com/52e4e9be000152ca05250275.jpg)

## 文本域，支持多行文本输入 ##
当用户需要在表单中输入大段文字时，需要用到文本输入域。

语法：


    <textarea  rows="行数" cols="列数">文本</textarea>
1、textarea标签是成对出现的，以textarea开始，/textarea结束。

2、cols ：多行输入域的列数。

3、rows ：多行输入域的行数。

4、在标签之间可以输入默认值。

举例：

	<form  method="post" action="save.php">
        <label>联系我们</label>
        <textarea cols="50" rows="10" >在这里输入内容...</textarea>
	</form>
注意：代码中的<label>标签在本章5-9中讲解。

在浏览器中显示结果：
![](http://img.mukewang.com/52e5b4040001f4af05760367.jpg)


注意这两个属性可用css样式的width和height来代替：col用width、row用height来代替。（这两个css样式在以后的章节会讲解）

## 使用单选框、复选框，让用户选择 ##
在使用表单设计调查表时，为了减少用户的操作，使用选择框是一个好主意，html中有两种选择框，即单选框和复选框，两者的区别是单选框中的选项用户只能选择一项，而复选框中用户可以任意选择多项，甚至全选。请看下面的例子:

语法：

    <input   type="radio/checkbox"   value="值"name="名称"   checked="checked"/>
1、type:

   当 type="radio" 时，控件为单选框

   当 type="checkbox" 时，控件为复选框

2、value：提交数据到服务器的值（后台程序PHP使用）

3、name：为控件命名，以备后台程序 ASP、PHP 使用

4、checked：当设置 checked="checked" 时，该选项被默认选中

如下面代码：
![](http://img.mukewang.com/52e5f7c60001a23f07360267.jpg)


注意：代码中的<label>标签在本章 5-9 中有讲解。

在浏览器中显示的结果：
![](http://img.mukewang.com/52e5f8010001159804900257.jpg)


注意:同一组的单选按钮，name 取值一定要一致，比如上面例子为同一个名称“radioLove”，这样同一组的单选按钮才可以起到单选的作用。

## 使用下拉列表框，节省空间 ##
下拉列表在网页中也常会用到，它可以有效的节省网页空间。既可以单选、又可以多选。如下代码：
![](http://img.mukewang.com/52e604590001ae4005270185.jpg)


讲解：

1、value：

![](http://img.mukewang.com/52e6037300015a9905030165.jpg)


2、selected="selected"：

设置selected="selected"属性，则该选项就被默认选中。

在浏览器中显示的结果：

![](http://img.mukewang.com/52e605340001014804520288.jpg)

## 使用下拉列表框进行多选 ##
下拉列表也可以进行多选操作，在select标签中设置multiple="multiple"属性，就可以实现多选功能，在 widows 操作系统下，进行多选时按下Ctrl键同时进行单击（在 Mac下使用 Command +单击），可以选择多个选项。如下代码：
![](http://img.mukewang.com/52e60c020001b7f805000178.jpg)


在浏览器中显示的结果：
![](http://img.mukewang.com/52e60c5d00013ced04900257.jpg)

## 使用提交按钮，提交数据 ##
在表单中有两种按钮可以使用，分别为：提交按钮、重置。这一小节讲解提交按钮：当用户需要提交表单信息到服务器时，需要用到提交按钮。

语法：

	<input   type="submit"   value="提交">
type：只有当type值设置为submit时，按钮才有提交作用

value：按钮上显示的文字

举例：
![](http://img.mukewang.com/52e613350001461604820109.jpg)


在浏览器中显示的结果：

![](http://img.mukewang.com/52e6126f0001496a04480218.jpg)

## 使用重置按钮，重置表单信息 ##
当用户需要重置表单信息到初始时的状态时，比如用户输入“用户名”后，发现书写有误，可以使用重置按钮使输入框恢复到初始状态。只需要把type设置为"reset"就可以。

语法：

	<input type="reset" value="重置">

type：只有当type值设置为reset时，按钮才有重置作用

value：按钮上显示的文字

举例：

![](http://img.mukewang.com/52e618680001a6b204570101.jpg)


在浏览器中显示的结果：

![](http://img.mukewang.com/52e6189e000186b604480218.jpg)


输入账号

![](http://img.mukewang.com/52e618bc00015a1004480218.jpg)

单击重置按钮

## form表单中的label标签 ##
小伙伴们，你们在前面学习表单各种控件的时候，有没有发现一个标签--label，这一小节就来揭晓它的作用。

label标签不会向用户呈现任何特殊效果，它的作用是为鼠标用户改进了可用性。如果你在 label 标签内点击文本，就会触发此控件。就是说，当用户单击选中该label标签时，浏览器就会自动将焦点转到和标签相关的表单控件上（就自动选中和该label标签相关连的表单控件上）。

语法：

	<label for="控件id名称">
注意：标签的 for 属性中的值应当与相关控件的 id 属性值一定要相同。

例子：

    <form>
      <label for="male">男</label>
      <input type="radio" name="gender" id="male" />
      <br />
      <label for="female">女</label>
      <input type="radio" name="gender" id="female" />
      <label for="email">输入你的邮箱地址</label>
      <input type="email" id="email" placeholder="Enter email">
    </form>
