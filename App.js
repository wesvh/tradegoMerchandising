import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";

function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

// Esto asegura que el componente principal (App) sea registrado adecuadamente
registerRootComponent(App);
