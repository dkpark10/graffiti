type P = IntersectionObserverInit;
type R = IntersectionObserver;

export const useIntersection = (cb: () => void, option?: P): R => {
  const intersectionHandler = (
    [entry]: IntersectionObserverEntry[],
    intersec: IntersectionObserver
  ) => {
    if (entry.isIntersecting) {
      intersec.unobserve(entry.target);
      cb();
      intersec.observe(entry.target);
    }
  };

  return new IntersectionObserver(intersectionHandler, option);
};
