import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen} from "../screen/public";
import { navigationRef } from "./RootNavigation";
import { ToastProvider } from "react-native-toast-notifications";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import pixelRatio from "src/Presentation/utils/pixelRatio";
// Icons import

export type RootStackParamList = {
  Auth: undefined;
  LoaderScreen: undefined;
  MenuDrawer: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function NavigationStack() {
  return (
    <NavigationContainer ref={navigationRef}>
      <ToastProvider
        placement="bottom"
        renderType={{
          custom_alert_orders: (toast) => {
            return (
              <View style={styles.containerToast}>
                <View style={styles.containerTitle}>
                  <Text style={styles.toastTitle}>Alerta</Text>
                  <FontAwesomeIcon icon={faExclamationCircle} color="red" size={22} />
                </View>
                <Text style={styles.toastText}>{toast.message}</Text>
                <Button
                  title="Aceptar"
                  onPress={() => {
                    toast.data.func();
                  }}
                />
              </View>
            );
          }
        }}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Auth" component={LoginScreen} />
        </Stack.Navigator>
      </ToastProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  containerToast: {
    zIndex: 6,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    shadowColor: "#000",
    width: "90%",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  containerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  toastTitle: {
    color: "black",
    fontSize: 16 / pixelRatio,
    fontWeight: "bold"
  },
  toastText: {
    color: "gray",
    fontSize: 12 / pixelRatio,
    marginBottom: 6
  },
  icon: {
    color: "blue"
  }
});
