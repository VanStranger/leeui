l.table=new (function(){
    var data=[];
    var limit=20;
    var page=1;
    var obj={};
    Object.defineProperty(this, "data", {
        get: function () { return data; },
        set: function (value) { data = value; this.render(); }
    });
    Object.defineProperty(this, "limit", {
        get: function () { return limit; },
        set: function (value) { limit = value; this.changedata(); }
    });
    Object.defineProperty(this, "page", {
        get: function () { return page; },
        set: function (value) { page = value;this.changedata(); }
    });
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
            tbody="zanwushuju";
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
                <a href="###" class="l-tablepage-btn l-laypage-prev l-disabled" data-page="0">
                    <i class="l-icon iconfont  icon-left"></i>
                </a>
                <a href="###" data-page="1" class="l-tablepage-btn active">1</a>
                <a href="###" data-page="2" class="l-tablepage-btn">2</a>
                <a href="###" data-page="3" class="l-tablepage-btn">3</a>
                <span class="l-laypage-spr">…</span>
                <a href="###" class="l-tablepage-btn l-laypage-last" title="尾页" data-page="100">100</a>
                <a href="###" class="l-tablepage-btn l-laypage-next" data-page="2">
                    <i class="l-icon iconfont  icon-right"></i>
                </a>
                <span class="l-laypage-skip">到第
                    <input type="text" min="1" value="1" class="l-input">页
                    <button type="button" class="l-tablepagejump-btn">确定</button>
                </span>
                <span class="l-laypage-count">共 1000 条</span>
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

        document.querySelector(obj.elem).appendChild(pageobj);
        var pagebtns=document.querySelectorAll(obj.elem+ " .l-tablepage-btn");
        for(var i=0,len=pagebtns.length;i<len;i++){
            pagebtns[i].onclick=function(e){
                if(!this.getAttribute("l-disabled")){
                    that.page=this.getAttribute("data-page");
                }
            }
        }

    }
})();
