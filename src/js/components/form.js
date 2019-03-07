l.form={
        l_forms : [],


        selectfns:[],
        onSelect:function(filter,fn){
            if(!fn){
                fn=function(){

                };
            }
            this.selectfns.push([filter,fn]);
        },
        onSelectFn:function(filter,value,title){
            var filter,fn;
            for(var i=0,len=this.selectfns.length;i<len;i++){
                infilter=this.selectfns[i][0];
                fn=this.selectfns[i][1];
                if(!infilter || infilter===filter){
                    fn(value,title);
                }
            }
        },

        submitfns:[],
        onSubmit:function(filter,fn){
            if(!fn){
                fn=function(){

                };
            }
            this.submitfns.push([filter,fn]);
        },
        onSubmitFn:function(filter,data){
            var filter,fn;
            for(var i=0,len=this.submitfns.length;i<len;i++){
                infilter=this.submitfns[i][0];
                fn=this.submitfns[i][1];
                if(!infilter || infilter===filter){
                    fn(value,title);
                }
            }
        },


        renderSelect:function(){
            //select
            var that=this;
            var l_selectobjs=[],selectdivs=[];
            for (var i = 0, len = this.l_forms.length; i < len; i++) {
                var l_selects = this.l_forms[i][0].getElementsByTagName("select");
                for (var j = 0, select_len = l_selects.length; j < select_len; j++) {
                    l_selects[j].onchange=function(){
                        that.renderSelect();
                    }
                    var l_options=l_selects[j].getElementsByTagName("option");
                    var l_select_search=l_selects[j].getAttribute("l-search")===null?false:true;
                    var l_select_title=l_selects[j].options.length?l_selects[j].options[0].innerText:"";
                    selectdivs[selectdivs.length] = document.createElement("div");
                    selectdivs[selectdivs.length-1].className='l-unselect l-form-select';
                    selectdivhtml ="";
                    for(var k=0,l_op_len=l_options.length;k<l_op_len;k++){
                        var l_op_value=l_options[k].getAttribute("value");
                        var l_op_title=l_options[k].innerText;
                        var isselected=l_options[k].selected;
                        if(!l_op_value && !l_op_title){
                            selectdivhtml +='<dd l-value="" class="l-select-tips">请选择</dd>';
                        }else{
                            isselected && (l_select_title=l_op_title);
                            selectdivhtml +='<dd l-value="'+l_op_value+'" class="'+ (isselected?"l-this":"") +'">'+l_op_title+'</dd>';

                        }

                    }
                    selectdivhtml =         '<div class="l-select-title">'+
                                                '<input type="text" placeholder="请选择" value="'+l_select_title+'" '+(l_select_search?'':'readonly=""')+' class="l-input l-unselect l-select-searchinput">'+
                                                '<i class="l-edge"></i>'+
                                            '</div>'+
                                            '<dl class="l-anim l-anim-upbit" style="">'+selectdivhtml;
                    selectdivhtml+='</dl>';
                    selectdivs[selectdivs.length-1].innerHTML=selectdivhtml;
                    selectdivs[selectdivs.length-1].setAttribute("l-filter",l_selects[j].getAttribute("l-filter"));
                    l_selectobjs[l_selectobjs.length]=selectdivs[selectdivs.length-1];

                    var previousobj=l_selects[j].previousElementSibling;
                    if(previousobj && previousobj.className.match("l-form-select")){
                        previousobj.parentNode.removeChild(previousobj);
                    }
                    l_selects[j].parentNode.insertBefore(selectdivs[selectdivs.length-1],l_selects[j]);
                }
            }

            for(var l=0,selectdivslen=selectdivs.length;l<selectdivslen;l++){
                //select 搜索
                var l_select_searchinput=selectdivs[l].getElementsByClassName("l-select-searchinput");
                console.log(l_select_searchinput);
                var filter=selectdivs[l].getAttribute("l-filter");
                var s_dds=selectdivs[l].getElementsByTagName('dd');
                l_select_searchinput[0].oninput=(function(){
                    return function(e){
                        var v=this.value;
                        for(var i=0;i<s_dds.length;i++){
                            if(s_dds[i].innerText.indexOf(v)===-1){
                                if(s_dds[i].className.indexOf("l-hide")===-1){
                                    s_dds[i].className=s_dds[i].className+" l-hide";
                                }
                            }else{
                                s_dds[i].className=s_dds[i].className.replace(/\sl\-hide/g,"");
                                s_dds[i].className=s_dds[i].className.replace(/l\-hide\s/g,"");
                            }
                        }
                    }
                })(s_dds);
                //select 切换
                for(var i=0,len=s_dds.length;i<len;i++){
                    s_dds[i].onclick=(function(l,filter){
                        return function(e){
                            var value=this.getAttribute("l-value");
                            var title=this.innerText;
                            selectdivs[l].getElementsByTagName("input")[0].value=title;
                            selectdivs[l].className = selectdivs[l].className.replace(" l-form-selected", "");
                            if(this.className=="l-select-tips"){
                                return;
                            }
                            var siblings=this.parentNode.children;
                            for(var i=0,len=siblings.length;i<len;i++){
                                if(siblings[i]==this){
                                    this.className+=" l-this";
                                    continue;
                                }
                                siblings[i].className=siblings[i].className.replace("l-this","");
                            }
                            var se_options=selectdivs[l].nextSibling.getElementsByTagName("option");
                            var select1=selectdivs[l].nextSibling;
                            for(var j=0,se_o_len=se_options.length;j<se_o_len;j++){
                                var v=se_options[j].getAttribute("value");
                                if(v==value){
                                    se_options[j].setAttribute("selected", true);
                                }else{
                                    se_options[j].removeAttribute("selected");
                                }
                            }
                            if(select1.fireEvent)  
                                select1.fireEvent("onchange")  
                            else  if(select1.onchange)
                                select1.onchange()
                            that.onSelectFn(filter,value,title);

                            }
                    })(l,filter);
                }
            }

            //select 下拉菜单
            var l_selectTitles = document.getElementsByClassName("l-select-title");
            for (var i = 0, len = l_selectTitles.length; i < len; i++) {
                l_selectTitles[i].onclick = function(e) {
                    var p = this.parentNode;
                    if (p.className.indexOf("l-form-selected") == -1) {
                        p.className += " l-form-selected";
                    } else {
                        p.className = p.className.replace(" l-form-selected", "");
                    }
                }
            }
        },
        rendeRadioCheckbox(){
            var that=this;
            for (var i = 0,len= this.l_forms.length;i<len;i++) {
                var l_inputs=this.l_forms[i][0].getElementsByTagName("input");
                for (var j = 0, input_len = l_inputs.length; j < input_len; j++) {
                    switch(l_inputs[j].getAttribute("type")){
                        //radio
                        case "radio":
                            l_inputs[j].onchange=function(){
                                that.rendeRadioCheckbox();
                            }

                            //渲染radio
                            var r_title=l_inputs[j].getAttribute('title');
                            var r_value=l_inputs[j].getAttribute("value");
                            var r_name=l_inputs[j].getAttribute("name");
                            var radiodiv = document.createElement("div");
                            if(l_inputs[j].checked){
                                radiodiv.className='l-form-radio l-form-radioed';
                                radiodiv.innerHTML = '<i class="l-anim l-icon l-anim-scaleSpring icon-radiochecked"></i><div>'+r_title+'</div>';
                            }else{
                                radiodiv.className='l-form-radio';
                                radiodiv.innerHTML = '<i class="l-anim l-icon icon-radio"></i><div>'+r_title+'</div>';

                            }
                            var previousobj=l_inputs[j].previousElementSibling;
                            if(previousobj && previousobj.className.match("l-form-radio")){
                                previousobj.parentNode.removeChild(previousobj);
                            }
                            radiodiv.setAttribute("l-value", r_value);
                            radiodiv.setAttribute("l-name", r_name);
                            l_inputs[j].parentNode.insertBefore(radiodiv,l_inputs[j]);
                            radiodiv.onclick=function(e){
                                var radioname=this.getAttribute("l-name");
                                var r_value=this.getAttribute("l-value");
                                var l_radionames=document.getElementsByName(radioname);
                                for(var k=0,l_radioname_len=l_radionames.length;k<l_radioname_len;k++){
                                    if(l_radionames[k].getAttribute("value")==r_value){
                                        l_radionames[k].setAttribute("checked", true);
                                    }else{
                                        l_radionames[k].removeAttribute("checked");
                                    }
                                }
                                var radiodivs=document.getElementsByClassName("l-form-radio");
                                for(var k=0,l_radioname_len=radiodivs.length;k<l_radioname_len;k++){
                                    radiodivs[k].className=radiodivs[k].className.replace("l-form-radioed","");
                                    var radio_icon_obj=radiodivs[k].getElementsByClassName("l-icon")[0];
                                    radio_icon_obj.className=radio_icon_obj.className.replace("l-anim-scaleSpring","");
                                    radio_icon_obj.className = radio_icon_obj.className.replace("icon-radiochecked", "icon-radio");
                                }


                                this.className+=" l-form-radioed";
                                this.getElementsByClassName("l-icon")[0].className+=" l-anim-scaleSpring";
                                this.getElementsByClassName("l-icon")[0].className = this.getElementsByClassName("l-icon")[0].className.replace("icon-radio","icon-radiochecked" );
                                // this.setAttribute("checked",true);
                            }
                            break;
                        case "checkbox":
                            l_inputs[j].onchange=function(){
                                that.rendeRadioCheckbox();
                            }
                            //渲染radio
                            var c_title=l_inputs[j].getAttribute('title');
                            var checkboxdiv = document.createElement("div");
                            if(!l_inputs[j].getAttribute("l-skin")){
                                if(l_inputs[j].checked){
                                    checkboxdiv.className='l-form-checkbox l-form-checked';
                                    checkboxdiv.innerHTML = '<span>'+c_title+'</span><i class="l-icon icon-complete"></i>';
                                }else{
                                    checkboxdiv.className='l-form-checkbox';
                                    checkboxdiv.innerHTML = '<span>'+c_title+'</span><i class="l-icon  icon-complete"></i>';
                                }
                                var previousobj=l_inputs[j].previousElementSibling;
                                if(previousobj && previousobj.className.match("l-form-checkbox")){
                                    previousobj.parentNode.removeChild(previousobj);
                                }
                                l_inputs[j].parentNode.insertBefore(checkboxdiv,l_inputs[j]);
                                checkboxdiv.onclick=function(e){
                                    if(this.className.indexOf("l-form-checked")==-1){
                                        this.className+=" l-form-checked";
                                        this.nextSibling.setAttribute("checked", true);
                                    }else{
                                        this.className=this.className.replace('l-form-checked',"");
                                        this.nextSibling.removeAttribute("checked");
                                    }
                                };
                            }else if(l_inputs[j].getAttribute("l-skin")=="switch"){
                                var l_text=l_inputs[j].getAttribute("l-text");
                                var l_text_arr=l_text.split("|");
                                var switchhtml='<div class="l-form-switch l-form-onswitch" lay-skin="_switch"><em>ON</em><i></i></div>';
                                var checkboxdiv = document.createElement("div");
                                checkboxdiv.setAttribute("l-text", l_text);
                                 if(l_inputs[j].checked){
                                    checkboxdiv.className='l-form-switch l-form-onswitch';
                                    checkboxdiv.innerHTML = '<em>'+l_text_arr[0]+'</em><i></i>';
                                 }else{
                                    checkboxdiv.className='l-form-switch';
                                    checkboxdiv.innerHTML = '<em>'+l_text_arr[1]+'</em><i></i>';
                                 }
                                var previousobj=l_inputs[j].previousElementSibling;
                                if(previousobj && previousobj.className.match("l-form-switch")){
                                    previousobj.parentNode.removeChild(previousobj);
                                }
                                 l_inputs[j].parentNode.insertBefore(checkboxdiv,l_inputs[j]);
                                 checkboxdiv.onclick=function(e){
                                    var l_text=this.getAttribute("l-text");
                                    var l_text_arr=l_text.split("|");
                                    if(this.className.indexOf("l-form-onswitch")==-1){
                                        this.className+=" l-form-onswitch";
                                        this.nextSibling.setAttribute("checked", true);
                                        this.getElementsByTagName("em")[0].innerText=l_text_arr[0];
                                    }else{
                                        this.className=this.className.replace("l-form-onswitch","");
                                        this.nextSibling.removeAttribute("checked");
                                        this.getElementsByTagName("em")[0].innerText=l_text_arr[1];
                                    }
                                 }
                            }
                            break;

                    }
                }

            }
        },
        initform: function() {
            var that=this;
            document.getElementsByClassName("l-form")[0].className += " actived";
            var l_form_objs = document.getElementsByClassName("l-form"),filter;
            for(var i=0,len=l_form_objs.length;i<len;i++){
                filter=l_form_objs[i].getAttribute('l-filter');
                this.l_forms.push({0:l_form_objs[i],"filter":filter});
                l_form_objs[i].onSubmit=(function(){
                    that.onSubmitFn(filter);
                })(i,filter);
            }

            //select
            this.renderSelect();
            
            //radio & checkbox
            this.rendeRadioCheckbox();
            
        },
        getFormJson(){
            var arr=[],l_form;
            var args = Array.prototype.slice.call(arguments);
            if(args.length){
                if(!isNaN(args[0])){
                    if(this.l_forms.length>parseInt(args[0])){
                        l_form=this.l_forms[parseInt(args[0])];
                        for(var i=0,len=l_form[0].length;i<len;i++){
                            var obj=l_form[0][i];
                            switch(obj.tagName){
                                case "INPUT":
                                    if(["text","password","hidden"].indexOf(obj.getAttribute("type").toLocaleLowerCase())>-1){
                                        var item={},key=obj.getAttribute("name");
                                        if(key){
                                            item['name']=key;
                                            item['value']=obj.value;
                                            arr.push(item);
                                        }
                                    }
                                    if(["checkbox","radio"].indexOf(obj.getAttribute("type").toLocaleLowerCase())>-1 && obj.checked){
                                        var item={},key=obj.getAttribute("name");
                                        item['name']=key;
                                        item['value']=obj.value || "on";;
                                        arr.push(item);
                                    }
                                break;
                                default:
                                    var item={},key=obj.getAttribute("name");
                                    if(key){
                                        item['name']=key;
                                        item['value']=obj.value;
                                        arr.push(item);
                                    }
                                break;

                            }
                        }
                        return arr;
                    }else{
                        return null;
                    }
                }else{
                    for(var i=0,len=args.length;i<len;i++){
                        if(this.l_forms[i]['filter']==args[0]){
                            l_form=this.l_forms[i];
                            break;
                        }
                    }
                    if(l_form){
                        for(var i=0,len=l_form[0].length;i<len;i++){
                            var obj=l_form[0][i];
                            switch(obj.tagName){
                                case "INPUT":
                                    if(["text","password","hidden"].indexOf(obj.getAttribute("type").toLocaleLowerCase())>-1){
                                        var item={},key=obj.getAttribute("name");
                                        if(key){
                                            item['name']=key;
                                            item['value']=obj.value;
                                            arr.push(item);
                                        }
                                    }
                                    if(["checkbox","radio"].indexOf(obj.getAttribute("type").toLocaleLowerCase())>-1 && obj.checked){
                                        var item={},key=obj.getAttribute("name");
                                        item['name']=key;
                                        item['value']=obj.value || "on";;
                                        arr.push(item);
                                    }
                                break;
                                default:
                                    var item={},key=obj.getAttribute("name");
                                    if(key){
                                        item['name']=key;
                                        item['value']=obj.value;
                                        arr.push(item);
                                    }
                                break;
    
                            }
                        }
                        return arr; 
                    }
                }
            }else{
                return this.getFormJson(0);
            }
        },
    };