leeui.prototype.tabs={
    onchange:function(i){

    },
    init:function(){
        var ltab=document.getElementsByClassName("l-tab");
        for (let index = 0; index < ltab.length; index++) {
            const etab = ltab[index];
            var lis=etab.querySelectorAll(".l-tab-title>li");
            var contdivs=etab.querySelectorAll(".l-tab-content>.l-tab-item");
            console.log(lis);
            for (let i = 0; i < lis.length; i++) {
                const eli = lis[i];
                console.log(eli);
                eli.addEventListener("click",(function(i,lis,contdivs){
                    return function(e){
                        console.log(e);
                        for (let j = 0; j < lis.length; j++) {
                            console.log(i,j);
                            if(i===j){
                                lis[j].className=lis[j].className+" l-this";
                            }else{
                                lis[j].className=lis[j].className.replace(/l-this/g,'');
                            }
                        }
                        for (let k = 0; k < contdivs.length; k++) {
                            const econtdiv = contdivs[k];
                            if(k===i){
                                econtdiv.className=econtdiv.className+" l-show";
                            }else{
                                econtdiv.className=econtdiv.className.replace(/l-show/g,'');
                            }
                        }
                        l.tabs.onchange(i);
                    };
                })(i,lis,contdivs),false);
            }
        }
    }
}
// 
