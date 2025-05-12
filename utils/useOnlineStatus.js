import { useState } from "react";

export const useOnlineStatus = () => {
  let [isOnline,setIsOnline] = useState(navigator.onLine);

  window.addEventListener("online", (event) => {
   setIsOnline(true);
  });

  window.addEventListener("offline", (event) => {
    setIsOnline(false);
  });

  return isOnline;
};
