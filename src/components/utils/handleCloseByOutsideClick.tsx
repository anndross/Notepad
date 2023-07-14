import { useEffect } from "react";

export const handleCloseByOutsideClick = (ref: any, setClose: (b: boolean) => void) => {
  function handleClickOutside(event: any) {
    if (ref.current && !ref.current.contains(event.target)) {
      setClose(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}