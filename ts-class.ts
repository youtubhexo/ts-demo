class Person {
  name = 'toimc';
  //默认public-公共的
  //protected-允许在类内及继承的子类中使用
  //private-只允许在类内使用
  getName() {
    return this.name;
  }
}

const person = new Person();
person.getName();

//苹果-》一类评苹果   小苹果

class Persion1 extends Person {
  constructor() {
    super();
    console.log(super.getName());
  }
}
