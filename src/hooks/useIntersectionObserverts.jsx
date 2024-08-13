import { useEffect, useState, useRef } from "react"

export function useIntersectionObserver(options = {}) {
  const { threshold = 1.0, root = null, rootMargin = "0px", onIntersect } = options;
  const targetRef = useRef(null)
  const [entry, setEntry] = useState()

  useEffect(() => {
    const currentRef = targetRef.current;
    const observer = new IntersectionObserver(
      (entries = IntersectionObserverEntry) => {
        const [entry] = entries;
        if (entry.isIntersecting) { onIntersect?.(); }
        setEntry(entry);
      }, { threshold, root, rootMargin });
    if (currentRef) {observer.observe(currentRef);}
    return function () {
      if (currentRef) {observer.disconnect();}};
    }, [onIntersect, root, rootMargin, threshold]);
  return [targetRef, entry];
}
