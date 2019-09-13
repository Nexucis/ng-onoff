export class Body {

  public element: HTMLElement;
  // tslint:disable-next-line:variable-name
  protected _x: number;
  // tslint:disable-next-line:variable-name
  protected _y: number;
  // tslint:disable-next-line:variable-name
  protected _width: number;
  // tslint:disable-next-line:variable-name
  protected _height: number;

  bounds;

  constructor(element: HTMLElement) {
    this.element = element;
    this.bounds = {};
  }

  get hidden() {
    return this.element.hasAttribute('hidden');
  }

  set hidden(value) {
    if (value) {
      this.element.setAttribute('hidden', '');
    } else {
      this.element.removeAttribute('hidden');
    }
  }

  get x(): number {
    return this._x;
  }

  set x(value: number) {
    this._x = value || 0;
    this.element.setAttribute('x', String(Math.round(this.x)));
  }

  get y() {
    return this._y;
  }

  set y(value: number) {
    this._y = value || 0;
    this.element.setAttribute('y', String(Math.round(this.y)));
  }

  get width() {
    return this._width;
  }

  set width(value: number) {
    this._width = Math.max(0, value || 0);
    this.element.setAttribute('width', String(Math.round(this.width)));
  }

  get height() {
    return this._height;
  }

  set height(value: number) {
    this._height = Math.max(0, value || 0);
    this.element.setAttribute('height', String(Math.round(this.height)));
  }

  get top() {
    return this.y;
  }

  get bottom(): number {
    return this.y + this.height;
  }

  set bottom(value: number) {
    this.y = (value || 0) - this.height;
  }

  get left(): number {
    return this.x;
  }

  get right(): number {
    return this.x + this.width;
  }

  set right(value: number) {
    this.x = (value || 0) - this.width;
  }

  isLeftOf(other): boolean {
    return this.right <= other.left;
  }

  isRightOf(other): boolean {
    return this.left >= other.right;
  }

  isAbove(other): boolean {
    return this.bottom <= other.top;
  }

  isBelow(other): boolean {
    return this.top >= other.bottom;
  }

  overlaps(other): boolean {
    return this.left < other.right &&
      this.right > other.left &&
      this.top < other.bottom &&
      this.bottom > other.top;
  }

  append({element}) {
    this.element.appendChild(element);
  }

  remove() {
    this.element.remove();
  }
}
