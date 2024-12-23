import { StyleSheet, Dimensions } from "react-native";
import { APPS_COLORS } from "../../../../theme/AppTheme";
import pixelRatio from "src/Presentation/utils/pixelRatio";

export const NotificationsScreenStyles = StyleSheet.create<any>({
  modalContainer: {
    backgroundColor: "#4260A7",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalStyle: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 10,
    minHeight: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "80%",
    marginTop: 20,
    paddingBottom: 10
  },
  text: {
    fontSize: 16 / pixelRatio,
    textAlign: "left",
    color: APPS_COLORS.black,
    opacity: 1,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 4,
    padding: 10
  },
  buttons: {
    flexDirection: "row",
    textAling: "right",
    marginLeft: 94
  },
  buttonNo: {
    backgroundColor: "white",
    minWidth: "30%",
    borderRadius: 10,
    alignItems: "right",
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginRight: "23.5%"
  },
  textTitle: {
    fontSize: 27 / pixelRatio,
    fontWeight: "bold",
    alignItems: "center",
    color: APPS_COLORS.white
  },
  tittle: {
    backgroundColor: APPS_COLORS.darkBlue,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 4
  },
  Cancelar: {
    backgroundColor: APPS_COLORS.grayDisable,
    minWidth: "30%",
    borderRadius: 10,
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    marginRight: 4
  },
  Mensajes: {
    backgroundColor: APPS_COLORS.grayDisable,
    minWidth: "30%",
    borderRadius: 10,
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginRight: "2%"
  },
  colorTextButtonNo: {
    color: "#000",
    fontSize: 14 / pixelRatio,
    fontWeight: "bold",
    padding: "3%"
  }
});
