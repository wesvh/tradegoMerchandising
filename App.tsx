import * as React from "react";
import NavigationStack from "src/Presentation/navigation/NavigationStack";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

import Toast from "react-native-toast-notifications";
import LogRocket from "@logrocket/react-native";

GoogleSignin.configure({
  webClientId: "180334482698-tjecqkcpa2c9o11cdvte0q7442nfn8md.apps.googleusercontent.com"
});

const App = () => {
  React.useEffect(() => {
    try {
      LogRocket.init("nylrm4/altipal");
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <NavigationStack />
      <Toast ref={(ref: any) => (global["toast"] = ref)} />
    </>
  );
};



export default App;
