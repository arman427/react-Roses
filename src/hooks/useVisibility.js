import { useEffect, useRef, useState } from "react"

export const useVisibility = (options) => {
   const elementRef = useRef(null);
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const observer = new IntersectionObserver(([ entry ]) => {
         if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target);
         }
      }, options);

      if (elementRef.current) {
         observer.observe(elementRef.current);
      }

      return () => {
         if (elementRef.current) {
            observer.unobserve(elementRef.current);
         }
         observer.disconnect();
      };
   }, [options]);

   return [elementRef, isVisible];
};