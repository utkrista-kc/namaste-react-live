import { useState, useEffect } from "react";
const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  // we have to set event listener just once so we use useEffect hook with empty dependency array.
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline; //returns true or false
};

export default useOnline;
