/** leeui-v1.0.0 ISC License By https://github.com/VanStranger/leeui#readme */
 ;"use strict";var leeui=function(){this.silent=0};leeui.prototype.say=function(){this.silent||console.log("\n            　　１１１１１１１１１　　　　　　　　　　　　　　　　１１　１１１１１　　　　　１１　　　　　　　１１１１１１１１１１　　　　１１１１１１１　　　　　　　　　　　　　　\n            　　１　１１１１１　１　　　　　　　　　　　　　　１１１　　　　１１１　　　　１１１１１１　　　　　　　　　１１　　　　　　　１　１１１　１　　　　　　　　　　　　　　\n            　　１１１１１１１１１１　　　　　　　　　　　　　１１１１１　１１１　　　　　１１　　１１　　　　　　　　１１１１　　　　　　１　１１１　１　　　　　　　　　　　　　　\n            　１１１１１１１１１１１　　　　　　　　　　　　　　１１１１　１１　　　　　１１１　１１　　　　　　　　１１１１１１　　　　　１　１１１　１　　　　　　　　　　　　　　\n            　　　１　　１１１　　　　　　　　　　　　　　　　　１１１１１１１１１１　　１１　１１１　　　　　　　１１１１　１１１　　　　１　１１１　１　　　　　　　　　　　　　　\n            　　　　　１１１　１１　　　　　　　　　　　　　　１１１１　　　１　　　　　　　　１１１１　　　　１１１１　１　　１１　　　　１　１１１　１　　　　１１１　　　　　　　\n            　１１１１１１１１１１１　　１１　　　　　　　　　　　１１１　　１　　　　　　１１１１１１１　　　１１　　　１　　　１　　　　１１１１１　　１　　　１１１　　　　　　　\n            　　　　　１１　　　　　　　１１　　　　　　　　　１１１１１　１１　　　　１１１１　　　１１１１　　　　　　１　　　　　　　１１１１　１　　１１　　１１１　　　　　　　\n            　　　　１１１　　　　　　　１１　　　　　　　　　１１　　１１１１　　　　１１１　　　　　１１１　　　　　　１　　　　　　１１１１　　１１１１１　　　１　　　　　　　　\n            　　　　１１１　　　　　　　１１　　　　　　　　　　　　　　　１　　　　　　　　　　　　　　　　　　　　　　１　　　　　　　１　　　　　　　　　　　　　　　　　　　　　\n            　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　\n            　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　")},leeui.prototype.page=function(){var t=1,a=1;Object.defineProperty(this,"now",{get:function(){return t},set:function(e){t=parseInt(e)||1,this.render()}}),Object.defineProperty(this,"max",{get:function(){return a},set:function(e){a=parseInt(e)||1,this.render()}}),this.onPage=function(e,t,a){},this.render=function(){var i,n=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};e.elem&&(this.elem=e.elem),e.now&&(this.now=parseInt(e.now)),e.max&&(this.max=parseInt(e.max)),e.onPage&&"function"==typeof e.onPage&&(console.log(e.onPage),this.onPage=e.onPage),console.log(this.onPage),console.log(e.onpage),console.log(e.onPage),!this.elem||(e=document.querySelectorAll(this.elem)).length&&(this.pageHtml=l(t,a),console.log(),i=this,e.forEach(function(e){e.innerHTML=n.pageHtml;for(var t=e.getElementsByClassName("pagea"),a=0,l=t.length;a<l;a++)t[a].addEventListener("click",function(e){var t=parseInt(this.getAttribute("page"))||1;i.onPage(e,t,i.max)})}))};var l=function(e,t){var a="",l="",n="";switch(e){case 1:a="",l=1==t?"":"<li class='pageli sib'><a class='pagea' page='"+(e+1)+"' href='###'>下一页</a></li>";break;case t:l="",a="<li class='pageli sib'><a class='pagea' page='"+(e-1)+"'  href='###'>上一页</a></li>";break;default:a="<li class='pageli sib'><a class='pagea' page='"+(e-1)+"'  href='###'>上一页</a></li>",l="<li class='pageli sib'><a class='pagea' page='"+(e+1)+"'  href='###'>下一页</a></li>"}switch(!0){case e<5:if(7<t){for(n="",i=1;i<6;i++)i==e?n+="<li class='pageli active'><a class='pagea' page='"+i+"'  href='###'>"+i+"</a></li>":n+="<li class='pageli'><a class='pagea' page='"+i+"'  href='###'>"+i+"</a></li>";console.log(t),n+="<li class='pageli'>···</li><li class='pageli'><a class='pagea' page='"+t+"' href='###'>"+t+"</a></li>"}else for(n="",i=1;i<=t;i++)i==e?n+="<li class='pageli active'><a class='pagea' page='"+i+"'  href='###'>"+i+"</a></li>":n+="<li class='pageli'><a class='pagea' page='"+i+"'  href='###'>"+i+"</a></li>";break;case t-3<e&&4<e:for(n="<li class='pageli'><a class='pagea' page='1'  href='###'> 1</a></li><li class='pageli'>···</li>",i=e-3;i<=t;i++)console.log(i),i==e?n+="<li class='pageli active'><a class='pagea' page='"+i+"'  href='###'>"+i+"</a></li>":n+="<li class='pageli'><a class='pagea' page='"+i+"'  href='###'>"+i+"</a></li>";break;default:for(console.log(t),n="<li class='pageli'><a class='pagea' page='1'  href='###'>1</a></li><li class='pageli'>···</li>",i=e-3;i<=e+3;i++)i==e?n+="<li class='pageli active'><a class='pagea' page='"+i+"'  href='###'>"+i+"</a></li>":n+="<li class='pageli'><a class='pagea' page='"+i+"'  href='###'>"+i+"</a></li>";n+="<li class='pageli'>···</li><li class='pageli'><a class='pagea' page='"+t+"' href='###'>"+t+"</a></li>"}return a+n+l}},leeui.prototype.form=function(){},leeui.prototype.form.prototype={l_forms:[],selectfns:[],radiofns:[],checkboxfns:[],onSelect:function(e,t){this.selectfns.push([e,t=t||function(){}])},onSelectFn:function(e,t,a,l){for(var i,n=0,s=this.selectfns.length;n<s;n++)infilter=this.selectfns[n][0],i=this.selectfns[n][1],infilter&&infilter!==e||i(t,a,l)},onRadio:function(e,t){this.radiofns.push([e,t=t||function(){}])},onRadioFn:function(e,t,a){for(var l,i=0,n=this.radiofns.length;i<n;i++)infilter=this.radiofns[i][0],l=this.radiofns[i][1],infilter&&infilter!==e||l(t,a)},onCheckbox:function(e,t){this.checkboxfns.push([e,t=t||function(){}])},onCheckboxFn:function(e,t){for(var a,l=0,i=this.checkboxfns.length;l<i;l++)infilter=this.checkboxfns[l][0],a=this.checkboxfns[l][1],infilter&&infilter!==e||a(t)},submitfns:[],onSubmit:function(e,t){this.submitfns.push([e,t=t||function(){}])},onSubmitFn:function(e,t,a){for(var l,i=0,n=this.submitfns.length;i<n;i++)if(infilter=this.submitfns[i][0],l=this.submitfns[i][1],!infilter||infilter===e)if(!1===l(t,a))return!1},renderSelect:function(){for(var N=this,e=[],y=[],t=0,a=this.l_forms.length;t<a;t++)for(var l=this.l_forms[t][0].getElementsByTagName("select"),i=0,n=l.length;i<n;i++){var s=l[i].getElementsByTagName("option"),c=null!==l[i].getAttribute("l-search"),r=null!==l[i].getAttribute("multiple"),o=l[i].options.length?l[i].options[0].innerText:"";y[y.length]=document.createElement("div"),y[y.length-1].className="l-unselect l-form-select";for(var m=selectdivhtml="",g=0,h=s.length;g<h;g++){var u=s[g].getAttribute("value"),p=s[g].innerText,d=s[g].selected;u||p?(r?d&&(m+=p+"，"):d&&(m=p),selectdivhtml+='<dd l-value="'+u+'" class="'+(d?"l-this":"")+'">'+(r?'<i class="iconfont icon-complete"></i>':"")+p+"</dd>"):selectdivhtml+='<dd l-value="" class="l-select-tips">请选择</dd>'}m&&(o=m=r?m.substr(0,m.length-1):m),selectdivhtml='<div class="l-select-title" ><input type="text" placeholder="请选择" value="'+o+'" '+(c?"":'readonly=""')+' class="l-input l-unselect l-select-searchinput"><i class="l-edge"></i></div><dl class="l-anim l-anim-upbit" style="">'+selectdivhtml,selectdivhtml+="</dl>",y[y.length-1].innerHTML=selectdivhtml,y[y.length-1].setAttribute("l-filter",l[i].getAttribute("l-filter")),r?y[y.length-1].setAttribute("l-multi",r):y[y.length-1].removeAttribute("l-multi"),e[e.length]=y[y.length-1];c=l[i].previousElementSibling;c&&c.className.match("l-form-select")&&c.parentNode.removeChild(c),l[i].parentNode.insertBefore(y[y.length-1],l[i])}for(var f=0,v=y.length;f<v;f++){var r=!!y[f].getAttribute("l-multi"),b=y[f].getElementsByClassName("l-select-searchinput"),x=y[f].getAttribute("l-filter"),A=y[f].getElementsByTagName("dd");b[0].oninput=function(l){return function(e){for(var t=this.value,a=0;a<l.length;a++)-1===l[a].innerText.indexOf(t)?-1===l[a].className.indexOf("l-hide")&&(l[a].className=l[a].className+" l-hide"):(l[a].className=l[a].className.replace(/\sl\-hide/g,""),l[a].className=l[a].className.replace(/l\-hide\s/g,""))}}(A);for(t=0,a=A.length;t<a;t++)A[t].addEventListener("click",function(f,v,b){return function(e){var t,a,l=this.getAttribute("l-value"),i=this.innerText;if(!l)return!1;if(b?(t=[],a=(t=(o=y[f].getElementsByTagName("input")[0].value)?o.split("，"):t).indexOf(i),console.log(t,i,t[0],a),-1!==a?t.splice(a,1):t.push(i),console.log(t),o=y[f].getElementsByTagName("input")[0].value=t.join("，")):(y[f].getElementsByTagName("input")[0].value=i,y[f].className=y[f].className.replace(" l-form-selected","")),"l-select-tips"!=this.className){if(b)-1!=this.className.indexOf("l-this")?this.className=this.className.replace("l-this",""):this.className+=" l-this";else for(var n=this.parentNode.children,s=0,c=n.length;s<c;s++)n[s]!=this?n[s].className=n[s].className.replace("l-this",""):this.className+=" l-this";var r=y[f].nextSibling.getElementsByTagName("option"),o=y[f].nextSibling,m=[];if(b)for(var g=[],h=0,u=r.length;h<u;h++){var p=r[h].getAttribute("value"),d=r[h].getAttribute("selected");p==l&&(null===d?r[h].setAttribute("selected",!0):r[h].removeAttribute("selected")),null!==r[h].getAttribute("selected")&&(m.push(p),g.push(r[h]))}else for(var p,m=l,h=0,u=r.length;h<u;h++)(p=r[h].getAttribute("value"))==l?(g=r[h],r[h].setAttribute("selected",!0)):r[h].removeAttribute("selected");o.fireEvent?o.fireEvent("onchange"):o.onchange&&o.onchange(),N.onSelectFn(v,m,i,g)}}}(f,x,r))}for(var E=document.getElementsByClassName("l-select-title"),t=0,a=E.length;t<a;t++)E[t].addEventListener("click",function(e){var t=this.parentNode;-1==t.className.indexOf("l-form-selected")?t.className+=" l-form-selected":t.className=t.className.replace(" l-form-selected","")})},rendeRadioCheckbox:function(){for(var o=this,e=0,t=this.l_forms.length;e<t;e++)for(var a=this.l_forms[e][0].getElementsByTagName("input"),l=0,i=a.length;l<i;l++)switch(a[l].getAttribute("type")){case"radio":a[l].onchange=function(e){o.rendeRadioCheckbox()};var n=a[l].getAttribute("title"),s=a[l].getAttribute("value"),c=a[l].getAttribute("name"),r=document.createElement("div");a[l].checked?(r.className="l-form-radio l-form-radioed",r.innerHTML='<i class="l-anim l-icon l-anim-scaleSpring icon-radiochecked"></i><div>'+n+"</div>"):(r.className="l-form-radio",r.innerHTML='<i class="l-anim l-icon icon-radio"></i><div>'+n+"</div>"),(m=a[l].previousElementSibling)&&m.className.match("l-form-radio")&&m.parentNode.removeChild(m),r.setAttribute("l-value",s),r.setAttribute("l-name",c),a[l].parentNode.insertBefore(r,a[l]),r.addEventListener("click",function(e){for(var t=this.getAttribute("l-name"),a=this.getAttribute("l-value"),l=document.getElementsByName(t),i=0,n=0,s=l.length;n<s;n++)l[n].getAttribute("value")==a?(l[n].setAttribute("checked",!0),i=n):l[n].removeAttribute("checked");o.onRadioFn(t,a,l[i]);for(var c,r=document.getElementsByClassName("l-form-radio"),n=0,s=r.length;n<s;n++)r[n].getAttribute("l-name")===t&&(r[n].className=r[n].className.replace("l-form-radioed",""),(c=r[n].getElementsByClassName("l-icon")[0]).className=c.className.replace("l-anim-scaleSpring",""),c.className=c.className.replace("icon-radiochecked","icon-radio"));-1===this.className.indexOf("l-form-radioed")&&(this.className+=" l-form-radioed",this.getElementsByClassName("l-icon")[0].className+=" l-anim-scaleSpring",this.getElementsByClassName("l-icon")[0].className=this.getElementsByClassName("l-icon")[0].className.replace("icon-radio","icon-radiochecked"))});break;case"checkbox":a[l].onchange=function(){o.rendeRadioCheckbox()};var m,n=a[l].getAttribute("title"),s=(a[l].getAttribute("name"),document.createElement("div"));a[l].getAttribute("l-skin")?"switch"==a[l].getAttribute("l-skin")&&(r=(c=a[l].getAttribute("l-text")).split("|"),(s=document.createElement("div")).setAttribute("l-text",c),a[l].checked?(s.className="l-form-switch l-form-onswitch",s.innerHTML="<em>"+r[0]+"</em><i></i>"):(s.className="l-form-switch",s.innerHTML="<em>"+r[1]+"</em><i></i>"),(m=a[l].previousElementSibling)&&m.className.match("l-form-switch")&&m.parentNode.removeChild(m),a[l].parentNode.insertBefore(s,a[l]),s.addEventListener("click",function(e){var t=this.nextSibling,a=this.getAttribute("l-text").split("|");-1==this.className.indexOf("l-form-onswitch")?(this.className+=" l-form-onswitch",this.nextSibling.setAttribute("checked",!0),this.getElementsByTagName("em")[0].innerText=a[0],o.onCheckboxFn(t.getAttribute("name"),{value:!0,objvalue:t.value,title:a[0],obj:t})):(this.className=this.className.replace("l-form-onswitch",""),this.nextSibling.removeAttribute("checked"),this.getElementsByTagName("em")[0].innerText=a[1],o.onCheckboxFn(t.getAttribute("name"),{value:!1,objvalue:t.value,title:a[1],obj:t}))})):(a[l].checked?(s.className="l-form-checkbox l-form-checked",s.innerHTML="<span>"+n+'</span><i class="l-icon icon-complete"></i>'):(s.className="l-form-checkbox",s.innerHTML="<span>"+n+'</span><i class="l-icon  icon-complete"></i>'),(m=a[l].previousElementSibling)&&m.className.match("l-form-checkbox")&&m.parentNode.removeChild(m),a[l].parentNode.insertBefore(s,a[l]),s.addEventListener("click",function(e){var t=this.nextSibling,a=-1===this.className.indexOf("l-form-checked");a?(this.className+=" l-form-checked",this.nextSibling.setAttribute("checked",!0)):(this.className=this.className.replace("l-form-checked",""),this.nextSibling.removeAttribute("checked")),o.onCheckboxFn(t.getAttribute("name"),{objvalue:t.value,value:a,title:t.getAttribute("title"),obj:t})}))}},initform:function(){var l=this;document.getElementsByClassName("l-form")[0].className+=" actived";for(var e,t=document.getElementsByClassName("l-form"),a=0,i=t.length;a<i;a++)e=t[a].getAttribute("l-filter"),this.l_forms.push({0:t[a],filter:e}),t[a].onsubmit=function(t,a){return function(e){if(!1===l.onSubmitFn(a,l.getFormJson(t),l.getFormArray(t)))return!1}}(a,e);this.renderSelect(),this.rendeRadioCheckbox()},getFormJson:function(){for(var e,t=this.getFormArray.apply(this,arguments),a={},l=0;l<t.length;l++)"[]"===t[l].name.substr(-2)?a[e=t[l].name.substr(0,t[l].name.length-2)]?a[e][a[e].length]=t[l].value:a[e]=[t[l].value]:a[t[l].name]=t[l].value;return a},getFormArray:function(){var e=[],t=Array.prototype.slice.call(arguments);if(!t.length)return this.getFormArray(0);if(!isNaN(t[0])){if(this.l_forms.length>parseInt(t[0])){for(var a,l=0,i=(a=this.l_forms[parseInt(t[0])])[0].length;l<i;l++)switch((o=a[0][l]).tagName.toLocaleUpperCase()){case"INPUT":-1<["text","password","hidden"].indexOf(o.getAttribute("type").toLocaleLowerCase())&&(n={},(h=o.getAttribute("name"))&&(n.name=h,n.value=o.value,e.push(n))),-1<["checkbox","radio"].indexOf(o.getAttribute("type").toLocaleLowerCase())&&o.checked&&(n={},h=o.getAttribute("name"),n.name=h,n.value=o.value||"on",e.push(n));break;case"SELECT":if(null!==o.getAttribute("multiple")){var n={};if(h=o.getAttribute("name")){n.name=h;for(var s=[],c=o.getElementsByTagName("option"),r=0;r<c.length;r++)null!==(m=c[r]).getAttribute("selected")&&s.push(m.value);n.value=s,e.push(n)}}else{n={};(h=o.getAttribute("name"))&&(n.name=h,n.value=o.value,e.push(n))}break;default:n={};(h=o.getAttribute("name"))&&(n.name=h,n.value=o.value,e.push(n))}return e}return null}for(l=0,i=t.length;l<i;l++)if(this.l_forms[l].filter==t[0]){a=this.l_forms[l];break}if(a){for(var o,l=0,i=a[0].length;l<i;l++)switch((o=a[0][l]).tagName.toLocaleUpperCase()){case"INPUT":-1<["text","password","hidden"].indexOf(o.getAttribute("type").toLocaleLowerCase())&&(n={},(h=o.getAttribute("name"))&&(n.name=h,n.value=o.value,e.push(n))),-1<["checkbox","radio"].indexOf(o.getAttribute("type").toLocaleLowerCase())&&o.checked&&(n={},h=o.getAttribute("name"),n.name=h,n.value=o.value||"on",e.push(n));break;case"SELECT":if(null!==o.getAttribute("multiple")){n={};if(h=o.getAttribute("name")){n.name=h;for(var m,s=[],c=o.getElementsByTagName("option"),g=0;g<c.length;g++)null!==(m=c[g]).getAttribute("selected")&&s.push(m.value);n.value=s,e.push(n)}}else{n={};(h=o.getAttribute("name"))&&(n.name=h,n.value=o.value,e.push(n))}break;default:var h,n={};(h=o.getAttribute("name"))&&(n.name=h,n.value=o.value,e.push(n))}return e}}},leeui.prototype.photos=function(){},leeui.prototype.photos.prototype={index:0,imgboxwidth:0,imgboxheight:0,rotateangle:0,showimgs:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:-1,a=["active",""],l=document.documentElement.clientHeight||document.body.offsetWidth,i=document.documentElement.clientWidth||document.body.offsetHeight;if(!document.getElementById("LYshowimgs_div")){var n=document.createElement("div");n.style.width=i+"px",n.style.height=l+"px",n.setAttribute("id","LYshowimgs_div"),htmlstr='<div class="l_closebtn">\n                            <a href="javascript:;" class="l_closebtna iconfont icon-close"></a>\n                        </div>\n                        <a href="javascript:;" class="l_prev iconfont icon-left"></a>\n                        <a href="javascript:;" class="l_next iconfont icon-right"></a>\n                        <div class="l_mu"></div>\n                        <div class="l_imgctrbtns">\n                            <span class="iconfont icon-undo"></span>\n                            <span class="iconfont icon-redo"></span>\n                        </div>\n                        <div class="l_imgbox">';for(var s=0;s<e.length;s++){var c=e[s];htmlstr+='<img src="'+c+'" alt="" class="l_img '+a[t==s?0:1]+'">'}htmlstr+="</div>",n.innerHTML=htmlstr,document.body.appendChild(n);n=document.getElementsByClassName("l_imgbox")[0];this.imgboxwidth=n.clientWidth,this.imgboxheight=n.clientHeight,document.getElementsByClassName("l_img active")[0].style.marginLeft="-"+document.getElementsByClassName("l_img active")[0].clientWidth/2+"px",document.getElementsByClassName("l_img active")[0].style.marginTop="-"+document.getElementsByClassName("l_img active")[0].clientHeight/2+"px"}},showimgobjs:function(e,t){for(var a=0,l=e.length;a<l;a++)if(t==e[a]){for(var i=[],n=0,l=e.length;n<l;n++)i[i.length]=e[n].src;return index=a,void this.showimgs(i,index)}},init:function(m){var g=this;document.addEventListener("click",function(e){for(var t,a=(e=e||window.e).target;a&&a!=this;){if(m&&-1==["document","document.body","body"].indexOf(m.toLowerCase()))for(var l,i=0,n=(l=document.querySelectorAll(m)).length;i<n;i++)t=l[i].getElementsByTagName("img"),g.showimgobjs(t,a);else t=(l=document).getElementsByTagName("img"),g.showimgobjs(t,a);if(a&&a.className)if(a.className.match("l_closebtn"))(o=document.getElementById("LYshowimgs_div"))&&document.body.removeChild(o);else if(a.className.match("l_prev")){var s=document.getElementsByClassName("l_img");index=0<index?index-1:s.length-1;for(var c=0,r=s.length;c<r;c++)c==index?s[c].className="l_img active":s[c].className="l_img";document.getElementsByClassName("l_img active")[0].style.marginLeft="-"+document.getElementsByClassName("l_img active")[0].clientWidth/2+"px",document.getElementsByClassName("l_img active")[0].style.marginTop="-"+document.getElementsByClassName("l_img active")[0].clientHeight/2+"px"}else if(a.className.match("l_next")){s=document.getElementsByClassName("l_img");index=index==s.length-1?0:index+1;for(var o,c=0,r=s.length;c<r;c++)c==index?s[c].className="l_img active":s[c].className="l_img";(o=document.getElementsByClassName("l_img active")[0]).style.marginLeft="-"+o.clientWidth/2+"px",o.style.marginTop="-"+o.clientHeight/2+"px"}else a.className.match("icon-undo")?(g.rotateangle=0==g.rotateangle?3:g.rotateangle-1,document.getElementsByClassName("l_img active")[0].style.transform=" rotate("+90*g.rotateangle+"deg)"):a.className.match("icon-redo")&&(g.rotateangle=3==g.rotateangle?0:g.rotateangle+1,document.getElementsByClassName("l_img active")[0].style.transform=" rotate("+90*g.rotateangle+"deg)");a=a.parentNode}},!1)}},leeui.prototype.table=new function(){var r=[],t=20,c=1,o=1,m={},g=0;Object.defineProperty(this,"data",{get:function(){return r},set:function(e){r=e,this.render()}}),Object.defineProperty(this,"limit",{get:function(){return t},set:function(e){t=e,this.changedata()}}),Object.defineProperty(this,"page",{get:function(){return o<c?1:parseInt(c)},set:function(e){c=o<e?1:parseInt(e),this.changedata()}}),Object.defineProperty(this,"amount",{get:function(){return parseInt(g)},set:function(e){g=e,o=Math.ceil(g/t),this.renderpage()}}),this.changedata=function(){m&&m.datachange(c,t)},this.render=function(e){e&&(m=e);var t="<thead>",a="<tbody>";if(0==r.length)a="<tr><td align='center'>暂无数据</td></tr>";else{for(var a="",l=[],i=0,n=r.length;i<n;i++){r[i];a+="<tr>";for(var s=0,c=(l=m.cols(r[i])).length;s<c;s++)0==i&&(t+="<th "+(l[s].width?"style='width:"+l[s].width+"'":"")+" >"+l[s].title+"</th>"),a+="<td data-label='"+l[s].title+"'>"+l[s].value+"</td>";a+="</tr>"}t+="</thead>"}a+="</tbody>";e=document.createElement("table");e.className="l-table",e.innerHTML=t+a,document.querySelector(m.elem).innerHTML="",document.querySelector(m.elem).appendChild(e),this.renderpage()},this.renderpage=function(){var a=this,e=document.createElement("div");e.className="l-table-page";var t='\n            <div class="l-box l-laypage l-laypage-default">\n                <a href="javascript:;" class="l-tablepage-btn l-laypage-prev '+(1==c?"l-disabled":"")+'" data-page="'+(c-1)+'">\n                    <i class="l-icon iconfont  icon-left"></i>\n                </a>\n            ';if(1==o)t+='\n                    \n                    <a href="javascript:;" data-page="1" class="l-tablepage-btn  active">1</a>\n                    \n                ';else if(o<7)for(var l=1;l<=o;l++)t+='             \n                        <a href="javascript:;" data-page="'+l+'" class="l-tablepage-btn  '+(c==l?"active":"")+'">'+l+"</a> \n                    ";else t+=c<4?'\n                    \n                    <a href="javascript:;" data-page="1" class="l-tablepage-btn  '+(1==c?"active":"")+'">1</a>\n                    <a href="javascript:;" data-page="2" class="l-tablepage-btn  '+(2==c?"active":"")+'">2</a>\n                    <a href="javascript:;" data-page="3" class="l-tablepage-btn  '+(3==c?"active":"")+'">3</a>\n                    <a href="javascript:;" data-page="4" class="l-tablepage-btn">4</a>\n                    <span class="l-laypage-spr">…</span>\n                    <a href="javascript:;" data-page="'+o+'" class="l-tablepage-btn ">'+o+"</a>\n                    \n                    ":o-2<c?'\n                    \n                    <a href="javascript:;" data-page="1" class="l-tablepage-btn  ">1</a>\n                    <span class="l-laypage-spr">…</span>\n                    <a href="javascript:;" data-page="'+(o-3)+'" class="l-tablepage-btn '+(c==o-3?"active":"")+'">'+(o-3)+'</a>\n                    <a href="javascript:;" data-page="'+(o-2)+'" class="l-tablepage-btn '+(c==o-2?"active":"")+'">'+(o-2)+'</a>\n                    <a href="javascript:;" data-page="'+(o-1)+'" class="l-tablepage-btn '+(c==o-1?"active":"")+'">'+(o-1)+'</a>\n                    <a href="javascript:;" data-page="'+o+'" class="l-tablepage-btn '+(c==o?"active":"")+'">'+o+"</a>\n                    \n                    ":'\n                    \n                    <a href="javascript:;" data-page="1" class="l-tablepage-btn  ">1</a>\n                    <span class="l-laypage-spr">…</span>\n                    <a href="javascript:;" data-page="'+(c-1)+'" class="l-tablepage-btn '+(c==c-1?"active":"")+'">'+(c-1)+'</a>\n                    <a href="javascript:;" data-page="'+c+'" class="l-tablepage-btn '+(c==c?"active":"")+'">'+c+'</a>\n                    <a href="javascript:;" data-page="'+(c+1)+'" class="l-tablepage-btn '+(c==c+1?"active":"")+'">'+(c+1)+'</a>\n                    <span class="l-laypage-spr">…</span>\n                    <a href="javascript:;" data-page="'+o+'" class="l-tablepage-btn ">'+o+"</a>\n                    \n                ";t+='\n                <a href="javascript:;" class="l-tablepage-btn l-laypage-next  '+(c==o?"l-disabled":"")+'" data-page="'+(c+1)+'">\n                    <i class="l-icon iconfont  icon-right"></i>\n                </a>\n                <span class="l-laypage-skip">到第\n                    <input type="text" min="1" value="1" class="l-input">页\n                    <button type="button" class="l-tablepagejump-btn">确定</button>\n                </span>\n                <span class="l-laypage-count">共 '+g+' 条</span>\n                <span class="l-laypage-limits">\n                    <select lay-ignore="" class="tablepage-limit-change">\n                        <option value="10">10 条/页</option>\n                        <option value="20" selected="">20 条/页</option>\n                        <option value="30">30 条/页</option>\n                        <option value="40">40 条/页</option>\n                        <option value="50">50 条/页</option>\n                        <option value="60">60 条/页</option>\n                        <option value="70">70 条/页</option>\n                        <option value="80">80 条/页</option>\n                        <option value="90">90 条/页</option>\n                    </select>\n                </span>\n            </div>\n        ',e.innerHTML=t;var i=document.querySelector(m.elem+" .l-table-page");i&&i.parentNode.removeChild(i),document.querySelector(m.elem).appendChild(e);for(var n=document.querySelectorAll(m.elem+" .l-tablepage-btn"),l=0,s=n.length;l<s;l++)n[l].addEventListener("click",function(e){var t;this.getAttribute("l-disabled")||(t=this.getAttribute("data-page"),a.page=parseInt(t))});document.getElementsByClassName("l-tablepagejump-btn")[0].addEventListener("click",function(e){var t=this.previousSibling.previousSibling.value;a.page=parseInt(t)}),document.querySelector(m.elem+" .tablepage-limit-change").onchange=function(){var e=this.value;a.limit=e}}},leeui.prototype.tabs={onchange:function(e){},init:function(){for(var e=document.getElementsByClassName("l-tab"),t=0;t<e.length;t++){var a=e[t],i=a.querySelectorAll(".l-tab-title>li"),n=a.querySelectorAll(".l-tab-content>.l-tab-item");console.log(i);for(var s=0;s<i.length;s++){var c=i[s];console.log(c),c.addEventListener("click",function(n,s,c){return function(e){console.log(e);for(var t=0;t<s.length;t++)console.log(n,t),s[t].className=n===t?s[t].className+" l-this":s[t].className.replace(/l-this/g,"");for(var a=0;a<c.length;a++){var i=c[a];i.className=a===n?i.className+" l-show":i.className.replace(/l-show/g,"")}l.tabs.onchange(n)}}(s,i,n),!1)}}}};