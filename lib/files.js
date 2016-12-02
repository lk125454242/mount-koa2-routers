const fs = require('fs');
/** 
 * @function file_path 查询当前文件夹下所有文件
 * @param [string] path 文件夹的绝对路径
 * @returns [array] absolute_array 所有文件的路径数组
*/
const file_path = (path)=>{
    try{
        let absolute_array = [],
            paths = fs.readdirSync(path);
        paths.forEach((v) => {
            let files = fs.lstatSync(path + '/' + v);
            if(files.isDirectory()){
                let result = file_path(path + '/' + v);
                absolute_array = absolute_array.concat(result);
            }else {
                absolute_array.push((path + '/' + v));
            }
        });
        return absolute_array;
    }catch(e){
        console.log('error',r);
    }
}
module.exports = file_path;