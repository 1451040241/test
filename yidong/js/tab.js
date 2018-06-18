;(function($){
    alert('1')
    var Tab=function(tab){
    this.config={
          //触发事件，鼠标还是click
          "triggerType": "click",
          //用来定义类容切换效果，直接切换还是淡进淡2出
          "effect": "default",
          //默认展示几个tab
          "invoke": 2,
          //自动
          "auto": 5000
    }
    };
    Tab.pro.totype={

    };
    window.Tab=Tab;
})(jQuery);