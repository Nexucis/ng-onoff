import { leftKey, rightKey } from './keys';
import { Body } from './body';
import { create } from './create';

export interface GuyPosition {
  x: number;
  y: number;
}

export class Guy extends Body {
  readonly speed: number;
  public vx: number;
  public vy: number;
  // tslint:disable-next-line:variable-name
  private _faceLeft: boolean;
  // tslint:disable-next-line:variable-name
  private _walking: boolean;

  constructor(position: GuyPosition) {
    super(create('svg'));
    this.element.innerHTML = `
    <svg id="guy">
      <g id="inner-guy">
        <rect class="accent" x="0" y="17" width="24" height="21"/>
        <rect id="left_foot" class="accent" x="4" y="38" width="6" height="10"/>
        <rect id="right_foot" class="accent" x="14" y="38" width="6" height="10"/>
        <g id="head">
          <rect class="accent" x="0" y="0" width="26" height="19"/>
          <rect id="face" x="4" y="3" width="20" height="14"/>
          <rect class="accent" x="9" y="7" width="4" height="4"/>
          <rect class="accent" x="17" y="7" width="4" height="4"/>
        </g>
      </g>
    </svg>`;
    this.load(position);
    this.height = 48;
    this.width = 26;
    this.speed = 360;
    this.vx = 0;
    this.vy = 0;
  }

  tick(scale) {
    if (leftKey() && !rightKey()) {
      this.vx = -scale(this.speed);
      this.faceLeft = true;
    } else if (rightKey() && !leftKey()) {
      this.vx = scale(this.speed);
      this.faceLeft = false;
    } else {
      this.vx = 0;
    }

    this.walking = leftKey() || rightKey();
  }

  get faceLeft() {
    return this._faceLeft;
  }

  set faceLeft(value: boolean) {
    this._faceLeft = value;
    this.element.classList.toggle('left', this.faceLeft);
  }

  get walking() {
    return this._walking;
  }

  set walking(value: boolean) {
    this._walking = value;
    this.element.classList.toggle('walk', this.walking);
  }

  load(position: GuyPosition) {
    this.x = position.x;
    this.y = position.y;
  }

  toJSON() {
    return [ Math.round(this.x), Math.round(this.y) ];
  }
}
