import { UserLocalRepository } from "../../../../Data/repositories/UserLocalRepository";

const { saveItemStorage } = new UserLocalRepository();

export const SaveItemUseCase = async (key: any, value: any) => {
  try {
    await saveItemStorage(key, value);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
