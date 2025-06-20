
//write a node js programe to describe the core model path.
const { log } = require("console");
const path=require("path");
//console.log(path);
const filepath=path.join('Users','S','Desktop','nodejs');
console.log('path.join():-',filepath);

const absolutepath=path.resolve('Users','S','Desktop','nodejs');
console.log('path.resolve():-',absolutepath);

const basename=path.basename('\Users\S\Desktop\nodejs');
console.log('path.basename():-',basename);
console.log(path.basename(__filename));
const dirname=path.dirname('\Users\S\Desktop\nodejs');
console.log('path.dirname():-',dirname);
console.log(path.dirname(__filename));

const parsepath=path.parse('\Users\S\Desktop\nodejs');
console.log('path.parse():-',parsepath);

const pathobject={
    
    root:'/',
    dir:'\Users\S\Desktop\nodejs',
    base:'file.txt',
    ext:'.txt',
    name:'file'
};
const formattedpath=path.format(pathobject);
console.log('path.format():',formattedpath);




