// intersectionObserverMock.ts
class IntersectionObserver {
  constructor(callback: Function, options?: IntersectionObserverInit) {}
  observe(target: Element) {}
  unobserve(target: Element) {}
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

Object.defineProperty(global, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

export default IntersectionObserver;
