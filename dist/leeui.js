/** leeui-v1.0.0 ISC License By https://github.com/VanStranger/leeui#readme */
 ;"use strict";var l=new function(){this.silent=0};l.form={l_forms:[],rendertable:function(e){for(var t="",l=0,n=e.length;l<n;l++)t+="\n                <tr>\n                  <td>贤心</td>\n                  <td>2016-11-29</td>\n                  <td>人生就像是一场修行</td>\n                </tr>";return t},renderRow:function(e){},initform:function(){this.say(),document.getElementsByClassName("l-form")[0].className+=" actived";for(var e=document.getElementsByClassName("l-form"),t=0,n=e.length;t<n;t++)this.l_forms.push({0:e[t]});var a=[],m=[];for(t=0,n=this.l_forms.length;t<n;t++)for(var s=this.l_forms[t][0].getElementsByTagName("select"),i=0,o=s.length;i<o;i++){var c=s[i].getElementsByTagName("option"),r=(s[i].getAttribute("name"),s[i].options.length?s[i].options[0].innerText:"");m[m.length]=document.createElement("div"),m[m.length-1].className="l-unselect l-form-select",selectdivhtml="";for(var d=0,g=c.length;d<g;d++){var h=c[d].getAttribute("value"),u=c[d].innerText,f=c[d].selected;h||u?(f&&(r=u),selectdivhtml+='<dd l-value="'+h+'" class="'+(f?"l-this":"")+'">'+u+"</dd>"):selectdivhtml+='<dd l-value="" class="l-select-tips">请选择</dd>'}selectdivhtml='<div class="l-select-title"><input type="text" placeholder="请选择" value="'+r+'" readonly="" class="l-input l-unselect"><i class="l-edge"></i></div><dl class="l-anim l-anim-upbit" style="">'+selectdivhtml,selectdivhtml+="</dl>",m[m.length-1].innerHTML=selectdivhtml,a[a.length]=m[m.length-1],s[i].parentNode.insertBefore(m[m.length-1],s[i])}for(l=0,selectdivslen=m.length;l<selectdivslen;l++){var p=m[l].getElementsByTagName("dd");for(t=0,n=p.length;t<n;t++)p[t].onclick=function(r){return function(e){var t=this.getAttribute("l-value"),l=this.innerText;if(m[r].getElementsByTagName("input")[0].value=l,m[r].className=m[r].className.replace(" l-form-selected",""),"l-select-tips"!=this.className){for(var n=this.parentNode.children,a=0,s=n.length;a<s;a++)n[a]!=this?n[a].className=n[a].className.replace("l-this",""):this.className+=" l-this";for(var i=m[r].nextSibling.getElementsByTagName("option"),o=0,c=i.length;o<c;o++){i[o].getAttribute("value")==t?i[o].setAttribute("selected",!0):i[o].removeAttribute("selected")}}}}(l)}var v=document.getElementsByClassName("l-select-title");for(t=0,n=v.length;t<n;t++)v[t].onclick=function(e){var t=this.parentNode;-1==t.className.indexOf("l-form-selected")?t.className+=" l-form-selected":t.className=t.className.replace(" l-form-selected","")};for(t=0,n=this.l_forms.length;t<n;t++)for(var b=this.l_forms[t][0].getElementsByTagName("input"),N=(i=0,b.length);i<N;i++)switch(b[i].getAttribute("type")){case"radio":var y=b[i].getAttribute("title"),x=b[i].getAttribute("value"),E=b[i].getAttribute("name"),_=document.createElement("div");b[i].checked?(_.className="l-unselect l-form-radio l-form-radioed",_.innerHTML='<i class="l-anim l-icon l-anim-scaleSpring icon-radiochecked"></i><div>'+y+"</div>"):(_.className="l-unselect l-form-radio",_.innerHTML='<i class="l-anim l-icon icon-radio"></i><div>'+y+"</div>"),_.setAttribute("l-value",x),_.setAttribute("l-name",E),b[i].parentNode.insertBefore(_,b[i]),_.onclick=function(e){for(var t=this.getAttribute("l-name"),l=this.getAttribute("l-value"),n=document.getElementsByName(t),a=0,s=n.length;a<s;a++)console.log(n[a].getAttribute("value")),n[a].getAttribute("value")==l?n[a].setAttribute("checked",!0):n[a].removeAttribute("checked");var i=document.getElementsByClassName("l-form-radio");for(a=0,s=i.length;a<s;a++){i[a].className=i[a].className.replace("l-form-radioed","");var o=i[a].getElementsByClassName("l-icon")[0];o.className=o.className.replace("l-anim-scaleSpring",""),o.className=o.className.replace("icon-radiochecked","icon-radio")}this.className+=" l-form-radioed",this.getElementsByClassName("l-icon")[0].className+=" l-anim-scaleSpring",this.getElementsByClassName("l-icon")[0].className=this.getElementsByClassName("l-icon")[0].className.replace("icon-radio","icon-radiochecked")};break;case"checkbox":var B=b[i].getAttribute("title"),A=document.createElement("div");if(b[i].getAttribute("l-skin")){if("switch"==b[i].getAttribute("l-skin")){var w=b[i].getAttribute("l-text"),k=w.split("|");(A=document.createElement("div")).setAttribute("l-text",w),b[i].checked?(A.className="l-unselect l-form-switch l-form-onswitch",A.innerHTML="<em>"+k[0]+"</em><i></i>"):(A.className="l-unselect l-form-switch",A.innerHTML="<em>"+k[1]+"</em><i></i>"),b[i].parentNode.insertBefore(A,b[i]),A.onclick=function(e){var t=this.getAttribute("l-text").split("|");-1==this.className.indexOf("l-form-onswitch")?(this.className+=" l-form-onswitch",this.nextSibling.setAttribute("checked",!0),this.getElementsByTagName("em")[0].innerText=t[0]):(this.className=this.className.replace("l-form-onswitch",""),this.nextSibling.removeAttribute("checked"),this.getElementsByTagName("em")[0].innerText=t[1])}}}else b[i].checked?(A.className="l-unselect l-form-checkbox l-form-checked",A.innerHTML="<span>"+B+'</span><i class="l-icon icon-complete"></i>'):(A.className="l-unselect l-form-checkbox",A.innerHTML="<span>"+B+'</span><i class="l-icon  icon-complete"></i>'),b[i].parentNode.insertBefore(A,b[i]),A.onclick=function(e){-1==this.className.indexOf("l-form-checked")?(this.className+=" l-form-checked",this.nextSibling.setAttribute("checked",!0)):(this.className=this.className.replace("l-form-checked",""),this.nextSibling.removeAttribute("checked"))}}},getFormJson:function(){var e=[],t=Array.prototype.slice.call(arguments);if(t.length){if(!isNaN(t[0])){if(this.l_forms.length>parseInt(t[0])){for(var l=this.l_forms[parseInt(t[0])],n=0,a=l[0].length;n<a;n++){var s=l[0][n];switch(s.tagName){case"INPUT":if(-1<["text","password"].indexOf(s.getAttribute("type").toLocaleLowerCase())){var i={};(o=s.getAttribute("name"))&&(i[o]=s.value,e.push(i))}var o;if(-1<["checkbox","radio"].indexOf(s.getAttribute("type").toLocaleLowerCase())&&s.checked)console.log(s),(i={})[o=s.getAttribute("name")]=s.getAttribute("value")||"on",e.push(i)}}return e}return null}}else console.log("noarguments")},say:function(){this.silent||console.log("\n                    　　１１１１１１１１１　　　　　　　　　　　　　　　　１１　１１１１１　　　　　１１　　　　　　　１１１１１１１１１１　　　　１１１１１１１　　　　　　　　　　　　　　\n                    　　１　１１１１１　１　　　　　　　　　　　　　　１１１　　　　１１１　　　　１１１１１１　　　　　　　　　１１　　　　　　　１　１１１　１　　　　　　　　　　　　　　\n                    　　１１１１１１１１１１　　　　　　　　　　　　　１１１１１　１１１　　　　　１１　　１１　　　　　　　　１１１１　　　　　　１　１１１　１　　　　　　　　　　　　　　\n                    　１１１１１１１１１１１　　　　　　　　　　　　　　１１１１　１１　　　　　１１１　１１　　　　　　　　１１１１１１　　　　　１　１１１　１　　　　　　　　　　　　　　\n                    　　　１　　１１１　　　　　　　　　　　　　　　　　１１１１１１１１１１　　１１　１１１　　　　　　　１１１１　１１１　　　　１　１１１　１　　　　　　　　　　　　　　\n                    　　　　　１１１　１１　　　　　　　　　　　　　　１１１１　　　１　　　　　　　　１１１１　　　　１１１１　１　　１１　　　　１　１１１　１　　　　１１１　　　　　　　\n                    　１１１１１１１１１１１　　１１　　　　　　　　　　　１１１　　１　　　　　　１１１１１１１　　　１１　　　１　　　１　　　　１１１１１　　１　　　１１１　　　　　　　\n                    　　　　　１１　　　　　　　１１　　　　　　　　　１１１１１　１１　　　　１１１１　　　１１１１　　　　　　１　　　　　　　１１１１　１　　１１　　１１１　　　　　　　\n                    　　　　１１１　　　　　　　１１　　　　　　　　　１１　　１１１１　　　　１１１　　　　　１１１　　　　　　１　　　　　　１１１１　　１１１１１　　　１　　　　　　　　\n                    　　　　１１１　　　　　　　１１　　　　　　　　　　　　　　　１　　　　　　　　　　　　　　　　　　　　　　１　　　　　　　１　　　　　　　　　　　　　　　　　　　　　\n                    　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　\n                    　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　")}},l.photos={index:0,imgboxwidth:0,imgboxheight:0,rotateangle:0,showimgs:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:-1,l=["active",""],n=document.documentElement.clientHeight||document.body.offsetWidth,a=document.documentElement.clientWidth||document.body.offsetHeight;if(document.getElementById("LYshowimgs_div"));else{var s=document.createElement("div");s.style.width=a+"px",s.style.height=n+"px",s.setAttribute("id","LYshowimgs_div"),htmlstr='<div class="l_closebtn">\n                            <a href="###" class="l_closebtna iconfont icon-close"></a>\n                        </div>\n                        <a href="###" class="l_prev iconfont icon-left"></a>\n                        <a href="###" class="l_next iconfont icon-right"></a>\n                        <div class="l_mu"></div>\n                        <div class="l_imgctrbtns">\n                            <span class="iconfont icon-undo"></span>\n                            <span class="iconfont icon-redo"></span>\n                        </div>\n                        <div class="l_imgbox">';for(var i=0;i<e.length;i++){var o=e[i];htmlstr+='<img src="'+o+'" alt="" class="l_img '+l[t==i?0:1]+'">'}htmlstr+="</div>",s.innerHTML=htmlstr,document.body.appendChild(s);var c=document.getElementsByClassName("l_imgbox")[0];this.imgboxwidth=c.clientWidth,this.imgboxheight=c.clientHeight,document.getElementsByClassName("l_img active")[0].style.marginLeft="-"+document.getElementsByClassName("l_img active")[0].clientWidth/2+"px",document.getElementsByClassName("l_img active")[0].style.marginTop="-"+document.getElementsByClassName("l_img active")[0].clientHeight/2+"px"}},showimgobjs:function(e,t){for(var l=0,n=e.length;l<n;l++)if(t==e[l]){var a=[],s=0;for(n=e.length;s<n;s++)a[a.length]=e[s].src;return index=l,void this.showimgs(a,index)}},init:function(m){var d=this;document.addEventListener("click",function(e){for(var t,l,n=(e=e||window.e).target;n&&n!=this;){if(m&&-1==["document","document.body","body"].indexOf(m.toLowerCase()))for(var a=0,s=(t=document.querySelectorAll(m)).length;a<s;a++)l=t[a].getElementsByTagName("img"),d.showimgobjs(l,n);else l=(t=document).getElementsByTagName("img"),d.showimgobjs(l,n);if(n&&n.className)if(n.className.match("l_closebtn"))(r=document.getElementById("LYshowimgs_div"))&&document.body.removeChild(r);else if(n.className.match("l_prev")){console.log("prev");var i=document.getElementsByClassName("l_img");index=0<index?index-1:i.length-1;for(var o=0,c=i.length;o<c;o++)o==index?i[o].className="l_img active":i[o].className="l_img";console.log(document.getElementsByClassName("l_img active")[0]),console.log(this.imgboxheight),document.getElementsByClassName("l_img active")[0].style.marginLeft="-"+document.getElementsByClassName("l_img active")[0].clientWidth/2+"px",document.getElementsByClassName("l_img active")[0].style.marginTop="-"+document.getElementsByClassName("l_img active")[0].clientHeight/2+"px"}else if(n.className.match("l_next")){console.log("next");i=document.getElementsByClassName("l_img");index=index==i.length-1?0:index+1;for(o=0,c=i.length;o<c;o++)o==index?i[o].className="l_img active":i[o].className="l_img";var r=document.getElementsByClassName("l_img active")[0];console.log(r),console.log("-"+(d.imgboxwidth-r.clientWidth)/2+"px"),r.style.marginLeft="-"+r.clientWidth/2+"px",r.style.marginTop="-"+r.clientHeight/2+"px",console.log(r)}else n.className.match("icon-undo")?(d.rotateangle=0==d.rotateangle?3:d.rotateangle-1,document.getElementsByClassName("l_img active")[0].style.transform=" rotate("+90*d.rotateangle+"deg)"):n.className.match("icon-redo")&&(d.rotateangle=3==d.rotateangle?0:d.rotateangle+1,document.getElementsByClassName("l_img active")[0].style.transform=" rotate("+90*d.rotateangle+"deg)");n=n.parentNode}},!1)}},l.table=new function(){var r=[],t=20,l=1,m={};Object.defineProperty(this,"data",{get:function(){return r},set:function(e){r=e,this.render()}}),Object.defineProperty(this,"limit",{get:function(){return t},set:function(e){t=e,this.changedata()}}),Object.defineProperty(this,"page",{get:function(){return l},set:function(e){l=e,this.changedata()}}),this.changedata=function(){m&&m.datachange(l,t)},this.render=function(e){e&&(m=e);var t="<thead>",l="<tbody>";if(0==r.length)l="zanwushuju";else{l="";for(var n=[],a=0,s=r.length;a<s;a++){r[a];l+="<tr>";for(var i=0,o=(n=m.cols(r[a])).length;i<o;i++)0==a&&(t+="<th "+(n[i].width?"style='width:"+n[i].width+"'":"")+" >"+n[i].title+"</th>"),l+="<td data-label='"+n[i].title+"'>"+n[i].value+"</td>";l+="</tr>"}t+="</thead>"}l+="</tbody>";var c=document.createElement("table");c.className="l-table",c.innerHTML=t+l,document.querySelector(m.elem).innerHTML="",document.querySelector(m.elem).appendChild(c),this.renderpage()},this.renderpage=function(){var t=this,e=document.createElement("div");e.className="l-table-page";e.innerHTML='\n            <div class="l-box l-laypage l-laypage-default">\n                <a href="###" class="l-tablepage-btn l-laypage-prev l-disabled" data-page="0">\n                    <i class="l-icon iconfont  icon-left"></i>\n                </a>\n                <a href="###" data-page="1" class="l-tablepage-btn active">1</a>\n                <a href="###" data-page="2" class="l-tablepage-btn">2</a>\n                <a href="###" data-page="3" class="l-tablepage-btn">3</a>\n                <span class="l-laypage-spr">…</span>\n                <a href="###" class="l-tablepage-btn l-laypage-last" title="尾页" data-page="100">100</a>\n                <a href="###" class="l-tablepage-btn l-laypage-next" data-page="2">\n                    <i class="l-icon iconfont  icon-right"></i>\n                </a>\n                <span class="l-laypage-skip">到第\n                    <input type="text" min="1" value="1" class="l-input">页\n                    <button type="button" class="l-tablepagejump-btn">确定</button>\n                </span>\n                <span class="l-laypage-count">共 1000 条</span>\n                <span class="l-laypage-limits">\n                    <select lay-ignore="" class="tablepage-limit-change">\n                        <option value="10">10 条/页</option>\n                        <option value="20" selected="">20 条/页</option>\n                        <option value="30">30 条/页</option>\n                        <option value="40">40 条/页</option>\n                        <option value="50">50 条/页</option>\n                        <option value="60">60 条/页</option>\n                        <option value="70">70 条/页</option>\n                        <option value="80">80 条/页</option>\n                        <option value="90">90 条/页</option>\n                    </select>\n                </span>\n            </div>\n        ',document.querySelector(m.elem).appendChild(e);for(var l=document.querySelectorAll(m.elem+" .l-tablepage-btn"),n=0,a=l.length;n<a;n++)l[n].onclick=function(e){this.getAttribute("l-disabled")||(t.page=this.getAttribute("data-page"))}}};