const router = require('koa-router')();
const file_path = require('./lib/files')
/**
 * @class Mount 加载路由
 * @param [object] app 应用函数
 * @param [string] path 路由文件夹路径
 */

class Mount {
    constructor(app, path) {
        this.app = app;
        this.path = path;
        //如果有转意的斜杠替换为安全的反斜杠
        this.load(path.replace(/\\/g, '/'));
    }
    load(path) {
        //获取当前文件夹下面的所有文件
        let files_paths = file_path(path),
            app = this.app;
        files_paths.forEach((absolute) => {
            //判断是否为JS文件
            if (absolute.indexOf('.js') === -1){ 
                return false;//切断本次循环
            }
            //去除文件夹起始路径 以及 .js index.js结尾
            let regexp = new RegExp('(^' + path + ')|(' + '(/index\\.js)|(\\.js)$)', 'g');
            //获取到相对路径
            let relative = absolute.replace(regexp, '');
            //通过绝对路径加载文件并且添加相对路径到路由前缀中
            let router = require(absolute).prefix(relative);
            //引用
            app.use(router.routes());//, router.allowedMethods()
        })
    }
}

module.exports = (app, path)=>new Mount(app, path);