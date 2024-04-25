//接口 -》ts最重要的概念  -》定义任意的结构或者类型

interface Point {
  x: number;
  y?: number;
}

const myPoint: Point = {
  x: 1,
  y: 2,
};

interface Point {
  z?: number;
}

interface publicPoint {
  id: number;
}
//定义函数
interface myPoint1 {
  (num1: number, num2: number): number;
}
