import { useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";
import { PERMISSIONS, requestMultiple } from "react-native-permissions";

export const ContextListener = (getLocation: any, _SetDispatch: any, state: any) => {

  /**
   * @Setter for set the latitude and longitude for first time
   * @Listener for set the internet status
   */

  useEffect(() => {
    getLocation();
    requestMultiple([
      PERMISSIONS.ANDROID.BLUETOOTH_CONNECT,
      PERMISSIONS.ANDROID.BLUETOOTH_SCAN,
      PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      PERMISSIONS.ANDROID.CAMERA
    ]);
    NetInfo.addEventListener((status) => {
      _SetDispatch("internet", status.isInternetReachable);
    });
  }, []);

};
