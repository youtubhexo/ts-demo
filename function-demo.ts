//基本用法

function add(arg1: number, arg2: number): number {
  return 123;
}

add(1, 1);

const add1 = (arg1: number, arg2: number): number => {
  return 123;
};

//函数类型
const add2: () => number = () => {
  return 1;
};

//函数重载

function handleData(x: string): string[];
function handleData(): string;

function handleData(): any {
  if (1 > 2) {
    return [];
  } else {
    return 1;
  }
}
