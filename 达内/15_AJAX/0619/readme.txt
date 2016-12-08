Ajax Day01:
 * 自我介绍:
   * 姓名:金云龙
   * 联系方式:
     * 微信:jyl_king
     * QQ:82328769
     * email: 82328769@qq.com
 * 课程安排:
   * 习惯:
     * 笔记尽量详细
     * 工作中比较常用、重要的
   * Ajax：三天+1天
     * Ajax
     * XML+JSON
     * jQuery的Ajax+RESTful

Ajax:
 * Ajax概述:
   * Ajax的原理
     * 什么是Ajax
       * 异步和同步
         * 同步:
	   * 客户端页面向服务器端发送请求，直到服务器端将响应发送回来，这个过程中，页面是不能做任何事情。
	 * 异步:
	   * 客户端页面向服务器端发送请求，直到服务器端将响应发送回来，这个过程中，页面可以去做任何事情。
       * Ajax的定义:
         (不严格)客户端与服务器端进行交互,而无需刷新当前页面的技术.
       * 作用:
         * 可以实现同步交互所不能完成的功能，提高同步实现的效果。
	 * 页面减少了，只用一个页面即可。
       * 缺点:
         * 小则怡情，大则伤身（Ajax的异步实现不能过多使用）
     * Ajax的原理：参考PPT P6
     * Ajax的对象:
       * Ajax的核心对象:XMLHttpRequest（XHR）对象
         * IE使用的是XMLHTTP对象
       * 浏览器兼容性:
         * 判断当前用户的浏览器是IE还是其他浏览器
       * 创建Ajax对象:
          if(window . XMLHttpRequest){
	      //其他浏览器
	      xhr = new XMLHttpRequest();
	  }else{
	     //IE8以上
	     xhr = new ActiveXObject('Microsoft . XMLHttp');
	  }
   * Ajax对象的属性和方法
     * 方法
       * open( method, url, async )方法:向服务器端创建一个请求
         * method参数：指定当前请求的方式，GET和POST。
	 * url参数：指定当前请求的服务器端地址。
	 * async参数：指定当前请求是否为异步，Boolean值。
	    * true：表示的是异步。
	    * false：表示的是同步，目前W3C的最新规范不建议使用同步。
       * send()方法：发送请求的参数。
         * 参数：请求参数
     * 属性
       * readyState：请求的状态
         * 0 - 尚未初始化
	 * 1 - 正在发送请求
	 * 2 - 请求完成
	 * 3 - 正在响应
	 * 4 - 响应完毕
       * status：服务器端返回的状态码
         * 404 - 找不到网页
	 * 200 - OK
	 * 302 - 请求转发
	 * 304 - 请求缓存
	 * 500 - 内部服务器错误
       * responseText：表示的是服务器端返回的文本内容。
       * responseXML：表示的是服务器端返回的XML格式内容。
     * 事件
       * onreadystatechange：用于监听服务器端的状态变化
         * 当readyState属性的值变化时，会触发onreadystatechange事件
 * Ajax的作用:
   * GET请求：
     * 创建Ajax的核心对象：略
     * 创建请求：
        open( method , url )：
	* 如果GET方式的话，请求参数需要添加在URL后面
     * 发送请求
       send()方法：
       * 如果GET方式的话，send( null )
     * 接收响应
       onreadystatechange事件
       readyState和status属性：
       * readyState属性：Ajax从请求到响应的整个过程
       * status属性：告诉我们Ajax请求是否成功
       * responseText属性：接收服务器端的响应
   * POST请求：（与GET方式的区别）
     * open()方法中的method参数为POST
     * 如果请求方式为POST的话，send()方法可以发送请求参数
     * 设置请求头信息：
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
 * Ajax的应用:

 * 扩展：
   * W3C：www.w3.org
   * WHATWG：www.whatwg.org
   * Mozilla Developer

   * 前端网\大前端
   * 手机软件：推酷