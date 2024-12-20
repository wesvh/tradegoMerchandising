import { useState } from "react";
import { LoginGoogleUseCase } from "../../../../Domain/useCase/AuthWithGoogle/LoginGoogleUseCase";

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

  const singIn = async () => {
    try {
      setIsPressed(true);
      setLoadingSignIn(true);    
     /*  if (userLocal) {
        const { salesZoneId } = await getItemStorage("saleZone");
          RequestUseCase("/Config/token", "PUT", {
            email: userLocal?.email,
            deviceId: tokenNotification,
            saleZoneId: salesZoneId
          });
        setLoadingSignIn(false);
        RootNavigation.navigate("MenuDrawer", {});
        return;
      } */

      const datosUser = await LoginGoogleUseCase(setLoadingSignIn);      
     
    /*   const {
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

      setLoadingSignIn(false);
      RootNavigation.navigate("LoaderScreen", {}); */

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
    setVersionVisibility,
    setVisibility,
    setLoadingSignIn,
    isPressed,
    setIsPressed,
    singIn
  };
};
