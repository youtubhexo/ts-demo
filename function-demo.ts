//基本用法
function add(arg1: number, arg2: number): number {
  return arg1 + arg2;
}

//add

const add1 = (arg1: number, arg2: number): number => {
  return arg1 + arg2;
};

function handleData(x: string): string[];
function handleData(x: number): string;

function handleData(x: any) {
  if (typeof x === 'string') {
    return x.split('');
  } else {
    return '' + x;
  }
}

handleData(100).length;
