import { Title } from './title';
import { Controls } from './controls';
import { onPress } from './keys';
import { Scene } from './scene';
import { defaultLevel } from './levels';

export class Game {
  public scene: Scene;
  private title: Title;
  private controls: Controls;
  private dialog: HTMLElement;
  // tslint:disable-next-line:variable-name
  private _state: string;

  constructor() {
    this.title = new Title(this);
    this.controls = new Controls(this);
    this.scene = new Scene(this, defaultLevel);
    this.dialog = document.getElementById('dialog');
    onPress(1, this.toggle.bind(this));
    document.addEventListener('keydown', this.keydown.bind(this));
  }

  toggle() {
    this.scene.on = !this.scene.on;
    if (this.scene.on) {
      // OFF_FX.play();
    } else {
      // ON_FX.play();
    }
  }

  keydown(event) {
    if (event.key === ' ') {
      this.toggle();
    }
    if (!this.scene.hidden) {
      this.scene.keydown(event);
    } else if (!this.controls.hidden) {
      this.controls.keydown(event);
    } else if (!this.title.hidden) {
      this.title.keydown(event);
    }
  }

  get state() {
    return this._state;
  }

  set state(value) {
    this._state = value;

    this.scene.hidden = this.state !== 'play';
    this.title.hidden = this.state !== 'title';
    this.controls.hidden = this.state !== 'controls';
    this.dialog.hidden = this.state !== 'edit';
  }

  tick(scale) {
    this.scene.tick(scale);
    this.controls.tick();
  }
}
