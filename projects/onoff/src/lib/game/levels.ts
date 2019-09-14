import { GuyPosition } from './guy';
import { GoalPosition } from './goal';
import { BarPosition } from './bar';
import { SpikePosition } from './spikes';

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateBarPosition(barArray: number[],
                             x: (num) => number,
                             y: (num?: number) => number,
                             width: (num?: number) => number,
                             height: (num?: number) => number,
                             on: (num?: number) => boolean): BarPosition[] {
  const result = [];
  barArray.map((val) => {
    result.push({
      x: x(val),
      y: y(val),
      width: width(val),
      height: height(val),
      on: on(val),
    });
  });
  return result;
}

function generateSpikePosition(barArray: number[],
                               x: (num) => number,
                               y: (num?: number) => number,
                               width: (num?: number) => number,
                               height: (num?: number) => number,
                               on: (num?: number) => boolean,
                               dir: string): SpikePosition[] {
  const result = [];
  barArray.map((val) => {
    result.push({
      x: x(val),
      y: y(val),
      width: width(val),
      height: height(val),
      on: on(val),
      direction: dir,
    });
  });
  return result;
}

export class Level {
  guyPosition: GuyPosition;
  goalPosition: GoalPosition;
  barPositions: BarPosition[];
  spikePositions: SpikePosition[];

  constructor(guyPosition: GuyPosition,
              goalPosition: GoalPosition,
              barPositions: BarPosition[],
              spikePositions?: SpikePosition[]) {
    this.guyPosition = guyPosition;
    this.goalPosition = goalPosition;
    this.barPositions = barPositions;
    this.spikePositions = spikePositions;
  }
}

export const defaultLevel: Level[] = [
  // https://cl.ly/0e72dd890b93
  new Level(
    {x: 24, y: 239},
    {x: 724, y: 244},
    [
      {x: 0, y: 288, width: 330, height: 192, on: true},
      {x: 438, y: 288, width: 330, height: 192, on: true}
    ],
  ),
  // https://cl.ly/80f69e0e3b74
  new Level(
    {x: 371, y: 51},
    {x: 724, y: 404},
    [
      {x: 0, y: 100, width: 768, height: 16, on: true},
      {x: 0, y: 216, width: 768, height: 16, on: false},
      {x: 0, y: 332, width: 768, height: 16, on: true},
      {x: 0, y: 448, width: 768, height: 32, on: false},
    ]
  ),
  // https://cl.ly/a751117681a8
  new Level(
    {x: 24, y: 239},
    {x: 724, y: 244},
    [
      {x: 0, y: 288, width: 330, height: 192, on: true},
      {x: 438, y: 288, width: 330, height: 192, on: false},
    ]
  ),
  // https://cl.ly/ffd71d417828
  new Level(
    {x: 23, y: 263},
    {x: 724, y: 268},
    [
      {x: 0, y: 312, width: 768, height: 8, on: true},
      {x: 380, y: 0, width: 8, height: 312, on: true},
      {x: 0, y: 408, width: 768, height: 72, on: false},
    ]
  ),
  // https://cl.ly/7ce0a55e6c23
  new Level(
    {x: 116, y: 96},
    {x: 628, y: 412},
    [
      {x: 64, y: 448, width: 128, height: 32, on: false},
      {x: 320, y: 448, width: 128, height: 32, on: true},
      {x: 576, y: 448, width: 128, height: 32, on: false},
    ]
  ),
  // https://cl.ly/e7a2d2ecc0e7
  new Level(
    {x: 24, y: 399},
    {x: 604, y: 152},
    [
      {x: 0, y: 448, width: 768, height: 32, on: true},
      {x: 128, y: 320, width: 512, height: 8, on: true},
      {x: 632, y: 328, width: 8, height: 120, on: true},
      {x: 128, y: 192, width: 512, height: 8, on: true},
      {x: 128, y: 200, width: 8, height: 120, on: true},
      {x: 640, y: 384, width: 128, height: 8, on: false},
      {x: 0, y: 256, width: 128, height: 8, on: false},
    ]
  ),
  // https://cl.ly/c3c9ccaf76a3
  new Level(
    {x: 16, y: 275},
    {x: 566, y: 248},
    [
      {x: 0, y: 0, width: 768, height: 64, on: true},
      {x: 0, y: 64, width: 128, height: 192, on: true},
      {x: 0, y: 324, width: 248, height: 92, on: true},
      {x: 0, y: 416, width: 768, height: 64, on: true},
      {x: 192, y: 132, width: 180, height: 96, on: true},
      {x: 440, y: 64, width: 100, height: 224, on: true},
      {x: 620, y: 112, width: 72, height: 245, on: true},
      {x: 192, y: 228, width: 56, height: 96, on: true},
      {x: 300, y: 288, width: 320, height: 69, on: true},
    ]
  ),
  // https://cl.ly/91292cb165a6
  new Level(
    {x: 16, y: 367},
    {x: 704, y: 84},
    [
      {x: 0, y: 416, width: 244, height: 64, on: true},
      {x: 524, y: 128, width: 244, height: 352, on: true},
      {x: 288, y: 320, width: 64, height: 160, on: false},
      {x: 416, y: 224, width: 64, height: 256, on: false},
    ]
  ),
  // https://cl.ly/dd353a0a4faf
  new Level(
    {x: 104, y: 175},
    {x: 176, y: 32},
    [
      {x: 96, y: 224, width: 56, height: 8, on: true},
      {x: 96, y: 232, width: 56, height: 8, on: false},
      {x: 144, y: 72, width: 8, height: 152, on: true},
      {x: 152, y: 72, width: 8, height: 168, on: false},
      {x: 160, y: 72, width: 128, height: 92, on: true},
      {x: 160, y: 164, width: 256, height: 92, on: true},
      {x: 160, y: 256, width: 384, height: 92, on: true},
      {x: 544, y: 256, width: 8, height: 92, on: false},
      {x: 160, y: 348, width: 512, height: 92, on: true},
      {x: 160, y: 440, width: 512, height: 8, on: false},
      {x: 552, y: 340, width: 120, height: 8, on: false}
    ]
  ),
  // https://cl.ly/752bc2a6a72f
  new Level(
    {x: 16, y: 422},
    {x: 724, y: 416},
    [
      {x: 0, y: 472, width: 48, height: 8, on: true},
      {x: 0, y: 376, width: 48, height: 8, on: false},
      {x: 0, y: 280, width: 48, height: 8, on: true},
      {x: 0, y: 184, width: 96, height: 8, on: false},
      {x: 384, y: 456, width: 384, height: 24, on: true},
    ]
  ),
  // https://cl.ly/13b3b6c2966d
  new Level(
    {x: 16, y: 239},
    {x: 724, y: 244},
    [
      {x: 0, y: 288, width: 768, height: 192, on: true},
      {x: 336, y: 0, width: 96, height: 288, on: true},
    ]
  ),
  // https://cl.ly/74d75c6b6df7
  new Level(
    {x: 16, y: 56},
    {x: 724, y: 216},
    generateBarPosition([ 0, 1, 2, 3, 4, 5, 6, 7 ],
      (x) => x * 96,
      () => getRandomInt(240, 300),
      () => getRandomInt(24, 72),
      () => getRandomInt(24, 180),
      () => getRandomInt(0, 2) === 1),
  ),
  // https://cl.ly/129369ca9d9d
  new Level(
    {x: 48, y: 383},
    {x: 696, y: 384},
    [
      {x: 48, y: 432, width: 24, height: 24, on: true},
      {x: 156, y: 348, width: 24, height: 24, on: false},
      {x: 48, y: 264, width: 24, height: 24, on: true},
      {x: 156, y: 180, width: 24, height: 24, on: false},
      {x: 264, y: 180, width: 24, height: 24, on: true},
      {x: 372, y: 180, width: 24, height: 24, on: false},
      {x: 480, y: 180, width: 24, height: 24, on: true},
      {x: 588, y: 180, width: 24, height: 24, on: false},
      {x: 696, y: 264, width: 24, height: 24, on: true},
      {x: 588, y: 348, width: 24, height: 24, on: false},
      {x: 696, y: 432, width: 24, height: 24, on: true},
    ]
  ),
  // https://cl.ly/de15c9f04a7d
  new Level(
    {x: 24, y: 8},
    {x: 724, y: getRandomInt(128, 416)},
    generateBarPosition([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23 ],
      (x) => x * 32,
      () => getRandomInt(64, 464),
      () => 8,
      () => 8,
      () => getRandomInt(0, 2) === 1)
  ),
  // https://cl.ly/aef7878e8263
  new Level(
    {x: 372, y: 391},
    {x: 372, y: 20},
    [
      {x: 320, y: 440, width: 128, height: 8, on: true},
      {x: 320, y: 344, width: 128, height: 8, on: false},
      {x: 320, y: 248, width: 128, height: 8, on: true},
      {x: 320, y: 152, width: 128, height: 8, on: false},
    ],
    [
      {x: 320, y: 448, width: 128, height: 8, on: true, direction: 'down'},
      {x: 320, y: 352, width: 128, height: 8, on: false, direction: 'down'},
      {x: 320, y: 256, width: 128, height: 8, on: true, direction: 'down'},
      {x: 320, y: 160, width: 128, height: 8, on: false, direction: 'down'}
    ]
  ),
  // https://cl.ly/bfc474be92d1
  new Level(
    {x: 372, y: 15},
    {x: 372, y: 418},
    [
      {x: 320, y: 64, width: 128, height: 16, on: true},
      {x: 256, y: 80, width: 256, height: 128, on: false},
      {x: 320, y: 208, width: 128, height: 16, on: true},
      {x: 348, y: 224, width: 72, height: 160, on: true},
      {x: 348, y: 384, width: 8, height: 96, on: true},
      {x: 356, y: 384, width: 8, height: 96, on: false},
      {x: 412, y: 384, width: 8, height: 96, on: true},
      {x: 404, y: 384, width: 8, height: 96, on: false}
    ],
    [
      {x: 312, y: 64, width: 8, height: 16, on: true, direction: 'left'},
      {x: 448, y: 64, width: 8, height: 16, on: true, direction: 'right'},
      {x: 312, y: 208, width: 8, height: 16, on: true, direction: 'left'},
      {x: 448, y: 208, width: 8, height: 16, on: true, direction: 'right'}
    ]
  ),
  // https://cl.ly/38831ab3bb46
  new Level(
    {x: 24, y: 64},
    {x: 724, y: getRandomInt(128, 416)},
    [
      {x: 0, y: getRandomInt(128, 352), width: 768, height: 2, on: true},
    ],
    generateSpikePosition([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ],
      (x) => x * 48,
      () => getRandomInt(128, 352),
      () => 16,
      () => 8,
      () => getRandomInt(0, 2) === 1,
      'up'),
  ),
  new Level(
    {x: 371, y: 20},
    {x: 372, y: 372},
    [
      {x: 336, y: 320, width: 96, height: 8, on: true},
      {x: 336, y: 416, width: 96, height: 8, on: true},
      {x: 336, y: 328, width: 8, height: 88, on: true},
      {x: 424, y: 328, width: 8, height: 88, on: true},
    ],
    [
      {x: 336, y: 312, width: 96, height: 8, on: true, direction: 'up'},
    ]
  ),
  // https://cl.ly/bb5826e004eb
  new Level(
    {x: 371, y: 20},
    {x: 584, y: 404},
    [
      {x: 0, y: 152, width: 368, height: 8, on: true},
      {x: 0, y: 248, width: 448, height: 8, on: true},
      {x: 0, y: 344, width: 528, height: 8, on: true},
    ],
    [
      {x: 0, y: 144, width: 368, height: 8, on: true, direction: 'up'},
      {x: 0, y: 240, width: 448, height: 8, on: true, direction: 'up'},
      {x: 0, y: 336, width: 528, height: 8, on: true, direction: 'up'},
    ]
  ),
  // https://cl.ly/130ada902b79
  new Level(
    {x: 12, y: 312},
    {x: 725, y: 307},
    [
      {x: 0, y: 152, width: 768, height: 72, on: true},
      {x: 0, y: 362, width: 64, height: 8, on: true},
      {x: 192, y: 362, width: 128, height: 8, on: true},
      {x: 448, y: 362, width: 128, height: 8, on: true},
      {x: 704, y: 362, width: 64, height: 8, on: true},
    ],
    [
      {x: 0, y: 224, width: 768, height: 8, on: true, direction: 'up'},
    ]
  ),
  // https://cl.ly/be19660c5789
  new Level(
    {x: 371, y: 20},
    {x: 372, y: 404},
    [
      {x: 320, y: 384, width: 128, height: 8, on: true},
      {x: 320, y: 272, width: 128, height: 8, on: false},
      {x: 320, y: 168, width: 128, height: 8, on: true},
    ],
    [
      {x: 320, y: 376, width: 128, height: 8, on: true, direction: 'up'},
      {x: 320, y: 264, width: 128, height: 8, on: false, direction: 'up'},
      {x: 320, y: 160, width: 128, height: 8, on: true, direction: 'up'},
    ]
  ),
  // https://cl.ly/52c9d3f5f7e6
  new Level(
    {x: 63, y: 263},
    {x: 660, y: 272},
    [
      {x: 48, y: 312, width: 96, height: 96, on: true},
      {x: 144, y: 124, width: 48, height: 284, on: true},
      {x: 192, y: 124, width: 96, height: 96, on: true},
      {x: 192, y: 312, width: 96, height: 96, on: false},
      {x: 288, y: 124, width: 48, height: 284, on: true},
      {x: 336, y: 312, width: 96, height: 96, on: true},
      {x: 432, y: 124, width: 48, height: 284, on: true},
      {x: 480, y: 124, width: 96, height: 96, on: true},
      {x: 480, y: 312, width: 96, height: 96, on: false},
      {x: 576, y: 124, width: 48, height: 284, on: true},
      {x: 624, y: 312, width: 96, height: 96, on: true},
    ],
    [
      {x: 232, y: 304, width: 16, height: 8, on: false, direction: 'up'},
      {x: 520, y: 304, width: 16, height: 8, on: false, direction: 'up'},
    ]
  ),
  // https://cl.ly/f83f4b0bb02d
  new Level(
    {x: 148, y: 254},
    {x: 600, y: 266},
    [
      {x: 94, y: 176, width: 8, height: 128, on: true},
      {x: 222, y: 176, width: 8, height: 128, on: true},
      {x: 94, y: 168, width: 136, height: 8, on: true},
      {x: 94, y: 304, width: 136, height: 8, on: true},
      {x: 318, y: 176, width: 8, height: 128, on: true},
      {x: 446, y: 176, width: 8, height: 128, on: true},
      {x: 318, y: 168, width: 136, height: 8, on: true},
      {x: 318, y: 304, width: 136, height: 8, on: true},
      {x: 542, y: 176, width: 8, height: 128, on: true},
      {x: 670, y: 176, width: 8, height: 128, on: true},
      {x: 542, y: 168, width: 136, height: 8, on: true},
      {x: 542, y: 304, width: 136, height: 8, on: true},
    ],
  ),
  // https://cl.ly/0d180032f589
  new Level(
    {x: 400, y: 20},
    {x: 372, y: 432},
    [],
    [
      {x: 0, y: 96, width: 384, height: 8, on: true, direction: 'up'},
      {x: 0, y: 104, width: 384, height: 8, on: true, direction: 'down'},
      {x: 400, y: 240, width: 368, height: 8, on: true, direction: 'up'},
      {x: 400, y: 248, width: 368, height: 8, on: true, direction: 'down'},
      {x: 0, y: 384, width: 384, height: 8, on: true, direction: 'up'},
      {x: 0, y: 392, width: 384, height: 8, on: true, direction: 'down'},
    ],
  ),
  // https://cl.ly/d11a48fe9b24
  new Level(
    {x: 368, y: 14},
    {x: 269, y: 419},
    [],
    [
      {x: 328, y: 32, width: 8, height: 80, on: true, direction: 'right'},
      {x: 320, y: 32, width: 8, height: 80, on: false, direction: 'left'},
      {x: 424, y: 32, width: 8, height: 80, on: true, direction: 'left'},
      {x: 432, y: 32, width: 8, height: 80, on: false, direction: 'right'},
      {x: 280, y: 175, width: 8, height: 80, on: true, direction: 'right'},
      {x: 272, y: 174, width: 8, height: 80, on: false, direction: 'left'},
      {x: 376, y: 175, width: 8, height: 80, on: true, direction: 'left'},
      {x: 384, y: 175, width: 8, height: 80, on: false, direction: 'right'},
      {x: 232, y: 320, width: 8, height: 80, on: true, direction: 'right'},
      {x: 224, y: 319, width: 8, height: 80, on: false, direction: 'left'},
      {x: 328, y: 320, width: 8, height: 80, on: true, direction: 'left'},
      {x: 336, y: 319, width: 8, height: 80, on: false, direction: 'right'}
    ],
  ),
];
