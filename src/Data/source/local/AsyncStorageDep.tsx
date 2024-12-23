import AsyncStorage from "@react-native-async-storage/async-storage";

export class AsyncStorageDep {
  public saveItem = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error("ERROR AL GUARDAR " + key + ": " + error);
    }
  };
  public getItem = async (key: string) => {
    try {
      const item = await AsyncStorage.getItem(key);
      return item;
    } catch (error) {
      console.error("ERROR AL LEER DATOS: " + error);
    }
  };
  public deleteItem = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error("ERROR AL CERRAR LA SESIÓN: " + error);
    }
  };

  public restoreStorage = async () => {
    try {
      const tokenNotification = await AsyncStorage.getItem("tokenNotification");
      await AsyncStorage.clear();
      await AsyncStorage.setItem("tokenNotification", tokenNotification || "");
    } catch (error) {
      console.error("ERROR AL CERRAR LA SESIÓN QUITANDO TODOS LOS DATOS: " + error);
    }
  };
}
