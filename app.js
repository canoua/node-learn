// import { square, cube } from './math.js';

// let res  = square(2) + cube(3);
// console.log(res);
import fs from 'fs';

let text = fs.readFileSync('readme.txt', 'utf8');
fs.writeFileSync('readme.txt', 'text');

let obj = {
	'file1.txt': 'text1',
	'file2.txt': 'text2',
	'file3.txt': 'text3',
}

for(let item in obj) {
  fs.writeFileSync(item, obj[item]);
}

console.log(text);
 