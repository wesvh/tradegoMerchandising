import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import navigationItems from "./NavigationItems";
import { APPS_COLORS } from "../theme/AppTheme";
import { useUserLocal } from "../hooks";
import { useLogout } from "../hooks/useLogout";
import { NavigationDrawerViewModel } from "./NavigationDraweViewModel";
import pixelRatio from "src/Presentation/utils/pixelRatio";

const Drawer = createDrawerNavigator();

export function NavigationDrawer() {
  const [openModal, setOpenModal] = useState(false);
  StatusBar.setBackgroundColor(APPS_COLORS.whiteBlue);
  StatusBar.setBarStyle("dark-content", true);

  return (
    <>
      <Drawer.Navigator
        initialRouteName="anuncios"
        drawerContent={(props) => <MenuItems {...props} />}>
        {navigationItems.map((item) => (
          <Drawer.Screen
            name={item.name}
            key={`drawer.screen${item.name}`}
            component={item.component}
            options={{
              headerStyle: { backgroundColor: APPS_COLORS.whiteBlue },
              headerTitleAlign: "center",
              headerTintColor: APPS_COLORS.blue,

              headerTitleContainerStyle: {
                position: "relative",
                zIndex: 10
              },
              headerTitle: () => (
                <Image
                  style={{ width: 31, height: 31 }}
                  source={require("../assets/Logo_TGo_80x80.png")}
                />
              ),
            }}
          />
        ))}
      </Drawer.Navigator>
   
    </>
  );
}

interface MenuItemProps {
  navigation: any;
  state: any;
}

const MenuItems = ({ navigation, state }: MenuItemProps) => {
  const { routes, index } = state;
  const { navigateOptionMenu, responseSubscribe, activeScreen } =
    NavigationDrawerViewModel(navigation, routes, index);
  const [textHeaderPrint, setTextPrint] = useState("");
  const { getItemStorage } = useUserLocal();

  useEffect(() => {
    (async () => {
      const usuario = await getItemStorage("usuario");
      const salesZone = await getItemStorage("saleZone");
      const salesGroup = await getItemStorage("saleGroup");
      setTextPrint(`Asesor: ${usuario?.name || ""} (${salesZone?.advisorId})
      Zona: ${salesZone?.description} (${salesZone?.salesZoneId})
      Grupo: ${salesGroup?.name || "No hay grupo asignado"} (${salesZone?.salesGroupId})`);
    })();
  }, []);

  const { logoutSessionData, buttonClicked } = useLogout();

  return (
    <DrawerContentScrollView style={styles.container}>
      <View style={styles.headerTop}>
        <Text style={styles.textHeader}>{textHeaderPrint}</Text>
      </View>
      <View
        style={{
          marginLeft: 30,
          marginBottom: 5,
          marginTop: 5
        }}>
        <Text
          style={{
            fontWeight: "bold",
            color: APPS_COLORS.greenBlue,
            fontSize: 16 / pixelRatio
          }}>
          Sitio Despacho
        </Text>
      </View>     
      <View style={styles.contentMenu}>
        {navigationItems
          .filter((item) => item.disabled !== true && item.type == 1)
          .map((item) => (
            <MenuItem
              key={`menuItem${item.name}`}
              text={item.text}
              onPress={() => {
                navigateOptionMenu(item.name);
              }}
              image={item.image}
              active={item.name === routes[index].name}
            />
          ))}
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 3,
            marginLeft: -40,
            width: "150%",
            marginTop: 10,
            marginBottom: 10
          }}
        />
        {navigationItems
          .filter((item) => item.disabled !== true && item.type != 1)
          .map((item) => (
            <MenuItem
              key={`SecondmenuItem${item.name}`}
              text={item.text}
              onPress={() => navigateOptionMenu(item.name)}
              image={item.image}
              active={item.name === routes[index].name}
            />
          ))}
      </View>
      {!buttonClicked ? (
        <>
          <TouchableOpacity style={styles.buttonLogout} onPress={logoutSessionData}>
            <Text style={styles.colorTextButton}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View style={styles.buttonLogout}>
            <ActivityIndicator size={19} color="white" animating={true} />
          </View>
        </>
      )}
    </DrawerContentScrollView>
  );
};

interface MenuItemTypes {
  text: string;
  onPress: () => void;
  image?: any;
  active: boolean;
}
const MenuItem = ({ text, onPress, image, active }: MenuItemTypes) => (
  <TouchableOpacity
    style={{
      marginBottom: 3,
      padding: 8,
      flexDirection: "row",
      alignContent: "center",
      backgroundColor: active ? APPS_COLORS.greenBlue : APPS_COLORS.whiteBlue
    }}
    onPress={onPress}>
    <Image
      source={image || require("../assets/Logo_TGo_80x80.png")}
      style={styles.ImageClass}
    />
    <Text
      style={{
        color: active ? "#fff" : APPS_COLORS.greenBlue,
        fontSize: 15 / pixelRatio,
        fontWeight: "bold"
      }}>
      {text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  textButton: {
    color: "#fff",
    fontSize: 12 / pixelRatio,
    fontWeight: "bold"
  },
  ImageClass: {
    width: 20,
    height: 20,
    marginRight: 15
  },
  container: {
    flex: 1,
    backgroundColor: APPS_COLORS.whiteBlue,
    alignContent: "center"
  },
  contentMenu: {
    padding: 10,
    marginLeft: 10
  },
  buttonLogout: {
    width: 193,
    height: 33,
    backgroundColor: APPS_COLORS.red,
    borderRadius: 10,
    padding: 8,
    alignItems: "center",
    alignContent: "center",
    flex: 0.05,
    alignSelf: "center"
  },
  prueba: {
    width: 100,
    height: 50,
    backgroundColor: "#122772"
  },
  colorTextButton: {
    color: "#ffffff",
    fontSize: 12 / pixelRatio
  },
  headerTop: {
    height: 132,
    backgroundColor: APPS_COLORS.blue,
    alignContent: "center",
    borderBottomEndRadius: 30,
    marginTop: -4,
    flexDirection: "row"
  },
  textHeader: {
    color: "#ffffff",
    fontSize: 15 / pixelRatio,
    alignContent: "center",
    marginTop: 2,
    //marginRight: 5,
    marginLeft: 8
  },
  itemMenu: {
    fontSize: 12 / pixelRatio
  },
  dropdownpicker: {
    width: 190,
    height: 20,
    borderRadius: 10,
    marginLeft: 26,
    marginRight: 26,
    marginTop: 26,
    marginBottom: 50,
    borderColor: "#ffffff",
    backgroundColor: "#000000",
    elevation: 5,
    color: "#B2BBD1"
  },
  progressStyleText: {
    color: APPS_COLORS.blue,
    fontSize: 11 / pixelRatio,
    top: 27,
    textAlign: "center",
    backgroundColor: APPS_COLORS.whiteBlue
  }
});
