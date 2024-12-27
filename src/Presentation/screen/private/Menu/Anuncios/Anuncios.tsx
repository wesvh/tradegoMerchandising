import React from "react";
import { View, Text } from "react-native";
import WebView from "react-native-webview";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome5 } from "@expo/vector-icons";
import { AnunciosStyle as styles } from "./AnunciosStyle";
import { APPS_COLORS } from "src/Presentation/theme/AppTheme";
import AnunciosViewModel from "./AnunciosViewModel";
import pixelRatio from "src/Presentation/utils/pixelRatio";

export default function Anuncios(props: any) {
  const { navigation } = props;
  const { saleZone, uri, setUri, loadSuccess, setLoadSuccess } = AnunciosViewModel(navigation);

  return (
    <>
      <View
        style={{
          height: 80,
          justifyContent: "center",
          alignItems: "center",
          flex: 0,
          flexDirection: "column",
          backgroundColor: APPS_COLORS.whiteBlue
        }}>
        <Text
          style={{
            color: APPS_COLORS.greenBlue,
            fontWeight: "bold",
            fontSize: 20 / pixelRatio
          }}>
          Indicadores
        </Text>
        <View style={styles.container}>
          <Picker
            onValueChange={(val) => {
              setUri(val);
            }}
            mode={"dropdown"}
            selectedValue={uri}
            numberOfLines={2}
            style={styles.picker}>
            <Picker.Item
              style={styles.itemStyle}
              label={"Resumen General"}
              value={`https://datastudio.google.com/u/0/reporting/1d9180f4-7ca1-4f7c-8066-2b45b767024b/page/ZBm3C?params=%7B%22ds0.zona_de_ventas%22%3A%22${saleZone}%22%7D`} // param encoded %7B%22ds0.zona_de_ventas%22%3A%2215492%22%7D
              key={0}
            />     
            <Picker.Item
              style={styles.itemStyle}
              label={"Control de Visitas"}
              value={`https://datastudio.google.com/u/0/reporting/1d9180f4-7ca1-4f7c-8066-2b45b767024b/page/ZBm3C?params=%7B%22ds0.zona_de_ventas%22%3A%22${saleZone}%22%7D`} // param encoded %7B%22ds0.zona_de_ventas%22%3A%2215492%22%7D
              key={0}
            />     
            <Picker.Item
              style={styles.itemStyle}
              label={"Cobertura"}
              value={`https://datastudio.google.com/u/0/reporting/1d9180f4-7ca1-4f7c-8066-2b45b767024b/page/ZBm3C?params=%7B%22ds0.zona_de_ventas%22%3A%22${saleZone}%22%7D`} // param encoded %7B%22ds0.zona_de_ventas%22%3A%2215492%22%7D
              key={0}
            />      
            <Picker.Item
              style={styles.itemStyle}
              label={"Efectividad"}
              value={`https://datastudio.google.com/u/0/reporting/1d9180f4-7ca1-4f7c-8066-2b45b767024b/page/ZBm3C?params=%7B%22ds0.zona_de_ventas%22%3A%22${saleZone}%22%7D`} // param encoded %7B%22ds0.zona_de_ventas%22%3A%2215492%22%7D
              key={0}
            /> 
            <Picker.Item
              style={styles.itemStyle}
              label={"Profundidad"}
              value={`https://datastudio.google.com/u/0/reporting/1d9180f4-7ca1-4f7c-8066-2b45b767024b/page/ZBm3C?params=%7B%22ds0.zona_de_ventas%22%3A%22${saleZone}%22%7D`} // param encoded %7B%22ds0.zona_de_ventas%22%3A%2215492%22%7D
              key={0}
            />
            <Picker.Item
              style={styles.itemStyle}
              label={"Cartera"}
              value={`https://datastudio.google.com/u/0/reporting/1d9180f4-7ca1-4f7c-8066-2b45b767024b/page/ZBm3C?params=%7B%22ds0.zona_de_ventas%22%3A%22${saleZone}%22%7D`} // param encoded %7B%22ds0.zona_de_ventas%22%3A%2215492%22%7D
              key={0}
            /> 
            <Picker.Item
              style={styles.itemStyle}
              label={"Devoluciones"}
              value={`https://datastudio.google.com/u/0/reporting/1d9180f4-7ca1-4f7c-8066-2b45b767024b/page/ZBm3C?params=%7B%22ds0.zona_de_ventas%22%3A%22${saleZone}%22%7D`} // param encoded %7B%22ds0.zona_de_ventas%22%3A%2215492%22%7D
              key={0}
            /> 
            <Picker.Item
              style={styles.itemStyle}
              label={"Valor Venta"}
              value={`https://datastudio.google.com/u/0/reporting/1d9180f4-7ca1-4f7c-8066-2b45b767024b/page/ZBm3C?params=%7B%22ds0.zona_de_ventas%22%3A%22${saleZone}%22%7D`} // param encoded %7B%22ds0.zona_de_ventas%22%3A%2215492%22%7D
              key={0}
            />
            <Picker.Item
              style={styles.itemStyle}
              label={"Valor Venta Surtiapp"}
              value={`https://datastudio.google.com/u/0/reporting/1d9180f4-7ca1-4f7c-8066-2b45b767024b/page/ZBm3C?params=%7B%22ds0.zona_de_ventas%22%3A%22${saleZone}%22%7D`} // param encoded %7B%22ds0.zona_de_ventas%22%3A%2215492%22%7D
              key={0}
            />
            <Picker.Item
              style={styles.itemStyle}
              label={"Análisis General"}
              value={`https://datastudio.google.com/u/0/reporting/1d9180f4-7ca1-4f7c-8066-2b45b767024b/page/ZBm3C?params=%7B%22ds0.zona_de_ventas%22%3A%22${saleZone}%22%7D`} // param encoded %7B%22ds0.zona_de_ventas%22%3A%2215492%22%7D
              key={0}
            /> 
          </Picker>
        </View>
      </View>
      {loadSuccess ? (
        <WebView
          originWhitelist={["*"]}
          source={{
            uri: uri
          }}
          onError={() => {
            setLoadSuccess(false);
          }}
          userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
          javaScriptEnabled={true}
          sharedCookiesEnabled={true}
          thirdPartyCookiesEnabled={true}
        />
      ) : (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <FontAwesome5 name="satellite-dish" size={40} color="#4260A7" />
          <Text>En este momento no tienes conectividad</Text>
          <Text> para ver los indicadores.</Text>
        </View>
      )}
    </>
  );
}
