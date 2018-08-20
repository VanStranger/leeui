l.table=new (function(){
    var data=[];
    var amount=20;
    var page=1;
    var obj={};
    Object.defineProperty(this, "data", {
        get: function () { return data; },
        set: function (value) { data = value; this.render(); }
    });
    Object.defineProperty(this, "amount", {
        get: function () { return amount; },
        set: function (value) { amount = value; }
    });
    Object.defineProperty(this, "page", {
        get: function () { return page; },
        set: function (value) { page = value; }
    });
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
        // for (var j = 0, len1 = obj.cols.length; j < len1; j++) {
        //     thead += "<td>" + obj.cols[j].title + "</td>";
        // }
        // thead+="</thead>";

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
                        thead += "<th>" + colsarr[j].title + "</th>";
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

    }
})();
