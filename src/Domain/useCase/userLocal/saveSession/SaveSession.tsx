import { UserLocalRepository } from "../../../../Data/repositories/UserLocalRepository";

const { saveUser, saveSaleZone, saveSaleGroup, saveHierarchyId, saveEmail, saveSession } =
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
    await saveEmail(data.user.email);
    await saveHierarchyId(data.hierarchyId);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
