import { Body } from './body';
import { DOWN, PRESSED } from './keys';
import { Game } from './game';

class Key extends Body {
  readonly pressed: () => boolean;

  constructor(id: string, pressed) {
    super(document.getElementById(id));
    this.pressed = pressed;
  }

  tick() {
    this.element.classList.toggle('dark', !this.pressed());
    this.element.classList.toggle('light', this.pressed());
  }
}

export class Controls extends Body {
  private game: Game;
  readonly keys: Key[];

  constructor(game: Game) {
    super(document.getElementById('controls'));
    this.game = game;
    this.keys = [
      new Key('key-w', () => DOWN.has('w')),
      new Key('key-a', () => DOWN.has('a')),
      new Key('key-d', () => DOWN.has('d')),
      new Key('key-space', () => DOWN.has(' ')),
      new Key('button-toggle', () => PRESSED.has(1)),
      new Key('button-jump', () => PRESSED.has(0)),
      new Key('button-left', () => PRESSED.has(14)),
      new Key('button-right', () => PRESSED.has(15)),
    ];
  }

  keydown({key}) {
    switch (key) {
      case 'Enter':
        this.game.state = 'title';
        break;
      case 'ArrowUp':
      case 'ArrowDown':
        this.element.querySelector('.menu .item').classList.add('selected');
        break;
    }
  }

  tick() {
    if (this.hidden) {
      return;
    }
    for (const key of this.keys) {
      key.tick();
    }
  }
}
