import { StyleSheet } from "react-native";
import pixelRatio from "src/Presentation/utils/pixelRatio";
export const DialogCodeZoneStyle = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center"
  },
  modalView: {
    width: 250,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 30,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 10,
    padding: 8,
    margin: 10,
    elevation: 2,
    width: "80%"
  },
  buttonOpen: {
    backgroundColor: "#122772"
  },
  buttonClose: {
    marginBottom: 15,
    backgroundColor: "#122772"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 10 / pixelRatio,
    textAlign: "center"
  },
  textStyleClose: {
    color: "#9E9E9E",
    fontWeight: "bold",
    fontSize: 15 / pixelRatio,
    textAlign: "right",
    marginHorizontal: 10
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 15 / pixelRatio,
    fontWeight: "bold"
  },
  InputText: {
    marginBottom: 1,
    textAlign: "center",
    fontSize: 10 / pixelRatio
  },
  centerButton: {
    alignItems: "center"
  }
});
