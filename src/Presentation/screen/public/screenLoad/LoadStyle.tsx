import { StyleSheet } from "react-native";
import { APPS_COLORS } from "../../../theme/AppTheme";
import pixelRatio from "src/Presentation/utils/pixelRatio";
export const LoadStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  dialogStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  container2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  statusbar: {
    backgroundColor: APPS_COLORS.blue
  },
  textStyle: {
    flex: 0.05,
    color: APPS_COLORS.blue,
    fontSize: 13 / pixelRatio,
    textAlign: "center"
  },
  iconGoogle: {
    height: 89,
    width: 73,
    top: -50,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  logoAltipal: {
    position: "relative",
    top: -90,
    height: 274,
    width: 274
  },
  progressStyle: {
    top: 27
  },
  progressStyleText: {
    color: APPS_COLORS.blue,
    fontSize: 11 / pixelRatio,
    top: 27,
    textAlign: "center"
  }
});
