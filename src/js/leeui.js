/**

 @Name: leeui
 @Author: van
 @Site: 暂无

 */
var leeui = function() {
    this.silent=0;
};
leeui.prototype.say=function(){
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
};