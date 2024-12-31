
import { nextFrame } from "src/Presentation/constants/nextFrame";

export const useInsertion = () => {
  
  const createBatchsWithRealm = async (ArrayToInsert: any[], table: string, realmStage: any) => {
    try {
      await validationInTransaction(realmStage.isInTransaction, 1500);
      const batchSize = 50; // Define el tamaño del bloque
      const totalObjects = ArrayToInsert.length;
      const numBatches = Math.ceil(totalObjects / batchSize);

      for (let batchIndex = 0; batchIndex < numBatches; batchIndex++) {
        const batchStart = batchIndex * batchSize;
        const batchEnd = Math.min(batchStart + batchSize, totalObjects);
        await nextFrame();
        try {
          await validationInTransaction(realmStage.isInTransaction, 1500);
          realmStage.write(() => {
            for (let i = batchStart; i < batchEnd; i++) {
              realmStage.create(table, ArrayToInsert[i], Realm.UpdateMode.Modified);
            }
          });
        } catch (error: any) {
          console.log("data", ArrayToInsert[batchIndex]);
          
          console.error("Error al procesar el lote", batchIndex + 1, ":", error);
        }
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  const validationInTransaction = async (stageInTransaction: any, time: number) => {
    while (stageInTransaction) {
      console.log("Esperando a que termine la transaccion");
      await timeout(time);
    }
  };

  const timeout = async (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };  

  return {
    createBatchsWithRealm
  };
};
