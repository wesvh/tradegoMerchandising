import { useState, useEffect } from "react";
import { LoginGoogleUseCase } from "../../../../Domain/useCase/AuthWithGoogle/LoginGoogleUseCase";
import { useUserLocal, useToastAlert } from "../../../hooks";
import { RequestUseCase } from "../../../../Domain/useCase/Request/RequestUseCase";
import { useLogout } from "../../../hooks/useLogout";
import * as RootNavigation from "../../../navigation/RootNavigation";
import { promotorSupernumerario } from "src/Presentation/utils/constants";
import { SaveSessionUseCase } from "../../../../Domain/useCase/userLocal/saveSession/SaveSession";
import { BussineRuleException } from "src/Domain/exceptions/BussineRuleException";

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
      if(!datosUser) {return false;}

      await SaveSessionUseCase(datosUser, true);     
     
      const {
        data: userData,
        ok,
        message
      } = await RequestUseCase("/login", "POST", {
        email: datosUser.email
      });  
      
      await getSession();

      if (!ok) { throw new BussineRuleException(message); }      
      
      await checkSessionOnOtherDevices(userData.email);

      console.log("userData", userData);
      

      if (userData.hasOwnProperty("hierarchyId")){
        setVisibility(userData.hierarchyId == promotorSupernumerario);
        return;
      }

      await SaveSessionUseCase(userData);

      setLoadingSignIn(false);
      RootNavigation.navigate("LoaderScreen", {});

    } catch (error) {
      await showErrorMessage(error);
    } finally {
      setLoadingSignIn(false);
      setIsPressed(false);
    }

    async function checkSessionOnOtherDevices(email: string) {      
      const {
        data: sessionData,
        ok,
        message
      } = await RequestUseCase("/Config/session/existinotherdevice", "POST", {
        email: email
      });  
      
      if (!ok) {throw new BussineRuleException(message);}    

      if (sessionData.sessionInOtherDevice) {
        throw new BussineRuleException(
          "Tiene un inicio de sesión con otro dispositivo"
        );
      }
    }

    async function showErrorMessage(error: any) {
      if (error instanceof BussineRuleException) {
        alert(error.message, "danger");
      } else {
        alert("Ha ocurrido un error inesperado, por favor intente de nuevo", "danger");
      }    
      await logoutSessionData();
      setVisibility(false);
      setLoadingSignIn(false);
      return;
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
    singIn,
    user
  };
};
