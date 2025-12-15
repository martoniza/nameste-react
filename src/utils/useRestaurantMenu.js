import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResinfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("........" + resId);
    const json = await data.json();
    setResinfo(json);
  };

  return resInfo;
};

export default useRestaurantMenu;
