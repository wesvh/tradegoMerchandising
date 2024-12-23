import messaging from "@react-native-firebase/messaging";
import * as Notifications from "expo-notifications";
import { SaveItemUseCase } from "saveItem/";


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  })
});

export const useNotificationsLogic = () => {

  const requestUserPermissions = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus);
      return true;
    }
    return true;
  };

  const LogicSetNotifications = async () => {
    const canSee = await requestUserPermissions();
    if (canSee) {
      console.log("Autorizado");
      messaging()
        .getToken()
        .then(async (token) => {
          await SaveItemUseCase("tokenNotification", token);
          console.log(token); // Este es el token que toca enviar a back para que envien las notificaciones a un dispositivo especifico
        });
    } else {
      console.log("No autorizado");
    }

   
  };

  return {
    LogicSetNotifications
  };
};