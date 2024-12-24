export interface IUserLocalRepository {
  saveSession(usuario: any): Promise<void>;
  readSession(key: string): Promise<any>;
  logoutSession(): Promise<void>;
  saveUser(usuario: any): Promise<void>;
  saveSaleZone(saleZone: any): Promise<void>;
  saveSaleGroup(saleGroup: any): Promise<void>;
  saveEmail(email: string): Promise<void>;
  saveHierarchyId(id: any): Promise<void>;
  saveItemStorage(key: string, value: any): Promise<void>;
}
