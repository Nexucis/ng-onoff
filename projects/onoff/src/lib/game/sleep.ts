export default (delay) => new Promise((resolve, reject) => {
  const start = performance.now();
  requestAnimationFrame(function check(now) {
    if (now >= start + delay) {
      return resolve();
    }
    requestAnimationFrame(check);
  });
});
