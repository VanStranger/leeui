leeui.prototype.table=new (function(){
    var data=[];
    var limit=20;
    var page=1;
    var pagesize=1;
    var obj={};
    var amount=0;
    Object.defineProperty(this, "data", {
        get: function () { return data; },
        set: function (value) { data = value; this.render(); }
    });
    Object.defineProperty(this, "limit", {
        get: function () { return limit; },
        set: function (value) { limit = value; this.changedata(); }
    });
    Object.defineProperty(this, "page", {
        get: function () { 
            return page>pagesize?1:parseInt(page); 
        },
        set: function (value) { page = value>pagesize?1:parseInt(value);this.changedata(); }
    });
    Object.defineProperty(this,"amount",{
        get:function(){return parseInt(amount);},
        set:function(value){amount=value;pagesize=Math.ceil(amount/limit);this.renderpage();}
    })
    this.changedata=function(){
        if(obj){
            obj.datachange(page,limit);
        }
    };
    this.render=function(obj1){
        // obj={
        //     elem:"#table",
        //     url:"",//远程获取渲染数据
        //     cols:[
        //         {title:"昵称",value:"row.name",},
        //         { title: "昵称", value: "row.name", },
        //         { title: "昵称", value: "row.name", },
        //     ],
        // }

        if(obj1){
            obj=obj1;
        }
        var thead="<thead>",tbody="<tbody>";

        if(data.length==0){
            tbody="<tr><td align='center'>暂无数据</td></tr>";
        }else{
            tbody="";
            var colsarr=[];
            for(var i=0,len=data.length;i<len;i++){
                var row=data[i];
                tbody+="<tr>";
                colsarr=obj.cols(data[i]);
                for(var j=0,len1=colsarr.length;j<len1;j++){
                    if(i==0){
                        thead += "<th "+ (colsarr[j].width?"style='width:"+colsarr[j].width+"'":"") + " >" + colsarr[j].title + "</th>";
                    }
                    tbody += "<td data-label='" + colsarr[j].title + "'>" + colsarr[j].value+"</td>";
                }
                tbody+="</tr>";
            }
            thead+="</thead>";
        }
        tbody+="</tbody>";
        var table=document.createElement("table");
        table.className="l-table";
        table.innerHTML=thead+tbody;
        document.querySelector(obj.elem).innerHTML="";
        document.querySelector(obj.elem).appendChild(table);
        this.renderpage();
    };
    this.renderpage=function(){
        var that=this;
        var pageobj=document.createElement("div");
        pageobj.className="l-table-page";
        var pagehtml=`
            <div class="l-box l-laypage l-laypage-default">
                <a href="javascript:;" class="l-tablepage-btn l-laypage-prev ${page==1?'l-disabled':''}" data-page="${page-1}">
                    <i class="l-icon iconfont  icon-left"></i>
                </a>
            `;
            if(pagesize==1){
                pagehtml+=`
                    
                    <a href="javascript:;" data-page="1" class="l-tablepage-btn  active">1</a>
                    
                `;
            }else if(pagesize<7){
                for(var i=1;i<=pagesize;i++){

                    pagehtml+=`             
                        <a href="javascript:;" data-page="${i}" class="l-tablepage-btn  ${page==i?'active':''}">${i}</a> 
                    `;
                }
            }else{
                if(page<4){
                    pagehtml+=`
                    
                    <a href="javascript:;" data-page="1" class="l-tablepage-btn  ${page==1?'active':''}">1</a>
                    <a href="javascript:;" data-page="2" class="l-tablepage-btn  ${page==2?'active':''}">2</a>
                    <a href="javascript:;" data-page="3" class="l-tablepage-btn  ${page==3?'active':''}">3</a>
                    <a href="javascript:;" data-page="4" class="l-tablepage-btn">4</a>
                    <span class="l-laypage-spr">…</span>
                    <a href="javascript:;" data-page="${pagesize}" class="l-tablepage-btn ">${pagesize}</a>
                    
                    `;
                }else if(page>pagesize-2){
                    pagehtml+=`
                    
                    <a href="javascript:;" data-page="1" class="l-tablepage-btn  ">1</a>
                    <span class="l-laypage-spr">…</span>
                    <a href="javascript:;" data-page="${pagesize-3}" class="l-tablepage-btn ${page==pagesize-3?'active':''}">${pagesize-3}</a>
                    <a href="javascript:;" data-page="${pagesize-2}" class="l-tablepage-btn ${page==pagesize-2?'active':''}">${pagesize-2}</a>
                    <a href="javascript:;" data-page="${pagesize-1}" class="l-tablepage-btn ${page==pagesize-1?'active':''}">${pagesize-1}</a>
                    <a href="javascript:;" data-page="${pagesize}" class="l-tablepage-btn ${page==pagesize?'active':''}">${pagesize}</a>
                    
                    `;
                }else{
                    pagehtml+=`
                    
                    <a href="javascript:;" data-page="1" class="l-tablepage-btn  ">1</a>
                    <span class="l-laypage-spr">…</span>
                    <a href="javascript:;" data-page="${page-1}" class="l-tablepage-btn ${page==page-1?'active':''}">${page-1}</a>
                    <a href="javascript:;" data-page="${page}" class="l-tablepage-btn ${page==page?'active':''}">${page}</a>
                    <a href="javascript:;" data-page="${page+1}" class="l-tablepage-btn ${page==page+1?'active':''}">${page+1}</a>
                    <span class="l-laypage-spr">…</span>
                    <a href="javascript:;" data-page="${pagesize}" class="l-tablepage-btn ">${pagesize}</a>
                    
                `;
                }
            }
        
                // <a href="javascript:;" class="l-tablepage-btn l-laypage-prev l-disabled" data-page="${page-1}">
                //     <i class="l-icon iconfont  icon-left"></i>
                // </a>
                // <a href="javascript:;" data-page="1" class="l-tablepage-btn">1</a>

                // <a href="javascript:;" data-page="${page}" class="l-tablepage-btn active">${page}</a>
                // <a href="javascript:;" data-page="3" class="l-tablepage-btn">3</a>
                // <span class="l-laypage-spr">…</span>
                // <a href="javascript:;" class="l-tablepage-btn l-laypage-last" title="尾页" data-page="${pagesize}">${pagesize}</a>
                // <a href="javascript:;" class="l-tablepage-btn l-laypage-next" data-page="${page+1}">
                //     <i class="l-icon iconfont  icon-right"></i>
                // </a>

                pagehtml+=`
                <a href="javascript:;" class="l-tablepage-btn l-laypage-next  ${page==pagesize?'l-disabled':''}" data-page="${page+1}">
                    <i class="l-icon iconfont  icon-right"></i>
                </a>
                <span class="l-laypage-skip">到第
                    <input type="text" min="1" value="1" class="l-input">页
                    <button type="button" class="l-tablepagejump-btn">确定</button>
                </span>
                <span class="l-laypage-count">共 ${amount} 条</span>
                <span class="l-laypage-limits">
                    <select lay-ignore="" class="tablepage-limit-change">
                        <option value="10">10 条/页</option>
                        <option value="20" selected="">20 条/页</option>
                        <option value="30">30 条/页</option>
                        <option value="40">40 条/页</option>
                        <option value="50">50 条/页</option>
                        <option value="60">60 条/页</option>
                        <option value="70">70 条/页</option>
                        <option value="80">80 条/页</option>
                        <option value="90">90 条/页</option>
                    </select>
                </span>
            </div>
        `;
        pageobj.innerHTML=pagehtml;
        //移除原dom

        var pagedom0=document.querySelector(obj.elem+" .l-table-page");
        if(pagedom0){
            pagedom0.parentNode.removeChild(pagedom0);
        }


        document.querySelector(obj.elem).appendChild(pageobj);

        //页码点击
        var pagebtns=document.querySelectorAll(obj.elem+ " .l-tablepage-btn");
        for(var i=0,len=pagebtns.length;i<len;i++){
            pagebtns[i].addEventListener("click",function(e){
                if(!this.getAttribute("l-disabled")){
                    var page=this.getAttribute("data-page");
                    that.page=parseInt(page);
                }
            });
        }
        //页面跳转点击
        document.getElementsByClassName("l-tablepagejump-btn")[0].addEventListener("click",function(e){
            var page=this.previousSibling.previousSibling.value;
            that.page=parseInt(page);
        });

        //页面limit变化事件
        document.querySelector(obj.elem+" .tablepage-limit-change").onchange=function(){
            var limit=this.value;
            that.limit=limit;
        }

    }
})();
