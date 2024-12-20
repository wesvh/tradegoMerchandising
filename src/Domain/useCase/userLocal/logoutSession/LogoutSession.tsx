import { UserLocalRepository } from "../../../../Data/repositories/UserLocalRepository";
import { RequestUseCase } from "../../Request/RequestUseCase";
import { GoogleSigninAuth } from "../../../../Data/source/remote/auth/GoogleSigninAuth";
import { GetItemUseCase } from "getItem/GetItem";
const { logout } = new GoogleSigninAuth();

const { logoutSession } = new UserLocalRepository();

export const LogoutSessionUseCase = async (usuario: any) => {
  const tokenNotification = await GetItemUseCase("tokenNotification");
  const { salesZoneId } = await GetItemUseCase("saleZone");
  patchCustomers(salesZoneId);
  await logoutSession();
  const res = await RequestUseCase("/logout", "POST", {
    saleZoneId: salesZoneId,
    email: usuario.email,
    deviceId: tokenNotification
  });
  await logout();
  return res;
};

const patchCustomers = async (salesZoneId: any) => {
  patchPrices(salesZoneId);
  try {
    await RequestUseCase(`/Customer/${salesZoneId}`, "PATCH");
  } catch (error) {
    console.log(error);
  }
};

const patchPrices = async (salesZoneId: any) => {
  try {
    const data = await GetItemUseCase("wareHouse");
    const Promises = Array.from(new Set(data.map((site: any) => site.inventSiteId))).map(
      (site: any) => {
        RequestUseCase(`/Product/briefcase/${salesZoneId}/${site}`, "PATCH");
      }
    );
    await Promise.all(Promises);
  } catch (error) {
    console.log(error);
  }
};
