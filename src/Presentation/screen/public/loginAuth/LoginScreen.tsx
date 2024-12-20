import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableNativeFeedback,
  TouchableOpacity,
  Image
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LoginStyle as styles } from "./LoginStyle";
import { LoginViewModel } from "./LoginViewModel";
import { slogan, publishVersion } from "../../../utils/constants";

export const LoginScreen = () => {

  const {
    loadingSignIn,
    loadindState,
    versionVisibility,
    isPressed,
    singIn
  } = LoginViewModel();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/BG2_Login.png")}
        resizeMode="stretch"
        style={styles.image}>
       {/*  <DialogCodeZone
          visibility={visibility}
          setVisible={closeDialogSansSession}
          showDialog={setVisibility}
          showVersion={setVersionVisibility}
          setLoadingSignIn={setLoadingSignIn}
        /> */}
        <StatusBar />
        <View style={styles.container2}>
          <TouchableNativeFeedback >
            <Image
              style={styles.logoAltipal}
              source={require("../../../assets/altipalScreen.png")}
            />
          </TouchableNativeFeedback>
          <View>
          <TouchableOpacity onPress={singIn} style={styles.tocheableBtn} disabled={isPressed}>
              <Text style={styles.texto}>Ingresa con tu cuenta de Google</Text>
            </TouchableOpacity>
            <Text style={styles.texto2}> (Correo corporativo) </Text>
          </View>
          <Text style={styles.texto3}>
            “El éxito está relacionado con la acción. Tenle miedo a la complacencia.”
          </Text>
          <Text style={styles.texto4}> J. Maxwell </Text>
        </View>
       { <Text style={styles.textStyle}>
          {versionVisibility && loadindState && "Actualizando aplicación.."}
          {versionVisibility && loadingSignIn && !loadindState && "Iniciando sesión.."}
          {versionVisibility &&
            !loadingSignIn &&
            !loadindState &&
            `Sprint 18 | ${slogan} | ${publishVersion}`}
        </Text>}
      </ImageBackground>
    </View>
  );
};
