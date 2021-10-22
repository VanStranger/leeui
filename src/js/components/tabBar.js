// var leeui=function(){};
leeui.prototype.tabBar = function () { 
  var elem=null;
  var activeKey=0;
  var data=[
    {"icon":"iconhome-fill","title":"首页","href":"","fn":function(){
      console.log("click1");
    }},
    {"icon":"iconhome-fill","title":"首页1","href":"","fn":function(){
      console.log("click2");
    }},
    {"icon":"iconhome-fill","title":"首页2","href":"","fn":function(){
      console.log("click3");
    }},
    {"icon":"iconhome-fill","title":"首页3","href":"","fn":function(){
      console.log("click4");
    }},

  ];
  this.onChange=function(){
    activeKey=index
    that.render();
  };
  this.renderItem=function(item,index){
    var that=this;
    var dom=document.createElement("div");
    dom.className=`l-tabBarItem ${index===activeKey?'l-tabBarItemActive':''}`;
    dom.innerHTML= `
        <span class="iconfont ${item.icon} l-tabBarItem-icon"></span>
        <p class="l-tabBarItem-title">${item.title}</p> 
    `;
    dom.onclick=function(){that.onChange(item,index);};
    return dom;
  };
  Object.defineProperty(this, "activeKey", {
    get: function () { return activeKey; },
    set: function (value) { activeKey = parseInt(value) || 0; this.render(); }
  });
  Object.defineProperty(this, "data", {
    get: function () { return data; },
    set: function (value) { data = value; this.render(); }
  });
  
  
  this.render=function(config={}){
    if(config.renderItem && Object.prototype.toString.apply(config.renderItem)==="[object Function]"){
      this.renderItem=config.renderItem;
    }
    if(config.onChange && Object.prototype.toString.apply(config.onChange)==="[object Function]"){
      this.onChange=config.onChange;
    }
    if(config.data && Object.prototype.toString.apply(config.data)==="[object Array]"){
      data=config.data;
    }
    if(config.elem){
      elem=config.elem;
    }
    if(config.activeKey){
      activeKey=parseInt(config.activeKey);
      if(activeKey<0 || activeKey>=data.length){
        activeKey=0;
      }
    }
    var tabBar=document.createElement("div");
    tabBar.className="l-tabBar";
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      var dom=this.renderItem(item,index);
      tabBar.appendChild(dom);
    }
    document.querySelector(elem).appendChild(tabBar);
  }
}