/**
 layui构建
*/

var pkg = require('./package.json');
var inds = pkg.independents;

var gulp = require('gulp');
var babel=require('gulp-babel')
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var sass=require("gulp-sass");
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var header = require('gulp-header');
var del = require('del');
var gulpif = require('gulp-if');
var minimist = require('minimist');
var zip = require('gulp-zip');

//获取参数
var argv = require('minimist')(process.argv.slice(2), {
  default: {
    ver: 'all'
  }
})

//注释
,note = [
  '/** <%= pkg.realname %>-v<%= pkg.version %> <%= pkg.license %> License By <%= pkg.homepage %> */\n <%= js %>'
  ,{pkg: pkg, js: ';'}
]

//模块
,mods = 'laytpl,laypage,laydate,jquery,layer,element,upload,form,tree,table,carousel,util,flow,layedit,code'

//发行版本目录
,releaseDir = './dist'
,release ='dist'

//任务
,task = {

  //压缩js模块
  minjs: function(ver) {
    ver = ver === 'open';

    //可指定模块压缩，eg：gulp minjs --mod layer,laytpl
    var mod = argv.mod ? function(){
      return '(' + argv.mod.replace(/,/g, '|') + ')';
    }() : ''
    ,src = [
      './src/js/leeui.js'
      ,'./src/js/components/*.js'
    ]
    ,dir = ver ? release : 'dist';


    return gulp.src(src)
    .pipe(concat("leeui.js"))
    .pipe(babel({"presets": ["env"]}))
    .pipe(uglify({
        mangle:true,//类型：Boolean 默认：true 是否修改变量名
        compress:true,//类型：Boolean 默认：true 是否完全压缩
    }))
    .pipe(header.apply(null, note))
    .pipe(gulp.dest('./'+ dir));

  }


  //压缩css文件
  ,mincss: function(ver){
    ver = ver === 'open';

    var src = [
      ,'./src/css/components/*.css'
      ,'./src/css/leeui.scss'
    ]
    ,dir = ver ? release : 'dist'
    ,noteNew = JSON.parse(JSON.stringify(note));


    noteNew[1].js = '';

    return gulp.src(src)
    .pipe(sass())
    .pipe(concat("leeui.css"))
    .pipe(minify({
        advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
        compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
        keepBreaks: true,//类型：Boolean 默认：false [是否保留换行]
        keepSpecialComments: '*'
        //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
    }))
    .pipe(header.apply(null, noteNew))
    .pipe(gulp.dest('./'+ dir ));
  }

  //复制iconfont文件
  ,font: function(ver){
    ver = ver === 'open';

    var dir = ver ? release : 'dist';

    return gulp.src('./src/font/*')
    .pipe(rename({}))
    .pipe(gulp.dest('./'+ dir +'/font'));
  }


};

//清理
gulp.task('clear', function(cb) {
  return del(['./dist/*'], cb);
});
gulp.task('clearRelease', function(cb) {
  return del([releaseDir], cb);
});

gulp.task('minjs', task.minjs);
gulp.task('mincss', task.mincss);
gulp.task('font', task.font);


//发行版
gulp.task('default', ['clearRelease'], function(){ //命令：gulp
  for(var key in task){
    task[key]('open');
  }
});

//完整任务
gulp.task('all', ['clear'], function(){ //命令：gulp all，过滤layim：gulp all --open
  for(var key in task){
    task[key]();
  }
});

//打包layer独立版
gulp.task('layer', function(){
  var dir = './release/layer';

  gulp.src('./src/css/modules/layer/default/*')
  .pipe(gulp.dest(dir + '/src/theme/default'));

  return gulp.src('./src/lay/modules/layer.js')
  .pipe(gulp.dest(dir + '/src'));
});












