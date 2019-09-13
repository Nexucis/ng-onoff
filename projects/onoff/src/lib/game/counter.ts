import { Body } from './body';
import { create } from './create';

export class Counter extends Body {
  // tslint:disable-next-line:variable-name
  private _value: number;

  constructor(element) {
    super(element);
    this.value = 0;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value || 0;

    this.element.innerHTML = '';
    let index = 0;
    for (const c of this.value.toString()) {
      const num = new Body(create('rect'));
      num.element.setAttribute('fill', `url(#n${c})`);
      num.width = 10;
      num.height = 16;
      num.x = 12 * index++;
      this.append(num);
    }
  }
}
