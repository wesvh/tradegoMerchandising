import { StyleSheet } from "react-native";
import pixelRatio from "src/Presentation/utils/pixelRatio";

export const AnunciosStyle = StyleSheet.create({
  container: {
    width: 250,
    height: 30,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
    marginTop: 10,
    elevation: 5,
    color: "#B2BBD1",
    justifyContent: "center"
  },
  picker: {
    width: 250,
    height: 30,
    color: "#011F67",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center"
  },
  itemStyle: {
    fontSize: 14 / pixelRatio,
    height: 75,

    color: "black",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    fontWeight: "bold"
  }
});
