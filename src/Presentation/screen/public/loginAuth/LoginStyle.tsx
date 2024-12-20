import { StyleSheet } from "react-native";
import { APPS_COLORS } from "../../../theme/AppTheme";
import pixelRatio from "../../../utils/pixelRatio";
export const LoginStyle = StyleSheet.create({
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
    width: 89,
    top: -60,
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
    top: -100,
    height: 274,
    width: 274
  },
  tocheableBtn: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: APPS_COLORS.blue,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: -45,
    marginBottom: 5
  },
  texto: {
    color: APPS_COLORS.white,
    fontSize: 16 / pixelRatio
  },
  texto2: {
    justifyContent: "center",
    textAlign: "center",
    color: APPS_COLORS.blue,
    marginTop: 4,
    width: 300,
    fontSize: 14 / pixelRatio,
    fontStyle: "italic"
  },
  texto3: {
    justifyContent: "center",
    textAlign: "center",
    color: APPS_COLORS.blue,
    fontWeight: "bold",
    top: 80,
    width: 300,
    fontSize: 19 / pixelRatio
  },
  texto4: {
    justifyContent: "center",
    textAlign: "center",
    color: APPS_COLORS.blue,
    top: 90,
    fontSize: 15 / pixelRatio,
    width: 300
  }
});
