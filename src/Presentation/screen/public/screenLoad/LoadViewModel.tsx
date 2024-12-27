import { useState, useEffect } from "react";
import { useUserLocal } from "../../../hooks";
import { RealmTransactionsHook } from "../../../helpers/RealmTransactionsHook";

/**
 * logic: state, methods, variables
 * @description the logic o
 */

export const LoadViewModel = (props: any) => {
  const { navigation } = props;
  const [userData, setUserData] = useState({ name: "", email: "" });
  const [confiLoadPercent, setConfigLoadPercent] = useState(0);
  const { getItemStorage } = useUserLocal();
  const { writeLoadInitialData } = RealmTransactionsHook();

  useEffect(() => {
    (async () => {
      const resp = await getItemStorage("usuario");
      setUserData(resp);
    })();
    LoadData();
  }, []);

  const LoadData = async () => {
    await writeLoadInitialData(setConfigLoadPercent);
    navigation.replace("MenuDrawer");
  };

  return { confiLoadPercent, userData };
};
