import { Body } from './body';
import { create } from './create';

export interface BarPosition {
  x: number;
  y: number;
  width: number;
  height: number;
  on: boolean;
}

export class Bar extends Body {

  // tslint:disable-next-line:variable-name
  private _on: boolean;

  constructor(position: BarPosition) {
    super(create('rect'));
    this.width = position.width;
    this.height = position.height;
    this.x = position.x;
    this.y = position.y;
    this.on = position.on;
  }

  get on() {
    return this._on;
  }

  set on(value) {
    this._on = value;
    this.element.classList.toggle('light', this.on);
    this.element.classList.toggle('dark', !this.on);
  }

  toJSON() {
    return [
      Math.round(this.x),
      Math.round(this.y),
      Math.round(this.width),
      Math.round(this.height),
      Number(this.on)
    ];
  }
}
