import { useState, useContext } from "react";
import { LoginGoogleUseCase } from "../../../../Domain/useCase/AuthWithGoogle/LoginGoogleUseCase";
import { useUserLocal, useToastAlert } from "../../../hooks";
import { SaveSessionUseCase } from "../../../../Domain/useCase/userLocal/saveSession/SaveSession";
// import * as Location from "expo-location";
import * as RootNavigation from "../../../navigation/RootNavigation";
import { useLogout } from "../../../hooks/useLogout";
import { RequestUseCase } from "../../../../Domain/useCase/Request/RequestUseCase";
import { UpdateAppUseCase } from "../../../../Domain/useCase/updateApp/UpdateAppUseCase";
import { GetItemUseCase } from "getItem/GetItem";
import LogRocket from "@logrocket/react-native";
import { publishVersion } from "src/Presentation/utils/constants";
import { Alert } from "react-native";

/**
 * logic: state, methods, variables
 * @description the logic o
 */
export const LoginViewModel = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [loadingSignIn, setLoadingSignIn] = useState(false);
  const [loadindState, setLoadindState] = useState(false);
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

  const UpdateVersionAlert = async () => {
    Alert.alert(
      "Actualización",
      "TradeGo ha sido actualizado, por favor actualice la aplicación para continuar",
      [
        {
          text: "Actualizar",
          onPress: async () => {
            await loadUpdate();
          }
        }
      ],
      { cancelable: false }
    );
  };

  const ComprobeVersion = async () => {
    const version = await RequestUseCase("/Config/appversion", "GET");
    if (version?.ok === false) return null;
    if (version !== publishVersion.trim()) {
      UpdateVersionAlert();
      return false;
    } else {
      return true;
    }
  };

  const SingIn = async () => {
    try {
      if ((await ComprobeVersion()) === false) return;
      const userLocal = await getItemStorage("usuario");
      console.log("userLocal", userLocal);
      setIsPressed(true);
      const tokenNotification = await GetItemUseCase("tokenNotification");
      setLoadingSignIn(true);
      if (userLocal) {
        try {
          const { salesZoneId } = await getItemStorage("saleZone");
          RequestUseCase("/Config/token", "PUT", {
            email: userLocal?.email,
            deviceId: tokenNotification,
            saleZoneId: salesZoneId
          });
        } catch (error) {
          console.log("error", error);
        }
        setLoadingSignIn(false);
        RootNavigation.navigate("MenuDrawer", {});
        return;
      }
      const datosUser = await LoginGoogleUseCase(setLoadingSignIn);
      try {
        console.log("datosUser", datosUser);
        await SaveSessionUseCase(datosUser, true);
      } catch (error) {
        console.log("error", error);
      }
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
        if (message === "ERR-VERSION") {
          UpdateVersionAlert();
        } else if (message !== undefined) alert(message, "danger");
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

      LogRocket.identify(`${userData?.user?.email}`, {
        name: userData?.user?.name,
        email: userData?.user?.email
      });

      await SaveSessionUseCase(userData);
      setLoadingSignIn(false);
      RootNavigation.navigate("LoaderScreen", {});
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoadingSignIn(false);
      setIsPressed(false);
    }
  };

  const loadUpdate = async () => {
    await UpdateAppUseCase(setLoadindState);
  };

  const reloadSession = async () => {
    await getSession();
  };

  return {
    loadingSignIn,
    loadindState,
    versionVisibility,
    SingIn,
    user,
    RootNavigation,
    reloadSession,
    visibility,
    closeDialogSansSession,
    setVersionVisibility,
    setVisibility,
    loadUpdate,
    setLoadingSignIn,
    isPressed,
    setIsPressed
  };
};
