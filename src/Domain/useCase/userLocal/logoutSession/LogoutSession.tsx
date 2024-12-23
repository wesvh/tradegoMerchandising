import { UserLocalRepository } from "../../../../Data/repositories/UserLocalRepository";
import { RequestUseCase } from "../../Request/RequestUseCase";
import { GoogleSigninAuth } from "../../../../Data/source/remote/auth/GoogleSigninAuth";
import { GetItemUseCase } from "getItem/GetItem";
const { logout } = new GoogleSigninAuth();

const { logoutSession } = new UserLocalRepository();

export const LogoutSessionUseCase = async (usuario: any) => {
  const tokenNotification = await GetItemUseCase("tokenNotification");
  const result = await GetItemUseCase("saleZone");
  const salesZoneId = result?.salesZoneId ?? null;
    
  await logoutSession();
  const res = await RequestUseCase("/logout", "POST", {
    saleZoneId: salesZoneId,
    email: usuario.email,
    deviceId: 123
  });
  await logout();
  return res;
};

