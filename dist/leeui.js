/** leeui-v1.0.0 ISC License By https://github.com/VanStranger/leeui#readme */
 ;"use strict";var leeui=new function(){this.silent=0,this.say=function(){this.silent||console.log("\n                    　　１１１１１１１１１　　　　　　　　　　　　　　　　１１　１１１１１　　　　　１１　　　　　　　１１１１１１１１１１　　　　１１１１１１１　　　　　　　　　　　　　　\n                    　　１　１１１１１　１　　　　　　　　　　　　　　１１１　　　　１１１　　　　１１１１１１　　　　　　　　　１１　　　　　　　１　１１１　１　　　　　　　　　　　　　　\n                    　　１１１１１１１１１１　　　　　　　　　　　　　１１１１１　１１１　　　　　１１　　１１　　　　　　　　１１１１　　　　　　１　１１１　１　　　　　　　　　　　　　　\n                    　１１１１１１１１１１１　　　　　　　　　　　　　　１１１１　１１　　　　　１１１　１１　　　　　　　　１１１１１１　　　　　１　１１１　１　　　　　　　　　　　　　　\n                    　　　１　　１１１　　　　　　　　　　　　　　　　　１１１１１１１１１１　　１１　１１１　　　　　　　１１１１　１１１　　　　１　１１１　１　　　　　　　　　　　　　　\n                    　　　　　１１１　１１　　　　　　　　　　　　　　１１１１　　　１　　　　　　　　１１１１　　　　１１１１　１　　１１　　　　１　１１１　１　　　　１１１　　　　　　　\n                    　１１１１１１１１１１１　　１１　　　　　　　　　　　１１１　　１　　　　　　１１１１１１１　　　１１　　　１　　　１　　　　１１１１１　　１　　　１１１　　　　　　　\n                    　　　　　１１　　　　　　　１１　　　　　　　　　１１１１１　１１　　　　１１１１　　　１１１１　　　　　　１　　　　　　　１１１１　１　　１１　　１１１　　　　　　　\n                    　　　　１１１　　　　　　　１１　　　　　　　　　１１　　１１１１　　　　１１１　　　　　１１１　　　　　　１　　　　　　１１１１　　１１１１１　　　１　　　　　　　　\n                    　　　　１１１　　　　　　　１１　　　　　　　　　　　　　　　１　　　　　　　　　　　　　　　　　　　　　　１　　　　　　　１　　　　　　　　　　　　　　　　　　　　　\n                    　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　\n                    　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　")}};"undefined"==typeof l&&(l=leeui),l.page=function(){var a=1,l=1;Object.defineProperty(this,"now",{get:function(){return a},set:function(e){a=parseInt(e)||1,this.render()}}),Object.defineProperty(this,"max",{get:function(){return l},set:function(e){l=parseInt(e)||1,this.render()}}),this.onPage=function(e,t,a){},this.render=function(){var n=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(e.elem&&(this.elem=e.elem),e.now&&(this.now=parseInt(e.now)),e.max&&(this.max=parseInt(e.max)),e.onPage&&"function"==typeof e.onPage&&(console.log(e.onPage),this.onPage=e.onPage),console.log(this.onPage),console.log(e.onpage),console.log(e.onPage),this.elem){var t=document.querySelectorAll(this.elem);if(t.length){this.pageHtml=s(a,l),console.log();var i=this;t.forEach(function(e){e.innerHTML=n.pageHtml;for(var t=e.getElementsByClassName("pagea"),a=0,l=t.length;a<l;a++){t[a].onclick=function(e){var t=parseInt(this.getAttribute("page"))||1;i.onPage(e,t,i.max)}}})}}};var s=function(e,t){var a="",l="",n="";switch(e){case 1:a="",l=1==t?"":"<li class='pageli sib'><a class='pagea' page='"+(e+1)+"' href='###'>下一页</a></li>";break;case t:l="",a="<li class='pageli sib'><a class='pagea' page='"+(e-1)+"'  href='###'>上一页</a></li>";break;default:a="<li class='pageli sib'><a class='pagea' page='"+(e-1)+"'  href='###'>上一页</a></li>",l="<li class='pageli sib'><a class='pagea' page='"+(e+1)+"'  href='###'>下一页</a></li>"}switch(!0){case e<5:if(7<t){for(n="",i=1;i<6;i++)i==e?n+="<li class='pageli active'><a class='pagea' page='"+i+"'  href='###'>"+i+"</a></li>":n+="<li class='pageli'><a class='pagea' page='"+i+"'  href='###'>"+i+"</a></li>";console.log(t),n+="<li class='pageli'>···</li><li class='pageli'><a class='pagea' page='"+t+"' href='###'>"+t+"</a></li>"}else for(n="",i=1;i<=t;i++)i==e?n+="<li class='pageli active'><a class='pagea' page='"+i+"'  href='###'>"+i+"</a></li>":n+="<li class='pageli'><a class='pagea' page='"+i+"'  href='###'>"+i+"</a></li>";break;case t-3<e&&4<e:for(n="<li class='pageli'><a class='pagea' page='1'  href='###'> 1</a></li><li class='pageli'>···</li>",i=e-3;i<=t;i++)console.log(i),i==e?n+="<li class='pageli active'><a class='pagea' page='"+i+"'  href='###'>"+i+"</a></li>":n+="<li class='pageli'><a class='pagea' page='"+i+"'  href='###'>"+i+"</a></li>";break;default:for(console.log(t),n="<li class='pageli'><a class='pagea' page='1'  href='###'>1</a></li><li class='pageli'>···</li>",i=e-3;i<=e+3;i++)i==e?n+="<li class='pageli active'><a class='pagea' page='"+i+"'  href='###'>"+i+"</a></li>":n+="<li class='pageli'><a class='pagea' page='"+i+"'  href='###'>"+i+"</a></li>";n+="<li class='pageli'>···</li><li class='pageli'><a class='pagea' page='"+t+"' href='###'>"+t+"</a></li>"}return a+n+l}},l.form={l_forms:[],selectfns:[],onSelect:function(e,t){t||(t=function(){}),this.selectfns.push([e,t])},onSelectFn:function(e,t,a,l){for(var n,i=0,s=this.selectfns.length;i<s;i++)infilter=this.selectfns[i][0],n=this.selectfns[i][1],infilter&&infilter!==e||n(t,a,l)},submitfns:[],onSubmit:function(e,t){t||(t=function(){}),this.submitfns.push([e,t])},onSubmitFn:function(e,t){for(var a,l=0,n=this.submitfns.length;l<n;l++)infilter=this.submitfns[l][0],a=this.submitfns[l][1],infilter&&infilter!==e||a(value,title)},renderSelect:function(){for(var d=this,e=[],p=[],t=0,a=this.l_forms.length;t<a;t++)for(var l=this.l_forms[t][0].getElementsByTagName("select"),n=0,i=l.length;n<i;n++){l[n].onchange=function(){d.renderSelect()};var s=l[n].getElementsByTagName("option"),c=null!==l[n].getAttribute("l-search"),o=l[n].options.length?l[n].options[0].innerText:"";p[p.length]=document.createElement("div"),p[p.length-1].className="l-unselect l-form-select",selectdivhtml="";for(var r=0,m=s.length;r<m;r++){var g=s[r].getAttribute("value"),h=s[r].innerText,f=s[r].selected;g||h?(f&&(o=h),selectdivhtml+='<dd l-value="'+g+'" class="'+(f?"l-this":"")+'">'+h+"</dd>"):selectdivhtml+='<dd l-value="" class="l-select-tips">请选择</dd>'}selectdivhtml='<div class="l-select-title"><input type="text" placeholder="请选择" value="'+o+'" '+(c?"":'readonly=""')+' class="l-input l-unselect l-select-searchinput"><i class="l-edge"></i></div><dl class="l-anim l-anim-upbit" style="">'+selectdivhtml,selectdivhtml+="</dl>",p[p.length-1].innerHTML=selectdivhtml,p[p.length-1].setAttribute("l-filter",l[n].getAttribute("l-filter")),e[e.length]=p[p.length-1];var u=l[n].previousElementSibling;u&&u.className.match("l-form-select")&&u.parentNode.removeChild(u),l[n].parentNode.insertBefore(p[p.length-1],l[n])}for(var v=0,b=p.length;v<b;v++){var N=p[v].getElementsByClassName("l-select-searchinput"),y=p[v].getAttribute("l-filter"),x=p[v].getElementsByTagName("dd");N[0].oninput=function(l){return function(e){for(var t=this.value,a=0;a<l.length;a++)-1===l[a].innerText.indexOf(t)?-1===l[a].className.indexOf("l-hide")&&(l[a].className=l[a].className+" l-hide"):(l[a].className=l[a].className.replace(/\sl\-hide/g,""),l[a].className=l[a].className.replace(/l\-hide\s/g,""))}}(x);for(t=0,a=x.length;t<a;t++)x[t].onclick=function(g,h){return function(e){var t=this.getAttribute("l-value"),a=this.innerText;if(p[g].getElementsByTagName("input")[0].value=a,p[g].className=p[g].className.replace(" l-form-selected",""),"l-select-tips"!=this.className){for(var l=this.parentNode.children,n=0,i=l.length;n<i;n++)l[n]!=this?l[n].className=l[n].className.replace("l-this",""):this.className+=" l-this";for(var s,c=p[g].nextSibling.getElementsByTagName("option"),o=p[g].nextSibling,r=0,m=c.length;r<m;r++){c[r].getAttribute("value")==t?(s=c[r],c[r].setAttribute("selected",!0)):c[r].removeAttribute("selected")}o.fireEvent?o.fireEvent("onchange"):o.onchange&&o.onchange(),d.onSelectFn(h,t,a,s)}}}(v,y)}var E=document.getElementsByClassName("l-select-title");for(t=0,a=E.length;t<a;t++)E[t].onclick=function(e){var t=this.parentNode;-1==t.className.indexOf("l-form-selected")?t.className+=" l-form-selected":t.className=t.className.replace(" l-form-selected","")}},rendeRadioCheckbox:function(){for(var e=this,t=0,a=this.l_forms.length;t<a;t++)for(var l=this.l_forms[t][0].getElementsByTagName("input"),n=0,i=l.length;n<i;n++)switch(l[n].getAttribute("type")){case"radio":l[n].onchange=function(){e.rendeRadioCheckbox()};var s=l[n].getAttribute("title"),c=l[n].getAttribute("value"),o=l[n].getAttribute("name"),r=document.createElement("div");l[n].checked?(r.className="l-form-radio l-form-radioed",r.innerHTML='<i class="l-anim l-icon l-anim-scaleSpring icon-radiochecked"></i><div>'+s+"</div>"):(r.className="l-form-radio",r.innerHTML='<i class="l-anim l-icon icon-radio"></i><div>'+s+"</div>"),(h=l[n].previousElementSibling)&&h.className.match("l-form-radio")&&h.parentNode.removeChild(h),r.setAttribute("l-value",c),r.setAttribute("l-name",o),l[n].parentNode.insertBefore(r,l[n]),r.onclick=function(e){for(var t=this.getAttribute("l-name"),a=this.getAttribute("l-value"),l=document.getElementsByName(t),n=0,i=l.length;n<i;n++)l[n].getAttribute("value")==a?l[n].setAttribute("checked",!0):l[n].removeAttribute("checked");var s=document.getElementsByClassName("l-form-radio");for(n=0,i=s.length;n<i;n++){s[n].className=s[n].className.replace("l-form-radioed","");var c=s[n].getElementsByClassName("l-icon")[0];c.className=c.className.replace("l-anim-scaleSpring",""),c.className=c.className.replace("icon-radiochecked","icon-radio")}this.className+=" l-form-radioed",this.getElementsByClassName("l-icon")[0].className+=" l-anim-scaleSpring",this.getElementsByClassName("l-icon")[0].className=this.getElementsByClassName("l-icon")[0].className.replace("icon-radio","icon-radiochecked")};break;case"checkbox":l[n].onchange=function(){e.rendeRadioCheckbox()};var m=l[n].getAttribute("title"),g=document.createElement("div");if(l[n].getAttribute("l-skin")){if("switch"==l[n].getAttribute("l-skin")){var h,d=l[n].getAttribute("l-text"),p=d.split("|");(g=document.createElement("div")).setAttribute("l-text",d),l[n].checked?(g.className="l-form-switch l-form-onswitch",g.innerHTML="<em>"+p[0]+"</em><i></i>"):(g.className="l-form-switch",g.innerHTML="<em>"+p[1]+"</em><i></i>"),(h=l[n].previousElementSibling)&&h.className.match("l-form-switch")&&h.parentNode.removeChild(h),l[n].parentNode.insertBefore(g,l[n]),g.onclick=function(e){var t=this.getAttribute("l-text").split("|");-1==this.className.indexOf("l-form-onswitch")?(this.className+=" l-form-onswitch",this.nextSibling.setAttribute("checked",!0),this.getElementsByTagName("em")[0].innerText=t[0]):(this.className=this.className.replace("l-form-onswitch",""),this.nextSibling.removeAttribute("checked"),this.getElementsByTagName("em")[0].innerText=t[1])}}}else l[n].checked?(g.className="l-form-checkbox l-form-checked",g.innerHTML="<span>"+m+'</span><i class="l-icon icon-complete"></i>'):(g.className="l-form-checkbox",g.innerHTML="<span>"+m+'</span><i class="l-icon  icon-complete"></i>'),(h=l[n].previousElementSibling)&&h.className.match("l-form-checkbox")&&h.parentNode.removeChild(h),l[n].parentNode.insertBefore(g,l[n]),g.onclick=function(e){-1==this.className.indexOf("l-form-checked")?(this.className+=" l-form-checked",this.nextSibling.setAttribute("checked",!0)):(this.className=this.className.replace("l-form-checked",""),this.nextSibling.removeAttribute("checked"))}}},initform:function(){var e=this;document.getElementsByClassName("l-form")[0].className+=" actived";for(var t,a=document.getElementsByClassName("l-form"),l=0,n=a.length;l<n;l++)t=a[l].getAttribute("l-filter"),this.l_forms.push({0:a[l],filter:t}),a[l].onSubmit=void e.onSubmitFn(t);this.renderSelect(),this.rendeRadioCheckbox()},getFormJson:function(){var e,t=[],a=Array.prototype.slice.call(arguments);if(!a.length)return this.getFormJson(0);if(!isNaN(a[0])){if(this.l_forms.length>parseInt(a[0])){for(var l=0,n=(e=this.l_forms[parseInt(a[0])])[0].length;l<n;l++){switch((c=e[0][l]).tagName){case"INPUT":if(-1<["text","password","hidden"].indexOf(c.getAttribute("type").toLocaleLowerCase())){var i={};(s=c.getAttribute("name"))&&(i.name=s,i.value=c.value,t.push(i))}if(-1<["checkbox","radio"].indexOf(c.getAttribute("type").toLocaleLowerCase())&&c.checked){i={};var s=c.getAttribute("name");i.name=s,i.value=c.value||"on",t.push(i)}break;default:i={};(s=c.getAttribute("name"))&&(i.name=s,i.value=c.value,t.push(i))}}return t}return null}for(l=0,n=a.length;l<n;l++)if(this.l_forms[l].filter==a[0]){e=this.l_forms[l];break}if(e){for(l=0,n=e[0].length;l<n;l++){var c;switch((c=e[0][l]).tagName){case"INPUT":if(-1<["text","password","hidden"].indexOf(c.getAttribute("type").toLocaleLowerCase())){i={};(s=c.getAttribute("name"))&&(i.name=s,i.value=c.value,t.push(i))}if(-1<["checkbox","radio"].indexOf(c.getAttribute("type").toLocaleLowerCase())&&c.checked){i={},s=c.getAttribute("name");i.name=s,i.value=c.value||"on",t.push(i)}break;default:i={};(s=c.getAttribute("name"))&&(i.name=s,i.value=c.value,t.push(i))}}return t}}},l.photos={index:0,imgboxwidth:0,imgboxheight:0,rotateangle:0,showimgs:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:-1,a=["active",""],l=document.documentElement.clientHeight||document.body.offsetWidth,n=document.documentElement.clientWidth||document.body.offsetHeight;if(document.getElementById("LYshowimgs_div"));else{var i=document.createElement("div");i.style.width=n+"px",i.style.height=l+"px",i.setAttribute("id","LYshowimgs_div"),htmlstr='<div class="l_closebtn">\n                            <a href="###" class="l_closebtna iconfont icon-close"></a>\n                        </div>\n                        <a href="###" class="l_prev iconfont icon-left"></a>\n                        <a href="###" class="l_next iconfont icon-right"></a>\n                        <div class="l_mu"></div>\n                        <div class="l_imgctrbtns">\n                            <span class="iconfont icon-undo"></span>\n                            <span class="iconfont icon-redo"></span>\n                        </div>\n                        <div class="l_imgbox">';for(var s=0;s<e.length;s++){var c=e[s];htmlstr+='<img src="'+c+'" alt="" class="l_img '+a[t==s?0:1]+'">'}htmlstr+="</div>",i.innerHTML=htmlstr,document.body.appendChild(i);var o=document.getElementsByClassName("l_imgbox")[0];this.imgboxwidth=o.clientWidth,this.imgboxheight=o.clientHeight,document.getElementsByClassName("l_img active")[0].style.marginLeft="-"+document.getElementsByClassName("l_img active")[0].clientWidth/2+"px",document.getElementsByClassName("l_img active")[0].style.marginTop="-"+document.getElementsByClassName("l_img active")[0].clientHeight/2+"px"}},showimgobjs:function(e,t){for(var a=0,l=e.length;a<l;a++)if(t==e[a]){var n=[],i=0;for(l=e.length;i<l;i++)n[n.length]=e[i].src;return index=a,void this.showimgs(n,index)}},init:function(m){var g=this;document.addEventListener("click",function(e){for(var t,a,l=(e=e||window.e).target;l&&l!=this;){if(m&&-1==["document","document.body","body"].indexOf(m.toLowerCase()))for(var n=0,i=(t=document.querySelectorAll(m)).length;n<i;n++)a=t[n].getElementsByTagName("img"),g.showimgobjs(a,l);else a=(t=document).getElementsByTagName("img"),g.showimgobjs(a,l);if(l&&l.className)if(l.className.match("l_closebtn"))(r=document.getElementById("LYshowimgs_div"))&&document.body.removeChild(r);else if(l.className.match("l_prev")){var s=document.getElementsByClassName("l_img");index=0<index?index-1:s.length-1;for(var c=0,o=s.length;c<o;c++)c==index?s[c].className="l_img active":s[c].className="l_img";document.getElementsByClassName("l_img active")[0].style.marginLeft="-"+document.getElementsByClassName("l_img active")[0].clientWidth/2+"px",document.getElementsByClassName("l_img active")[0].style.marginTop="-"+document.getElementsByClassName("l_img active")[0].clientHeight/2+"px"}else if(l.className.match("l_next")){var r;s=document.getElementsByClassName("l_img");index=index==s.length-1?0:index+1;for(c=0,o=s.length;c<o;c++)c==index?s[c].className="l_img active":s[c].className="l_img";(r=document.getElementsByClassName("l_img active")[0]).style.marginLeft="-"+r.clientWidth/2+"px",r.style.marginTop="-"+r.clientHeight/2+"px"}else l.className.match("icon-undo")?(g.rotateangle=0==g.rotateangle?3:g.rotateangle-1,document.getElementsByClassName("l_img active")[0].style.transform=" rotate("+90*g.rotateangle+"deg)"):l.className.match("icon-redo")&&(g.rotateangle=3==g.rotateangle?0:g.rotateangle+1,document.getElementsByClassName("l_img active")[0].style.transform=" rotate("+90*g.rotateangle+"deg)");l=l.parentNode}},!1)}},l.table=new function(){var r=[],t=20,c=1,o=1,m={},g=0;Object.defineProperty(this,"data",{get:function(){return r},set:function(e){r=e,this.render()}}),Object.defineProperty(this,"limit",{get:function(){return t},set:function(e){t=e,this.changedata()}}),Object.defineProperty(this,"page",{get:function(){return o<c?1:parseInt(c)},set:function(e){c=o<e?1:parseInt(e),this.changedata()}}),Object.defineProperty(this,"amount",{get:function(){return parseInt(g)},set:function(e){g=e,o=Math.ceil(g/t),this.renderpage()}}),this.changedata=function(){m&&m.datachange(c,t)},this.render=function(e){e&&(m=e);var t="<thead>",a="<tbody>";if(0==r.length)a="<tr><td align='center'>暂无数据</td></tr>";else{a="";for(var l=[],n=0,i=r.length;n<i;n++){r[n];a+="<tr>";for(var s=0,c=(l=m.cols(r[n])).length;s<c;s++)0==n&&(t+="<th "+(l[s].width?"style='width:"+l[s].width+"'":"")+" >"+l[s].title+"</th>"),a+="<td data-label='"+l[s].title+"'>"+l[s].value+"</td>";a+="</tr>"}t+="</thead>"}a+="</tbody>";var o=document.createElement("table");o.className="l-table",o.innerHTML=t+a,document.querySelector(m.elem).innerHTML="",document.querySelector(m.elem).appendChild(o),this.renderpage()},this.renderpage=function(){var a=this,e=document.createElement("div");e.className="l-table-page";var t='\n            <div class="l-box l-laypage l-laypage-default">\n                <a href="###" class="l-tablepage-btn l-laypage-prev '+(1==c?"l-disabled":"")+'" data-page="'+(c-1)+'">\n                    <i class="l-icon iconfont  icon-left"></i>\n                </a>\n            ';if(1==o)t+='\n                    \n                    <a href="###" data-page="1" class="l-tablepage-btn  active">1</a>\n                    \n                ';else if(o<7)for(var l=1;l<=o;l++)t+='             \n                        <a href="###" data-page="'+l+'" class="l-tablepage-btn  '+(c==l?"active":"")+'">'+l+"</a> \n                    ";else t+=c<4?'\n                    \n                    <a href="###" data-page="1" class="l-tablepage-btn  '+(1==c?"active":"")+'">1</a>\n                    <a href="###" data-page="2" class="l-tablepage-btn  '+(2==c?"active":"")+'">2</a>\n                    <a href="###" data-page="3" class="l-tablepage-btn  '+(3==c?"active":"")+'">3</a>\n                    <a href="###" data-page="4" class="l-tablepage-btn">4</a>\n                    <span class="l-laypage-spr">…</span>\n                    <a href="###" data-page="'+o+'" class="l-tablepage-btn ">'+o+"</a>\n                    \n                    ":o-2<c?'\n                    \n                    <a href="###" data-page="1" class="l-tablepage-btn  ">1</a>\n                    <span class="l-laypage-spr">…</span>\n                    <a href="###" data-page="'+(o-3)+'" class="l-tablepage-btn '+(c==o-3?"active":"")+'">'+(o-3)+'</a>\n                    <a href="###" data-page="'+(o-2)+'" class="l-tablepage-btn '+(c==o-2?"active":"")+'">'+(o-2)+'</a>\n                    <a href="###" data-page="'+(o-1)+'" class="l-tablepage-btn '+(c==o-1?"active":"")+'">'+(o-1)+'</a>\n                    <a href="###" data-page="'+o+'" class="l-tablepage-btn '+(c==o?"active":"")+'">'+o+"</a>\n                    \n                    ":'\n                    \n                    <a href="###" data-page="1" class="l-tablepage-btn  ">1</a>\n                    <span class="l-laypage-spr">…</span>\n                    <a href="###" data-page="'+(c-1)+'" class="l-tablepage-btn '+(c==c-1?"active":"")+'">'+(c-1)+'</a>\n                    <a href="###" data-page="'+c+'" class="l-tablepage-btn '+(c==c?"active":"")+'">'+c+'</a>\n                    <a href="###" data-page="'+(c+1)+'" class="l-tablepage-btn '+(c==c+1?"active":"")+'">'+(c+1)+'</a>\n                    <span class="l-laypage-spr">…</span>\n                    <a href="###" data-page="'+o+'" class="l-tablepage-btn ">'+o+"</a>\n                    \n                ";t+='\n                <a href="###" class="l-tablepage-btn l-laypage-next  '+(c==o?"l-disabled":"")+'" data-page="'+(c+1)+'">\n                    <i class="l-icon iconfont  icon-right"></i>\n                </a>\n                <span class="l-laypage-skip">到第\n                    <input type="text" min="1" value="1" class="l-input">页\n                    <button type="button" class="l-tablepagejump-btn">确定</button>\n                </span>\n                <span class="l-laypage-count">共 '+g+' 条</span>\n                <span class="l-laypage-limits">\n                    <select lay-ignore="" class="tablepage-limit-change">\n                        <option value="10">10 条/页</option>\n                        <option value="20" selected="">20 条/页</option>\n                        <option value="30">30 条/页</option>\n                        <option value="40">40 条/页</option>\n                        <option value="50">50 条/页</option>\n                        <option value="60">60 条/页</option>\n                        <option value="70">70 条/页</option>\n                        <option value="80">80 条/页</option>\n                        <option value="90">90 条/页</option>\n                    </select>\n                </span>\n            </div>\n        ',e.innerHTML=t;var n=document.querySelector(m.elem+" .l-table-page");n&&n.parentNode.removeChild(n),document.querySelector(m.elem).appendChild(e);for(var i=document.querySelectorAll(m.elem+" .l-tablepage-btn"),s=(l=0,i.length);l<s;l++)i[l].onclick=function(e){if(!this.getAttribute("l-disabled")){var t=this.getAttribute("data-page");a.page=parseInt(t)}};document.getElementsByClassName("l-tablepagejump-btn")[0].onclick=function(e){var t=this.previousSibling.previousSibling.value;a.page=parseInt(t)},document.querySelector(m.elem+" .tablepage-limit-change").onchange=function(){var e=this.value;a.limit=e}}};