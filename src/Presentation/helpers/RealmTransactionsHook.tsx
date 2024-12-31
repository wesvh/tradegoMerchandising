import {
  GeneralConfigContext,
} from "../db";
import { RequestUseCaseRetry } from "../../Domain/useCase/Request/RequestUseCase";
import { parametrizationConfig } from "../constants/index";
import { SaveItemUseCase } from "../../Domain/useCase/userLocal/saveItem/SaveItem";
import { Image } from "expo-image";
import { useInsertion } from "hooks/useInsertion";
import { ContextApp } from "context";
import { useContext } from "react";

/* import { Alert } from "react-native"; */
// make a method to write on realm

const { useRealm: useGeneralRealm } = GeneralConfigContext;
const { createBatchsWithRealm } = useInsertion();


export const RealmTransactionsHook = () => {
  const realm = useGeneralRealm();

  const { saveContext }: any = useContext(ContextApp);  

  const writeLoadInitialData = async (setConfigLoadPercent: any) => {
    const inicio = performance.now();
    Image.clearDiskCache().catch((error) => {
      console.error("Error al limpiar la caché de disco", error);
    });
    Image.clearMemoryCache().catch((error) => {
      console.error("Error al limpiar la caché de memoria", error);
    });

    let shouldUpdate = false;
    const currentDate = new Date().getTime();

    try {
      const lastDownloadDate = undefined
      const sevenDaysInMilliseconds = 7 * 24 * 60 * 60 * 1000;
      shouldUpdate =
        !lastDownloadDate || currentDate - parseInt(lastDownloadDate) >= sevenDaysInMilliseconds;
    } catch (error) {
      console.error("Error al obtener la fecha de la última descarga", error);
    }
    if (shouldUpdate) {
      await SaveItemUseCase("lastDownloadDate", currentDate);
    }

    let loadPercent = 0;

    const elementsToLoad = parametrizationConfig.filter(
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
          .then((response) => {
            if (response.ok !== false) {
              realm.write(() => {
                realm.delete(realm.objects(element));
              });
              createBatchsWithRealm(response.data, element, realm);
            }
            
            loadPercent += incrementPercent;
            setConfigLoadPercent(loadPercent);            
          })
          .catch((error) => {
            console.log("OCURRIO ALGO EN UNA DE LAS DESCARGAS ", error);
          });
      })
    );

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
