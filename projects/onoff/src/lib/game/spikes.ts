import { Body } from './body';
import { create } from './create';

export interface SpikePosition {
  x: number;
  y: number;
  width: number;
  height: number;
  on: boolean;
  direction: any;
}

export class Spikes extends Body {
  protected rect;
  // tslint:disable-next-line:variable-name
  private _direction;
  // tslint:disable-next-line:variable-name
  private _on: boolean;

  constructor(position: SpikePosition) {
    super(create('svg'));
    this.rect = create('rect');
    this.rect.setAttribute('x', '0');
    this.rect.setAttribute('y', '0');
    this.rect.setAttribute('width', '100%');
    this.rect.setAttribute('height', '100%');
    this.element.appendChild(this.rect);
    this.width = position.width;
    this.height = position.height;
    this.x = position.x;
    this.y = position.y;
    this.on = position.on;
    this.direction = position.direction;
  }

  get isUp() {
    return this.direction === 'up';
  }

  get isDown() {
    return this.direction === 'down';
  }

  get isLeft() {
    return this.direction === 'left';
  }

  get isRight() {
    return this.direction === 'right';
  }

  get width() {
    return this._width;
  }

  set width(value) {
    this._width = Math.max(0, value || 0);
    this.element.setAttribute('width', String(Math.round(this.width)));
    if (this.isUp || this.isDown) {
      this.element.setAttribute('width', String(Math.round(this.width / 16) * 16));
    }
  }

  get height() {
    return this._height;
  }

  set height(value) {
    this._height = Math.max(0, value || 0);
    this.element.setAttribute('height', String(Math.round(this.height)));
    if (this.isLeft || this.isRight) {
      this.element.setAttribute('height', String(Math.round(this.height / 16) * 16));
    }
  }

  get on() {
    return this._on;
  }

  set on(value: boolean) {
    this._on = value;
    this.element.classList.toggle('light', this.on);
    this.element.classList.toggle('dark', !this.on);
  }

  get direction() {
    return this._direction;
  }

  set direction(value) {
    this._direction = value;
    this.rect.setAttribute('fill', `url(#spike-${this.direction})`);
  }

  toJSON() {
    return [
      Math.round(this.x),
      Math.round(this.y),
      this.isUp || this.isDown ? Math.round(this.width / 16) * 16 : this.width,
      this.isLeft || this.isRight ? Math.round(this.height / 16) * 16 : this.height,
      Number(this.on),
      this.direction
    ];
  }
}
