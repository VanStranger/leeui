/** leeui-v1.0.0 ISC License By https://github.com/VanStranger/leeui#readme */
 ;"use strict";var l=new function(){this.silent=0};l.form={l_forms:[],rendertable:function(e){for(var t="",l=0,s=e.length;l<s;l++)t+="\n                <tr>\n                  <td>贤心</td>\n                  <td>2016-11-29</td>\n                  <td>人生就像是一场修行</td>\n                </tr>";return t},renderRow:function(e){},initform:function(){this.say(),document.getElementsByClassName("l-form")[0].className+=" actived";for(var e=document.getElementsByClassName("l-form"),t=0,s=e.length;t<s;t++)this.l_forms.push({0:e[t]});var i=[],r=[];for(t=0,s=this.l_forms.length;t<s;t++)for(var n=this.l_forms[t][0].getElementsByTagName("select"),a=0,c=n.length;a<c;a++){var o=n[a].getElementsByTagName("option"),m=(n[a].getAttribute("name"),n[a].options.length?n[a].options[0].innerText:"");r[r.length]=document.createElement("div"),r[r.length-1].className="l-unselect l-form-select",selectdivhtml="";for(var d=0,g=o.length;d<g;d++){var h=o[d].getAttribute("value"),u=o[d].innerText,f=o[d].selected;h||u?(f&&(m=u),selectdivhtml+='<dd l-value="'+h+'" class="'+(f?"l-this":"")+'">'+u+"</dd>"):selectdivhtml+='<dd l-value="" class="l-select-tips">请选择</dd>'}selectdivhtml='<div class="l-select-title"><input type="text" placeholder="请选择" value="'+m+'" readonly="" class="l-input l-unselect"><i class="l-edge"></i></div><dl class="l-anim l-anim-upbit" style="">'+selectdivhtml,selectdivhtml+="</dl>",r[r.length-1].innerHTML=selectdivhtml,i[i.length]=r[r.length-1],n[a].parentNode.insertBefore(r[r.length-1],n[a])}for(l=0,selectdivslen=r.length;l<selectdivslen;l++){var v=r[l].getElementsByTagName("dd");for(t=0,s=v.length;t<s;t++)v[t].onclick=function(m){return function(e){var t=this.getAttribute("l-value"),l=this.innerText;if(r[m].getElementsByTagName("input")[0].value=l,r[m].className=r[m].className.replace(" l-form-selected",""),"l-select-tips"!=this.className){for(var s=this.parentNode.children,i=0,n=s.length;i<n;i++)s[i]!=this?s[i].className=s[i].className.replace("l-this",""):this.className+=" l-this";for(var a=r[m].nextSibling.getElementsByTagName("option"),c=0,o=a.length;c<o;c++){a[c].getAttribute("value")==t?a[c].setAttribute("selected",!0):a[c].removeAttribute("selected")}}}}(l)}var N=document.getElementsByClassName("l-select-title");for(t=0,s=N.length;t<s;t++)N[t].onclick=function(e){var t=this.parentNode;-1==t.className.indexOf("l-form-selected")?t.className+=" l-form-selected":t.className=t.className.replace(" l-form-selected","")};for(t=0,s=this.l_forms.length;t<s;t++)for(var b=this.l_forms[t][0].getElementsByTagName("input"),p=(a=0,b.length);a<p;a++)switch(b[a].getAttribute("type")){case"radio":var y=b[a].getAttribute("title"),x=b[a].getAttribute("value"),E=b[a].getAttribute("name"),B=document.createElement("div");b[a].checked?(B.className="l-unselect l-form-radio l-form-radioed",B.innerHTML='<i class="l-anim l-icon l-anim-scaleSpring icon-radiochecked"></i><div>'+y+"</div>"):(B.className="l-unselect l-form-radio",B.innerHTML='<i class="l-anim l-icon icon-radio"></i><div>'+y+"</div>"),B.setAttribute("l-value",x),B.setAttribute("l-name",E),b[a].parentNode.insertBefore(B,b[a]),B.onclick=function(e){for(var t=this.getAttribute("l-name"),l=this.getAttribute("l-value"),s=document.getElementsByName(t),i=0,n=s.length;i<n;i++)console.log(s[i].getAttribute("value")),s[i].getAttribute("value")==l?s[i].setAttribute("checked",!0):s[i].removeAttribute("checked");var a=document.getElementsByClassName("l-form-radio");for(i=0,n=a.length;i<n;i++){a[i].className=a[i].className.replace("l-form-radioed","");var c=a[i].getElementsByClassName("l-icon")[0];c.className=c.className.replace("l-anim-scaleSpring",""),c.className=c.className.replace("icon-radiochecked","icon-radio")}this.className+=" l-form-radioed",this.getElementsByClassName("l-icon")[0].className+=" l-anim-scaleSpring",this.getElementsByClassName("l-icon")[0].className=this.getElementsByClassName("l-icon")[0].className.replace("icon-radio","icon-radiochecked")};break;case"checkbox":var _=b[a].getAttribute("title"),A=document.createElement("div");if(b[a].getAttribute("l-skin")){if("switch"==b[a].getAttribute("l-skin")){var w=b[a].getAttribute("l-text"),k=w.split("|");(A=document.createElement("div")).setAttribute("l-text",w),b[a].checked?(A.className="l-unselect l-form-switch l-form-onswitch",A.innerHTML="<em>"+k[0]+"</em><i></i>"):(A.className="l-unselect l-form-switch",A.innerHTML="<em>"+k[1]+"</em><i></i>"),b[a].parentNode.insertBefore(A,b[a]),A.onclick=function(e){var t=this.getAttribute("l-text").split("|");-1==this.className.indexOf("l-form-onswitch")?(this.className+=" l-form-onswitch",this.nextSibling.setAttribute("checked",!0),this.getElementsByTagName("em")[0].innerText=t[0]):(this.className=this.className.replace("l-form-onswitch",""),this.nextSibling.removeAttribute("checked"),this.getElementsByTagName("em")[0].innerText=t[1])}}}else b[a].checked?(A.className="l-unselect l-form-checkbox l-form-checked",A.innerHTML="<span>"+_+'</span><i class="l-icon icon-complete"></i>'):(A.className="l-unselect l-form-checkbox",A.innerHTML="<span>"+_+'</span><i class="l-icon  icon-complete"></i>'),b[a].parentNode.insertBefore(A,b[a]),A.onclick=function(e){-1==this.className.indexOf("l-form-checked")?(this.className+=" l-form-checked",this.nextSibling.setAttribute("checked",!0)):(this.className=this.className.replace("l-form-checked",""),this.nextSibling.removeAttribute("checked"))}}},getFormJson:function(){var e=[],t=Array.prototype.slice.call(arguments);if(t.length){if(!isNaN(t[0])){if(this.l_forms.length>parseInt(t[0])){for(var l=this.l_forms[parseInt(t[0])],s=0,i=l[0].length;s<i;s++){var n=l[0][s];switch(n.tagName){case"INPUT":if(-1<["text","password"].indexOf(n.getAttribute("type").toLocaleLowerCase())){var a={};(c=n.getAttribute("name"))&&(a[c]=n.value,e.push(a))}var c;if(-1<["checkbox","radio"].indexOf(n.getAttribute("type").toLocaleLowerCase())&&n.checked)console.log(n),(a={})[c=n.getAttribute("name")]=n.getAttribute("value")||"on",e.push(a)}}return e}return null}}else console.log("noarguments")},say:function(){this.silent||console.log("\n                    　　１１１１１１１１１　　　　　　　　　　　　　　　　１１　１１１１１　　　　　１１　　　　　　　１１１１１１１１１１　　　　１１１１１１１　　　　　　　　　　　　　　\n                    　　１　１１１１１　１　　　　　　　　　　　　　　１１１　　　　１１１　　　　１１１１１１　　　　　　　　　１１　　　　　　　１　１１１　１　　　　　　　　　　　　　　\n                    　　１１１１１１１１１１　　　　　　　　　　　　　１１１１１　１１１　　　　　１１　　１１　　　　　　　　１１１１　　　　　　１　１１１　１　　　　　　　　　　　　　　\n                    　１１１１１１１１１１１　　　　　　　　　　　　　　１１１１　１１　　　　　１１１　１１　　　　　　　　１１１１１１　　　　　１　１１１　１　　　　　　　　　　　　　　\n                    　　　１　　１１１　　　　　　　　　　　　　　　　　１１１１１１１１１１　　１１　１１１　　　　　　　１１１１　１１１　　　　１　１１１　１　　　　　　　　　　　　　　\n                    　　　　　１１１　１１　　　　　　　　　　　　　　１１１１　　　１　　　　　　　　１１１１　　　　１１１１　１　　１１　　　　１　１１１　１　　　　１１１　　　　　　　\n                    　１１１１１１１１１１１　　１１　　　　　　　　　　　１１１　　１　　　　　　１１１１１１１　　　１１　　　１　　　１　　　　１１１１１　　１　　　１１１　　　　　　　\n                    　　　　　１１　　　　　　　１１　　　　　　　　　１１１１１　１１　　　　１１１１　　　１１１１　　　　　　１　　　　　　　１１１１　１　　１１　　１１１　　　　　　　\n                    　　　　１１１　　　　　　　１１　　　　　　　　　１１　　１１１１　　　　１１１　　　　　１１１　　　　　　１　　　　　　１１１１　　１１１１１　　　１　　　　　　　　\n                    　　　　１１１　　　　　　　１１　　　　　　　　　　　　　　　１　　　　　　　　　　　　　　　　　　　　　　１　　　　　　　１　　　　　　　　　　　　　　　　　　　　　\n                    　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　\n                    　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　")}},l.photos={index:0,imgboxwidth:0,imgboxheight:0,showimgs:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:-1,l=["active",""],s=document.documentElement.clientHeight||document.body.offsetWidth,i=document.documentElement.clientWidth||document.body.offsetHeight;if(document.getElementById("LYshowimgs_div"));else{var n=document.createElement("div");n.style.width=i+"px",n.style.height=s+"px",n.setAttribute("id","LYshowimgs_div"),htmlstr='\n                                        <div class="l_closebtn">\n                                            <a href="###" class="l_closebtna iconfont icon-close"></a>\n                                        </div>\n                                        <a href="###" class="l_prev iconfont icon-left"></a>\n                                        <a href="###" class="l_next iconfont icon-right"></a>\n                                        <div class="l_mu"></div>\n                                        <div class="l_imgbox">';for(var a=0;a<e.length;a++){var c=e[a];htmlstr+='<img src="'+c+'" alt="" class="l_img '+l[t==a?0:1]+'">'}htmlstr+="</div>",n.innerHTML=htmlstr,document.body.appendChild(n);var o=document.getElementsByClassName("l_imgbox")[0];this.imgboxwidth=o.clientWidth,this.imgboxheight=o.clientHeight,document.getElementsByClassName("l_img active")[0].style.marginLeft="-"+document.getElementsByClassName("l_img active")[0].clientWidth/2+"px",document.getElementsByClassName("l_img active")[0].style.marginTop="-"+document.getElementsByClassName("l_img active")[0].clientHeight/2+"px"}},showimgobjs:function(e,t){for(var l=0,s=e.length;l<s;l++)if(t==e[l]){var i=[],n=0;for(s=e.length;n<s;n++)i[i.length]=e[n].src;return index=l,void this.showimgs(i,index)}},init:function(r){var d=this;document.addEventListener("click",function(e){for(var t,l,s=(e=e||window.e).target;s&&s!=this;){if(r&&-1==["document","document.body","body"].indexOf(r.toLowerCase()))for(var i=0,n=(t=document.querySelectorAll(r)).length;i<n;i++)l=t[i].getElementsByTagName("img"),d.showimgobjs(l,s);else l=(t=document).getElementsByTagName("img"),d.showimgobjs(l,s);if(s&&s.className)if(s.className.match("l_closebtn"))(m=document.getElementById("LYshowimgs_div"))&&document.body.removeChild(m);else if(s.className.match("l_prev")){console.log("prev");var a=document.getElementsByClassName("l_img");index=0<index?index-1:a.length-1;for(var c=0,o=a.length;c<o;c++)c==index?a[c].className="l_img active":a[c].className="l_img";console.log(document.getElementsByClassName("l_img active")[0]),console.log(this.imgboxheight),document.getElementsByClassName("l_img active")[0].style.marginLeft="-"+document.getElementsByClassName("l_img active")[0].clientWidth/2+"px",document.getElementsByClassName("l_img active")[0].style.marginTop="-"+document.getElementsByClassName("l_img active")[0].clientHeight/2+"px"}else if(s.className.match("l_next")){console.log("next");a=document.getElementsByClassName("l_img");index=index==a.length-1?0:index+1;for(c=0,o=a.length;c<o;c++)c==index?a[c].className="l_img active":a[c].className="l_img";var m=document.getElementsByClassName("l_img active")[0];console.log(m),console.log("-"+(d.imgboxwidth-m.clientWidth)/2+"px"),m.style.marginLeft="-"+m.clientWidth/2+"px",m.style.marginTop="-"+m.clientHeight/2+"px",console.log(m)}s=s.parentNode}},!1)}},l.table=new function(){var m=[],t=20,l=1,r={};Object.defineProperty(this,"data",{get:function(){return m},set:function(e){m=e,this.render()}}),Object.defineProperty(this,"amount",{get:function(){return t},set:function(e){t=e}}),Object.defineProperty(this,"page",{get:function(){return l},set:function(e){l=e}}),this.render=function(e){e&&(r=e);for(var t="<thead>",l="<tbody>",s=0,i=r.cols.length;s<i;s++)t+="<td>"+r.cols[s].title+"</td>";if(t+="</thead>",0==m.length)l="zanwushuju";else{l="";for(var n=[],a=0,c=m.length;a<c;a++){m[a];l+="<tr>";for(s=0,i=(n=r.cols(m[a])).length;s<i;s++)l+="<td data-label='"+n[s].title+"'>"+n[s].value+"</td>";l+="</tr>"}}l+="</tbody>";var o=document.createElement("table");o.className="l-table",o.innerHTML=t+l,document.querySelector(r.elem).innerHTML="",document.querySelector(r.elem).appendChild(o)}};