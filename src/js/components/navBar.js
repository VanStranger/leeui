// var leeui=function(){};
leeui.prototype.navBar = function () { 
  var elem=null;
  var title="标题";

  this.renderLeftNav=function(){
    var dom=document.createElement("a");
    dom.className=`l-btn l-btn-text`;
    dom.innerHTML= `
      <span class="l-icon iconleft"></span>
      <span class="l-text">返回</span>
    `;
    dom.onclick=function(){
      window.history.go(-1);
    };
    return dom;
  };
  this.renderRightNav=function(){
    // var dom=document.createElement("a");
    // dom.className=`l-btn l-btn-text`;
    // dom.innerHTML= `
    //   <span class="l-icon iconellipsis"></span>
    // `;
    // dom.onclick=function(){
    //   console.log("click");
    // };
    // return dom;
    return null;
  };
  
  Object.defineProperty(this, "title", {
    get: function () { return title; },
    set: function (value) { title = value; this.render(); }
  });
  
  
  
  this.render=function(config={}){
    if(config.renderRightNav && Object.prototype.toString.apply(config.renderRightNav)==="[object Function]"){
      this.renderRightNav=config.renderRightNav;
    }
    if(config.renderLeftNav && Object.prototype.toString.apply(config.renderLeftNav)==="[object Function]"){
      this.renderLeftNav=config.renderLeftNav;
    }
    if(config.title){
      title=config.title;
    }
    if(config.elem){
      elem=config.elem;
    }
    
    var navBar=document.createElement("div");
    navBar.className="l-navBar";
    var navBarBack=document.createElement("div");
    navBarBack.className="l-navBar l-back";
    navBar.innerHTML=`
      <div class="l-navBar-title">
        ${title}
      </div>
    `;
    var leftNode=this.renderLeftNav();
    var leftNav=document.createElement("div");
    leftNav.className='l-navBar-leftnav';
    if(leftNode){
      leftNav.appendChild(leftNode);
    }
    navBar.insertBefore(leftNav,navBar.firstChild);
    
    var rightNode=this.renderRightNav();
    var rightNav=document.createElement("div");
    rightNav.className='l-navBar-rightnav';
    if(rightNode){
      rightNav.appendChild(rightNode);
    }
    navBar.appendChild(rightNav);
    document.querySelector(elem).appendChild(navBar);
    document.querySelector(elem).appendChild(navBarBack);
  }
}