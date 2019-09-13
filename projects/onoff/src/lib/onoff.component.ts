import { Component, OnInit } from '@angular/core';
import { Game } from './game/game';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ng-onoff',
  templateUrl: './onoff.component.html',
  styleUrls: [ './onoff.component.scss' ]
})
export class OnoffComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const game = new Game();

/*    const level = new URL().searchParams.get('level');
    if (level) {
      try {
        game.scene.levels = [ JSON.parse(level) ];
        game.scene.fromURL = true;
        game.scene.index = 0;
        game.state = 'play';
      } catch (error) {
      }
    }*/

    let previous = 0;
    requestAnimationFrame(function tick(time) {
      // To deal with different frame rates, we define per-second speeds and adjust
      // them according to the time since the last frame was rendered.
      const duration = time - previous;
      game.tick((value) => Math.round(value * duration / 1000));
      previous = time;
      requestAnimationFrame(tick);
    });
  }

}
