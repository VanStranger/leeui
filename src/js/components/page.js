
leeui.prototype.page=function(){
    var elem="";
    var now=1;
    var max=1;
    var pageHtml="";
    var size="normal";
    Object.defineProperty(this, "now", {
        get: function () { return now; },
        set: function (value) { now = parseInt(value) || 1; this.render(); }
    });
    Object.defineProperty(this, "max", {
        get: function () { return max; },
        set: function (value) { max = parseInt(value) || 1; this.render(); }
    });
    this.onPage=function(e,now,max){
        
    };
    this.render=function(config={}){
        if(config.elem){
            elem=config.elem;
        }
        if(config.now){
            now=parseInt(config.now);
        }
        if(config.max){
            max=parseInt(config.max);
        }
        if(config.size){
            size=config.size;
        }
        if(config.onPage && typeof config.onPage==="function"){
            console.log(config.onPage);
            this.onPage=config.onPage;
        }
        console.log(this.onPage);
        console.log(config.onpage);
        console.log(config.onPage);

        if(elem){
            var elems=document.querySelectorAll(elem);
            if(elems.length){
                console.log(this);
                pageHtml=getPage(now,max);
                console.log()
                var that=this;
                elems.forEach(elem => {
                    elem.innerHTML=pageHtml;
                    var pageAs=elem.getElementsByClassName("pagea");
                    for(var i=0,len=pageAs.length;i<len;i++){
                        var pageA=pageAs[i];
                        pageA.addEventListener("click",function(e){
                            var page = parseInt(this.getAttribute("page")) || 1;
                            that.onPage(e, page,that.max);
                        })
                    };
                });
                
            }
        }
    };
    var getPage= function(now , max) {
        var pre="",next="",body="";
        switch (now) {
            case 1:
                pre = "";
                if (max == 1) {
                    next = "";
                } else {
                    next = "<li class='pageli sib'><a class='pagea' page='"+(now + 1)+"' href='###'>下一页</a></li>";
                }
                break;
            case max:
                next = "";
                pre = "<li class='pageli sib'><a class='pagea' page='"+(now - 1)+"'  href='###'>上一页</a></li>";
                break;
            default:
                pre = "<li class='pageli sib'><a class='pagea' page='"+(now - 1)+"'  href='###'>上一页</a></li>";
                next = "<li class='pageli sib'><a class='pagea' page='"+(now + 1)+"'  href='###'>下一页</a></li>";
                break;
        }
        switch (true) {
            case now < 5:
                if (max > 7) {
                    body = "";
                    for (i = 1; i < 6; i++) {
                        if (i == now) {
                            body+= "<li class='pageli active'><a class='pagea' page='"+(i)+"'  href='###'>"+i+"</a></li>";
                        } else {
                            body+= "<li class='pageli'><a class='pagea' page='"+(i)+"'  href='###'>"+i+"</a></li>";
                        }
                    }
                    console.log(max);
                    body+= "<li class='pageli'>···</li><li class='pageli'><a class='pagea' page='"+(max)+"' href='###'>"+max+"</a></li>";
                } else {
                    body = "";
                    for (i = 1; i <= max; i++) {
                        if (i == now) {
                            body+= "<li class='pageli active'><a class='pagea' page='"+(i)+"'  href='###'>"+i+"</a></li>";
                        } else {
                            body+= "<li class='pageli'><a class='pagea' page='"+(i)+"'  href='###'>"+i+"</a></li>";
                        }
                    }
                }
                break;
            case (now > max - 3 && now > 4):
                body = "<li class='pageli'><a class='pagea' page='"+(1)+"'  href='###'> 1</a></li><li class='pageli'>···</li>";
                for (i = now - 3; i <= max; i++) {
                    console.log(i);
                    if (i == now) {
                        body+= "<li class='pageli active'><a class='pagea' page='"+(i)+"'  href='###'>"+i+"</a></li>";
                    } else {
                        body+= "<li class='pageli'><a class='pagea' page='"+(i)+"'  href='###'>"+i+"</a></li>";
                    }
                }
                break;
            default:
                console.log(max);
                body = "<li class='pageli'><a class='pagea' page='"+(1)+"'  href='###'>1</a></li><li class='pageli'>···</li>";
                for (i = now - 3; i <= now + 3; i++) {
                    if (i == now) {
                        body+= "<li class='pageli active'><a class='pagea' page='"+(i)+"'  href='###'>"+i+"</a></li>";
                    } else {
                        body+= "<li class='pageli'><a class='pagea' page='"+(i)+"'  href='###'>"+i+"</a></li>";
                    }
                }
                body+= "<li class='pageli'>···</li><li class='pageli'><a class='pagea' page='"+(max)+"' href='###'>"+max+"</a></li>";
                break;
        }
        return "<div class=\"pagediv " + (size==='normal'?'':size) + "\">" +pre+body+next+"</div>";

    };
};