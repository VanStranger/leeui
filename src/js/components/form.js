l.form={
        l_forms : [],
        renderSelect:function(){
            //select
            var l_selectobjs=[],selectdivs=[];
            for (var i = 0, len = this.l_forms.length; i < len; i++) {
                var l_selects = this.l_forms[i][0].getElementsByTagName("select");
                for (var j = 0, select_len = l_selects.length; j < select_len; j++) {
                    var l_options=l_selects[j].getElementsByTagName("option");
                    var l_select_name=l_selects[j].getAttribute("name");
                    var l_select_title=l_selects[j].options.length?l_selects[j].options[0].innerText:"";
                    selectdivs[selectdivs.length] = document.createElement("div");
                    selectdivs[selectdivs.length-1].className='l-unselect l-form-select';
                    selectdivhtml ="";
                    for(var k=0,l_op_len=l_options.length;k<l_op_len;k++){
                        var l_op_value=l_options[k].getAttribute("value");
                        var l_op_title=l_options[k].innerText;
                        var sed=l_options[k].selected;
                        if(!l_op_value && !l_op_title){
                            selectdivhtml +='<dd l-value="" class="l-select-tips">请选择</dd>';
                        }else{
                            sed && (l_select_title=l_op_title);
                            selectdivhtml +='<dd l-value="'+l_op_value+'" class="'+ (sed?"l-this":"") +'">'+l_op_title+'</dd>';

                        }

                    }
                    selectdivhtml =         '<div class="l-select-title">'+
                                                '<input type="text" placeholder="请选择" value="'+l_select_title+'" readonly="" class="l-input l-unselect">'+
                                                '<i class="l-edge"></i>'+
                                            '</div>'+
                                            '<dl class="l-anim l-anim-upbit" style="">'+selectdivhtml;
                    selectdivhtml+='</dl>';
                    selectdivs[selectdivs.length-1].innerHTML=selectdivhtml;
                    l_selectobjs[l_selectobjs.length]=selectdivs[selectdivs.length-1];

                    var previousobj=l_selects[j].previousElementSibling;
                    if(previousobj && previousobj.className.match("l-form-select")){
                        previousobj.parentNode.removeChild(previousobj);
                    }
                    l_selects[j].parentNode.insertBefore(selectdivs[selectdivs.length-1],l_selects[j]);
                }
            }

            //select 切换
            for(var l=0,selectdivslen=selectdivs.length;l<selectdivslen;l++){

                var s_dds=selectdivs[l].getElementsByTagName('dd');
                for(var i=0,len=s_dds.length;i<len;i++){
                    s_dds[i].onclick=(function(l){
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
                            }
                    })(l);
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
            for (var i = 0,len= this.l_forms.length;i<len;i++) {
                var l_inputs=this.l_forms[i][0].getElementsByTagName("input");
                for (var j = 0, input_len = l_inputs.length; j < input_len; j++) {
                    switch(l_inputs[j].getAttribute("type")){
                        //radio
                        case "radio":
                            //渲染radio
                            var r_title=l_inputs[j].getAttribute('title');
                            var r_value=l_inputs[j].getAttribute("value");
                            var r_name=l_inputs[j].getAttribute("name");
                            var radiodiv = document.createElement("div");
                            if(l_inputs[j].checked){
                                radiodiv.className='l-unselect l-form-radio l-form-radioed';
                                radiodiv.innerHTML = '<i class="l-anim l-icon l-anim-scaleSpring icon-radiochecked"></i><div>'+r_title+'</div>';
                            }else{
                                radiodiv.className='l-unselect l-form-radio';
                                radiodiv.innerHTML = '<i class="l-anim l-icon icon-radio"></i><div>'+r_title+'</div>';

                            }
                            radiodiv.setAttribute("l-value", r_value);
                            radiodiv.setAttribute("l-name", r_name);
                            l_inputs[j].parentNode.insertBefore(radiodiv,l_inputs[j]);
                            radiodiv.onclick=function(e){
                                var radioname=this.getAttribute("l-name");
                                var r_value=this.getAttribute("l-value");
                                var l_radionames=document.getElementsByName(radioname);
                                for(var k=0,l_radioname_len=l_radionames.length;k<l_radioname_len;k++){
                                    console.log(l_radionames[k].getAttribute("value"));
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
                            //渲染radio
                            var c_title=l_inputs[j].getAttribute('title');
                            var checkboxdiv = document.createElement("div");
                            if(!l_inputs[j].getAttribute("l-skin")){
                                if(l_inputs[j].checked){
                                    checkboxdiv.className='l-unselect l-form-checkbox l-form-checked';
                                    checkboxdiv.innerHTML = '<span>'+c_title+'</span><i class="l-icon icon-complete"></i>';
                                }else{
                                    checkboxdiv.className='l-unselect l-form-checkbox';
                                    checkboxdiv.innerHTML = '<span>'+c_title+'</span><i class="l-icon  icon-complete"></i>';
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
                                var switchhtml='<div class="l-unselect l-form-switch l-form-onswitch" lay-skin="_switch"><em>ON</em><i></i></div>';
                                var checkboxdiv = document.createElement("div");
                                checkboxdiv.setAttribute("l-text", l_text);
                                 if(l_inputs[j].checked){
                                    checkboxdiv.className='l-unselect l-form-switch l-form-onswitch';
                                    checkboxdiv.innerHTML = '<em>'+l_text_arr[0]+'</em><i></i>';
                                 }else{
                                    checkboxdiv.className='l-unselect l-form-switch';
                                    checkboxdiv.innerHTML = '<em>'+l_text_arr[1]+'</em><i></i>';
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
            this.say();
            document.getElementsByClassName("l-form")[0].className += " actived";
            var l_form_objs = document.getElementsByClassName("l-form");
            for(var i=0,len=l_form_objs.length;i<len;i++){
                this.l_forms.push({0:l_form_objs[i],"filter":l_form_objs[i].getAttribute('l-filter')});
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
                                    if(["text","password"].indexOf(obj.getAttribute("type").toLocaleLowerCase())>-1){
                                        var item={},key=obj.getAttribute("name");
                                        if(key){
                                            item[key]=obj.value;
                                            arr.push(item);
                                        }
                                    }
                                    if(["checkbox","radio"].indexOf(obj.getAttribute("type").toLocaleLowerCase())>-1 && obj.checked){
                                        console.log(obj);
                                        var item={},key=obj.getAttribute("name");
                                        item[key]=obj.getAttribute("value") || "on";
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
                        }
                    }
                    if(l_form){
                        for(var i=0,len=l_form[0].length;i<len;i++){
                            var obj=l_form[0][i];
                            switch(obj.tagName){
                                case "INPUT":
                                    if(["text","password"].indexOf(obj.getAttribute("type").toLocaleLowerCase())>-1){
                                        var item={},key=obj.getAttribute("name");
                                        if(key){
                                            item[key]=obj.value;
                                            arr.push(item);
                                        }
                                    }
                                    if(["checkbox","radio"].indexOf(obj.getAttribute("type").toLocaleLowerCase())>-1 && obj.checked){
                                        console.log(obj);
                                        var item={},key=obj.getAttribute("name");
                                        item[key]=obj.getAttribute("value") || "on";
                                        arr.push(item);
                                    }
                                    break;
    
                            }
                        }
                        return arr; 
                    }
                }
            }else{
                console.log("noarguments");
            }
        },
        say:function(){
            if(!this.silent){
                console.log(`
                    　　１１１１１１１１１　　　　　　　　　　　　　　　　１１　１１１１１　　　　　１１　　　　　　　１１１１１１１１１１　　　　１１１１１１１　　　　　　　　　　　　　　
                    　　１　１１１１１　１　　　　　　　　　　　　　　１１１　　　　１１１　　　　１１１１１１　　　　　　　　　１１　　　　　　　１　１１１　１　　　　　　　　　　　　　　
                    　　１１１１１１１１１１　　　　　　　　　　　　　１１１１１　１１１　　　　　１１　　１１　　　　　　　　１１１１　　　　　　１　１１１　１　　　　　　　　　　　　　　
                    　１１１１１１１１１１１　　　　　　　　　　　　　　１１１１　１１　　　　　１１１　１１　　　　　　　　１１１１１１　　　　　１　１１１　１　　　　　　　　　　　　　　
                    　　　１　　１１１　　　　　　　　　　　　　　　　　１１１１１１１１１１　　１１　１１１　　　　　　　１１１１　１１１　　　　１　１１１　１　　　　　　　　　　　　　　
                    　　　　　１１１　１１　　　　　　　　　　　　　　１１１１　　　１　　　　　　　　１１１１　　　　１１１１　１　　１１　　　　１　１１１　１　　　　１１１　　　　　　　
                    　１１１１１１１１１１１　　１１　　　　　　　　　　　１１１　　１　　　　　　１１１１１１１　　　１１　　　１　　　１　　　　１１１１１　　１　　　１１１　　　　　　　
                    　　　　　１１　　　　　　　１１　　　　　　　　　１１１１１　１１　　　　１１１１　　　１１１１　　　　　　１　　　　　　　１１１１　１　　１１　　１１１　　　　　　　
                    　　　　１１１　　　　　　　１１　　　　　　　　　１１　　１１１１　　　　１１１　　　　　１１１　　　　　　１　　　　　　１１１１　　１１１１１　　　１　　　　　　　　
                    　　　　１１１　　　　　　　１１　　　　　　　　　　　　　　　１　　　　　　　　　　　　　　　　　　　　　　１　　　　　　　１　　　　　　　　　　　　　　　　　　　　　
                    　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
                    　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　`);
            }
        }
    };