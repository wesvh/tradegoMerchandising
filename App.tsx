import * as React from "react";
import NavigationStack from "src/Presentation/navigation/NavigationStack";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

import Toast from "react-native-toast-notifications";
import { useNotificationsLogic } from "./Notifications";

GoogleSignin.configure({
  webClientId: "180334482698-tjecqkcpa2c9o11cdvte0q7442nfn8md.apps.googleusercontent.com"
});

const App = () => {
  return (
    <>
      <NavigationStack />
      <Toast ref={(ref: any) => (global["toast"] = ref)} />
    </>
  );
};

export default App;
