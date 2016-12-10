Ajax Day03：
 * Ajax的增强操作
   * jQuery对Ajax的支持
     * 第一组：最基本的用法，最复杂
       * $.ajax( url, [setting] )方法
     * 第二组：
       * load( url, [data], [callback] )方法
       * $.get( url, [data], [callback], [type] )方法
         * 该方法要求请求方式必须是GET
       * $.post( url, [data], [callback], [type] )方法
         * 该方法要求请求方式必须是POST
     * 第三组（了解）：
       * $.getScript( url, [callback] )方法
         * 作用：动态读取JavaScript脚本代码
       * $.getJSON( url, [data], [callback] )方法
         * 作用：
	   * 只是用于读取JSON格式的数据内容
	   * 解决Ajax的跨域请求（了解） —— JSONP模式
   * 表单操作
 * 标准化的Ajax（了解）