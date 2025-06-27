import { useState, useEffect } from "react";

export default function useDebounce(text, delay=1000) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setValue(text);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [text, delay]);

  return value;
}
