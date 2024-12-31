import * as React from "react";
import NavigationStack from "src/Presentation/navigation/NavigationStack";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { ContextProvider } from "context";
import Toast from "react-native-toast-notifications";
import { GeneralConfigContext } from "businessDB";

GoogleSignin.configure({
  webClientId: "180334482698-tjecqkcpa2c9o11cdvte0q7442nfn8md.apps.googleusercontent.com"
});

const { RealmProvider: GeneralConfigStorage } = GeneralConfigContext;

const App = () => {
  return (
    <>
      <GeneralConfigStorage>
        <ContextProvider>
          <NavigationStack />
        </ContextProvider>
      </GeneralConfigStorage>
     
      <Toast ref={(ref: any) => (global["toast"] = ref)} />
    </>
  );
};

export default App;
