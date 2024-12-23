import { LogoutSessionUseCase } from "../../Domain/useCase/userLocal/logoutSession/LogoutSession";
import { GetItemUseCase } from "../../Domain/useCase/userLocal/getItem/GetItem";
import { useState, useContext } from "react";

import * as RootNavigation from "../navigation/RootNavigation";
import { ContextApp } from "context";


export const useLogout = () => {
  const { ResetReducer, saveContext }: any = useContext(ContextApp);
  const [buttonClicked] = useState(false);

  const logoutSessionData = async () => {
    try {
      RootNavigation.navigate("Auth", {});
      ResetReducer();
      saveContext("isLogouting", true);
      const user = await GetItemUseCase();
      LogoutSessionUseCase(user);    
    } catch (e) {
      console.error(e);
    } finally {
      setTimeout(() => {
        saveContext("isLogouting", false);
      }, 2500);
    }
  };

  return { logoutSessionData, buttonClicked };
};
