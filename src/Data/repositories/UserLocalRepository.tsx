import { IUserLocalRepository } from "../../Domain/repositories/IUserLocalRepository";
import { AsyncStorageDep } from "../source/local/AsyncStorageDep";

const localDB = new AsyncStorageDep();

export class UserLocalRepository implements IUserLocalRepository {
  async saveUser(usuario: any): Promise<void> {
    await localDB.saveItem("usuario", JSON.stringify(usuario));
  }
  async saveSaleZone(saleZone: any): Promise<void> {
    await localDB.saveItem("saleZone", JSON.stringify(saleZone));
  }
  async saveSaleGroup(saleGroup: any): Promise<void> {
    await localDB.saveItem("saleGroup", JSON.stringify(saleGroup));
  }
  async saveWareHouse(wareHouse: any): Promise<void> {
    await localDB.saveItem("wareHouse", JSON.stringify(wareHouse));
  }
  async saveEmail(email: string): Promise<void> {
    await localDB.saveItem("emailUser", JSON.stringify(email));
  }
  async saveSession(usuario: any): Promise<void> {
    await localDB.saveItem("user", JSON.stringify(usuario));
  }
  async readSession(key: string): Promise<any> {
    const data = await localDB.getItem(key);
    const item: any = JSON.parse(data as any);
    return item;
  }
  async saveSelectedWareHouseId(id: any): Promise<void> {
    await localDB.saveItem("selectedWareHouseId", JSON.stringify(id));
  }

  async saveItemStorage(key: string, value: any): Promise<void> {
    await localDB.saveItem(key, JSON.stringify(value));
  }

  async logoutSession(): Promise<void> {
    await localDB.restoreStorage();
  }
}
