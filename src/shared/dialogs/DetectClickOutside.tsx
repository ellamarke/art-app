import { useEffect, useRef } from "react";

export default function DetectClickOutside<T extends Node>(cb: () => void) {
  // any object but has to be of type Node
  const ref = useRef<T>(null); // Ref is a reference to the actual raw HTML element created by our JSX

  const handleClickOutside = (event: MouseEvent) => {
    const current = ref.current;
    if (current && event.target && !current.contains(event.target as Node)) {
      cb();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref };
}
