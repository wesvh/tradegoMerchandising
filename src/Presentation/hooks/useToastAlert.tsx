import { Alert } from "react-native";
import { useToast } from "react-native-toast-notifications";

export const useToastAlert = () => {
  const toast = useToast();

  /**
   * Show a short message in the screen
   * @param {string} message the text to show in the toast
   * @param {string} type the type of toast to show danger, success, warning
   */
  const alert = (message: string, type = "success", duration = 2000) => {
    toast.show(message, { type: type, duration: duration });
  };

  /**
   * Displays an alert with a title and a message, and optionally an Accept/Cancel button or a single OK button.
   *
   * @param {string} title - The title of the alert.
   * @param {string} message - The message of the alert.
   * @param {Function} fun - The function to be executed when the Accept or OK button is pressed.
   * @param {boolean} acceptable - Indicates whether to display an Accept/Cancel button (true) or a single OK button (false). The default value is false.
   *
   * @example
   * // displays an alert with an Accept/Cancel button and executes the handleAccept function when Accept is pressed
   * DisplayAlert('Title', 'Message', handleAccept, true);
   *
   * @example
   * // displays an alert with a single OK button and executes the handleCancel function when OK is pressed
   * DisplayAlert('Title', 'Message', handleCancel, false);
   */
  const DisplayAlert = (title: string, message: string, fun: any, acceptable = false) => {
    const buttons: any = acceptable
      ? [
          {
            text: "Cancelar",
            style: "cancel"
          },
          {
            text: "Aceptar",
            onPress: () => {
              if (fun) {
                fun();
              }
            }
          }
        ]
      : [
          {
            text: "OK",
            onPress: () => {
              if (fun) {
                fun();
              }
            }
          }
        ];

    Alert.alert(title, message, buttons);
  };

  const DisplayAlertCustomButtons = (title: string, message: string, buttons: any) => {
    Alert.alert(title, message, buttons);
  };

  return { alert, DisplayAlert, DisplayAlertCustomButtons };
};
