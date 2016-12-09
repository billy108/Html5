Ajax Day02：
 * XML
   * 概述：
     * XML译为可扩展标记语言，全称eXtensible  Markup  Language。
     * 发展过程：
       * 基于XML基础上，出现XHTML语言 - 替代HTML。
       * XHTML 发展到2.0，XML野心破灭了。
     * 作用：
       * 用于数据的存储（数据的传输 -请求和响应）
       * 用于配制文件（了解）
     * 特点：
       * 使用标签，XML的标签允许自定义的。
       * 标签同样具有文本和属性。
     * XML解释：利用DOM解析
   * 语法：
     * XML文件的扩展名为".xml"
     * XML声明：
       * 注意：
         * 声明必须从文档的0行0列位置开始
	 * 声明必须为<?xml开头，以?>结束
       * 属性：
         * version属性：表示当前XML文件的版本，固定为1.0.
	 * encoding属性：表示当前XML文件的编码。
     * 元素
       * XML标签对大小写敏感。
       * 元素具有属性和文本，包含其他元素。
     * 属性：
       * 属性值必须用引号引起来，单双引号均可使用。
   * XML应用：
     * JavaScript解析XML
       * 使用JavaScript中的DOM（XML DOM）解析XML
       * 通过XML DOM对象解析对应的XML内容：
         * 其他浏览器
	   var parser = new DOMParser();
	   parser.parseFromString( xml, type );
	   * xml参数：指定当前要解析的XML名称。
	   * type参数：指定当前要解析的XML类型。（"application/xml"或"text/xml"）
	   * 返回值：表示解析XML后得到可以被DOM解析的内容。
	 * IE浏览器
	   var xmlDoc = new 
		      ActiveXObject("Microsoft.XMLDOM");
       * 利用DOM解析XML：
         * getElementById()和getElementsByName()方法不能使用。
	 * getElementsByTagName()方法是有效的。
       * 注意：
         * 目前W3C最新规范不允许读取本地的XML文档，只能读取XML格式的字符串。
	 * 之前的W3C规范是允许读取本地的XML文档。
     * Ajax解析XML
       * Ajax的请求参数与响应数据更改为XML格式。
       * 请求参数的格式为XML：
         * 参数的类型依旧是字符串类型。
	 * 该字符串的内容为XML格式。
       * 响应数据的格式为XML：
         * 在Ajax中使用xhr对象的responseXML属性接收。
	   * （推荐）接收的数据格式已经是可以解析的XML格式，不需转换。
	   * 使用responseText来接收，利用XML解析器手动转换。
	 * 利用XML DOM解析
 * JSON
   * 概述：
     * 定义：是一种轻量级的数据交换格式。
     * 特点：
       * 易于程序员阅读
       * 易于计算机解析
     * 用途：用于数据交换
     * 结构：
       * JavaScript Object：{ key : value }
       * JavaScript Array：[ 1,2,3,4 ]
     * JSON文件的扩展名为".json"
   * 使用：
     * JavaScript中如何解析JSON格式：
       * eval()方法：将JSON格式的字符串转换成Object或Array。
         * 注意：eval("("+JSON格式的字符串+")")
	    原因：不加"()"时，可能导致JSON的转换失败。
       * JSON.parse()方法：将JSON格式的字符串转换成Object或Array。
       
       * JSON.stringify( jsObj )方法：将Object或Array转换成JSON格式的字符串
         * 注意：IE 7 不能使用JSON.parse()和JSON.stringify()
   * 应用：
     * Ajax中使用JSON（二级联动）