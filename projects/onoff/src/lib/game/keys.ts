export const DOWN = new Set();
export const PRESSED = new Set();

export const NO_DEFAULT = new Set([
  'w',
  'a',
  's',
  'd',
  ' ',
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight'
]);

export const upKey = () => (
  DOWN.has('w') || DOWN.has('ArrowUp') || PRESSED.has(0) || PRESSED.has(12)
);

export const leftKey = () => (
  DOWN.has('a') || DOWN.has('ArrowLeft') || PRESSED.has(14)
);

export const rightKey = () => (
  DOWN.has('d') || DOWN.has('ArrowRight') || PRESSED.has(15)
);

const HANDLERS = new Map<any, any>();
export const onPress = (index, f) => {
  if (!HANDLERS.has(index)) {
    HANDLERS.set(index, []);
  }
  HANDLERS.get(index).push(f);
};

requestAnimationFrame(function tick(time) {
  const pad = navigator.getGamepads()[ 0 ];
  if (!pad) {
    PRESSED.clear();
    return;
  }
  pad.buttons.forEach((button, index) => {
    if (button.pressed) {
      if (!PRESSED.has(index)) {
        const handlers = HANDLERS.get(index);
        if (handlers) {
          handlers.forEach((f) => f());
        }
      }
      PRESSED.add(index);
    } else {
      PRESSED.delete(index);
    }
  });
  requestAnimationFrame(tick);
});
