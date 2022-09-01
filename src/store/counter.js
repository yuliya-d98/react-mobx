import { makeAutoObservable } from "mobx";

class Counter {
  count = 0;
  timer = 60;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count = this.count + 1;
  }

  decrement() {
    this.count = this.count - 1;
  }

  // если автоматическое слежение (makeAutoObservable),
  // то любой геттер будет являться computed свойством

  // эта функция должна возвращать результат каких-то вычислений
  // эта функция будет вызываться только в том случае,
  // если какой-то из параметров изменил свое значение
  get total() {
    return `Count + timer = ${this.count + this.timer}`;
  }
}

export default new Counter();
