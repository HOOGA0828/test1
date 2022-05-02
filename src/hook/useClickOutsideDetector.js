// 來源
// https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
// 用法
// 將指定組件用useRef綁定，然後將該ref與callback導入這個hook
// 例如
// const langRef = useRef(null);
// useClickOutsideDetector(langRef, () => { setIsLangList(false) })
// <Lang ref={langRef}/>

import { useEffect } from "react";


export default function useClickOutsideDetector(ref, callback) {
  useEffect(() => {
    //  if clicked on outside of element
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        callback?.();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
