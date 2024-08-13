import { useEffect, useState, useRef, MutableRefObject } from "react"


export function useIntersectionObserver(options = {}) {
    const { threshold = 1.0, root = null, rootMargin = "0px" } = options;
    const targetRef = useRef(null)

    const [entry, setEntry] = useState()

    function callbackFn(entries=IntersectionObserverEntry) {
        const [entry] = entries;
        setEntry(entry);
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFn, { threshold, root, rootMargin});
        const currentRef = targetRef.current;
    
        if (currentRef) {
          observer.observe(currentRef);
        }
    
        return function () {
          if (currentRef) {
            observer.disconnect();
          }
        };
      }, [root, rootMargin, threshold]);
    
      return [targetRef, entry];
}
