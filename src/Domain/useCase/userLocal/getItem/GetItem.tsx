import { UserLocalRepository } from "../../../../Data/repositories/UserLocalRepository";

const { readSession } = new UserLocalRepository();

export const GetItemUseCase = async (key = "user") => {
  return await readSession(key);
};
