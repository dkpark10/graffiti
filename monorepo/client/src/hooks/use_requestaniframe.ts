export const useRequestAniFrame = (callback: () => void) => {
  let tick = false;

  return () => {
    if (tick) {
      return;
    }

    tick = true;
    return requestAnimationFrame(() => {
      tick = false;
      return callback();
    });
  };
};
