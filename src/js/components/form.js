// var leeui = function () {
//     this.silent = 0;
// };
leeui.prototype.form = function () { };
leeui.prototype.form.prototype = {
    l_forms: [],
    selectfns: [],
    radiofns: [],
    checkboxfns: [],
    onSelect: function (filter, fn) {
        if (!fn) {
            fn = function () {

            };
        }
        this.selectfns.push([filter, fn]);
    },
    onSelectFn: function (filter, value, title, obj) {
        var filter, fn;
        for (var i = 0, len = this.selectfns.length; i < len; i++) {
            infilter = this.selectfns[i][0];
            fn = this.selectfns[i][1];
            if (!infilter || infilter === filter) {
                fn(value, title, obj);
            }
        }
    },
    onRadio: function (filter, fn) {
        if (!fn) {
            fn = function () {

            };
        }
        this.radiofns.push([filter, fn]);
    },
    onRadioFn: function (filter, value, obj) {
        var filter, fn;
        for (var i = 0, len = this.radiofns.length; i < len; i++) {
            infilter = this.radiofns[i][0];
            fn = this.radiofns[i][1];
            if (!infilter || infilter === filter) {
                fn(value, obj);
            }
        }
    },
    onCheckbox: function (filter, fn) {
        if (!fn) {
            fn = function () {

            };
        }
        this.checkboxfns.push([filter, fn]);
    },
    onCheckboxFn: function (filter, obj) {
        var filter, fn;
        for (var i = 0, len = this.checkboxfns.length; i < len; i++) {
            infilter = this.checkboxfns[i][0];
            fn = this.checkboxfns[i][1];
            if (!infilter || infilter === filter) {
                fn(obj);
            }
        }
    },
    submitfns: [],
    onSubmit: function (filter, fn) {
        if (!fn) {
            fn = function () {

            };
        }
        this.submitfns.push([filter, fn]);
    },
    onSubmitFn: function (filter, json, array) {
        var filter, fn;
        for (var i = 0, len = this.submitfns.length; i < len; i++) {
            infilter = this.submitfns[i][0];
            fn = this.submitfns[i][1];
            if (!infilter || infilter === filter) {
                var res = fn(json, array);
                if (res === false) {
                    return false;
                }
            }
        }
    },


    renderSelect: function () {
        //select
        var that = this;
        var l_selectobjs = [], selectdivs = [];
        for (var i = 0, len = this.l_forms.length; i < len; i++) {
            var l_selects = this.l_forms[i][0].getElementsByTagName("select");
            for (var j = 0, select_len = l_selects.length; j < select_len; j++) {
                // l_selects[j].onchange = function () {
                //     that.renderSelect();
                // }
                var l_options = l_selects[j].getElementsByTagName("option");
                var l_select_search = l_selects[j].getAttribute("l-search") === null ? false : true;
                var l_select_multi = l_selects[j].getAttribute("multiple") === null ? false : true;
                var l_select_title = l_selects[j].options.length ? l_selects[j].options[0].innerText : "";
                selectdivs[selectdivs.length] = document.createElement("div");
                selectdivs[selectdivs.length - 1].className = 'l-unselect l-form-select';
                selectdivhtml = "";
                var l_select_title_val = "";
                for (var k = 0, l_op_len = l_options.length; k < l_op_len; k++) {
                    var l_op_value = l_options[k].getAttribute("value");
                    var l_op_title = l_options[k].innerText;
                    var isselected = l_options[k].selected;
                    if (!l_op_value && !l_op_title) {
                        selectdivhtml += '<dd l-value="" class="l-select-tips">请选择</dd>';
                    } else {
                        if (!l_select_multi) {
                            isselected && (l_select_title_val = l_op_title);
                        } else {
                            isselected && (l_select_title_val += l_op_title + "，");
                        }
                        selectdivhtml += '<dd l-value="' + l_op_value + '" class="' + (isselected ? "l-this" : "") + '">' + (l_select_multi ? '<i class="iconfont icon-complete"></i>' : '') + l_op_title + '</dd>';

                    }

                }
                if (l_select_title_val) {
                    if (l_select_multi) {
                        l_select_title_val = l_select_title_val.substr(0, l_select_title_val.length - 1);
                    }
                    l_select_title = l_select_title_val;
                }
                selectdivhtml = '<div class="l-select-title" '+'>' +
                    '<input type="text" placeholder="请选择" value="' + l_select_title + '" ' + (l_select_search ? '' : 'readonly=""') + ' class="l-input l-unselect l-select-searchinput">' +
                    '<i class="l-edge"></i>' +
                    '</div>' +
                    '<dl class="l-anim l-anim-upbit" style="">' + selectdivhtml;
                selectdivhtml += '</dl>';
                selectdivs[selectdivs.length - 1].innerHTML = selectdivhtml;
                selectdivs[selectdivs.length - 1].setAttribute("l-filter", l_selects[j].getAttribute("l-filter"));
                l_select_multi ? selectdivs[selectdivs.length - 1].setAttribute("l-multi", l_select_multi):selectdivs[selectdivs.length - 1].removeAttribute("l-multi");
                l_selectobjs[l_selectobjs.length] = selectdivs[selectdivs.length - 1];

                var previousobj = l_selects[j].previousElementSibling;
                if (previousobj && previousobj.className.match("l-form-select")) {
                    previousobj.parentNode.removeChild(previousobj);
                }
                l_selects[j].parentNode.insertBefore(selectdivs[selectdivs.length - 1], l_selects[j]);
            }
        }

        for (var l = 0, selectdivslen = selectdivs.length; l < selectdivslen; l++) {
            var l_select_multi = selectdivs[l].getAttribute("l-multi") ? true : false;
            //select 搜索
            var l_select_searchinput = selectdivs[l].getElementsByClassName("l-select-searchinput");
            var filter = selectdivs[l].getAttribute("l-filter");
            var s_dds = selectdivs[l].getElementsByTagName('dd');
            l_select_searchinput[0].oninput = (function (s_dds) {
                return function (e) {
                    var v = this.value;
                    for (var i = 0; i < s_dds.length; i++) {
                        if (s_dds[i].innerText.indexOf(v) === -1) {
                            if (s_dds[i].className.indexOf("l-hide") === -1) {
                                s_dds[i].className = s_dds[i].className + " l-hide";
                            }
                        } else {
                            s_dds[i].className = s_dds[i].className.replace(/\sl\-hide/g, "");
                            s_dds[i].className = s_dds[i].className.replace(/l\-hide\s/g, "");
                        }
                    }
                }
            })(s_dds);
            //select 切换
            for (var i = 0, len = s_dds.length; i < len; i++) {
                s_dds[i].addEventListener("click", (function (l, filter,l_select_multi) {
                    return function (e) {
                        var value = this.getAttribute("l-value");
                        var title = this.innerText;
                        if(!value){
                            return false;
                        }
                        if(!l_select_multi){
                            selectdivs[l].getElementsByTagName("input")[0].value = title;
                            selectdivs[l].className = selectdivs[l].className.replace(" l-form-selected", "");
                        }else{
                            var oldtitle=selectdivs[l].getElementsByTagName("input")[0].value;
                            var titlearr=[];
                            oldtitle && (titlearr=oldtitle.split("，"));
                            var titleindex=titlearr.indexOf(title);
                            console.log(titlearr,title,titlearr[0],titleindex);
                            if(titleindex!==-1){
                                titlearr.splice(titleindex,1);
                            }else{
                                titlearr.push(title);
                            }
                            
                                console.log(titlearr);
                               
                            oldtitle=selectdivs[l].getElementsByTagName("input")[0].value=titlearr.join("，");
                            
                        }
                        if (this.className == "l-select-tips") {
                            return;
                        }
                        if(!l_select_multi){
                            var siblings = this.parentNode.children;
                            for (var i = 0, len = siblings.length; i < len; i++) {
                                if (siblings[i] == this) {
                                    this.className += " l-this";
                                    continue;
                                }
                                siblings[i].className = siblings[i].className.replace("l-this", "");
                            }
                        }else{
                            if(this.className.indexOf("l-this")!=-1){
                                this.className=this.className.replace("l-this", "");
                            }else{
                                this.className += " l-this";
                            }
                        }
                        var se_options = selectdivs[l].nextSibling.getElementsByTagName("option");
                        var select1 = selectdivs[l].nextSibling;
                        var op_obj;
                        var newvalue=[];
                        if(!l_select_multi){
                            newvalue=value;
                            for (var j = 0, se_o_len = se_options.length; j < se_o_len; j++) {
                                var v = se_options[j].getAttribute("value");
                                if (v == value) {
                                    op_obj = se_options[j];
                                    se_options[j].setAttribute("selected", true);
                                } else {
                                    se_options[j].removeAttribute("selected");
                                }
                            }
                        }else{
                            op_obj=[];
                            for (var j = 0, se_o_len = se_options.length; j < se_o_len; j++) {
                                var v = se_options[j].getAttribute("value");
                                var selected = se_options[j].getAttribute("selected");
                                if (v == value) {
                                    if (selected===null) {
                                        se_options[j].setAttribute("selected", true);
                                    } else {
                                        se_options[j].removeAttribute("selected");
                                    }
                                }
                                if(se_options[j].getAttribute("selected")!==null){
                                    newvalue.push(v);
                                    op_obj.push(se_options[j]);
                                }
                            }
                        }
                        if (select1.fireEvent)
                            select1.fireEvent("onchange")
                        else if (select1.onchange)
                            select1.onchange()
                        that.onSelectFn(filter, newvalue, title, op_obj);

                    }
                })(l, filter,l_select_multi));
            }
        }

        //select 下拉菜单
        var l_selectTitles = document.getElementsByClassName("l-select-title");
        for (var i = 0, len = l_selectTitles.length; i < len; i++) {
            l_selectTitles[i].addEventListener("click", function (e) {
                var p = this.parentNode;
                if (p.className.indexOf("l-form-selected") == -1) {
                    p.className += " l-form-selected";
                } else {
                    p.className = p.className.replace(" l-form-selected", "");
                }
            })
        }
    },
    rendeRadioCheckbox() {
        var that = this;
        for (var i = 0, len = this.l_forms.length; i < len; i++) {
            var l_inputs = this.l_forms[i][0].getElementsByTagName("input");
            for (var j = 0, input_len = l_inputs.length; j < input_len; j++) {
                switch (l_inputs[j].getAttribute("type")) {
                    //radio
                    case "radio":
                        l_inputs[j].onchange = (function (j) {
                            return function (e) {
                                that.rendeRadioCheckbox();
                            }
                        })(j);

                        //渲染radio
                        var r_title = l_inputs[j].getAttribute('title');
                        var r_value = l_inputs[j].getAttribute("value");
                        var r_name = l_inputs[j].getAttribute("name");
                        var radiodiv = document.createElement("div");
                        if (l_inputs[j].checked) {
                            radiodiv.className = 'l-form-radio l-form-radioed';
                            radiodiv.innerHTML = '<i class="l-anim l-icon l-anim-scaleSpring icon-radiochecked"></i><div>' + r_title + '</div>';
                        } else {
                            radiodiv.className = 'l-form-radio';
                            radiodiv.innerHTML = '<i class="l-anim l-icon icon-radio"></i><div>' + r_title + '</div>';

                        }
                        var previousobj = l_inputs[j].previousElementSibling;
                        if (previousobj && previousobj.className.match("l-form-radio")) {
                            previousobj.parentNode.removeChild(previousobj);
                        }
                        radiodiv.setAttribute("l-value", r_value);
                        radiodiv.setAttribute("l-name", r_name);
                        l_inputs[j].parentNode.insertBefore(radiodiv, l_inputs[j]);
                        radiodiv.addEventListener("click", function (e) {
                            var r_name = this.getAttribute("l-name");
                            var r_value = this.getAttribute("l-value");

                            var l_radionames = document.getElementsByName(r_name);
                            var tindex = 0;
                            for (var k = 0, l_radioname_len = l_radionames.length; k < l_radioname_len; k++) {
                                if (l_radionames[k].getAttribute("value") == r_value) {
                                    l_radionames[k].setAttribute("checked", true);
                                    tindex = k;
                                } else {
                                    l_radionames[k].removeAttribute("checked");
                                }

                            }
                            that.onRadioFn(r_name, r_value, l_radionames[tindex]);
                            var radiodivs = document.getElementsByClassName("l-form-radio");
                            for (var k = 0, l_radioname_len = radiodivs.length; k < l_radioname_len; k++) {
                                if (radiodivs[k].getAttribute("l-name") === r_name) {
                                    radiodivs[k].className = radiodivs[k].className.replace("l-form-radioed", "");
                                    var radio_icon_obj = radiodivs[k].getElementsByClassName("l-icon")[0];
                                    radio_icon_obj.className = radio_icon_obj.className.replace("l-anim-scaleSpring", "");
                                    radio_icon_obj.className = radio_icon_obj.className.replace("icon-radiochecked", "icon-radio");
                                }
                            }

                            if (this.className.indexOf("l-form-radioed") === -1) {
                                this.className += " l-form-radioed";
                                this.getElementsByClassName("l-icon")[0].className += " l-anim-scaleSpring";
                                this.getElementsByClassName("l-icon")[0].className = this.getElementsByClassName("l-icon")[0].className.replace("icon-radio", "icon-radiochecked");
                            }
                            // this.setAttribute("checked",true);
                        });
                        break;
                    case "checkbox":
                        l_inputs[j].onchange = function () {
                            that.rendeRadioCheckbox();
                        }
                        //渲染checkbox
                        var c_title = l_inputs[j].getAttribute('title');
                        var c_name = l_inputs[j].getAttribute('name');
                        var checkboxdiv = document.createElement("div");
                        if (!l_inputs[j].getAttribute("l-skin")) {
                            if (l_inputs[j].checked) {
                                checkboxdiv.className = 'l-form-checkbox l-form-checked';
                                checkboxdiv.innerHTML = '<span>' + c_title + '</span><i class="l-icon icon-complete"></i>';
                            } else {
                                checkboxdiv.className = 'l-form-checkbox';
                                checkboxdiv.innerHTML = '<span>' + c_title + '</span><i class="l-icon  icon-complete"></i>';
                            }
                            var previousobj = l_inputs[j].previousElementSibling;
                            if (previousobj && previousobj.className.match("l-form-checkbox")) {
                                previousobj.parentNode.removeChild(previousobj);
                            }
                            l_inputs[j].parentNode.insertBefore(checkboxdiv, l_inputs[j]);
                            checkboxdiv.addEventListener("click", function (e) {
                                var nexto = this.nextSibling;
                                var objv = this.className.indexOf("l-form-checked") === -1;
                                if (objv) {
                                    this.className += " l-form-checked";
                                    this.nextSibling.setAttribute("checked", true);
                                } else {
                                    this.className = this.className.replace('l-form-checked', "");
                                    this.nextSibling.removeAttribute("checked");
                                }
                                that.onCheckboxFn(nexto.getAttribute("name"), { "objvalue": nexto.value, "value": objv, "title": nexto.getAttribute("title"), "obj": nexto });
                            });
                        } else if (l_inputs[j].getAttribute("l-skin") == "primary") {
                            // <div class="layui-unselect layui-form-checkbox layui-form-checked" lay-skin="primary"><span>写作</span><i class="layui-icon layui-icon-ok"></i></div>
                            checkboxdiv.setAttribute("l-skin","primary");
                            if (l_inputs[j].checked) {
                                checkboxdiv.className = 'l-unselect l-form-checkbox l-form-checked';
                                checkboxdiv.innerHTML = '<span>' + c_title + '</span><i class="l-icon icon-fangxingxuanzhong"></i>';
                            } else {
                                checkboxdiv.className = 'l-unselect l-form-checkbox';
                                checkboxdiv.innerHTML = '<span>' + c_title + '</span><i class="l-icon  icon-fangxingxuanzhong"></i>';
                            }
                            var previousobj = l_inputs[j].previousElementSibling;
                            if (previousobj && previousobj.className.match("l-form-checkbox")) {
                                previousobj.parentNode.removeChild(previousobj);
                            }
                            l_inputs[j].parentNode.insertBefore(checkboxdiv, l_inputs[j]);
                            checkboxdiv.addEventListener("click", function (e) {
                                var nexto = this.nextSibling;
                                var objv = this.className.indexOf("l-form-checked") === -1;
                                if (objv) {
                                    this.className += " l-form-checked";
                                    this.nextSibling.setAttribute("checked", true);
                                } else {
                                    this.className = this.className.replace('l-form-checked', "");
                                    this.nextSibling.removeAttribute("checked");
                                }
                                that.onCheckboxFn(nexto.getAttribute("name"), { "objvalue": nexto.value, "value": objv, "title": nexto.getAttribute("title"), "obj": nexto });
                            });
                        }else if (l_inputs[j].getAttribute("l-skin") == "switch") {
                            var l_text = l_inputs[j].getAttribute("l-text");
                            var l_text_arr = l_text.split("|");
                            var switchhtml = '<div class="l-form-switch l-form-onswitch" lay-skin="_switch"><em>ON</em><i></i></div>';
                            var checkboxdiv = document.createElement("div");
                            checkboxdiv.setAttribute("l-text", l_text);
                            if (l_inputs[j].checked) {
                                checkboxdiv.className = 'l-form-switch l-form-onswitch';
                                checkboxdiv.innerHTML = '<em>' + l_text_arr[0] + '</em><i></i>';
                            } else {
                                checkboxdiv.className = 'l-form-switch';
                                checkboxdiv.innerHTML = '<em>' + l_text_arr[1] + '</em><i></i>';
                            }
                            var previousobj = l_inputs[j].previousElementSibling;
                            if (previousobj && previousobj.className.match("l-form-switch")) {
                                previousobj.parentNode.removeChild(previousobj);
                            }
                            l_inputs[j].parentNode.insertBefore(checkboxdiv, l_inputs[j]);
                            checkboxdiv.addEventListener("click", function (e) {
                                var nexto = this.nextSibling;
                                var l_text = this.getAttribute("l-text");
                                var l_text_arr = l_text.split("|");
                                if (this.className.indexOf("l-form-onswitch") == -1) {
                                    this.className += " l-form-onswitch";
                                    this.nextSibling.setAttribute("checked", true);
                                    this.getElementsByTagName("em")[0].innerText = l_text_arr[0];
                                    that.onCheckboxFn(nexto.getAttribute("name"), { "value": true, "objvalue": nexto.value, "title": l_text_arr[0], "obj": nexto });
                                } else {
                                    this.className = this.className.replace("l-form-onswitch", "");
                                    this.nextSibling.removeAttribute("checked");
                                    this.getElementsByTagName("em")[0].innerText = l_text_arr[1];
                                    that.onCheckboxFn(nexto.getAttribute("name"), { "value": false, "objvalue": nexto.value, "title": l_text_arr[1], "obj": nexto });
                                }
                            })
                        }
                        break;

                }
            }

        }
    },
    initform: function () {
        var that = this;
        var l_form_objs = document.getElementsByClassName("l-form"), filter;
        for (var i = 0, len = l_form_objs.length; i < len; i++) {
            filter = l_form_objs[i].getAttribute('l-filter');
            l_form_objs[i].className += " actived";
            this.l_forms.push({ 0: l_form_objs[i], "filter": filter });
            l_form_objs[i].onsubmit = (function (i, filter) {
                return function (e) {
                    // e.preventDefault();
                    var res = that.onSubmitFn(filter, that.getFormJson(i), that.getFormArray(i));
                    if (res === false) {
                        return false;
                    }
                }
            })(i, filter)
        }

        //select
        this.renderSelect();

        //radio & checkbox
        this.rendeRadioCheckbox();

    },
    getFormJson() {
        var array = this.getFormArray.apply(this, arguments);
        var json = {};
        for (var i = 0; i < array.length; i++) {
            if (array[i]['name'].substr(-2) === '[]') {
                var key = array[i]['name'].substr(0, array[i]['name'].length - 2);
                if (json[key]) {
                    json[key][json[key].length] = array[i]['value'];
                } else {
                    json[key] = [array[i]['value']];
                }
            } else {
                json[array[i]['name']] = array[i]['value'];
            }
        }
        return json;
    },
    getFormArray() {
        var arr = [], l_form;
        var args = Array.prototype.slice.call(arguments);
        if (args.length) {
            if (!isNaN(args[0])) {
                if (this.l_forms.length > parseInt(args[0])) {
                    l_form = this.l_forms[parseInt(args[0])];
                    for (var i = 0, len = l_form[0].length; i < len; i++) {
                        var obj = l_form[0][i];
                        switch (obj.tagName.toLocaleUpperCase()) {
                            case "INPUT":
                                if (["text", "password", "hidden"].indexOf(obj.getAttribute("type").toLocaleLowerCase()) > -1) {
                                    var item = {}, key = obj.getAttribute("name");
                                    if (key) {
                                        item['name'] = key;
                                        item['value'] = obj.value;
                                        arr.push(item);
                                    }
                                }
                                if (["checkbox", "radio"].indexOf(obj.getAttribute("type").toLocaleLowerCase()) > -1 && obj.checked) {
                                    var item = {}, key = obj.getAttribute("name");
                                    item['name'] = key;
                                    item['value'] = obj.value || "on";;
                                    arr.push(item);
                                }
                                break;
                            case "SELECT":
                                if(obj.getAttribute("multiple")!==null){
                                    var item = {}, key = obj.getAttribute("name");
                                    if (key) {
                                        item['name'] = key;
                                        var selectval=[];
                                        var sOptions=obj.getElementsByTagName("option");
                                        for(let key=0;key< sOptions.length;key++) {
                                            var element=sOptions[key];
                                            if(element.getAttribute("selected")!==null){
                                                selectval.push(element.value);
                                            }
                                        };
                                        item['value'] = selectval;
                                        arr.push(item);
                                    }
                                }else{
                                    var item = {}, key = obj.getAttribute("name");
                                    if (key) {
                                        item['name'] = key;
                                        item['value'] = obj.value;
                                        arr.push(item);
                                    }
                                }
                                break;
                            default:
                                var item = {}, key = obj.getAttribute("name");
                                if (key) {
                                    item['name'] = key;
                                    item['value'] = obj.value;
                                    arr.push(item);
                                }
                                break;

                        }
                    }
                    return arr;
                } else {
                    return null;
                }
            } else {
                for (var i = 0, len = this.l_forms.length; i < len; i++) {
                    if (this.l_forms[i]['filter'] == args[0]) {
                        l_form = this.l_forms[i];
                        break;
                    }
                }
                if (l_form) {
                    for (var i = 0, len = l_form[0].length; i < len; i++) {
                        var obj = l_form[0][i];
                        switch (obj.tagName.toLocaleUpperCase()) {
                            case "INPUT":
                                if (["text", "password", "hidden"].indexOf(obj.getAttribute("type").toLocaleLowerCase()) > -1) {
                                    var item = {}, key = obj.getAttribute("name");
                                    if (key) {
                                        item['name'] = key;
                                        item['value'] = obj.value;
                                        arr.push(item);
                                    }
                                }
                                if (["checkbox", "radio"].indexOf(obj.getAttribute("type").toLocaleLowerCase()) > -1 && obj.checked) {
                                    var item = {}, key = obj.getAttribute("name");
                                    item['name'] = key;
                                    item['value'] = obj.value || "on";;
                                    arr.push(item);
                                }
                                break;
                                case "SELECT":
                                    if(obj.getAttribute("multiple")!==null){
                                        var item = {}, key = obj.getAttribute("name");
                                        if (key) {
                                            item['name'] = key;
                                            var selectval=[];
                                            var sOptions=obj.getElementsByTagName("option");
                                            for(let key=0;key< sOptions.length;key++) {
                                                var element=sOptions[key];
                                                if(element.getAttribute("selected")!==null){
                                                    selectval.push(element.value);
                                                }
                                            };
                                            item['value'] = selectval;
                                            arr.push(item);
                                        }
                                    }else{
                                        var item = {}, key = obj.getAttribute("name");
                                        if (key) {
                                            item['name'] = key;
                                            item['value'] = obj.value;
                                            arr.push(item);
                                        }
                                    }
                                    break;
                            default:
                                var item = {}, key = obj.getAttribute("name");
                                if (key) {
                                    item['name'] = key;
                                    item['value'] = obj.value;
                                    arr.push(item);
                                }
                                break;

                        }
                    }
                    return arr;
                }
            }
        } else {
            return this.getFormArray(0);
        }
    },
};