export interface IAuthGoogleRepository {
  loginWithGoogle(setLoad: any): Promise<void>;
  logoutWithGoogle(): Promise<void>;
}
