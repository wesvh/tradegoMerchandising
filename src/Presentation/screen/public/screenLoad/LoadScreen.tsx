import React from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import "react-native-gesture-handler";
import * as Progress from "react-native-progress";
import { APPS_COLORS } from "../../../theme/AppTheme";
import { LoadStyle as styles } from "./LoadStyle";
import { LoadViewModel } from "./LoadViewModel";
import pixelRatio from "src/Presentation/utils/pixelRatio";
export function LoadScreen(props: any) {
  const { confiLoadPercent, userData } = LoadViewModel(props);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/BG2_Login.png")}
        resizeMode="stretch"
        style={styles.image}>
        <View style={styles.container2}>
          <Image style={styles.logoAltipal} source={require("../../../assets/altipalScreen.png")} />
          <Text
            style={{
              textAlign: "center",
              color: APPS_COLORS.greenBlue,
              fontSize: 40 / pixelRatio,
              fontWeight: "bold",
              marginTop: -40
            }}>
            ¡Bienvenido!
          </Text>
          <Text
            style={{
              top: 10,
              textAlign: "center",
              color: APPS_COLORS.blue,
              fontSize: 20 / pixelRatio
            }}>
            "{userData?.name || ""}"
          </Text>
          <Text
            style={{
              top: 10,
              textAlign: "center",
              color: APPS_COLORS.blue,
              fontSize: 15 / pixelRatio
            }}>
            "{userData?.email || ""}"
          </Text>
          {/*  <StatusBar style={styles.statusbar} /> */}
          <Progress.Bar
            style={styles.progressStyle}
            width={254}
            height={18}
            progress={confiLoadPercent / 100}
            animated={true}
            indeterminate={false}
            borderColor={"#ffffff"}
            borderRadius={10}
            borderWidth={2}
            color={APPS_COLORS.darkBlue}
            indeterminateAnimationDuration={100}
          />
          <Text style={styles.progressStyleText}>{Math.floor(confiLoadPercent)}%</Text>
          <Text
            style={{
              justifyContent: "center",
              textAlign: "center",
              color: APPS_COLORS.blue,
              fontWeight: "bold",
              top: 80,
              width: 300,
              fontSize: 19 / pixelRatio
            }}>
            “El éxito está relacionado con la acción. Tenle miedo a la complacencia.”
          </Text>
          <Text
            style={{
              justifyContent: "center",
              textAlign: "center",
              color: APPS_COLORS.blue,
              top: 90,
              fontSize: 15 / pixelRatio,
              width: 300
            }}>
            J. Maxwell
          </Text>
        </View>
        <Text style={styles.textStyle}>QA Altipal | Sprint 18</Text>
      </ImageBackground>
    </View>
  );
}
