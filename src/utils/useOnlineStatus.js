import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    // check if Online or Offline

    const[OnlineStatus, setOnlineStatus] = useState(true);

    useEffect(()=>{
       window.addEventListener("offline", () => {
       setOnlineStatus(false);
       });

       window.addEventListener("online", () => {
        setOnlineStatus(true);
       });

    }, []);

    // Boolean value is true or false
    return OnlineStatus;

};

export default useOnlineStatus;