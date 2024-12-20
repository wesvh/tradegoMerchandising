import { UserLocalRepository } from "../../../../Data/repositories/UserLocalRepository";

const { saveUser, saveSaleZone, saveSaleGroup, saveWareHouse, saveEmail, saveSession } =
  new UserLocalRepository();

export const SaveSessionUseCase = async (data: any, first = false) => {
  try {
    if (first) {
      await saveSession(data);
      return;
    }
    await saveUser(data.user);
    await saveSaleZone(data.saleZone);
    await saveSaleGroup(data.saleGroup);
    await saveWareHouse(data.wareHouse);
    await saveEmail(data.user.email);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
