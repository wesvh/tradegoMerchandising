import { useState, useContext } from "react";
import { RequestUseCase } from "../../../../Domain/useCase/Request/RequestUseCase";
import { GetItemUseCase } from "../../../../Domain/useCase/userLocal/getItem/GetItem";
import { useToastAlert } from "../../../hooks";
import * as RootNavigation from "../../../navigation/RootNavigation";
import { SaveSessionUseCase } from "../../../../Domain/useCase/userLocal/saveSession/SaveSession";
import { publishVersion } from "src/Presentation/utils/constants";

export const DialogCodeZoneViewModel = (setLoadingSignIn: any, showDialog: any) => {
  const [zone, setZone] = useState(``);
  const [loading, setLoading] = useState(false);
  const { alert } = useToastAlert();
  const showVersion = (cb: any, bool: boolean) => {
    cb(bool);
  };

  const writeZone = (text: string) => {
    if (text === "") {
      setZone("");
    } else if (/^[0-9\b]+$/.test(text)) {
      setZone(text);
    }
  };

  const validateZone = async () => {
    setLoading(true);
    const [usuario, tokenNotification] = await Promise.all([
      GetItemUseCase(),
      GetItemUseCase("tokenNotification")
    ]);

    const {
      ok,
      message,
      data: userData
    } = await RequestUseCase(`/login/validatezone/${zone}`, "POST", {
      email: usuario.email,
      deviceId: "11",
      version: publishVersion
    });

    if (!ok) {
      alert(message, "danger");
      setLoading(false);
      setZone("");
      return;
    }

    await SaveSessionUseCase(userData);
    setLoadingSignIn(false);
    showDialog(false);
    RootNavigation.navigate("LoaderScreen", {});
    setZone("");
    setLoading(false);
  };

  return {
    showVersion,
    writeZone,
    validateZone,
    zone,
    loading
  };
};
