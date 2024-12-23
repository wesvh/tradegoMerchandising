import { useEffect, useState } from "react";
import { GetItemUseCase } from "../../Domain/useCase/userLocal/getItem/GetItem";

export const useUserLocal = () => {
  // #Region State
  const [user, setUser] = useState<any>();
  // #EndRegion

  // #Region Effects
  useEffect(() => {
    getSession();
  }, []);

  const getSession = async () => {
    const user = await GetItemUseCase();
    setUser(user);
  };

  const getDataUser = async () => {
    const user = await GetItemUseCase();
    return user;
  };
  const getItemStorage = async (key: string) => {
    const user = await GetItemUseCase(key);
    return user;
  };
  // #EndRegion
  return { user, getSession, getDataUser, getItemStorage };
};
