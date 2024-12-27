import {
  GeneralConfigContext,
} from "../db";
import { RequestUseCaseRetry } from "../../Domain/useCase/Request/RequestUseCase";
import { generalConfig } from "../constants/index";
import { GetItemUseCase } from "../../Domain/useCase/userLocal/getItem/GetItem";
import { SaveItemUseCase } from "../../Domain/useCase/userLocal/saveItem/SaveItem";
import * as FileSystem from "expo-file-system";
import { Image } from "expo-image";

/* import { Alert } from "react-native"; */
// make a method to write on realm

const { useRealm: useGeneralRealm } = GeneralConfigContext;

const deleteCacheDirectory = async () => {
  try {
    const path = (FileSystem.cacheDirectory || "") + "DocumentPicker";
    const files = await FileSystem.readDirectoryAsync(path);
    for (const file of files) {
      await FileSystem.deleteAsync(path + "/" + file);
    }
  } catch (error) {
    console.error("Error al eliminar archivos antiguos:", error);
  }
};

export const RealmTransactionsHook = () => {
  const realm = useGeneralRealm();

  const writeLoadInitialData = async (setConfigLoadPercent: any) => {
    const inicio = performance.now();
    Image.clearDiskCache().catch((error) => {
      console.error("Error al limpiar la caché de disco", error);
    });
    Image.clearMemoryCache().catch((error) => {
      console.error("Error al limpiar la caché de memoria", error);
    });
    const { salesZoneId } = await GetItemUseCase("saleZone");
    let shouldUpdate = false;
    const currentDate = new Date().getTime();
    try {
      const lastDownloadDate = await GetItemUseCase("lastDownloadDate");
      const sevenDaysInMilliseconds = 7 * 24 * 60 * 60 * 1000;
      shouldUpdate =
        !lastDownloadDate || currentDate - parseInt(lastDownloadDate) >= sevenDaysInMilliseconds;
    } catch (error) {
      console.log("Error al obtener la fecha de la última descarga", error);
    }
    if (shouldUpdate) {
      await SaveItemUseCase("lastDownloadDate", currentDate);
      deleteCacheDirectory();
    }
    let loadPercent = 0;

    const elementsToLoad = generalConfig.filter(
      (element) =>
        realm.objects(element).length === 0 ||
        [
          "exhibidortypes"
        ].includes(element) === false ||
        shouldUpdate
    );
    const incrementPercent = 99 / elementsToLoad.length;

    // Ejecuta todas las promesas en paralelo.
    await Promise.all(
      elementsToLoad.map(async (element) => {
        return RequestUseCaseRetry(`/Config/${element}`, "GET", 100, 1000, timeout)
          .then((data) => {
            if (data.ok !== false) {
              realm.write(() => {
                realm.delete(realm.objects(element));
              });
            }
            loadPercent += incrementPercent;
            setConfigLoadPercent(loadPercent);
          })
          .catch((error) => {
            console.log("OCURRIO ALGO EN UNA DE LAS DESCARGAS ", error);
          });
      })
    );
    try {
      await Promise.all([
      ]);
    } catch (error) {
      console.log("Error en las promesas de carga inicial", error);
    }

    const fin = performance.now();
    console.log(
      `Descarga INICIAL END : El tiempo de ejecución fue de ${((fin - inicio) / 1000).toFixed(2)}s.`
    );
  };


  const timeout = async (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return {
    writeLoadInitialData,
  };
};
