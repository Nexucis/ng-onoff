import { Counter } from './counter';
import { Body } from './body';
import { Guy } from './guy';
import { Goal } from './goal';
import { Game } from './game';
import { defaultLevel, Level } from './levels';
import { Bar } from './bar';
import { Spikes } from './spikes';
import { upKey } from './keys';
import sleep from './sleep';
import { HEIGHT, WIDTH } from './dimensions';

export class Scene extends Body {
  private deaths: Counter;
  private stars: Counter;
  private congrats: Body;
  private esc;
  private game: Game;
  public levels;
  private bars: Bar[];
  private spikes: Spikes[];
  public paused: boolean;
  private guy: Guy;
  private goal: Goal;
  // tslint:disable-next-line:variable-name
  private _fromURL;

  // tslint:disable-next-line:variable-name
  private _on;
  // tslint:disable-next-line:variable-name
  private _index;

  constructor(game: Game, levels: Level[]) {
    super(document.getElementById('game'));
    this.deaths = new Counter(document.getElementById('death-counter'));
    this.stars = new Counter(document.getElementById('level-counter'));
    this.congrats = new Body(document.getElementById('congrats'));
    this.esc = new Body(document.getElementById('esc'));
    this.game = game;
    this.levels = levels;
    this.bars = [];
    this.spikes = [];
    this.paused = false;
    this.guy = new Guy({x: 0, y: 0});
    this.append(this.guy);
    this.goal = new Goal({x: 0, y: 0});
    this.append(this.goal);
    this.index = 0;
  }

  get fromURL() {
    return !!this._fromURL;
  }

  set fromURL(value) {
    this._fromURL = !!value;
    this.esc.hidden = !this.fromURL;
  }

  keydown({key}) {
    switch (key) {
      case 'Enter':
        if (this.finished) {
          this.fromURL = false;
          this.levels = defaultLevel;
          this.game.state = 'title';
          // playMusic();
        }
        break;
      case 'Escape':
        if (this.fromURL) {
          this.fromURL = false;
          this.levels = defaultLevel;
          this.game.state = 'title';
          // playMusic();
        }
        break;
    }
  }

  get on() {
    return this._on;
  }

  set on(value) {
    this._on = value;
    const container = this.getGameContainer();
    container.classList.toggle('on', value);
    container.classList.toggle('off', !value);
  }

  get index() {
    return this._index;
  }

  set index(value) {
    this._index = Math.min(this.levels.length, Math.max(value || 0));

    this.on = true;
    this.stars.value = this.index;
    while (this.bars.length) {
      this.bars.pop().remove();
    }
    while (this.spikes.length) {
      this.spikes.pop().remove();
    }

    if (this.finished) {
      this.guy.hidden = true;
      this.congrats.hidden = false;
      // playWin();
      return;
    }


    this.guy.load(this.level.guyPosition);
    this.guy.hidden = false;
    this.goal.load(this.level.goalPosition);
    this.goal.hidden = false;
    this.congrats.hidden = true;

    for (const position of this.level.barPositions) {
      const bar = new Bar(position);
      this.append(bar);
      this.bars.push(bar);
    }

    if (this.level.spikePositions && this.level.spikePositions.length > 0) {
      for (const position of this.level.spikePositions) {
        const spike = new Spikes(position);
        this.append(spike);
        this.spikes.push(spike);
      }
    }
  }

  get level(): Level {
    return this.levels[ this.index ];
  }

  get finished() {
    return this.index >= this.levels.length;
  }

  async advance() {
    this.paused = true;
    document.body.classList.add('finish');
    await sleep(1000);
    this.index += 1;
    document.body.classList.remove('finish');
    await sleep(1000);
    if (this.finished) {
      this.goal.hidden = true;
    } else {
      this.paused = false;
    }
  }

  async death() {
    this.deaths.value += 1;
    this.paused = true;
    const death = document.getElementById('death');
    death.setAttribute('x', String(this.guy.x - 32 + this.guy.width / 2));
    death.setAttribute('y', String(this.guy.y - 32 + this.guy.height / 2));
    this.guy.element.setAttribute('hidden', String(true));
    // TODO set classList to the current app container
    const container = this.getGameContainer();
    container.classList.add('dying');
    await sleep(700);
    container.classList.remove('dying');
    this.reset();
    this.guy.element.removeAttribute('hidden');
    this.paused = false;
  }

  reset() {
    this.guy.load(this.level.guyPosition);
  }

  lost() {
    return this.guy.bottom > HEIGHT || this.bars.some((bar) =>
      bar.on === this.on && bar.overlaps(this.guy)
    ) || this.spikes.some((spike) =>
      spike.on === this.on && spike.overlaps(this.guy)
    );
  }

  setBounds(body: Body) {
    const {bounds} = body;

    bounds.left = -body.left;
    bounds.right = WIDTH - body.right;
    bounds.top = -body.top;
    bounds.bottom = HEIGHT - body.bottom + 1;

    for (const bar of this.bars) {
      if (bar.on !== this.on) {
        continue;
      }

      if (bar.top < body.bottom && bar.bottom > body.top) {
        if (bar.isRightOf(body)) {
          bounds.right = Math.min(bounds.right, bar.left - body.right);
        } else if (bar.isLeftOf(body)) {
          bounds.left = Math.max(bounds.left, bar.right - body.left);
        }
      }

      if (bar.left < body.right && bar.right > body.left) {
        if (bar.isBelow(body)) {
          bounds.bottom = Math.min(bounds.bottom, bar.top - body.bottom);
        } else if (bar.isAbove(body)) {
          bounds.top = Math.max(bounds.top, bar.bottom - body.top);
        }
      }
    }

    return bounds;
  }

  tick(scale) {
    if (this.paused || this.hidden) {
      return;
    }

    this.guy.tick(scale);

    const {left, right} = this.setBounds(this.guy);
    this.guy.x += Math.min(right, Math.max(left, this.guy.vx));

    const {top, bottom} = this.setBounds(this.guy);
    this.guy.y += Math.min(bottom, Math.max(top, this.guy.vy));

    if (bottom === 0) {
      this.guy.vy = upKey() ? -scale(1200) : 0;
    } else {
      this.guy.vy = Math.min(scale(600), this.guy.vy + scale(120));
    }

    if (this.lost()) {
      this.death();
    } else if (this.guy.overlaps(this.goal)) {
      this.advance();
    }
  }

  getGameContainer(): HTMLElement {
    return document.getElementById('onoff-game');
  }
}
