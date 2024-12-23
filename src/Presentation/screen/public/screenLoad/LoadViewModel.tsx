import { useState, useEffect } from "react";
import { useUserLocal } from "../../../hooks";
/**
 * logic: state, methods, variables
 * @description the logic o
 */

export const LoadViewModel = (props: any) => {
  const { navigation } = props;
  const [userData, setUserData] = useState({ name: "", email: "" });
  const [confiLoadPercent] = useState(0);
  const { getItemStorage } = useUserLocal();

  useEffect(() => {
    (async () => {
      const resp = await getItemStorage("usuario");
      setUserData(resp);
    })();
    LoadData();
  }, []);

  const LoadData = async () => {
    navigation.replace("MenuDrawer");
  };

  return { confiLoadPercent, userData };
};
