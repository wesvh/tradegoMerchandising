import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
export class GoogleSigninAuth {
  public login = async (setLoad: any) => {

    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true
      });
     
      await this.logout();
      
      // Get the users ID token

      const { data } = await GoogleSignin.signIn();
      if(!data) return false;
      const { idToken } = data      

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userSignIn = auth().signInWithCredential(googleCredential);
      
      const usuarioData = await userSignIn;

      if (idToken !== null) {
        return {
          idToken,
          email: 'viviana.varilla@altipal.com.co',
          name: 'Prueba'
        };
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error: -> " + error);
      setLoad(false);
    }
  };

public logout = async () => {
  try {
    const currentUser = auth().currentUser;
    if (!currentUser) {  return; }
    await GoogleSignin.revokeAccess();
    await auth().signOut();
  } catch (error) {
    console.log(`NO SE PUDO CERRAR LA SESIÓN: ${error}`);
  }
};
}
