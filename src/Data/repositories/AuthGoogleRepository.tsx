import { IAuthGoogleRepository } from "../../Domain/repositories/IAuthGoogleRepository";
import { GoogleSigninAuth } from "../source/remote/auth/GoogleSigninAuth";

const { login } = new GoogleSigninAuth();
export class AuthGoogleRepository implements IAuthGoogleRepository {
  logoutWithGoogle(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  public async loginWithGoogle(setLoad: any): Promise<any> {
    const res = await login(setLoad);
    return res;
  }
}
