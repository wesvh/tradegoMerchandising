import { useState, useEffect } from "react";
import { LoginGoogleUseCase } from "../../../../Domain/useCase/AuthWithGoogle/LoginGoogleUseCase";
import { useUserLocal, useToastAlert } from "../../../hooks";
import { RequestUseCase } from "../../../../Domain/useCase/Request/RequestUseCase";
import { useLogout } from "../../../hooks/useLogout";
import * as RootNavigation from "../../../navigation/RootNavigation";
import { publishVersion } from "src/Presentation/utils/constants";
import { SaveSessionUseCase } from "../../../../Domain/useCase/userLocal/saveSession/SaveSession";

/**
 * logic: state, methods, variables
 * @description the logic o
 */
export const LoginViewModel = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [loadingSignIn, setLoadingSignIn] = useState(false);
  const [loadindState] = useState(false);
  const [versionVisibility, setVersionVisibility] = useState(true);
  const [visibility, setVisibility] = useState(false);
  const { getSession, user, getItemStorage } = useUserLocal();
  const { logoutSessionData } = useLogout();
  const { alert } = useToastAlert();

  const closeDialogSansSession = async (bool: boolean) => {
    await logoutSessionData();
    setVisibility(bool);
    setVersionVisibility(true);
    setLoadingSignIn(false);
  };

  const singIn = async () => {
    try {
      const userLocal = await getItemStorage("usuario");
      setIsPressed(true);
      const tokenNotification =123
      
      setLoadingSignIn(true);    
      if (userLocal) {
        const { salesZoneId } = await getItemStorage("saleZone");
          RequestUseCase("/Config/token", "PUT", {
            email: userLocal?.email,
            deviceId: tokenNotification,
            saleZoneId: salesZoneId
          });
        setLoadingSignIn(false);
        RootNavigation.navigate("MenuDrawer", {});
        return;
      }

      const datosUser = await LoginGoogleUseCase(setLoadingSignIn);      
      await SaveSessionUseCase(datosUser, true);
     
      const {
        data: userData,
        ok,
        message
      } = await RequestUseCase("/login", "POST", {
        email: datosUser.email,
        deviceId: tokenNotification,
        version: publishVersion
      });   


      await getSession();

      if (!ok) {
        if (message !== undefined) alert(message, "danger");
        else alert("Error de conexión de internet, por favor reintente", "danger");
        await logoutSessionData();
        setVisibility(false);
        setLoadingSignIn(false);
        return;
      }      

      if (!userData.hasOwnProperty("saleZone")) {
        setVisibility(true);
        return;
      }

      await SaveSessionUseCase(userData);
      setLoadingSignIn(false);
      RootNavigation.navigate("LoaderScreen", {});

    } catch (error) {
      console.error("error", error);
    } finally {
      setLoadingSignIn(false);
      setIsPressed(false);
    }
  };


  return {
    loadingSignIn,
    loadindState,
    versionVisibility,
    visibility,
    closeDialogSansSession,
    setVersionVisibility,
    setVisibility,
    setLoadingSignIn,
    isPressed,
    setIsPressed,
    singIn
  };
};
