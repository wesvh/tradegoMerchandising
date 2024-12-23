import {useContext, useState } from "react";
import { ContextApp } from "context";
export const NavigationDrawerViewModel = (navigation: any, routes: any, index: any) => {
  const {saveContext }: any = useContext(ContextApp);
  const [activeScreen, setActiveScreen] = useState("");

  const [responseSubscribe] = useState(false);

  const changeNoStop = async (number: any) => {
    setTimeout(() => {
      saveContext("reloadTrans", number);
    }, 1);
  };

  const navigateOptionMenu = async (name: string) => {
    try {
      setActiveScreen(name);
      changeNoStop(0);
      navigation.navigate(name);
    } catch (error) {
      setActiveScreen(name);
      console.error("error en navegacion", error);
      navigation.navigate(name);
    }
  };

  return { navigateOptionMenu, responseSubscribe, activeScreen };
};
