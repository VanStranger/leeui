l.photos={
    index:0,
    imgboxwidth:0,
    imgboxheight:0,
    showimgs:function (imgs, index = -1) {
        var activearr = ['active', ''];
        var clientHeight = document.documentElement.clientHeight || document.body.offsetWidth, clientWidth = document.documentElement.clientWidth || document.body.offsetHeight;
        if (document.getElementById("LYshowimgs_div")) {

        } else {
            var divobj = document.createElement("div");
            divobj.style.width = clientWidth + "px";
            divobj.style.height = clientHeight + "px";
            divobj.setAttribute("id", "LYshowimgs_div");
            htmlstr = `
                                        <div class="l_closebtn">
                                            <a href="###" class="l_closebtna iconfont icon-close"></a>
                                        </div>
                                        <a href="###" class="l_prev iconfont icon-left"></a>
                                        <a href="###" class="l_next iconfont icon-right"></a>
                                        <div class="l_mu"></div>
                                        <div class="l_imgbox">`;
            for (var i = 0; i < imgs.length; i++) {
                var img = imgs[i];
                htmlstr += `<img src="${img}" alt="" class="l_img ${activearr[index == i ? 0 : 1]}">`;
            }
            htmlstr += `</div>`;
            divobj.innerHTML = htmlstr;
            document.body.appendChild(divobj);
            var imgbox=document.getElementsByClassName("l_imgbox")[0];
            this.imgboxwidth=imgbox.clientWidth;
            this.imgboxheight=imgbox.clientHeight;
            document.getElementsByClassName("l_img active")[0].style.marginLeft = "-" +  document.getElementsByClassName("l_img active")[0].clientWidth/2+"px";
            document.getElementsByClassName("l_img active")[0].style.marginTop = "-" + document.getElementsByClassName("l_img active")[0].clientHeight/2 + "px";
        }
    },
    showimgobjs:function (objs, target) {
        for (var i = 0, len = objs.length; i < len; i++) {
            if (target == objs[i]) {
                var imgs = [];
                for (var j = 0, len = objs.length; j < len; j++) {
                    imgs[imgs.length] = objs[j].src;
                }
                index = i;
                this.showimgs(imgs, index);
                return;
            }
        }
    },
    init:function (objstr) {
        var that=this;
        document.addEventListener("click", function (e) {
            var e = e || window.e;
            var target = e.target;
            var fobj, objs;

            while (target && target != this) {
                if (!objstr || ['document', 'document.body', 'body'].indexOf(objstr.toLowerCase()) != -1) {
                    fobj = document;
                    objs = fobj.getElementsByTagName("img");
                    that.showimgobjs(objs, target);
                } else {
                    fobj = document.querySelectorAll(objstr);
                    for (var k = 0, flen = fobj.length; k < flen; k++) {
                        objs = fobj[k].getElementsByTagName("img");
                        that.showimgobjs(objs, target);
                    }
                }

                if (target && target.className) {
                    if (target.className.match("l_closebtn")) {
                        var obj = document.getElementById("LYshowimgs_div");
                        if (obj) {
                            document.body.removeChild(obj);
                        }
                    } else if (target.className.match("l_prev")) {
                        console.log("prev");
                        var l_imgs = document.getElementsByClassName('l_img');
                        index = index > 0 ? index - 1 : l_imgs.length - 1;
                        for (var i = 0, len = l_imgs.length; i < len; i++) {
                            if (i == index) {
                                l_imgs[i].className = "l_img active";
                            } else {
                                l_imgs[i].className = "l_img";
                            }
                        }
                        console.log(document.getElementsByClassName("l_img active")[0]);
                        console.log(this.imgboxheight);

                        document.getElementsByClassName("l_img active")[0].style.marginLeft = "-" +  document.getElementsByClassName("l_img active")[0].clientWidth/2 + "px";
                        document.getElementsByClassName("l_img active")[0].style.marginTop = "-" +  document.getElementsByClassName("l_img active")[0].clientHeight/2 + "px";
                    } else if (target.className.match("l_next")) {
                        console.log("next");
                        var l_imgs = document.getElementsByClassName('l_img');
                        index = (index == l_imgs.length - 1) ? 0 : (index + 1);
                        for (var i = 0, len = l_imgs.length; i < len; i++) {
                            if (i == index) {
                                l_imgs[i].className = "l_img active";
                            } else {
                                l_imgs[i].className = "l_img";
                            }
                        }
                        var obj = document.getElementsByClassName("l_img active")[0];
                        console.log(obj);
                        console.log("-" + (that.imgboxwidth - obj.clientWidth) / 2 + "px");
                        obj.style.marginLeft = "-" + obj.clientWidth/2 + "px";
                        obj.style.marginTop = "-" + obj.clientHeight/2 + "px";
                        console.log(obj);
                    }
                }
                target = target.parentNode;
            }
        }, false);
    }
}