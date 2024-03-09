//基础类型

const msg: string = 'AI赋能开发';

console.log(msg);

//对象类型 {} or object  ,  [] or array   function, Class类型

let msg1: string = '听说字符串可以拼接';

console.log(`${msg}  ${msg1}`);

//boolean

const bool: boolean = false;

//object

const obj: object = {};
const obj1: {} = {};

const obj2: { name: string } = {
  name: 'zhangwangyan',
};

let obj3: { name: string; addr?: string; shortcut?: number };
obj3 = {
  name: 'zhangwangyan',
  addr: '听说国外自由职业者多',
};

obj3.shortcut = 1;

//array

const arr: [] = [];
const arr1: Array<string | number> = [1];

const arr2: (string | number)[] = [];
const arr3: string[] = [];
